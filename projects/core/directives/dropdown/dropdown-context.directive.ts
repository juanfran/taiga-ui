import {Directive, HostListener, Inject} from '@angular/core';
import {
    EMPTY_CLIENT_RECT,
    TuiActiveZoneDirective,
    tuiPointToClientRect,
} from '@taiga-ui/cdk';
import {
    tuiAsDriver,
    tuiAsRectAccessor,
    TuiDriver,
    TuiRectAccessor,
} from '@taiga-ui/core/abstract';
import {Subject} from 'rxjs';

@Directive({
    selector: '[tuiDropdown][tuiDropdownContext]',
    providers: [
        TuiActiveZoneDirective,
        tuiAsDriver(TuiDropdownContextDirective),
        tuiAsRectAccessor(TuiDropdownContextDirective),
    ],
})
export class TuiDropdownContextDirective extends TuiDriver implements TuiRectAccessor {
    private readonly stream$ = new Subject<boolean>();

    private currentRect = EMPTY_CLIENT_RECT;

    constructor(
        @Inject(TuiActiveZoneDirective)
        private readonly activeZone: TuiActiveZoneDirective,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @HostListener('contextmenu.prevent.stop', ['$event.clientX', '$event.clientY'])
    onContextMenu(x: number, y: number): void {
        this.currentRect = tuiPointToClientRect(x, y);
        this.stream$.next(true);
    }

    @HostListener('document:click.silent', ['$event.target'])
    @HostListener('document:contextmenu.capture.silent', ['$event.target'])
    @HostListener('document:keydown.esc', ['$event.currentTarget'])
    closeDropdown(target: Element): void {
        if (!this.activeZone.contains(target)) {
            this.stream$.next(false);
        }
    }

    getClientRect(): ClientRect {
        return this.currentRect;
    }
}
