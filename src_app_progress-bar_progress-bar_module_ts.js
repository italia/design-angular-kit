"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_progress-bar_progress-bar_module_ts"],{

/***/ 3060:
/*!***************************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-bg/progress-bar-bg.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarBgComponent": () => (/* binding */ ProgressBarBgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/progress-bar/progress-bar.component */ 7043);


class ProgressBarBgComponent {
    constructor() {
        this.valueExInfo = 25;
        this.minExInfo = 0;
        this.maxExInfo = 100;
        this.bgColorInfo = 'info';
        this.valueExSuccess = 50;
        this.minExSuccess = 0;
        this.maxExSuccess = 100;
        this.bgColorSuccess = 'success';
        this.valueExWarning = 75;
        this.minExWarning = 0;
        this.maxExWarning = 100;
        this.bgColorWarning = 'warning';
        this.valueExDanger = 100;
        this.minExDanger = 0;
        this.maxExDanger = 100;
        this.bgColorDanger = 'danger';
    }
    ngOnInit() {
    }
}
ProgressBarBgComponent.ɵfac = function ProgressBarBgComponent_Factory(t) { return new (t || ProgressBarBgComponent)(); };
ProgressBarBgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressBarBgComponent, selectors: [["it-progress-bar-bg"]], decls: 11, vars: 16, consts: [[1, "bd-example"], [1, "example-section"], [3, "value", "min", "max", "color"]], template: function ProgressBarBgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Esempio con sfondi supportati");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "it-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "it-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "it-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "it-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueExInfo)("min", ctx.minExInfo)("max", ctx.maxExInfo)("color", ctx.bgColorInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueExSuccess)("min", ctx.minExSuccess)("max", ctx.maxExSuccess)("color", ctx.bgColorSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueExWarning)("min", ctx.minExWarning)("max", ctx.maxExWarning)("color", ctx.bgColorWarning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueExDanger)("min", ctx.minExDanger)("max", ctx.maxExDanger)("color", ctx.bgColorDanger);
    } }, dependencies: [_projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXItYmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5039:
/*!***********************************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-button/progress-bar-button.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarButtonComponent": () => (/* binding */ ProgressBarButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/progress-bar/progress-bar.component */ 7043);
/* harmony import */ var _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/button/button.directive */ 9103);
/* harmony import */ var _projects_design_angular_kit_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/icon/icon.component */ 9132);




class ProgressBarButtonComponent {
}
ProgressBarButtonComponent.ɵfac = function ProgressBarButtonComponent_Factory(t) { return new (t || ProgressBarButtonComponent)(); };
ProgressBarButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProgressBarButtonComponent, selectors: [["it-progress-bar-button"]], decls: 20, vars: 1, consts: [[1, "bd-example"], [1, "row"], [1, "col-12", "col-sm-6"], ["itButton", "", "disabled", ""], ["icon", "it-github", "color", "white"], ["indeterminate", ""], ["itButton", "secondary", "disabled", ""], [3, "value"]], template: function ProgressBarButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pulsante con Progress Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "p")(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Pulsante primario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Label pulsante ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "it-icon", 4)(11, "it-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2)(13, "p")(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Pulsante secondario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Completo al 70% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "it-icon", 4)(19, "it-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 70);
    } }, dependencies: [_projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent, _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_1__.ItButtonDirective, _projects_design_angular_kit_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6357:
/*!*************************************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-example/progress-bar-example.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarExampleComponent": () => (/* binding */ ProgressBarExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/progress-bar/progress-bar.component */ 7043);


class ProgressBarExampleComponent {
    constructor() {
        this.valueEx = 50;
    }
}
ProgressBarExampleComponent.ɵfac = function ProgressBarExampleComponent_Factory(t) { return new (t || ProgressBarExampleComponent)(); };
ProgressBarExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressBarExampleComponent, selectors: [["it-progress-bar-example"]], decls: 5, vars: 1, consts: [[1, "bd-example"], [1, "example-section"], ["min", "0", "max", "100", 3, "value"]], template: function ProgressBarExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Esempio barra di avanzamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "it-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueEx);
    } }, dependencies: [_projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], styles: [".example-section[_ngcontent-%COMP%] {\n  align-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InByb2dyZXNzLWJhci1leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gICJdfQ== */"] });


