"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_collapse_collapse_module_ts"],{

/***/ 6325:
/*!*************************************************************************!*\
  !*** ./src/app/collapse/collapse-example/collapse-example.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseExampleComponent": () => (/* binding */ CollapseExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/button/button.directive */ 9103);
/* harmony import */ var _projects_design_angular_kit_src_lib_collapse_collapse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/collapse/collapse.directive */ 2959);



class CollapseExampleComponent {
    constructor() {
        this.collapse = true;
        this.showTime = '';
        this.shownTime = '';
        this.hideTime = '';
        this.hiddenTime = '';
    }
    logShown() {
        this.shownTime = new Date().toISOString();
    }
    logHidden() {
        this.hiddenTime = new Date().toISOString();
    }
}
CollapseExampleComponent.ɵfac = function CollapseExampleComponent_Factory(t) { return new (t || CollapseExampleComponent)(); };
CollapseExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CollapseExampleComponent, selectors: [["it-collapse-example"]], decls: 15, vars: 3, consts: [[1, "bd-example"], [1, "example-section"], ["itButton", "primary", "aria-controls", "collapseExample", 3, "click"], ["itCollapse", "", "id", "collapseExample", 3, "shown", "hidden"], ["mioCollapse", "itCollapse"], [1, "card", "card-body", "mt-3"], [1, "mt-4"]], template: function CollapseExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Esempio direttiva Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapseExampleComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Apri/chiudi contenuto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseExampleComponent_Template_div_shown_6_listener() { return ctx.logShown(); })("hidden", function CollapseExampleComponent_Template_div_hidden_6_listener() { return ctx.logHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !_r0.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Ultima emissione dell'evento shown = ", ctx.shownTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Ultima emissione dell'evento hidden = ", ctx.hiddenTime, " ");
    } }, dependencies: [_projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_0__.ItButtonDirective, _projects_design_angular_kit_src_lib_collapse_collapse_directive__WEBPACK_IMPORTED_MODULE_1__.ItCollapseDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5098:
/*!***************************************************************************!*\
  !*** ./src/app/collapse/collapse-examples/collapse-examples.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseExamplesComponent": () => (/* binding */ CollapseExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _collapse_example_collapse_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collapse-example/collapse-example.component */ 6325);
/* harmony import */ var _collapse_group_example_collapse_group_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collapse-group-example/collapse-group-example.component */ 2482);
/* harmony import */ var _collapse_nested_example_collapse_nested_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collapse-nested-example/collapse-nested-example.component */ 8970);





class CollapseExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CollapseExamplesComponent.ɵfac = function CollapseExamplesComponent_Factory(t) { return new (t || CollapseExamplesComponent)(); };
CollapseExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CollapseExamplesComponent, selectors: [["it-collapse-examples"]], decls: 6, vars: 0, consts: [["html", "\n  \n  <h3>Esempio direttiva Collapse</h3>\n<div class=\"bd-example\">\n  <div class=\"example-section\">      \n    <button itButton=\"primary\" \n            (click)=\"mioCollapse.toggle()\"\n            [attr.aria-expanded]=\"!mioCollapse.isCollapsed\" \n            aria-controls=\"collapseExample\">\n      Apri/chiudi contenuto\n    </button>\n    <div  #mioCollapse=\"itCollapse\" \n          itCollapse \n          id=\"collapseExample\" \n          (shown)=\"logShown()\" (hidden)=\"logHidden()\">\n      <div class=\"card card-body mt-3\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. \n        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-4\">\n    <div>\n      Ultima emissione dell'evento shown = /{/{shownTime/}/}\n    </div>\n  \n    <div>\n      Ultima emissione dell'evento hidden = /{/{hiddenTime/}/}\n    </div>\n  </div>\n  \n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-collapse-example',\n  templateUrl: './collapse-example.component.html',\n  styleUrls: ['./collapse-example.component.scss']\n})\nexport class CollapseExampleComponent {\n\n  collapse = true;\n\n  showTime = '';\n  shownTime = '';\n  hideTime = '';\n  hiddenTime = '';\n\n  logShown() {\n    this.shownTime = new Date().toISOString();\n  }\n\n  logHidden() {\n    this.hiddenTime = new Date().toISOString();\n  }\n}\n\n\n"], ["html", "\n  \n  <h3>Esempio Collapse Group con Collapse Item</h3>\n<div class=\"bd-example\">\n  <div class=\"example-section\">\n    <it-checkbox [(ngModel)]=\"accordion\" label=\"Accordion\"></it-checkbox>\n    <it-collapse-group [accordion]=\"accordion\">\n      <it-collapse-item header=\"titolo\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. \n        3 wolf moon officia aute, non cupidatat skateboard dolor brunch.\n      </it-collapse-item>\n      <it-collapse-item header=\"titolo\">\n        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft \n        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of \n        them accusamus labore sustainable VHS.\n      </it-collapse-item>\n      <it-collapse-item header=\"titolo\">\n        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, \n        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. \n        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n      </it-collapse-item>\n    </it-collapse-group>\n  </div>\n</div>\n\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-collapse-group-example',\n  templateUrl: './collapse-group-example.component.html',\n  styleUrls: ['./collapse-group-example.component.scss']\n})\nexport class CollapseGroupExampleComponent {\n  accordion = false;\n}\n\n\n"], ["html", "\n  \n  \n<h3>Esempio Collapse Group con Collapse Item Innestati</h3>\n<div class=\"bd-example\">\n  <div class=\"example-section\">\n    <it-collapse-group accordion>\n      <it-collapse-item header=\"Sezione 1\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n\n        <it-collapse-group accordion>\n          <it-collapse-item header=\"Sottotitolo 1\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non cupidatat skateboard dolor brunch.\n          </it-collapse-item>\n          <it-collapse-item header=\"Sottotitolo 2\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n              synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n          </it-collapse-item>\n          <it-collapse-item  header=\"Sottotitolo 3\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n              anderson cred nesciunt sapiente ea proident.\n          </it-collapse-item>\n        </it-collapse-group>\n\n      </it-collapse-item>\n      <it-collapse-item header=\"Sezione 2\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n        <it-collapse-group accordion>\n          <it-collapse-item  header=\"Sottotitolo 1\"  (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non cupidatat skateboard dolor brunch.\n          </it-collapse-item>\n          <it-collapse-item  header=\"Sottotitolo 2\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n              synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n          </it-collapse-item>\n          <it-collapse-item header=\"Sottotitolo 3\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n              anderson cred nesciunt sapiente ea proident.\n          </it-collapse-item>\n        </it-collapse-group>\n\n      </it-collapse-item>\n      <it-collapse-item header=\"Sezione 3\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n\n        <it-collapse-group accordion>\n          <it-collapse-item header=\"Sottotitolo 1\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n            moon officia aute, non cupidatat skateboard dolor brunch.\n          </it-collapse-item>\n          <it-collapse-item header=\"Sottotitolo 2\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n          </it-collapse-item>\n          <it-collapse-item header=\"Sottotitolo 3\" (shown)=\"logShown($event)\" (hidden)=\"logHidden($event)\">\n            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n            anderson cred nesciunt sapiente ea proident.\n          </it-collapse-item>\n        </it-collapse-group>\n\n      </it-collapse-item>\n    </it-collapse-group>\n  </div>\n\n  <div class=\"mt-4\">\n    <div>\n      Ultimo evento shown emesso da = /{/{shownComponent/}/}\n    </div>\n\n    <div>\n      Ultimo evento hidden emesso da = /{/{hiddenComponent/}/}\n    </div>\n  </div>\n\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-collapse-nested-example',\n  templateUrl: './collapse-nested-example.component.html',\n  styleUrls: ['./collapse-nested-example.component.scss']\n})\nexport class CollapseNestedExampleComponent {\n\n  shownComponent = '';\n  hiddenComponent = '';\n\n\n  logShown($event) {\n    this.shownComponent = $event._header;\n  }\n\n  logHidden($event) {\n    this.hiddenComponent = $event._header;\n  }\n}\n\n\n"]], template: function CollapseExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "it-collapse-example")(1, "it-source-display", 0)(2, "it-collapse-group-example")(3, "it-source-display", 1)(4, "it-collapse-nested-example")(5, "it-source-display", 2);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _collapse_example_collapse_example_component__WEBPACK_IMPORTED_MODULE_1__.CollapseExampleComponent, _collapse_group_example_collapse_group_example_component__WEBPACK_IMPORTED_MODULE_2__.CollapseGroupExampleComponent, _collapse_nested_example_collapse_nested_example_component__WEBPACK_IMPORTED_MODULE_3__.CollapseNestedExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2482:
/*!*************************************************************************************!*\
  !*** ./src/app/collapse/collapse-group-example/collapse-group-example.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseGroupExampleComponent": () => (/* binding */ CollapseGroupExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_collapse_collapse_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/collapse/collapse-item.component */ 3196);
