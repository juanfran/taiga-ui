(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{"8bCa":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiValidatorModule",(function(){return k}));var o=n("An66"),a=n("3kIJ"),r=n("1VvW"),i=n("SVIu"),l=n("l4xa"),m=n("Qq0t"),c=n("dvRg"),p=n("kZht"),d=n("OZlg"),u=n("e0eB"),s=n("iyc4"),f=n("GdrL"),g=n("71sB"),C=n("TjIJ"),h=n("jTus"),b=n("fP8s"),v=n("OWJi"),y=n("EmN8"),x=n("bYz0"),E=n("LhIY");function S(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-data-list-wrapper",6),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",e.items)}}function w(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-input",7),p["\u0275\u0275text"](1," Contact "),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("tuiValidator",e.validator)}}function V(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-phone",8),p["\u0275\u0275text"](1,"Contact"),p["\u0275\u0275elementEnd"]())}const M=function(){return{standalone:!0}};let T=(()=>{class e{constructor(){this.items=["Email","Phone"],this.type=this.items[0],this.group=new a.FormGroup({name:new a.FormControl("",a.Validators.required),contact:new a.FormControl("",a.Validators.required)}),this.validator=a.Validators.email}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-validator-example-1"]],decls:9,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","name"],[1,"tui-space_vertical-3",3,"ngModelOptions","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["formControlName","contact",3,"tuiValidator",4,"ngIf","ngIfElse"],["phone",""],[3,"items"],["formControlName","contact",3,"tuiValidator"],["formControlName","contact"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input",1),p["\u0275\u0275text"](2,"Name"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-select",2),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.type=e})),p["\u0275\u0275text"](4," Connection "),p["\u0275\u0275template"](5,S,1,1,"tui-data-list-wrapper",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](6,w,2,1,"tui-input",4),p["\u0275\u0275template"](7,V,2,0,"ng-template",null,5,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275reference"](8);p["\u0275\u0275property"]("formGroup",t.group),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngModelOptions",p["\u0275\u0275pureFunction0"](5,M))("ngModel",t.type),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",t.type===t.items[0])("ngIfElse",e)}},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,f.a,g.a,a.NgControlStatus,a.FormControlName,C.a,h.a,a.NgModel,b.a,o.t,v.a,y.a,x.a,E.a],encapsulation:2,changeDetection:0}),e})();var N=n("u8jZ");const _=["header",$localize`:␟e9989acc7c8ce4e53c98e725c4ccddb26500a12c␟676188202391799015:Validator`];var F;F=$localize`:␟31386b4456fc6b3d900fca512c4eb3cfd8f4cb03␟3877732538093888358:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiValidator${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows set validators for form control on the fly `;const G=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function A(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,F),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](4,G),p["\u0275\u0275element"](5,"tui-validator-example-1"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example1)}}var D,O;function I(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",4),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,D),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,O),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}D=$localize`:␟882bd28a9551de615e0f39bd9b0d55c6c1b1d514␟2747244216500749928: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiValidatorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `,O=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let $=(()=>{class e{constructor(){this.exampleModule="import {TuiValidatorModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiValidatorModule,\n    ],\n...\n",this.exampleHtml='<tui-input\n    formControlName="control"\n    [tuiValidator]="validator"\n></tui-input>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-validator-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiValidatorExample1 {\n    readonly items = ['Email', 'Phone'];\n\n    type = this.items[0];\n\n    readonly group = new FormGroup({\n        name: new FormControl('', Validators.required),\n        contact: new FormControl('', Validators.required),\n    });\n\n    readonly validator = Validators.email;\n}\n",HTML:'<form class="b-form" [formGroup]="group">\n    <tui-input formControlName="name">Name</tui-input>\n    <tui-select\n        class="tui-space_vertical-3"\n        [ngModelOptions]="{standalone: true}"\n        [(ngModel)]="type"\n    >\n        Connection\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-input\n        *ngIf="type === items[0]; else phone"\n        formControlName="contact"\n        [tuiValidator]="validator"\n    >\n        Contact\n    </tui-input>\n    <ng-template #phone>\n        <tui-input-phone formControlName="contact">Contact</tui-input-phone>\n    </ng-template>\n</form>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-validator"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,_),p["\u0275\u0275template"](2,A,6,1,"ng-template",1),p["\u0275\u0275template"](3,I,10,2,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[d.a,u.a,s.a,T,N.a],encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,a.ReactiveFormsModule,c.Y,c.Ab,l.Vb,c.eb,m.ab,c.J,i.i,r.f.forChild(Object(i.p)($))]]}),e})()}}]);