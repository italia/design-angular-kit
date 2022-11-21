"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_breadcrumb_breadcrumb_module_ts"],{

/***/ 4129:
/*!*******************************************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb-example/breadcrumb-example.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbExampleComponent": () => (/* binding */ BreadcrumbExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);
/* harmony import */ var _projects_design_angular_kit_src_lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/breadcrumb/breadcrumb.component */ 6089);
/* harmony import */ var _projects_design_angular_kit_src_lib_breadcrumb_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/breadcrumb/breadcrumb-item.component */ 3220);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function BreadcrumbExampleComponent_it_breadcrumb_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "it-breadcrumb-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("link", item_r1.link)("icon", item_r1.icon)("iconColor", ctx_r0.isDark ? "white" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
} }
class BreadcrumbExampleComponent {
    constructor() {
        this._icon = 'it-star-outline';
        this.separator = '/';
        this.isDark = false;
        this.items = [
            { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon },
            { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon },
            { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon },
        ];
        this.i = 4;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.items.forEach(item => item.icon = this._icon);
    }
    insert() {
        this.items.push({ link: `https://www.google.com`, label: `Crumb ${this.i}`, icon: this.icon });
        this.i++;
    }
    remove() {
        if (this.items.length) {
            this.items.pop();
            this.i--;
        }
    }
    change() {
        this.separator = this.separator === '/' ? '>' : '/';
        this.items.forEach(item => {
            item.icon = item.icon === 'it-star-outline' ? 'it-lock' : 'it-star-outline';
        });
    }
    toggle() {
        this.isDark = !this.isDark;
    }
}
BreadcrumbExampleComponent.ɵfac = function BreadcrumbExampleComponent_Factory(t) { return new (t || BreadcrumbExampleComponent)(); };
BreadcrumbExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BreadcrumbExampleComponent, selectors: [["it-breadcrumb-example"]], decls: 31, vars: 9, consts: [[1, "bd-example"], [3, "dark", "customClass", "separator"], ["customClass", "me-1", 3, "link", "icon", "iconColor", 4, "ngFor", "ngForOf"], [1, "row"], [1, "form-check", "col-6"], ["label", "Sfondo scuro", "id", "dark-checkbox", 3, "ngModel", "ngModelChange"], [1, "row", "mt-4"], [1, "col-6"], ["type", "button", "id", "add-button", 1, "btn", "btn-primary", "btn-lg", "btn-block", "mb-3", 3, "click"], ["type", "button", "id", "remove-button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled", "click"], [1, "form-check", "col-3"], [3, "ngModel", "ngModelChange"], ["id", "radio-sl", "name", "sl", "value", "/", "label", "/"], ["id", "radio-gt", "name", "gt", "value", ">", "label", ">"], ["id", "radio-tl", "name", "tl", "value", "~", "label", "~"], ["id", "radio-none", "name", "none", "label", "Nessuna", 3, "value"], ["id", "radio-star", "name", "it-star-outline", "value", "it-star-outline", "label", "it-star-outline"], ["id", "radio-link", "name", "it-link", "value", "it-link", "label", "it-link"], ["customClass", "me-1", 3, "link", "icon", "iconColor"]], template: function BreadcrumbExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Esempio Breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0)(3, "it-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BreadcrumbExampleComponent_it_breadcrumb_item_4_Template, 2, 4, "it-breadcrumb-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Azioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "it-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BreadcrumbExampleComponent_Template_it_checkbox_ngModelChange_9_listener($event) { return ctx.isDark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BreadcrumbExampleComponent_Template_button_click_12_listener() { return ctx.insert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Aggiungi breadcrumb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7)(15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BreadcrumbExampleComponent_Template_button_click_15_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Rimuovi breadcrumb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Separatore");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "it-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BreadcrumbExampleComponent_Template_it_radio_group_ngModelChange_20_listener($event) { return ctx.separator = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "it-radio-button", 12)(22, "it-radio-button", 13)(23, "it-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 10)(25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Icona");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "it-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BreadcrumbExampleComponent_Template_it_radio_group_ngModelChange_27_listener($event) { return ctx.icon = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "it-radio-button", 15)(29, "it-radio-button", 16)(30, "it-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dark", ctx.isDark)("customClass", ctx.isDark ? "px-3" : null)("separator", ctx.separator);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.separator);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", undefined);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioGroupDirective, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent, _projects_design_angular_kit_src_lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _projects_design_angular_kit_src_lib_breadcrumb_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItemComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3808:
/*!*********************************************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb-examples/breadcrumb-examples.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbExamplesComponent": () => (/* binding */ BreadcrumbExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _breadcrumb_example_breadcrumb_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb-example/breadcrumb-example.component */ 4129);



class BreadcrumbExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbExamplesComponent.ɵfac = function BreadcrumbExamplesComponent_Factory(t) { return new (t || BreadcrumbExamplesComponent)(); };
BreadcrumbExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbExamplesComponent, selectors: [["it-breadcrumb-examples"]], decls: 2, vars: 0, consts: [["html", "\n  \n  <h3>Esempio Breadcrumb</h3>\n<div class=\"bd-example\">\n  <it-breadcrumb [dark]=\"isDark\" [customClass]=\"isDark ? 'px-3' : null\" [separator]=\"separator\">\n    <it-breadcrumb-item *ngFor=\"let item of items\"\n      customClass = \"me-1\"\n      [link]=\"item.link\" [icon]=\"item.icon\" [iconColor]=\"isDark ? 'white' : 'primary'\">\n      /{/{item.label/}/}\n    </it-breadcrumb-item>\n  </it-breadcrumb>\n\n  <div class=\"row\">\n    <div class=\"form-check col-6\">\n      <h4>Azioni</h4>\n      <it-checkbox [(ngModel)]=\"isDark\" label=\"Sfondo scuro\" id=\"dark-checkbox\"></it-checkbox>\n      <div class=\"row mt-4\">\n        <div class=\"col-6\">\n          <button type=\"button\" id=\"add-button\" class=\"btn btn-primary btn-lg btn-block mb-3\" \n          (click)=\"insert()\">\n            Aggiungi breadcrumb\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button type=\"button\" id=\"remove-button\" class=\"btn btn-primary btn-lg btn-block\" \n          (click)=\"remove()\" [disabled] = \"!items.length\">\n            Rimuovi breadcrumb\n          </button>\n        </div>\n      </div>\n     \n\n     \n    </div>\n    <div class=\"form-check col-3\">\n      <h5>Separatore</h5>\n      <it-radio-group [(ngModel)]=\"separator\">\n        <it-radio-button id=\"radio-sl\" name=\"sl\" value=\"/\" label=\"/\"></it-radio-button>\n        <it-radio-button id=\"radio-gt\" name=\"gt\" value=\">\" label=\">\"></it-radio-button>\n        <it-radio-button id=\"radio-tl\" name=\"tl\" value=\"~\" label=\"~\"></it-radio-button>\n      </it-radio-group>\n    </div>\n    <div class=\"form-check col-3\">\n      <h5>Icona</h5>\n      <it-radio-group [(ngModel)]=\"icon\">\n        <it-radio-button id=\"radio-none\" name=\"none\" [value]=\"undefined\" label=\"Nessuna\"></it-radio-button>\n        <it-radio-button id=\"radio-star\" name=\"it-star-outline\" value=\"it-star-outline\" label=\"it-star-outline\"></it-radio-button>\n        <it-radio-button id=\"radio-link\" name=\"it-link\" value=\"it-link\" label=\"it-link\"></it-radio-button>\n      </it-radio-group>\n    </div>\n  </div>\n</div>\n\n", "typescript", "\n  \n  import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'it-breadcrumb-example',\n  templateUrl: './breadcrumb-example.component.html',\n  styleUrls: ['./breadcrumb-example.component.scss']\n})\nexport class BreadcrumbExampleComponent {\n  get icon() {\n    return this._icon;\n  }\n  set icon(value: string) {\n    this._icon = value;\n    this.items.forEach(item => item.icon = this._icon);\n  }\n  private _icon = 'it-star-outline';\n\n\n  separator = '/';\n  isDark = false;\n  items = [\n    { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon },\n    { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon },\n    { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon },\n  ];\n\n  i = 4;\n\n  insert() {\n    this.items.push({ link: `https://www.google.com`, label: `Crumb ${this.i}`, icon: this.icon });\n    this.i++;\n  }\n\n  remove() {\n    if(this.items.length) {\n      this.items.pop();\n      this.i--;\n    }\n  }\n\n  change() {\n    this.separator = this.separator === '/' ? '>' : '/';\n    this.items.forEach(item => {\n      item.icon = item.icon === 'it-star-outline' ? 'it-lock' : 'it-star-outline';\n    });\n  }\n\n  toggle() {\n    this.isDark = !this.isDark;\n  }\n\n}\n\n\n"]], template: function BreadcrumbExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "it-breadcrumb-example")(1, "it-source-display", 0);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _breadcrumb_example_breadcrumb_example_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6291:
/*!***************************************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb-index/breadcrumb-index.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbIndexComponent": () => (/* binding */ BreadcrumbIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _breadcrumb_examples_breadcrumb_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumb-examples/breadcrumb-examples.component */ 3808);






class BreadcrumbIndexComponent {
    constructor() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'BreadcrumbComponent');
        this.subcomponent = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'BreadcrumbItemComponent');
    }
}
BreadcrumbIndexComponent.ɵfac = function BreadcrumbIndexComponent_Factory(t) { return new (t || BreadcrumbIndexComponent)(); };
BreadcrumbIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BreadcrumbIndexComponent, selectors: [["it-breadcrumb-index"]], decls: 16, vars: 3, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function BreadcrumbIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Il componente Breadcrumb utilizzabile per la navigazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Breadcrumb Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "it-breadcrumb-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.component.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.component);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.subcomponent);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _breadcrumb_examples_breadcrumb_examples_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8202:
/*!*********************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbRoutingModule": () => (/* binding */ BreadcrumbRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _breadcrumb_index_breadcrumb_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb-index/breadcrumb-index.component */ 6291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _breadcrumb_index_breadcrumb_index_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbIndexComponent }
];
class BreadcrumbRoutingModule {
}
BreadcrumbRoutingModule.ɵfac = function BreadcrumbRoutingModule_Factory(t) { return new (t || BreadcrumbRoutingModule)(); };
BreadcrumbRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BreadcrumbRoutingModule });
BreadcrumbRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BreadcrumbRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7248:
/*!*************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": () => (/* binding */ BreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb-routing.module */ 8202);
/* harmony import */ var _breadcrumb_example_breadcrumb_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb-example/breadcrumb-example.component */ 4129);
/* harmony import */ var _breadcrumb_examples_breadcrumb_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb-examples/breadcrumb-examples.component */ 3808);
/* harmony import */ var _breadcrumb_index_breadcrumb_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb-index/breadcrumb-index.component */ 6291);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class BreadcrumbModule {
}
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); };
BreadcrumbModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__.DesignAngularKitModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [_breadcrumb_example_breadcrumb_example_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbExampleComponent, _breadcrumb_examples_breadcrumb_examples_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbExamplesComponent, _breadcrumb_index_breadcrumb_index_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbIndexComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__.DesignAngularKitModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_breadcrumb_breadcrumb_module_ts.js.map