/* harmony import */ var _projects_design_angular_kit_src_lib_collapse_collapse_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/collapse/collapse-group.component */ 8146);





class CollapseGroupExampleComponent {
    constructor() {
        this.accordion = false;
    }
}
CollapseGroupExampleComponent.ɵfac = function CollapseGroupExampleComponent_Factory(t) { return new (t || CollapseGroupExampleComponent)(); };
CollapseGroupExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CollapseGroupExampleComponent, selectors: [["it-collapse-group-example"]], decls: 12, vars: 2, consts: [[1, "bd-example"], [1, "example-section"], ["label", "Accordion", 3, "ngModel", "ngModelChange"], [3, "accordion"], ["header", "titolo"]], template: function CollapseGroupExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Esempio Collapse Group con Collapse Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "it-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CollapseGroupExampleComponent_Template_it_checkbox_ngModelChange_4_listener($event) { return ctx.accordion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "it-collapse-group", 3)(6, "it-collapse-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "it-collapse-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "it-collapse-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.accordion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("accordion", ctx.accordion);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_collapse_collapse_item_component__WEBPACK_IMPORTED_MODULE_1__.ItCollapseItemComponent, _projects_design_angular_kit_src_lib_collapse_collapse_group_component__WEBPACK_IMPORTED_MODULE_2__.ItCollapseGroupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS1ncm91cC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9288:
/*!*********************************************************************!*\
  !*** ./src/app/collapse/collapse-index/collapse-index.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseIndexComponent": () => (/* binding */ CollapseIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _collapse_examples_collapse_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../collapse-examples/collapse-examples.component */ 5098);






class CollapseIndexComponent {
    constructor() {
        this.directive = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.directives.find(directive => directive.name === 'ItCollapseDirective');
        this.groupComponent = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'ItCollapseGroupComponent');
        this.itemComponent = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'ItCollapseItemComponent');
    }
}
CollapseIndexComponent.ɵfac = function CollapseIndexComponent_Factory(t) { return new (t || CollapseIndexComponent)(); };
CollapseIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CollapseIndexComponent, selectors: [["it-collapse-index"]], decls: 19, vars: 4, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function CollapseIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Direttiva per l'interazione con elementi richiudibili");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Direttiva Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Collapse Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Collapse Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "it-collapse-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.directive.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.directive);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.groupComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.itemComponent);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _collapse_examples_collapse_examples_component__WEBPACK_IMPORTED_MODULE_4__.CollapseExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8970:
/*!***************************************************************************************!*\
  !*** ./src/app/collapse/collapse-nested-example/collapse-nested-example.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseNestedExampleComponent": () => (/* binding */ CollapseNestedExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_collapse_collapse_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/collapse/collapse-item.component */ 3196);
/* harmony import */ var _projects_design_angular_kit_src_lib_collapse_collapse_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/collapse/collapse-group.component */ 8146);



