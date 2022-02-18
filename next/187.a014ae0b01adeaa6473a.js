(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{bUBm:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleBrowserModule",(function(){return v}));var r=n("An66"),o=n("1VvW"),a=n("SVIu"),i=n("kZht"),c=n("OZlg"),s=n("e0eB"),l=n("iyc4"),u=n("FTac"),m=n("l4xa");let p=(()=>{class e{constructor(e){this.userAgent=e}get aboutMyBrowser(){return Object(m.uc)(this.userAgent)?Object(m.vc)(13,this.userAgent)?"Edge older than 13":"Edge until 13":Object(m.yc)(this.userAgent)?"Unfortunately, you have IE11":Object(m.xc)(this.userAgent)?"Okay, you have Firefox!":"You have Chromium based browser, cool!"}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](u.h))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-browser-example-1"]],decls:4,vars:1,template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"label"),i["\u0275\u0275text"](1,"Your browser is:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"p"),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](t.aboutMyBrowser))},encapsulation:2,changeDetection:0}),e})();var d=n("u8jZ");const f=["header",$localize`:␟f9c6a0ed822ca3080f9a3110255f7e8337323d18␟1141403969432151030:Browser utils`],b=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var g;g=$localize`:␟40ec2c87f7f7e9226eff45bce9c943aa0c744f71␟5545918984621976325:A set of tools for work with browser`;const h=["heading",$localize`:␟1e0d211c5dc58e7091fbbdd270900b2936cfd886␟6921954424489541591:Browser detection`];function E(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275i18n"](1,g),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"tui-doc-example",3),i["\u0275\u0275i18nAttributes"](3,h),i["\u0275\u0275element"](4,"tui-browser-example-1"),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("content",e.example1)}}var w;function x(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ol",4),i["\u0275\u0275elementStart"](1,"li"),i["\u0275\u0275elementStart"](2,"p"),i["\u0275\u0275i18n"](3,w),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](4,"tui-doc-code",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("code",e.importComponentExample)}}w=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let y=(()=>{class e{constructor(){this.importComponentExample="import {isIE} from '@taiga-ui/cdk';\nimport {USER_AGENT} from '@ng-web-apis/common';\n\n...\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    areThereProblems = isIE(this.userAgent);\n...\n",this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {USER_AGENT} from '@ng-web-apis/common';\nimport {isEdge, isEdgeOlderThan, isFirefox, isIE} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-browser-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBrowserExample1 {\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    get aboutMyBrowser(): string {\n        if (isEdge(this.userAgent)) {\n            if (isEdgeOlderThan(13, this.userAgent)) {\n                return 'Edge older than 13';\n            }\n\n            return 'Edge until 13';\n        }\n\n        if (isIE(this.userAgent)) {\n            return 'Unfortunately, you have IE11';\n        }\n\n        if (isFirefox(this.userAgent)) {\n            return 'Okay, you have Firefox!';\n        }\n\n        return 'You have Chromium based browser, cool!';\n    }\n}\n",HTML:"<label>Your browser is:</label>\n\n<p>{{ aboutMyBrowser }}</p>\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["example-browser"]],decls:5,vars:0,consts:[["package","CDK","path","cdk/utils/browser",6,"header"],["pageTab",""],[6,"pageTab"],["id","browser",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"tui-doc-page",0),i["\u0275\u0275i18nAttributes"](1,f),i["\u0275\u0275template"](2,E,5,1,"ng-template",1),i["\u0275\u0275template"](3,x,5,1,"ng-template",2),i["\u0275\u0275i18nAttributes"](4,b),i["\u0275\u0275elementEnd"]())},directives:[c.a,s.a,l.a,p,d.a],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,a.i,o.f.forChild(Object(a.p)(y))]]}),e})()}}]);