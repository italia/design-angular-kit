"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_toggle_toggle_module_ts"],{

/***/ 7391:
/*!*******************************************************************!*\
  !*** ./src/app/toggle/toggle-example/toggle-example.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleExampleComponent": () => (/* binding */ ToggleExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/toggle/toggle.component */ 4404);



class ToggleExampleComponent {
    constructor() {
        this.checked = true;
        this.label = 'Sono una toggle';
        this.disabled = false;
    }
    ngOnInit() {
    }
}
ToggleExampleComponent.ɵfac = function ToggleExampleComponent_Factory(t) { return new (t || ToggleExampleComponent)(); };
ToggleExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToggleExampleComponent, selectors: [["it-toggle-example"]], decls: 10, vars: 5, consts: [[1, "bd-example"], [1, "example-section"], ["label", "Spuntato", 3, "ngModel", "ngModelChange"], ["label", "Disabilitato", 3, "ngModel", "ngModelChange"], [3, "ngModel", "label", "disabled", "ngModelChange"]], template: function ToggleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Configurazione toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "it-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToggleExampleComponent_Template_it_toggle_ngModelChange_4_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "it-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToggleExampleComponent_Template_it_toggle_ngModelChange_5_listener($event) { return ctx.disabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Risultato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 1)(9, "it-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ToggleExampleComponent_Template_it_toggle_ngModelChange_9_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.checked)("label", ctx.label)("disabled", ctx.disabled);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_design_angular_kit_src_lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_0__.ToggleComponent], styles: [".example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoidG9nZ2xlLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbn1cbiAgIl19 */"] });


/***/ }),

/***/ 5521:
/*!*********************************************************************!*\
  !*** ./src/app/toggle/toggle-examples/toggle-examples.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleExamplesComponent": () => (/* binding */ ToggleExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _toggle_example_toggle_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toggle-example/toggle-example.component */ 7391);



class ToggleExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToggleExamplesComponent.ɵfac = function ToggleExamplesComponent_Factory(t) { return new (t || ToggleExamplesComponent)(); };
ToggleExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToggleExamplesComponent, selectors: [["it-toggle-examples"]], decls: 2, vars: 0, consts: [["html", "\n  \n  <h3>Configurazione toggle</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <it-toggle [(ngModel)]=\"checked\" label=\"Spuntato\"></it-toggle>\n    <it-toggle [(ngModel)]=\"disabled\" label=\"Disabilitato\"></it-toggle>\n  </p>\n\n\n  <h4>Risultato</h4>\n\n  <p class=\"example-section\">\n      <it-toggle [(ngModel)]=\"checked\" [label]=\"label\" [disabled]=\"disabled\"></it-toggle>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-toggle-example',\n  templateUrl: './toggle-example.component.html',\n  styleUrls: ['./toggle-example.component.scss']\n})\nexport class ToggleExampleComponent implements OnInit {\n\n  checked = true;\n  label = 'Sono una toggle';\n  disabled = false;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n\n\n"]], template: function ToggleExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "it-toggle-example")(1, "it-source-display", 0);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _toggle_example_toggle_example_component__WEBPACK_IMPORTED_MODULE_1__.ToggleExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2dnbGUtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7228:
/*!***************************************************************!*\
  !*** ./src/app/toggle/toggle-index/toggle-index.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleIndexComponent": () => (/* binding */ ToggleIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _toggle_examples_toggle_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle-examples/toggle-examples.component */ 5521);






class ToggleIndexComponent {
    constructor() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'ToggleComponent');
    }
    ngOnInit() {
    }
}
ToggleIndexComponent.ɵfac = function ToggleIndexComponent_Factory(t) { return new (t || ToggleIndexComponent)(); };
ToggleIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ToggleIndexComponent, selectors: [["it-toggle-index"]], decls: 11, vars: 2, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function ToggleIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Il componente Toggle utilizzabile in un form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-toggle-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.component.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.component);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _toggle_examples_toggle_examples_component__WEBPACK_IMPORTED_MODULE_4__.ToggleExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2dnbGUtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2272:
/*!*************************************************!*\
  !*** ./src/app/toggle/toggle-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleRoutingModule": () => (/* binding */ ToggleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-index/toggle-index.component */ 7228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_0__.ToggleIndexComponent }
];
class ToggleRoutingModule {
}
ToggleRoutingModule.ɵfac = function ToggleRoutingModule_Factory(t) { return new (t || ToggleRoutingModule)(); };
ToggleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ToggleRoutingModule });
ToggleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToggleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9909:
/*!*****************************************!*\
  !*** ./src/app/toggle/toggle.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleModule": () => (/* binding */ ToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _toggle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-routing.module */ 2272);
/* harmony import */ var _toggle_example_toggle_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-example/toggle-example.component */ 7391);
/* harmony import */ var _toggle_examples_toggle_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle-examples/toggle-examples.component */ 5521);
/* harmony import */ var _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-index/toggle-index.component */ 7228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class ToggleModule {
}
ToggleModule.ɵfac = function ToggleModule_Factory(t) { return new (t || ToggleModule)(); };
ToggleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ToggleModule });
ToggleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _toggle_routing_module__WEBPACK_IMPORTED_MODULE_2__.ToggleRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ToggleModule, { declarations: [_toggle_example_toggle_example_component__WEBPACK_IMPORTED_MODULE_3__.ToggleExampleComponent, _toggle_examples_toggle_examples_component__WEBPACK_IMPORTED_MODULE_4__.ToggleExamplesComponent, _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_5__.ToggleIndexComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _toggle_routing_module__WEBPACK_IMPORTED_MODULE_2__.ToggleRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_toggle_toggle_module_ts.js.map