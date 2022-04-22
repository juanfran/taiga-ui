import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {EMPTY_ARRAY, setNativeFocused, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {isEditingKey, TuiDataListComponent} from '@taiga-ui/core';

interface Items<T> {
    readonly name: string;
    readonly items: readonly T[];
}

@Component({
    selector: 'custom-list',
    templateUrl: './custom-list.template.html',
    changeDetection,
})
export class CustomListComponent<T> {
    @Input()
    items: ReadonlyArray<Items<T>> = [];

    value = '';

    readonly all = EMPTY_ARRAY;

    readonly filter = TUI_DEFAULT_MATCHER;

    onArrowDown(list: TuiDataListComponent<string>, input: HTMLElement): void {
        list.onFocus(input, true);
    }

    onKeyDown(key: string, element: HTMLElement | null): void {
        if (element && isEditingKey(key)) {
            setNativeFocused(element, true, true);
        }
    }
}
