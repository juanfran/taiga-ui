import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialog} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';
import {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs/operators';

import {ActionsContent} from './actions-content.component';
import {PdfContent} from './pdf-content.component';

export type Buttons = ReadonlyArray<
    Readonly<{
        text: string;
        onClick(context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>): void;
    }>
>;

@Component({
    selector: 'tui-pdf-viewer-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiPdfViewerExample2 {
    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
        @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
    ) {}

    show(): void {
        const options: TuiPdfViewerOptions<Buttons> = {
            label: 'Taiga UI',
            actions: new PolymorpheusComponent(ActionsContent),
            data: [
                {
                    text: 'Sign',
                    onClick: context => context.completeWith('Document signed'),
                },
                {
                    text: 'Deny',
                    onClick: context => context.completeWith('Document denied'),
                },
            ],
        };

        this.pdfService
            .open<string>(new PolymorpheusComponent(PdfContent), options)
            .pipe(switchMap(response => this.notifications.show(response)))
            .subscribe();
    }
}
