"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_badge_badge_module_ts"],{

/***/ 9056:
/*!****************************************************************!*\
  !*** ./src/app/badge/badge-example/badge-example.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeExampleComponent": () => (/* binding */ BadgeExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);
/* harmony import */ var _projects_design_angular_kit_src_lib_badge_badge_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/badge/badge.directive */ 4009);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function BadgeExampleComponent_it_radio_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "it-radio-button", 16);
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", color_r1)("label", color_r1);
} }
class BadgeExampleComponent {
    constructor() {
        this.colors = [
            'primary',
            'secondary',
            'danger',
            'warning',
            'success',
            'light',
            'dark'
        ];
        this.selectedColor = 'primary';
        this.badgeText = 'New';
        this.isPill = false;
    }
}
BadgeExampleComponent.ɵfac = function BadgeExampleComponent_Factory(t) { return new (t || BadgeExampleComponent)(); };
BadgeExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BadgeExampleComponent, selectors: [["it-badge-example"]], decls: 32, vars: 8, consts: [[1, "bd-example"], [1, "row"], [1, "col-4"], [1, "example-section"], ["for", "exampleInputText"], ["type", "text", "id", "exampleInputText", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], ["for", "color"], ["id", "color", 3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["for", "isPill"], ["id", "isPill", "label", "Pill", 3, "ngModel", "ngModelChange"], [1, "col-6", "offset-2"], [1, "card-title"], [3, "itBadge", "badgeColor", "isPill"], ["href", "#", "itBadge", "link", 3, "badgeColor"], [3, "value", "label"]], template: function BadgeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Configurazione badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "label", 4)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Testo badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BadgeExampleComponent_Template_input_ngModelChange_9_listener($event) { return ctx.badgeText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 1)(12, "div", 6)(13, "label", 7)(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Colore Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "it-radio-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BadgeExampleComponent_Template_it_radio_group_ngModelChange_16_listener($event) { return ctx.selectedColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, BadgeExampleComponent_it_radio_button_17_Template, 1, 2, "it-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6)(19, "label", 10)(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Badge arrotondato");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "it-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BadgeExampleComponent_Template_it_checkbox_ngModelChange_22_listener($event) { return ctx.isPill = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12)(24, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Risultato badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Testo di esempio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Link di esempio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.badgeText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isPill);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itBadge", ctx.badgeText)("badgeColor", ctx.selectedColor)("isPill", ctx.isPill);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("badgeColor", ctx.selectedColor);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioGroupDirective, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent, _projects_design_angular_kit_src_lib_badge_badge_directive__WEBPACK_IMPORTED_MODULE_2__.BadgeDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWRnZS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45:
/*!******************************************************************!*\
  !*** ./src/app/badge/badge-examples/badge-examples.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeExamplesComponent": () => (/* binding */ BadgeExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _badge_example_badge_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../badge-example/badge-example.component */ 9056);



class BadgeExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
BadgeExamplesComponent.ɵfac = function BadgeExamplesComponent_Factory(t) { return new (t || BadgeExamplesComponent)(); };
BadgeExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BadgeExamplesComponent, selectors: [["it-badge-examples"]], decls: 2, vars: 0, consts: [["html", "\n  \n  <h3>Configurazione badge</h3>\n<div class=\"bd-example\">\n  \n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"example-section\">\n        \n        <label for=\"exampleInputText\"><strong>Testo badge</strong></label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputText\" [(ngModel)]=\"badgeText\">\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <label for=\"color\"><strong>Colore Badge</strong></label>\n            <it-radio-group id=\"color\" [(ngModel)]=\"selectedColor\">\n              <it-radio-button *ngFor=\"let color of colors\" [value]=\"color\" [label]=\"color\"></it-radio-button>\n            </it-radio-group>\n          </div>\n          <div class = \"col-6\">\n            <label for=\"isPill\"><strong>Badge arrotondato</strong></label>\n\n            <it-checkbox id=\"isPill\" [(ngModel)]=\"isPill\" label=\"Pill\"></it-checkbox>\n\n          </div>\n        </div>\n       \n      </div>\n    </div>\n\n    <div class=\"col-6 offset-2\">\n      <h4 class=\"card-title\">Risultato badge</h4>\n  \n      <h5>Testo di esempio <span [itBadge]=\"badgeText\" [badgeColor]=\"selectedColor\" [isPill]=\"isPill\"></span></h5>\n  \n      <h5>Link di esempio <a href=\"#\" itBadge=\"link\" [badgeColor]=\"selectedColor\"></a></h5>\n    </div>\n  </div>\n      \n</div>\n  \n\n\n    \n      \n\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-badge-example',\n  templateUrl: './badge-example.component.html',\n  styleUrls: ['./badge-example.component.scss']\n})\nexport class BadgeExampleComponent {\n  colors = [\n    'primary',\n    'secondary',\n    'danger',\n    'warning',\n    'success',\n    'light',\n    'dark'\n  ];\n\n  selectedColor = 'primary';\n  badgeText = 'New';\n\n  isPill = false;\n}\n\n\n"]], template: function BadgeExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "it-badge-example")(1, "it-source-display", 0);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _badge_example_badge_example_component__WEBPACK_IMPORTED_MODULE_1__.BadgeExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWRnZS1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1725:
/*!************************************************************!*\
  !*** ./src/app/badge/badge-index/badge-index.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeIndexComponent": () => (/* binding */ BadgeIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _badge_examples_badge_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../badge-examples/badge-examples.component */ 45);






class BadgeIndexComponent {
    constructor() {
        this.directive = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.directives.find(directive => directive.name === 'BadgeDirective');
    }
}
BadgeIndexComponent.ɵfac = function BadgeIndexComponent_Factory(t) { return new (t || BadgeIndexComponent)(); };
BadgeIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BadgeIndexComponent, selectors: [["it-badge-index"]], decls: 11, vars: 2, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function BadgeIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-badge-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.directive.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.directive);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _badge_examples_badge_examples_component__WEBPACK_IMPORTED_MODULE_4__.BadgeExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWRnZS1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4102:
/*!***********************************************!*\
  !*** ./src/app/badge/badge-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeRoutingModule": () => (/* binding */ BadgeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _badge_index_badge_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge-index/badge-index.component */ 1725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _badge_index_badge_index_component__WEBPACK_IMPORTED_MODULE_0__.BadgeIndexComponent }
];
class BadgeRoutingModule {
}
BadgeRoutingModule.ɵfac = function BadgeRoutingModule_Factory(t) { return new (t || BadgeRoutingModule)(); };
BadgeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BadgeRoutingModule });
BadgeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BadgeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5913:
/*!***************************************!*\
  !*** ./src/app/badge/badge.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeModule": () => (/* binding */ BadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _badge_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge-routing.module */ 4102);
/* harmony import */ var _badge_example_badge_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge-example/badge-example.component */ 9056);
/* harmony import */ var _badge_examples_badge_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge-examples/badge-examples.component */ 45);
/* harmony import */ var _badge_index_badge_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge-index/badge-index.component */ 1725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class BadgeModule {
}
BadgeModule.ɵfac = function BadgeModule_Factory(t) { return new (t || BadgeModule)(); };
BadgeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BadgeModule });
BadgeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _badge_routing_module__WEBPACK_IMPORTED_MODULE_2__.BadgeRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BadgeModule, { declarations: [_badge_example_badge_example_component__WEBPACK_IMPORTED_MODULE_3__.BadgeExampleComponent, _badge_examples_badge_examples_component__WEBPACK_IMPORTED_MODULE_4__.BadgeExamplesComponent, _badge_index_badge_index_component__WEBPACK_IMPORTED_MODULE_5__.BadgeIndexComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _badge_routing_module__WEBPACK_IMPORTED_MODULE_2__.BadgeRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_badge_badge_module_ts.js.map