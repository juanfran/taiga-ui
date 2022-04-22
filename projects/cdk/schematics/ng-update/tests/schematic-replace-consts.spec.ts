import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

const collectionPath = join(__dirname, '../../migration.json');

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should rename types', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.component.ts')).toEqual(
            `import { getClosestFocusable } from "@taiga-ui/cdk";
import { Validators } from "@angular/forms";
import {Component} from '@angular/core';
import { tuiCreateAutoCorrectedDatePipe, tuiCreateDateMask, tuiCreateDateRangeMask } from '@taiga-ui/kit';

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   private readonly textMaskOptions = {
        mask: tuiCreateDateMask('DMY', '.'),
        pipe: tuiCreateAutoCorrectedDatePipe(this),
        guide: false,
    };

    mask = tuiCreateDateRangeMask('DMY', '.');

    control = new FormControl('', [Validators.nullValidator]);

    onMouseDown(event: MouseEvent, target: HTMLElement) {
        if (getClosestFocusable(target, 'button')) {
            return;
        }
    }
}`,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `import {Component} from '@angular/core';
import {TUI_DATE_MASK, TUI_DATE_RANGE_MASK, tuiCreateAutoCorrectedDatePipe} from '@taiga-ui/kit';
import {EMPTY_VALIDATOR} from '@taiga-ui/cdk';
import { getClosestKeyboardFocusable } from '@taiga-ui/cdk';


@Component({templateUrl: './app.template.html'})
export class AppComponent {
   private readonly textMaskOptions = {
        mask: TUI_DATE_MASK,
        pipe: tuiCreateAutoCorrectedDatePipe(this),
        guide: false,
    };

    mask = TUI_DATE_RANGE_MASK;

    control = new FormControl('', [EMPTY_VALIDATOR]);

    onMouseDown(event: MouseEvent, target: HTMLElement) {
        if (getClosestKeyboardFocusable(target, 'button')) {
            return;
        }
    }
}`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);
}
