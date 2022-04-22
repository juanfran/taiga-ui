import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
    QueryList,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    EMPTY_QUERY,
    getClosestFocusable,
    isNativeFocused,
    setNativeFocused,
    toInt,
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {TUI_MORE_WORD, TUI_TAB_MARGIN} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {TuiTabDirective} from '../tab.directive';
import {TuiTabComponent} from '../tab/tab.component';
import {TABS_PROVIDERS, TABS_REFRESH} from './tabs-with-more.providers';

// @dynamic
@Component({
    selector: 'tui-tabs-with-more, nav[tuiTabsWithMore]',
    templateUrl: './tabs-with-more.template.html',
    styleUrls: ['./tabs-with-more.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TABS_PROVIDERS,
})
export class TuiTabsWithMoreComponent implements AfterViewInit {
    @ViewChild(TuiTabComponent, {read: ElementRef})
    private readonly moreButton?: ElementRef<HTMLButtonElement>;

    private maxIndex = Infinity;

    @Input()
    @tuiDefaultProp()
    moreContent: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    dropdownContent: PolymorpheusContent<TuiContextWithImplicit<TuiActiveZoneDirective>> =
        '';

    @Input()
    @HostBinding('class._underline')
    @tuiDefaultProp()
    underline = true;

    @Input()
    @tuiDefaultProp()
    activeItemIndex = 0;

    @Input()
    @tuiDefaultProp()
    itemsLimit = Infinity;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @ContentChildren(TuiTabDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<{}>> = EMPTY_QUERY;

    open = false;

    constructor(
        @Inject(TUI_TAB_MARGIN) private readonly margin: number,
        @Inject(TABS_REFRESH) private readonly refresh$: Observable<unknown>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MORE_WORD) readonly moreWord$: Observable<string>,
    ) {}

    // TODO: Improve performance
    get tabs(): readonly HTMLElement[] {
        return Array.from<HTMLElement>(
            this.elementRef.nativeElement.querySelectorAll('[tuiTab]'),
        );
    }

    get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    get isMoreVisible(): boolean {
        return this.lastVisibleIndex < this.items.length - 1;
    }

    get isMoreFocusable(): boolean {
        return !!this.moreButton && isNativeFocused(this.moreButton.nativeElement);
    }

    get lastVisibleIndex(): number {
        if (this.itemsLimit + 1 >= this.items.length) {
            return this.maxIndex;
        }

        const offset = this.itemsLimit - 1 > this.activeItemIndex ? 1 : 2;

        return Math.min(this.itemsLimit - offset, this.maxIndex);
    }

    ngAfterViewInit(): void {
        this.refresh$
            .pipe(
                map(() => this.getMaxIndex()),
                filter(maxIndex => this.maxIndex !== maxIndex),
            )
            .subscribe(maxIndex => {
                this.maxIndex = maxIndex;
                this.changeDetectorRef.detectChanges();
            });
    }

    onActiveItemIndexChange(activeItemIndex: number): void {
        this.updateActiveItemIndex(activeItemIndex);
    }

    onClick(index: number): void {
        this.open = false;
        this.focusMore();
        this.updateActiveItemIndex(index);
    }

    onArrowRight(element: HTMLElement): void {
        if (isNativeFocused(element)) {
            this.focusMore();
        }
    }

    onArrowLeft(): void {
        const {tabs} = this;
        let index = tabs.length - 2;

        while (index >= 0) {
            setNativeFocused(tabs[index]);

            if (isNativeFocused(tabs[index])) {
                return;
            }

            index--;
        }
    }

    onWrapperArrow(button: HTMLButtonElement, wrapper: HTMLElement, prev: boolean): void {
        const target = getClosestFocusable(button, prev, wrapper);

        if (target) {
            setNativeFocused(target);
        }
    }

    private focusMore(): void {
        if (this.moreButton) {
            setNativeFocused(this.moreButton.nativeElement);
        }
    }

    private getMaxIndex(): number {
        const {tabs, activeItemIndex, margin} = this;

        if (tabs.length < 2) {
            return 0;
        }

        const {clientWidth} = this.elementRef.nativeElement;
        const activeWidth = tabs[activeItemIndex] ? tabs[activeItemIndex].scrollWidth : 0;
        const moreWidth = tabs[tabs.length - 1].scrollWidth;
        let maxIndex = tabs.length - 2;
        let total =
            tabs.reduce((acc, {scrollWidth}) => acc + scrollWidth, 0) +
            maxIndex * margin -
            moreWidth;

        if (total <= clientWidth) {
            return Infinity;
        }

        while (maxIndex) {
            total -= tabs[maxIndex].scrollWidth + margin;
            maxIndex--;

            const activeDisplaced = activeItemIndex > maxIndex;
            const activeOffset = activeDisplaced ? activeWidth + margin : 0;
            const currentWidth = total + activeOffset + moreWidth + margin;
            // Needed for different rounding of visible and hidden elements scrollWidth
            const safetyOffset = toInt(this.maxIndex === maxIndex - 1);

            if (currentWidth + safetyOffset < clientWidth) {
                return maxIndex;
            }
        }

        return 0;
    }

    private updateActiveItemIndex(activeItemIndex: number): void {
        if (this.activeItemIndex === activeItemIndex) {
            return;
        }

        this.activeItemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
        this.maxIndex = this.getMaxIndex();
    }
}