/***/ }),

/***/ 4766:
/*!***************************************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-examples/progress-bar-examples.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarExamplesComponent": () => (/* binding */ ProgressBarExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _progress_bar_example_progress_bar_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../progress-bar-example/progress-bar-example.component */ 6357);
/* harmony import */ var _progress_bar_label_progress_bar_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../progress-bar-label/progress-bar-label.component */ 5081);
/* harmony import */ var _progress_bar_indeterminate_progress_bar_indeterminate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress-bar-indeterminate/progress-bar-indeterminate.component */ 1428);
/* harmony import */ var _progress_bar_bg_progress_bar_bg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../progress-bar-bg/progress-bar-bg.component */ 3060);
/* harmony import */ var _progress_bar_button_progress_bar_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress-bar-button/progress-bar-button.component */ 5039);







class ProgressBarExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressBarExamplesComponent.ɵfac = function ProgressBarExamplesComponent_Factory(t) { return new (t || ProgressBarExamplesComponent)(); };
ProgressBarExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProgressBarExamplesComponent, selectors: [["it-progress-bar-examples"]], decls: 10, vars: 0, consts: [["html", "\n  \n  <h3>Progresso indeterminato</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <it-progress-bar indeterminate></it-progress-bar>\n  </p>\n</div>\n\n\n\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-progress-bar-indeterminate',\n  templateUrl: './progress-bar-indeterminate.component.html',\n  styleUrls: ['./progress-bar-indeterminate.component.scss']\n})\nexport class ProgressBarIndeterminateComponent implements OnInit {\n\n  valueEx = 50;\n  minEx = 0;\n  maxEx = 100;\n  heightEx = 40;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n\n\n"], ["html", "\n  \n  \n<h3>Pulsante con Progress Bar</h3>\n\n<div class=\"bd-example\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6\">\n      <p><strong>Pulsante primario</strong></p>\n      <button itButton disabled>\n        Label pulsante \n        <it-icon icon = \"it-github\" color = \"white\"></it-icon>\n        <it-progress-bar indeterminate></it-progress-bar>\n      </button>\n    </div>\n    <div class=\"col-12 col-sm-6\">\n      <p><strong>Pulsante secondario</strong></p>\n      <button itButton=\"secondary\" disabled>\n        Completo al 70%\n        <it-icon icon = \"it-github\" color = \"white\"></it-icon>\n        <it-progress-bar [value] = \"70\"></it-progress-bar>\n      </button>\n    </div>\n  </div>\n</div>\n\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-progress-bar-button',\n  templateUrl: './progress-bar-button.component.html',\n  styleUrls: ['./progress-bar-button.component.scss']\n})\nexport class ProgressBarButtonComponent {}\n\n\n"], ["html", "\n  \n  <h3>Esempio barra di avanzamento</h3>\n\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <it-progress-bar [value]=\"valueEx\" min=\"0\" max=\"100\"></it-progress-bar>\n  </p>\n</div>\n\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-progress-bar-example',\n  templateUrl: './progress-bar-example.component.html',\n  styleUrls: ['./progress-bar-example.component.scss']\n})\nexport class ProgressBarExampleComponent {\n\n  valueEx = 50;\n\n}\n\n\n"], ["html", "\n  \n  <h3>Esempio con etichette</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <it-progress-bar [value]=\"valueEx\" [min]=\"minEx\" [max]=\"maxEx\" [label]=\"labelEx\"></it-progress-bar>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-progress-bar-label',\n  templateUrl: './progress-bar-label.component.html',\n  styleUrls: ['./progress-bar-label.component.scss']\n})\nexport class ProgressBarLabelComponent implements OnInit {\n\n  valueEx = 25;\n  minEx = 0;\n  maxEx = 100;\n  labelEx = '25%';\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n\n\n"], ["html", "\n  \n  <h3>Esempio con sfondi supportati</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <it-progress-bar [value]=\"valueExInfo\" [min]=\"minExInfo\" [max]=\"maxExInfo\" [color]=\"bgColorInfo\"></it-progress-bar>\n  </p>\n\n  <p class=\"example-section\">\n    <it-progress-bar [value]=\"valueExSuccess\" [min]=\"minExSuccess\" [max]=\"maxExSuccess\" [color]=\"bgColorSuccess\"></it-progress-bar>\n  </p>\n\n  <p class=\"example-section\">\n    <it-progress-bar [value]=\"valueExWarning\" [min]=\"minExWarning\" [max]=\"maxExWarning\" [color]=\"bgColorWarning\"></it-progress-bar>\n  </p>\n\n  <p class=\"example-section\">\n    <it-progress-bar [value]=\"valueExDanger\" [min]=\"minExDanger\" [max]=\"maxExDanger\" [color]=\"bgColorDanger\"></it-progress-bar>\n  </p>\n</div>\n\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-progress-bar-bg',\n  templateUrl: './progress-bar-bg.component.html',\n  styleUrls: ['./progress-bar-bg.component.scss']\n})\nexport class ProgressBarBgComponent implements OnInit {\n\n  valueExInfo = 25;\n  minExInfo = 0;\n  maxExInfo = 100;\n  bgColorInfo = 'info';\n\n  valueExSuccess = 50;\n  minExSuccess = 0;\n  maxExSuccess = 100;\n  bgColorSuccess = 'success';\n\n  valueExWarning = 75;\n  minExWarning = 0;\n  maxExWarning = 100;\n  bgColorWarning = 'warning';\n\n  valueExDanger = 100;\n  minExDanger = 0;\n  maxExDanger = 100;\n  bgColorDanger = 'danger';\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n\n\n"]], template: function ProgressBarExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "it-progress-bar-indeterminate")(1, "it-source-display", 0)(2, "it-progress-bar-button")(3, "it-source-display", 1)(4, "it-progress-bar-example")(5, "it-source-display", 2)(6, "it-progress-bar-label")(7, "it-source-display", 3)(8, "it-progress-bar-bg")(9, "it-source-display", 4);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _progress_bar_example_progress_bar_example_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarExampleComponent, _progress_bar_label_progress_bar_label_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarLabelComponent, _progress_bar_indeterminate_progress_bar_indeterminate_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarIndeterminateComponent, _progress_bar_bg_progress_bar_bg_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarBgComponent, _progress_bar_button_progress_bar_button_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXItZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1428:
/*!*************************************************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-indeterminate/progress-bar-indeterminate.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarIndeterminateComponent": () => (/* binding */ ProgressBarIndeterminateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/progress-bar/progress-bar.component */ 7043);