class CollapseNestedExampleComponent {
    constructor() {
        this.shownComponent = '';
        this.hiddenComponent = '';
    }
    logShown($event) {
        this.shownComponent = $event._header;
    }
    logHidden($event) {
        this.hiddenComponent = $event._header;
    }
}
CollapseNestedExampleComponent.ɵfac = function CollapseNestedExampleComponent_Factory(t) { return new (t || CollapseNestedExampleComponent)(); };
CollapseNestedExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CollapseNestedExampleComponent, selectors: [["it-collapse-nested-example"]], decls: 34, vars: 2, consts: [[1, "bd-example"], [1, "example-section"], ["accordion", ""], ["header", "Sezione 1", 3, "shown", "hidden"], ["header", "Sottotitolo 1", 3, "shown", "hidden"], ["header", "Sottotitolo 2", 3, "shown", "hidden"], ["header", "Sottotitolo 3", 3, "shown", "hidden"], ["header", "Sezione 2", 3, "shown", "hidden"], ["header", "Sezione 3", 3, "shown", "hidden"], [1, "mt-4"]], template: function CollapseNestedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Esempio Collapse Group con Collapse Item Innestati");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "it-collapse-group", 2)(5, "it-collapse-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_5_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_5_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "it-collapse-group", 2)(7, "it-collapse-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_7_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_7_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "it-collapse-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_9_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_9_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "it-collapse-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_11_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_11_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "it-collapse-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_13_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_13_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "it-collapse-group", 2)(15, "it-collapse-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_15_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_15_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "it-collapse-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_17_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_17_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "it-collapse-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_19_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_19_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "it-collapse-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_21_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_21_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "it-collapse-group", 2)(23, "it-collapse-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_23_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_23_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "it-collapse-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_25_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_25_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "it-collapse-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function CollapseNestedExampleComponent_Template_it_collapse_item_shown_27_listener($event) { return ctx.logShown($event); })("hidden", function CollapseNestedExampleComponent_Template_it_collapse_item_hidden_27_listener($event) { return ctx.logHidden($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Ultimo evento shown emesso da = ", ctx.shownComponent, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Ultimo evento hidden emesso da = ", ctx.hiddenComponent, " ");
    } }, dependencies: [_projects_design_angular_kit_src_lib_collapse_collapse_item_component__WEBPACK_IMPORTED_MODULE_0__.ItCollapseItemComponent, _projects_design_angular_kit_src_lib_collapse_collapse_group_component__WEBPACK_IMPORTED_MODULE_1__.ItCollapseGroupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS1uZXN0ZWQtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4038:
/*!*****************************************************!*\
  !*** ./src/app/collapse/collapse-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseRoutingModule": () => (/* binding */ CollapseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _collapse_index_collapse_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse-index/collapse-index.component */ 9288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _collapse_index_collapse_index_component__WEBPACK_IMPORTED_MODULE_0__.CollapseIndexComponent }
];
class CollapseRoutingModule {
}
CollapseRoutingModule.ɵfac = function CollapseRoutingModule_Factory(t) { return new (t || CollapseRoutingModule)(); };
CollapseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CollapseRoutingModule });
CollapseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CollapseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1176:
/*!*********************************************!*\
  !*** ./src/app/collapse/collapse.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseModule": () => (/* binding */ CollapseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _collapse_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse-routing.module */ 4038);
/* harmony import */ var _collapse_example_collapse_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse-example/collapse-example.component */ 6325);
/* harmony import */ var _collapse_examples_collapse_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse-examples/collapse-examples.component */ 5098);
/* harmony import */ var _collapse_index_collapse_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse-index/collapse-index.component */ 9288);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _collapse_group_example_collapse_group_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collapse-group-example/collapse-group-example.component */ 2482);
/* harmony import */ var _collapse_nested_example_collapse_nested_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapse-nested-example/collapse-nested-example.component */ 8970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class CollapseModule {
}
CollapseModule.ɵfac = function CollapseModule_Factory(t) { return new (t || CollapseModule)(); };
CollapseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CollapseModule });
CollapseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _collapse_routing_module__WEBPACK_IMPORTED_MODULE_0__.CollapseRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CollapseModule, { declarations: [_collapse_example_collapse_example_component__WEBPACK_IMPORTED_MODULE_1__.CollapseExampleComponent, _collapse_examples_collapse_examples_component__WEBPACK_IMPORTED_MODULE_2__.CollapseExamplesComponent, _collapse_index_collapse_index_component__WEBPACK_IMPORTED_MODULE_3__.CollapseIndexComponent,
        _collapse_group_example_collapse_group_example_component__WEBPACK_IMPORTED_MODULE_6__.CollapseGroupExampleComponent, _collapse_nested_example_collapse_nested_example_component__WEBPACK_IMPORTED_MODULE_7__.CollapseNestedExampleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _collapse_routing_module__WEBPACK_IMPORTED_MODULE_0__.CollapseRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_collapse_collapse_module_ts.js.map