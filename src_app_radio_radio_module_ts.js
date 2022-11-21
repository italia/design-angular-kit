"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_radio_radio_module_ts"],{

/***/ 2755:
/*!********************************************************************************!*\
  !*** ./src/app/radio/radio-checked-example/radio-checked-example.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioCheckedExampleComponent": () => (/* binding */ RadioCheckedExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);


class RadioCheckedExampleComponent {
    constructor() {
        this.selectedNation = 'Italia';
        this.italiaChecked = true;
    }
    changeCurrentlySelected($event) {
        this.selectedNation = $event.value;
    }
}
RadioCheckedExampleComponent.ɵfac = function RadioCheckedExampleComponent_Factory(t) { return new (t || RadioCheckedExampleComponent)(); };
RadioCheckedExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RadioCheckedExampleComponent, selectors: [["it-radio-checked-example"]], decls: 9, vars: 2, consts: [[1, "bd-example"], [1, "example-section"], ["name", "nation", "value", "USA", "label", "USA", 3, "change"], ["name", "nation", "value", "Italia", "label", "Italia", 3, "checked", "change"], ["name", "nation", "value", "Spagna", "label", "Spagna", 3, "change"], [1, "example-selected-value"]], template: function RadioCheckedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Radio checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "it-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RadioCheckedExampleComponent_Template_it_radio_button_change_4_listener($event) { return ctx.changeCurrentlySelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "it-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RadioCheckedExampleComponent_Template_it_radio_button_change_5_listener($event) { return ctx.changeCurrentlySelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "it-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RadioCheckedExampleComponent_Template_it_radio_button_change_6_listener($event) { return ctx.changeCurrentlySelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.italiaChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nazione selezionata: ", ctx.selectedNation, "");
    } }, dependencies: [_projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_0__.RadioButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1jaGVja2VkLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8110:
/*!****************************************************************!*\
  !*** ./src/app/radio/radio-example/radio-example.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioExampleComponent": () => (/* binding */ RadioExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);





function RadioExampleComponent_it_radio_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "it-radio-button", 6);
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", color_r1)("label", color_r1);
} }
class RadioExampleComponent {
    constructor() {
        this.colors = [
            'Rosso',
            'Blu',
            'Giallo'
        ];
        this.selectedColor = 'Blu';
        this.disabled = false;
    }
}
RadioExampleComponent.ɵfac = function RadioExampleComponent_Factory(t) { return new (t || RadioExampleComponent)(); };
RadioExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RadioExampleComponent, selectors: [["it-radio-example"]], decls: 12, vars: 5, consts: [[1, "bd-example"], [1, "example-section"], ["label", "Disabilitato", 3, "ngModel", "ngModelChange"], [3, "ngModel", "disabled", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [1, "example-selected-value"], [3, "value", "label"]], template: function RadioExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Configurazione Radio button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "it-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RadioExampleComponent_Template_it_checkbox_ngModelChange_4_listener($event) { return ctx.disabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Risultato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1)(8, "it-radio-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RadioExampleComponent_Template_it_radio_group_ngModelChange_8_listener($event) { return ctx.selectedColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RadioExampleComponent_it_radio_button_9_Template, 1, 2, "it-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedColor)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Colore selezionato: ", ctx.selectedColor, "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioGroupDirective, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6887:
/*!******************************************************************!*\
  !*** ./src/app/radio/radio-examples/radio-examples.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioExamplesComponent": () => (/* binding */ RadioExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _radio_example_radio_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../radio-example/radio-example.component */ 8110);
/* harmony import */ var _radio_checked_example_radio_checked_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../radio-checked-example/radio-checked-example.component */ 2755);




class RadioExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RadioExamplesComponent.ɵfac = function RadioExamplesComponent_Factory(t) { return new (t || RadioExamplesComponent)(); };
RadioExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RadioExamplesComponent, selectors: [["it-radio-examples"]], decls: 4, vars: 0, consts: [["html", "\n  \n  \n<h3>Configurazione Radio button</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <it-checkbox [(ngModel)]=\"disabled\" label=\"Disabilitato\"></it-checkbox>\n  </p>\n  \n\n  <h4 >Risultato</h4>\n\n  <div class=\"example-section\">\n    <it-radio-group [(ngModel)]=\"selectedColor\" [disabled]=\"disabled\">\n      <it-radio-button *ngFor=\"let color of colors\" [value]=\"color\" [label]=\"color\"></it-radio-button>\n    </it-radio-group>\n    <div class=\"example-selected-value\">Colore selezionato: /{/{selectedColor/}/}</div>\n  </div>\n</div>\n\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-radio-example',\n  templateUrl: './radio-example.component.html',\n  styleUrls: ['./radio-example.component.scss']\n})\nexport class RadioExampleComponent {\n\n  colors = [\n    'Rosso',\n    'Blu',\n    'Giallo'\n  ];\n\n  selectedColor = 'Blu';\n\n  disabled = false;\n\n}\n\n\n"], ["html", "\n  \n  <h3>Radio checked</h3>\n<div class=\"bd-example\">\n  <div class=\"example-section\">\n    <it-radio-button  name=\"nation\" value=\"USA\" label=\"USA\" \n                      (change)=\"changeCurrentlySelected($event)\"></it-radio-button>\n\n    <it-radio-button  name=\"nation\" value=\"Italia\" label=\"Italia\" \n                      [checked]=\"italiaChecked\" (change)=\"changeCurrentlySelected($event)\"></it-radio-button>\n\n    <it-radio-button  name=\"nation\" value=\"Spagna\" label=\"Spagna\" \n                      (change)=\"changeCurrentlySelected($event)\"></it-radio-button>\n  </div>\n\n  <div class=\"example-selected-value\">Nazione selezionata: /{/{selectedNation/}/}</div>\n</div>\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-radio-checked-example',\n  templateUrl: './radio-checked-example.component.html',\n  styleUrls: ['./radio-checked-example.component.scss']\n})\nexport class RadioCheckedExampleComponent {\n\n  selectedNation = 'Italia';\n\n  italiaChecked = true;\n\n  changeCurrentlySelected($event) {\n    this.selectedNation = $event.value;\n  }\n\n}\n\n\n"]], template: function RadioExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "it-radio-example")(1, "it-source-display", 0)(2, "it-radio-checked-example")(3, "it-source-display", 1);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _radio_example_radio_example_component__WEBPACK_IMPORTED_MODULE_1__.RadioExampleComponent, _radio_checked_example_radio_checked_example_component__WEBPACK_IMPORTED_MODULE_2__.RadioCheckedExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6822:
/*!************************************************************!*\
  !*** ./src/app/radio/radio-index/radio-index.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioIndexComponent": () => (/* binding */ RadioIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _radio_examples_radio_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../radio-examples/radio-examples.component */ 6887);






class RadioIndexComponent {
    constructor() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'RadioButtonComponent');
    }
}
RadioIndexComponent.ɵfac = function RadioIndexComponent_Factory(t) { return new (t || RadioIndexComponent)(); };
RadioIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RadioIndexComponent, selectors: [["it-radio-index"]], decls: 11, vars: 2, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function RadioIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Radio Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Il componente Radio Button utilizzabile in un form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-radio-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.component.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.component);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _radio_examples_radio_examples_component__WEBPACK_IMPORTED_MODULE_4__.RadioExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6810:
/*!***********************************************!*\
  !*** ./src/app/radio/radio-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioRoutingModule": () => (/* binding */ RadioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _radio_index_radio_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-index/radio-index.component */ 6822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _radio_index_radio_index_component__WEBPACK_IMPORTED_MODULE_0__.RadioIndexComponent }
];
class RadioRoutingModule {
}
RadioRoutingModule.ɵfac = function RadioRoutingModule_Factory(t) { return new (t || RadioRoutingModule)(); };
RadioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RadioRoutingModule });
RadioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RadioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2107:
/*!***************************************!*\
  !*** ./src/app/radio/radio.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioModule": () => (/* binding */ RadioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _radio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-routing.module */ 6810);
/* harmony import */ var _radio_index_radio_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-index/radio-index.component */ 6822);
/* harmony import */ var _radio_example_radio_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-example/radio-example.component */ 8110);
/* harmony import */ var _radio_examples_radio_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-examples/radio-examples.component */ 6887);
/* harmony import */ var _radio_checked_example_radio_checked_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-checked-example/radio-checked-example.component */ 2755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class RadioModule {
}
RadioModule.ɵfac = function RadioModule_Factory(t) { return new (t || RadioModule)(); };
RadioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: RadioModule });
RadioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _radio_routing_module__WEBPACK_IMPORTED_MODULE_2__.RadioRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RadioModule, { declarations: [_radio_index_radio_index_component__WEBPACK_IMPORTED_MODULE_3__.RadioIndexComponent, _radio_example_radio_example_component__WEBPACK_IMPORTED_MODULE_4__.RadioExampleComponent, _radio_examples_radio_examples_component__WEBPACK_IMPORTED_MODULE_5__.RadioExamplesComponent, _radio_checked_example_radio_checked_example_component__WEBPACK_IMPORTED_MODULE_6__.RadioCheckedExampleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _radio_routing_module__WEBPACK_IMPORTED_MODULE_2__.RadioRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_radio_radio_module_ts.js.map