class ProgressBarIndeterminateComponent {
    constructor() {
        this.valueEx = 50;
        this.minEx = 0;
        this.maxEx = 100;
        this.heightEx = 40;
    }
    ngOnInit() {
    }
}
ProgressBarIndeterminateComponent.ɵfac = function ProgressBarIndeterminateComponent_Factory(t) { return new (t || ProgressBarIndeterminateComponent)(); };
ProgressBarIndeterminateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressBarIndeterminateComponent, selectors: [["it-progress-bar-indeterminate"]], decls: 5, vars: 0, consts: [[1, "bd-example"], [1, "example-section"], ["indeterminate", ""]], template: function ProgressBarIndeterminateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Progresso indeterminato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "it-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4532:
/*!*********************************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-index/progress-bar-index.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarIndexComponent": () => (/* binding */ ProgressBarIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _progress_bar_examples_progress_bar_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../progress-bar-examples/progress-bar-examples.component */ 4766);






class ProgressBarIndexComponent {
    constructor() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'ProgressBarComponent');
    }
    ngOnInit() {
    }
}
ProgressBarIndexComponent.ɵfac = function ProgressBarIndexComponent_Factory(t) { return new (t || ProgressBarIndexComponent)(); };
ProgressBarIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProgressBarIndexComponent, selectors: [["it-progress-bar-index"]], decls: 11, vars: 2, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function ProgressBarIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Barra di avanzamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Il componente Barra di avanzamento utilizzabile per mostrare dei progressi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-progress-bar-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.component.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.component);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _progress_bar_examples_progress_bar_examples_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXItaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5081:
/*!*********************************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-label/progress-bar-label.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarLabelComponent": () => (/* binding */ ProgressBarLabelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/progress-bar/progress-bar.component */ 7043);


