(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0xjx":function(t,e,n){"use strict";n.r(e),n.d(e,"ExampleTuiDropdownContextModule",(function(){return ct}));var o=n("An66"),r=n("3kIJ"),i=n("1VvW"),a=n("SVIu"),l=n("53zJ"),c=n("l4xa"),d=n("Qq0t"),m=n("dvRg"),p=n("KDbD"),u=n("kZht"),s=n("K/iL"),f=n("OZlg"),g=n("e0eB"),x=n("iyc4"),h=n("ONKv"),w=n("A0sj");function b(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"p",2),u["\u0275\u0275text"](1,"Nothing special"),u["\u0275\u0275elementEnd"]())}let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-dropdown-context-example-1"]],decls:5,vars:1,consts:[["src","tuiIconSettingsLarge",1,"icon",3,"tuiDropdownContext"],["iconInfo",""],[1,"text"]],template:function(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275text"](1," Make right click on this icon -> "),u["\u0275\u0275element"](2,"tui-svg",0),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,b,2,0,"ng-template",null,1,u["\u0275\u0275templateRefExtractor"])),2&t){const t=u["\u0275\u0275reference"](4);u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiDropdownContext",t)}},directives:[h.a,w.a],styles:[".text[_ngcontent-%COMP%]{margin:1rem}.icon[_ngcontent-%COMP%]{cursor:context-menu}"],changeDetection:0}),t})();var C=n("cVyY"),D=n("1iwt"),S=n("4hRd"),v=n("xcN3"),E=n("W2aA");function _(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"th",4),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",t," ")}}function M(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"td",8),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",t," ")}}function O(t,e){if(1&t){const t=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",13),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](t);const n=e.$implicit,o=u["\u0275\u0275nextContext"]().close,r=u["\u0275\u0275nextContext"]().$implicit;return u["\u0275\u0275nextContext"]().printToConsole(n.title,r),o()})),u["\u0275\u0275text"](1),u["\u0275\u0275element"](2,"tui-svg",14),u["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",t.title," "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("src",t.iconName)}}function P(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"button",17),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",t," ")}}function T(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"tui-data-list",15),u["\u0275\u0275template"](1,P,2,1,"button",16),u["\u0275\u0275elementEnd"]()),2&t){const t=u["\u0275\u0275nextContext"]().activeZone,e=u["\u0275\u0275nextContext"](2);u["\u0275\u0275property"]("tuiActiveZoneParent",t),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",e.moreOptions)}}function k(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"tui-data-list",9),u["\u0275\u0275template"](1,O,3,2,"button",10),u["\u0275\u0275elementStart"](2,"button",11),u["\u0275\u0275text"](3," More "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,T,2,2,"ng-template",null,12,u["\u0275\u0275templateRefExtractor"])),2&t){const t=e.activeZone,n=u["\u0275\u0275reference"](5),o=u["\u0275\u0275nextContext"](2);u["\u0275\u0275property"]("tuiActiveZoneParent",t),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",o.menuItems),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiDropdownContent",n)("tuiDropdownSided",!0)}}function V(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"tr",5),u["\u0275\u0275template"](1,M,2,1,"td",6),u["\u0275\u0275template"](2,k,6,4,"ng-template",null,7,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit,n=u["\u0275\u0275reference"](3),o=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("tuiDropdownContext",n),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",o.getObjectValues(t))}}let A=(()=>{class t{constructor(t){this.dialogService=t,this.menuItems=[{title:"View",iconName:"tuiIconEyeOpen"},{title:"Copy",iconName:"tuiIconCopy"},{title:"Delete",iconName:"tuiIconTrash"},{title:"Move",iconName:"tuiIconFolder"}],this.tableData=[{character:"Ross Geller",actor:"David Schwimmer"},{character:"Chandler Bing",actor:"Matthew Perry"},{character:"Joey Tribbiani",actor:"Matt LeBlanc"},{character:"Phoebe Buffay",actor:"Lisa Kudrow"},{character:"Monica Geller",actor:"Courteney Cox"},{character:"Rachel Green",actor:"Jennifer Aniston"}],this.tableColumns=Object.keys(this.tableData[0]),this.moreOptions=["Option 1","Option 2","Option 3"],this.getObjectValues=t=>Object.values(t)}printToConsole(t,e){this.dialogService.open(`[${t}]: ${JSON.stringify(e)}`).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(u["\u0275\u0275directiveInject"](d.db))},t.\u0275cmp=u["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-dropdown-context-example-2"]],decls:7,vars:2,consts:[[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_hover_disabled"],["class","tui-table__th",4,"ngFor","ngForOf"],["class","tui-table__tr",3,"tuiDropdownContext",4,"ngFor","ngForOf"],[1,"tui-table__th"],[1,"tui-table__tr",3,"tuiDropdownContext"],["class","tui-table__td",4,"ngFor","ngForOf"],["contextMenu",""],[1,"tui-table__td"],["role","menu","tuiDataListDropdownManager","",1,"context-menu",3,"tuiActiveZoneParent"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","","tuiDropdown","","tuiDropdownAlign","right",3,"tuiDropdownContent","tuiDropdownSided"],["nestedMenu",""],["tuiOption","",3,"click"],[1,"icon",3,"src"],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","",4,"ngFor","ngForOf"],["tuiOption",""]],template:function(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275text"](1,"Make right click on any table's row."),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"table",0),u["\u0275\u0275elementStart"](3,"tbody"),u["\u0275\u0275elementStart"](4,"tr",1),u["\u0275\u0275template"](5,_,2,1,"th",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](6,V,4,2,"tr",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&t&&(u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngForOf",e.tableColumns),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",e.tableData))},directives:[o.s,w.a,C.a,D.a,S.a,v.a,E.a,h.a],styles:[".context-menu[_ngcontent-%COMP%]{width:8rem}"],changeDetection:0}),t})();var F=n("oEBb"),L=n("zV1d");function I(t,e){if(1&t){const t=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"form",2),u["\u0275\u0275elementStart"](1,"tui-text-area",3),u["\u0275\u0275text"](2," Have you found a mistake ? Write about it! "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"button",4),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](t);const n=e.close;return u["\u0275\u0275nextContext"]().report(),n()})),u["\u0275\u0275text"](4," SEND IT "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&t){const t=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("formGroup",t.testForm)}}let $=(()=>{class t{constructor(){this.testForm=new r.FormGroup({reportText:new r.FormControl("Misspell HERE!")})}report(){console.info(this.testForm.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-dropdown-context-example-3"]],decls:6,vars:2,consts:[[3,"tuiDropdownContext"],["reportForm",""],[1,"container",3,"formGroup"],["formControlName","reportText"],["type","button","tuiButton","",1,"button",3,"click"]],template:function(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"p",0),u["\u0275\u0275text"](1," Some text with mistake. Make right click on it.\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"p",0),u["\u0275\u0275text"](3,"Another text"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,I,5,1,"ng-template",null,1,u["\u0275\u0275templateRefExtractor"])),2&t){const t=u["\u0275\u0275reference"](5);u["\u0275\u0275property"]("tuiDropdownContext",t),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiDropdownContext",t)}},directives:[w.a,r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,F.a,r.NgControlStatus,r.FormControlName,L.a],styles:[".container[_ngcontent-%COMP%]{min-width:20rem;margin:1rem;display:flex;flex-direction:column}.button[_ngcontent-%COMP%]{margin:1rem auto 0}"],changeDetection:0}),t})();var N=n("EPR0"),G=n("yHor"),R=n("zGJC"),H=n("JPGa"),j=n("u8jZ"),Z=n("yZWP");const z=["header",$localize`:␟70be90489923017d382219191e356dcde0fdf3c4␟7603078759587781889:DropdownContext`];var W;W=$localize`:␟dd56eddadb13fe774c5ac6d5a85ef1479223a77e␟9191144177401253312:${"\ufffd#2\ufffd"}:START_TAG_CODE:DropdownContext${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to show custom right click context dropdown. `;const B=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],J=["heading",$localize`:␟a171e48d14fd02dbd2608b1647d7e8f4b5b71269␟884799098279829624:Context menu`],K=["heading",$localize`:␟5ed826cd094d1079177f845d8fcdfae6e7bbae54␟7772034102662804846:Report mistake form`];function U(t,e){1&t&&u["\u0275\u0275elementContainer"](0)}function q(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"p",3),u["\u0275\u0275i18nStart"](1,W),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,U,1,0,"ng-container",4),u["\u0275\u0275elementStart"](4,"tui-doc-example",5),u["\u0275\u0275i18nAttributes"](5,B),u["\u0275\u0275element"](6,"tui-dropdown-context-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-doc-example",6),u["\u0275\u0275i18nAttributes"](8,J),u["\u0275\u0275element"](9,"tui-dropdown-context-example-2"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"tui-doc-example",7),u["\u0275\u0275i18nAttributes"](11,K),u["\u0275\u0275element"](12,"tui-dropdown-context-example-3"),u["\u0275\u0275elementEnd"]()),2&t){const t=u["\u0275\u0275nextContext"](),e=u["\u0275\u0275reference"](6);u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngTemplateOutlet",e),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("content",t.exampleBasic),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",t.exampleContextMenu),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",t.exampleReportMistakeForm)}}var Q,Y,X,tt;function et(t,e){1&t&&u["\u0275\u0275elementContainer"](0)}function nt(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"div",11),u["\u0275\u0275template"](1,et,1,0,"ng-container",4),u["\u0275\u0275elementStart"](2,"button",12),u["\u0275\u0275listener"]("click",(function(){return(0,e.close)()})),u["\u0275\u0275text"](3," Close me "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&t){u["\u0275\u0275nextContext"](2);const t=u["\u0275\u0275reference"](6);u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngTemplateOutlet",t)}}function ot(t,e){1&t&&u["\u0275\u0275i18n"](0,Y)}function rt(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"p",8),u["\u0275\u0275i18nStart"](2,Q),u["\u0275\u0275element"](3,"strong"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,nt,4,1,"ng-template",null,9,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-documentation"),u["\u0275\u0275template"](7,ot,1,0,"ng-template",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](8,"dropdown-controller-documentation")),2&t){const t=u["\u0275\u0275reference"](5),e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiDropdownContext",t)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)}}function it(t,e){if(1&t&&(u["\u0275\u0275elementStart"](0,"ol",13),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,X),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,tt),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&t){const t=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",t.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",t.exampleHtml)}}function at(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"h3",16),u["\u0275\u0275text"](1,"Tips:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"ol",17),u["\u0275\u0275elementStart"](3,"li"),u["\u0275\u0275text"](4," Use "),u["\u0275\u0275elementStart"](5,"strong"),u["\u0275\u0275text"](6,"Arrow Up/Down"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](7," to focus closest element. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"li"),u["\u0275\u0275text"](9," To close dropdown: "),u["\u0275\u0275elementStart"](10,"ul",18),u["\u0275\u0275elementStart"](11,"li",19),u["\u0275\u0275text"](12," Use "),u["\u0275\u0275elementStart"](13,"strong"),u["\u0275\u0275text"](14,"Esc"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"li",19),u["\u0275\u0275text"](16," Make "),u["\u0275\u0275elementStart"](17,"strong"),u["\u0275\u0275text"](18,"mouse left click"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](19," outside of dropdown content "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"li",19),u["\u0275\u0275text"](21," Open new dropdown via "),u["\u0275\u0275elementStart"](22,"strong"),u["\u0275\u0275text"](23,"mouse right click"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"li",19),u["\u0275\u0275text"](25," Declare local template variable which access to property "),u["\u0275\u0275elementStart"](26,"strong"),u["\u0275\u0275text"](27,"close"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](28," of "),u["\u0275\u0275elementStart"](29,"a",20),u["\u0275\u0275text"](30," template context object "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](31," and call it "),u["\u0275\u0275element"](32,"br"),u["\u0275\u0275text"](33," (for example, "),u["\u0275\u0275elementStart"](34,"code"),u["\u0275\u0275text"](35,' <ng-template let-close="close"></ng-template> '),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](36," ). "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"li"),u["\u0275\u0275text"](38," To get "),u["\u0275\u0275elementStart"](39,"a",21),u["\u0275\u0275text"](40," ActiveZone "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](41," of opened dropdown you should declare local template variable which access to property "),u["\u0275\u0275elementStart"](42,"strong"),u["\u0275\u0275text"](43,"activeZone"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](44," of template context object "),u["\u0275\u0275element"](45,"br"),u["\u0275\u0275text"](46," (for example, "),u["\u0275\u0275elementStart"](47,"code"),u["\u0275\u0275text"](48,' <ng-template let-activeZone="activeZone"></ng-template> '),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](49," ). "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]())}Q=$localize`:␟7478179a9b576b0f44e4f912cdc3d5f4c8d9f2df␟8884320053740662429: Right click on me to ${"\ufffd#3\ufffd"}:START_TAG_STRONG:see a dropdown${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG:`,Y=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,X=$localize`:␟3b4f4a9ec71187482b44dba63fdd3d968a6d11f2␟6306684698565387611: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDropdownContextModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,tt=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let lt=(()=>{class t{constructor(){this.exampleModule="import {TuiDropdownContextModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDropdownContextModule\n    ],\n...\n",this.exampleHtml='<div [tuiDropdownContext]="content">\n    Host element\n</div>\n\n<ng-template #content let-close="close">\n    Dropdown content\n    <button (click)="close()"></button>\n</ng-template>\n',this.exampleBasic={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-context-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownContextExample1 {}\n",HTML:'<p>\n    Make right click on this icon ->\n    <tui-svg\n        src="tuiIconSettingsLarge"\n        class="icon"\n        [tuiDropdownContext]="iconInfo"\n    ></tui-svg>\n</p>\n\n<ng-template #iconInfo>\n    <p class="text">Nothing special</p>\n</ng-template>\n',LESS:".text {\n    margin: 1rem;\n}\n\n.icon {\n    cursor: context-menu;\n}\n"},this.exampleContextMenu={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-dropdown-context-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownContextExample2 {\n    readonly menuItems = [\n        {title: 'View', iconName: 'tuiIconEyeOpen'},\n        {title: 'Copy', iconName: 'tuiIconCopy'},\n        {title: 'Delete', iconName: 'tuiIconTrash'},\n        {title: 'Move', iconName: 'tuiIconFolder'},\n    ] as const;\n\n    readonly tableData = [\n        {character: 'Ross Geller', actor: 'David Schwimmer'},\n        {character: 'Chandler Bing', actor: 'Matthew Perry'},\n        {character: 'Joey Tribbiani', actor: 'Matt LeBlanc'},\n        {character: 'Phoebe Buffay', actor: 'Lisa Kudrow'},\n        {character: 'Monica Geller', actor: 'Courteney Cox'},\n        {character: 'Rachel Green', actor: 'Jennifer Aniston'},\n    ] as const;\n\n    readonly tableColumns = Object.keys(this.tableData[0]);\n\n    readonly moreOptions = ['Option 1', 'Option 2', 'Option 3'];\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    getObjectValues = (obj: Object) => Object.values(obj);\n\n    printToConsole(action: string, contextInfo: unknown) {\n        this.dialogService\n            .open(`[${action}]: ${JSON.stringify(contextInfo)}`)\n            .subscribe();\n    }\n}\n",HTML:'<p>Make right click on any table\'s row.</p>\n\n<table class="tui-table">\n    <tbody>\n        <tr class="tui-table__tr tui-table__tr_hover_disabled">\n            <th *ngFor="let column of tableColumns" class="tui-table__th">\n                {{column}}\n            </th>\n        </tr>\n        <tr\n            *ngFor="let rowInfo of tableData"\n            class="tui-table__tr"\n            [tuiDropdownContext]="contextMenu"\n        >\n            <td\n                *ngFor="let value of getObjectValues(rowInfo)"\n                class="tui-table__td"\n            >\n                {{value}}\n            </td>\n\n            <ng-template\n                #contextMenu\n                let-close="close"\n                let-activeZone="activeZone"\n            >\n                <tui-data-list\n                    role="menu"\n                    tuiDataListDropdownManager\n                    class="context-menu"\n                    [tuiActiveZoneParent]="activeZone"\n                >\n                    <button\n                        *ngFor="let item of menuItems"\n                        tuiOption\n                        (click)="printToConsole(item.title, rowInfo); close()"\n                    >\n                        {{item.title}}\n                        <tui-svg class="icon" [src]="item.iconName"></tui-svg>\n                    </button>\n\n                    <button\n                        tuiOption\n                        tuiDropdown\n                        tuiDropdownAlign="right"\n                        [tuiDropdownContent]="nestedMenu"\n                        [tuiDropdownSided]="true"\n                    >\n                        More\n                    </button>\n                </tui-data-list>\n\n                <ng-template #nestedMenu>\n                    <tui-data-list\n                        tuiDataListDropdownManager\n                        [tuiActiveZoneParent]="activeZone"\n                    >\n                        <button *ngFor="let option of moreOptions" tuiOption>\n                            {{option}}\n                        </button>\n                    </tui-data-list>\n                </ng-template>\n            </ng-template>\n        </tr>\n    </tbody>\n</table>\n',LESS:".context-menu {\n    width: 8rem;\n}\n"},this.exampleReportMistakeForm={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-context-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownContextExample3 {\n    testForm = new FormGroup({\n        reportText: new FormControl('Misspell HERE!'),\n    });\n\n    report() {\n        console.info(this.testForm.value);\n    }\n}\n",HTML:'<p [tuiDropdownContext]="reportForm">\n    Some text with mistake. Make right click on it.\n</p>\n\n<p [tuiDropdownContext]="reportForm">Another text</p>\n\n<ng-template #reportForm let-close="close">\n    <form class="container" [formGroup]="testForm">\n        <tui-text-area formControlName="reportText">\n            Have you found a mistake ? Write about it!\n        </tui-text-area>\n\n        <button\n            type="button"\n            tuiButton\n            class="button"\n            (click)="report(); close()"\n        >\n            SEND IT\n        </button>\n    </form>\n</ng-template>\n',LESS:".container {\n    min-width: 20rem;\n    margin: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.button {\n    margin: 1rem auto 0;\n}\n"},this.dropdownAlignVariants=["left","right"],this.dropdownDirectionVariants=["bottom","top"],this.dropdownLimitWidthVariants=["min","auto","fixed"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownDirection=null,this.dropdownMinHeight=d.c,this.dropdownMaxHeight=d.b,this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownSided=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u["\u0275\u0275defineComponent"]({type:t,selectors:[["example-dropdown-context"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:s.a,useExisting:Object(u.forwardRef)(()=>t)}])],decls:7,vars:0,consts:[["package","KIT","type","directives",6,"header"],["pageTab",""],["tips",""],[1,"description"],[4,"ngTemplateOutlet"],["id","basic",3,"content",6,"heading"],["id","contextMenu",3,"content",6,"heading"],["id","reportMistakeForm",3,"content",6,"heading"],[3,"tuiDropdownContext","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth"],["dropdownContent",""],["documentationPropertyName","tuiDropdownContext","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],[1,"dropdown"],["tuiButton","","type","button",3,"click"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],[1,"tips__title"],[1,"tips__list"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["tuiLink","","href","https://angular.io/api/common/NgTemplateOutlet#properties","target","_blank"],["tuiLink","","routerLink","/directives/active-zone","target","_blank"]],template:function(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,z),u["\u0275\u0275template"](2,q,13,4,"ng-template",1),u["\u0275\u0275template"](3,rt,9,6,"ng-template",1),u["\u0275\u0275template"](4,it,10,2,"ng-template",1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](5,at,50,0,"ng-template",null,2,u["\u0275\u0275templateRefExtractor"]))},directives:[f.a,g.a,o.A,x.a,y,A,$,N.a,w.a,G.a,R.a,H.a,L.a,j.a,Z.a,i.e],styles:[".description[_ngcontent-%COMP%]{margin:0 0 2rem}.tips__title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.tips__list[_ngcontent-%COMP%]{padding-left:1rem}.tips__list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style-type:decimal;padding-left:.5rem;margin:1rem 0}.tips__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:1rem 0}.dropdown[_ngcontent-%COMP%]{padding:1rem}"],changeDetection:0}),t})(),ct=(()=>{class t{}return t.\u0275mod=u["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,a.i,d.ab,d.Qb,l.c,m.K,m.Hb,d.V,d.tb,d.hb,c.T,i.f.forChild(Object(a.p)(lt)),r.ReactiveFormsModule,p.a]]}),t})()},JPGa:function(t,e,n){"use strict";n.d(e,"a",(function(){return D}));var o,r,i,a,l,c,d,m=n("K/iL"),p=n("kZht"),u=n("yZWP"),s=n("1VvW"),f=n("yHor"),g=n("zGJC");function x(t,e){1&t&&(p["\u0275\u0275i18nStart"](0,r),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function h(t,e){1&t&&p["\u0275\u0275i18n"](0,i)}function w(t,e){1&t&&(p["\u0275\u0275i18nStart"](0,a),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function b(t,e){1&t&&p["\u0275\u0275i18n"](0,l)}function y(t,e){1&t&&(p["\u0275\u0275i18nStart"](0,c),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function C(t,e){1&t&&p["\u0275\u0275i18n"](0,d)}o=$localize`:␟f10667f722f7715235528f21ab06bf1972765a90␟8873256266701530790: Can be expanded with ${"\ufffd#2\ufffd"}:START_LINK: TuiDropdownController ${"\ufffd/#2\ufffd"}:CLOSE_LINK:`,r=$localize`:␟29ee50e0356e64d0ffccdddf141779d9cd095b01␟6653398799439643090: Align of dropdown (does not work together with ${"\ufffd#1\ufffd"}:START_TAG_CODE:limitWidth === 'fixed'${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,i=$localize`:␟e22e15f84dea771ad0d475438facbb62916362a6␟8159982415408745443: Set a vertical direction of dropdown `,a=$localize`:␟9d04bf6b5b07b256fb525b7d199cf6aaf3e0242f␟4854354731206615624: Put dropdown to the side, instead of top or bottom. Use in combination with ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownAlign${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,l=$localize`:␟6318612e87a79a0fddc36fb9036f4c24ab5b898e␟6158927642754956379: Limit width of dropdown `,c=$localize`:␟4055bf3cc12efa85e894fbf1941120ec2cde619c␟4679692758727259251: Minimum height to calculate that dropdown fits to setted ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownDirection${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,d=$localize`:␟48d54f1b6fe93aa4dd68b859fd2eeb1c169f8cea␟5657510849972139844: Maximum height of dropdown `;let D=(()=>{class t{constructor(t){this.documentedComponent=t}}return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275directiveInject"](m.a))},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["dropdown-controller-documentation"]],decls:14,vars:9,consts:[[1,"tui-text_h6"],["tuiLink","","target","_blank","routerLink","/directives/dropdown-controller"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"h6",0),p["\u0275\u0275i18nStart"](1,o),p["\u0275\u0275element"](2,"a",1),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275text"](4," Requires you to import "),p["\u0275\u0275elementStart"](5,"code"),p["\u0275\u0275text"](6,"TuiDropdownControllerModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-doc-documentation"),p["\u0275\u0275template"](8,x,2,0,"ng-template",2),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownAlign=t})),p["\u0275\u0275template"](9,h,1,0,"ng-template",3),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownDirection=t})),p["\u0275\u0275template"](10,w,2,0,"ng-template",4),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownDirection=t})),p["\u0275\u0275template"](11,b,1,0,"ng-template",5),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownLimitWidth=t})),p["\u0275\u0275template"](12,y,2,0,"ng-template",6),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMinHeight=t})),p["\u0275\u0275template"](13,C,1,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMaxHeight=t})),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](8),p["\u0275\u0275property"]("documentationPropertyValues",e.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",e.documentedComponent.dropdownAlign),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",e.documentedComponent.dropdownDirection),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.documentedComponent.dropdownDirection),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",e.documentedComponent.dropdownLimitWidth),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.documentedComponent.dropdownMinHeight),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.documentedComponent.dropdownMaxHeight))},directives:[u.a,s.e,f.a,g.a],encapsulation:2,changeDetection:0}),t})()},"K/iL":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},KDbD:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("An66"),r=n("1VvW"),i=n("SVIu"),a=n("Qq0t"),l=n("kZht");let c=(()=>{class t{}return t.\u0275mod=l["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,r.f,i.m,a.tb]]}),t})()}}]);