class ProgressBarLabelComponent {
    constructor() {
        this.valueEx = 25;
        this.minEx = 0;
        this.maxEx = 100;
        this.labelEx = '25%';
    }
    ngOnInit() {
    }
}
ProgressBarLabelComponent.ɵfac = function ProgressBarLabelComponent_Factory(t) { return new (t || ProgressBarLabelComponent)(); };
ProgressBarLabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressBarLabelComponent, selectors: [["it-progress-bar-label"]], decls: 5, vars: 4, consts: [[1, "bd-example"], [1, "example-section"], [3, "value", "min", "max", "label"]], template: function ProgressBarLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Esempio con etichette");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "it-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueEx)("min", ctx.minEx)("max", ctx.maxEx)("label", ctx.labelEx);
    } }, dependencies: [_projects_design_angular_kit_src_lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXItbGFiZWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 466:
/*!*************************************************************!*\
  !*** ./src/app/progress-bar/progress-bar-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarRoutingModule": () => (/* binding */ ProgressBarRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _progress_bar_index_progress_bar_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar-index/progress-bar-index.component */ 4532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _progress_bar_index_progress_bar_index_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarIndexComponent }
];
class ProgressBarRoutingModule {
}
ProgressBarRoutingModule.ɵfac = function ProgressBarRoutingModule_Factory(t) { return new (t || ProgressBarRoutingModule)(); };
ProgressBarRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProgressBarRoutingModule });
ProgressBarRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressBarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2279:
/*!*****************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarModule": () => (/* binding */ ProgressBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-bar-routing.module */ 466);
/* harmony import */ var _progress_bar_example_progress_bar_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar-example/progress-bar-example.component */ 6357);
/* harmony import */ var _progress_bar_examples_progress_bar_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-bar-examples/progress-bar-examples.component */ 4766);
/* harmony import */ var _progress_bar_index_progress_bar_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-bar-index/progress-bar-index.component */ 4532);
/* harmony import */ var _progress_bar_label_progress_bar_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar-label/progress-bar-label.component */ 5081);
/* harmony import */ var _progress_bar_indeterminate_progress_bar_indeterminate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress-bar-indeterminate/progress-bar-indeterminate.component */ 1428);
/* harmony import */ var _progress_bar_bg_progress_bar_bg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progress-bar-bg/progress-bar-bg.component */ 3060);
/* harmony import */ var _progress_bar_button_progress_bar_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-bar-button/progress-bar-button.component */ 5039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);












class ProgressBarModule {
}
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); };
ProgressBarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ProgressBarModule });
ProgressBarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProgressBarRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ProgressBarModule, { declarations: [_progress_bar_example_progress_bar_example_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarExampleComponent, _progress_bar_examples_progress_bar_examples_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarExamplesComponent, _progress_bar_index_progress_bar_index_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarIndexComponent,
        _progress_bar_label_progress_bar_label_component__WEBPACK_IMPORTED_MODULE_6__.ProgressBarLabelComponent, _progress_bar_indeterminate_progress_bar_indeterminate_component__WEBPACK_IMPORTED_MODULE_7__.ProgressBarIndeterminateComponent, _progress_bar_bg_progress_bar_bg_component__WEBPACK_IMPORTED_MODULE_8__.ProgressBarBgComponent,
        _progress_bar_button_progress_bar_button_component__WEBPACK_IMPORTED_MODULE_9__.ProgressBarButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProgressBarRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_progress-bar_progress-bar_module_ts.js.map