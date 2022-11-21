"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_tooltip_tooltip_module_ts"],{

/***/ 9504:
/*!************************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-config-example/tooltip-config-example.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipConfigExampleComponent": () => (/* binding */ TooltipConfigExampleComponent)
/* harmony export */ });
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tooltip/tooltip.directive */ 3622);




class TooltipConfigExampleComponent {
    constructor(tooltipConfig) {
        tooltipConfig.container = 'body';
        tooltipConfig.placement = 'left';
        tooltipConfig.triggers = 'click';
    }
}
TooltipConfigExampleComponent.ɵfac = function TooltipConfigExampleComponent_Factory(t) { return new (t || TooltipConfigExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ItTooltipConfig)); };
TooltipConfigExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TooltipConfigExampleComponent, selectors: [["it-tooltip-config-example"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ItTooltipConfig])], decls: 6, vars: 0, consts: [[1, "bd-example"], [1, "example-section"], ["type", "button", "itTooltip", "Tooltip di esempio", 1, "btn", "btn-lg", "btn-danger"]], template: function TooltipConfigExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Configurazione globale dei tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Clicca per attivare/disattivare il tooltip preconfigurato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.ItTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLWNvbmZpZy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3784:
/*!****************************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-disabled-example/tooltip-disabled-example.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipDisabledExampleComponent": () => (/* binding */ TooltipDisabledExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tooltip/tooltip.directive */ 3622);


class TooltipDisabledExampleComponent {
}
TooltipDisabledExampleComponent.ɵfac = function TooltipDisabledExampleComponent_Factory(t) { return new (t || TooltipDisabledExampleComponent)(); };
TooltipDisabledExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TooltipDisabledExampleComponent, selectors: [["it-tooltip-disabled-example"]], decls: 11, vars: 1, consts: [[1, "bd-example"], [1, "example-section"], ["itTooltip", "Popover disabilitato", 1, "d-inline-block"], ["type", "button", "disabled", "", 1, "btn", "btn-primary"], ["itTooltip", "Popover disabilitato", 1, "d-inline-block", 3, "disableTooltip"], ["type", "button", 1, "btn", "btn-primary"]], template: function TooltipDisabledExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Elementi disabilitati");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "span", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Elemento disabilitato con popover abilitato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 1)(8, "span", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Elemento attivo con popover disabilitato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableTooltip", true);
    } }, dependencies: [_projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__.ItTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLWRpc2FibGVkLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6195:
/*!************************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-events-example/tooltip-events-example.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipEventsExampleComponent": () => (/* binding */ TooltipEventsExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tooltip/tooltip.directive */ 3622);



function TooltipEventsExampleComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Ultima emissione dell'evento shown = ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r1.shownTime, "long"), " ");
} }
function TooltipEventsExampleComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Ultima emissione dell'evento hidden = ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r2.hiddenTime, "long"), " ");
} }
class TooltipEventsExampleComponent {
    constructor() {
        this.showTime = '';
        this.shownTime = '';
        this.insertedTime = '';
        this.hideTime = '';
        this.hiddenTime = '';
    }
    logShow() {
        this.showTime = (new Date()).toISOString();
    }
    logShown() {
        this.shownTime = (new Date()).toISOString();
    }
    logInserted() {
        this.insertedTime = (new Date()).toISOString();
    }
    logHide() {
        this.hideTime = (new Date()).toISOString();
    }
    logHidden() {
        this.hiddenTime = (new Date()).toISOString();
    }
}
TooltipEventsExampleComponent.ɵfac = function TooltipEventsExampleComponent_Factory(t) { return new (t || TooltipEventsExampleComponent)(); };
TooltipEventsExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TooltipEventsExampleComponent, selectors: [["it-tooltip-events-example"]], decls: 12, vars: 3, consts: [[1, "bd-example"], [1, "example-section"], ["type", "button", "itTooltip", "Tooltip di esempio", "triggers", "click", "title", "Titolo del Tooltip", "id", "tooltip-example-disposable", 1, "btn", "btn-lg", "btn-danger", "me-4", 3, "autoClose", "shown", "hidden"], ["destructibleTooltip", "itTooltip"], ["type", "button", "id", "tooltip-dispose-button", 1, "btn", "btn-lg", "btn-primary", 3, "click"], [1, "tooltip-events", "mt-4"], [4, "ngIf"]], template: function TooltipEventsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Eventi tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("shown", function TooltipEventsExampleComponent_Template_button_shown_4_listener() { return ctx.logShown(); })("hidden", function TooltipEventsExampleComponent_Template_button_hidden_4_listener() { return ctx.logHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Clicca per il tooltip distruttibile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TooltipEventsExampleComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Distruggi il tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TooltipEventsExampleComponent_div_10_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TooltipEventsExampleComponent_div_11_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoClose", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shownTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hiddenTime);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__.ItTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLWV2ZW50cy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5271:
/*!**********************************************************************!*\
  !*** ./src/app/tooltip/tooltip-example/tooltip-example.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipExampleComponent": () => (/* binding */ TooltipExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tooltip/tooltip.directive */ 3622);


class TooltipExampleComponent {
}
TooltipExampleComponent.ɵfac = function TooltipExampleComponent_Factory(t) { return new (t || TooltipExampleComponent)(); };
TooltipExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TooltipExampleComponent, selectors: [["it-tooltip-example"]], decls: 6, vars: 0, consts: [[1, "bd-example"], [1, "example-section"], ["type", "button", "itTooltip", "Tooltip di esempio", "triggers", "click", "id", "tooltip-example-0", 1, "btn", "btn-lg", "btn-danger"]], template: function TooltipExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Esempio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Clicca per attivare/disattivare il tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__.ItTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8396:
/*!************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-examples/tooltip-examples.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipExamplesComponent": () => (/* binding */ TooltipExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _tooltip_example_tooltip_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tooltip-example/tooltip-example.component */ 5271);
/* harmony import */ var _tooltip_placements_example_tooltip_placements_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip-placements-example/tooltip-placements-example.component */ 858);
/* harmony import */ var _tooltip_events_example_tooltip_events_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip-events-example/tooltip-events-example.component */ 6195);
/* harmony import */ var _tooltip_disabled_example_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip-disabled-example/tooltip-disabled-example.component */ 3784);
/* harmony import */ var _tooltip_config_example_tooltip_config_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tooltip-config-example/tooltip-config-example.component */ 9504);







class TooltipExamplesComponent {
}
TooltipExamplesComponent.ɵfac = function TooltipExamplesComponent_Factory(t) { return new (t || TooltipExamplesComponent)(); };
TooltipExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TooltipExamplesComponent, selectors: [["it-tooltip-examples"]], decls: 10, vars: 0, consts: [["html", "\n  \n  <h3>Esempio</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger\" itTooltip=\"Tooltip di esempio\" triggers=\"click\" id=\"tooltip-example-0\">\n      Clicca per attivare/disattivare il tooltip\n    </button>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tooltip-example',\n  templateUrl: './tooltip-example.component.html',\n  styleUrls: ['./tooltip-example.component.scss']\n})\nexport class TooltipExampleComponent {\n\n}\n\n\n"], ["html", "\n  \n  <h3>Le quattro direzioni</h3>\n<div class=\"bd-example\">\n  <p  class=\"example-section mb-5\">\n    <button type=\"button\"  id=\"tooltip-example-1\" class=\"btn btn-outline-secondary me-2\" \n      itTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      placement=\"top\">\n      Tooltip in alto\n    </button>\n    \n    <button type=\"button\" class=\"btn btn-outline-secondary me-2\" id=\"tooltip-example-2\"\n      itTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" \n      placement=\"right\">\n      Tooltip a destra\n    </button>\n\n    <button type=\"button\" class=\"btn btn-outline-secondary me-2\" id=\"tooltip-example-3\"\n      itTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n      placement=\"left\">\n      Tooltip a sinistra\n    </button>\n    \n    <button type=\"button\" class=\"btn btn-outline-secondary\" id=\"tooltip-example-4\"\n      itTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" \n      placement=\"bottom\" >\n      Tooltip in basso\n    </button>\n  </p>\n\n  <p class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger me-4\" \n      itTooltip=\"Tooltip di esempio\" \n      it-title=\"Titolo del Tooltip\" \n      [placement]=\"currentPlacement\"\n      triggers=\"click\" \n      id=\"tooltip-example-5\">\n      Clicca per il tooltip ricollocabile\n    </button>\n\n    <button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"changeCurrentPlacement()\" id=\"tooltip-placement-button\">\n      Cambia il collocamento della tooltip\n    </button>\n  </p>\n</div>\n   \n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\nimport { Placement } from '@popperjs/core';\n\n@Component({\n  selector: 'it-tooltip-placements-example',\n  templateUrl: './tooltip-placements-example.component.html',\n  styleUrls: ['./tooltip-placements-example.component.scss']\n})\nexport class TooltipPlacementsExampleComponent {\n\n  currentPlacement: Placement = 'right';\n\n  changeCurrentPlacement() {\n    switch (this.currentPlacement) {\n      case 'right':\n        this.currentPlacement = 'top';\n        break;\n      case 'top':\n        this.currentPlacement = 'left';\n        break;\n      case 'left':\n        this.currentPlacement = 'bottom';\n        break;\n      case 'bottom':\n        this.currentPlacement = 'right';\n        break;\n    }\n  }\n\n}\n\n\n"], ["html", "\n  \n  \n<h3>Elementi disabilitati</h3>\n<div class=\"bd-example\">\n  <p  class=\"example-section\">\n    <span class=\"d-inline-block\" itTooltip=\"Popover disabilitato\">\n      <button class=\"btn btn-primary\" type=\"button\" disabled>\n        Elemento disabilitato con popover abilitato\n      </button>\n    </span>\n  </p>\n\n  <p  class=\"example-section\">\n    <span class=\"d-inline-block\" itTooltip=\"Popover disabilitato\" [disableTooltip] = \"true\">\n      <button class=\"btn btn-primary\" type=\"button\">\n        Elemento attivo con popover disabilitato\n      </button>\n    </span>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tooltip-disabled-example',\n  templateUrl: './tooltip-disabled-example.component.html',\n  styleUrls: ['./tooltip-disabled-example.component.scss']\n})\nexport class TooltipDisabledExampleComponent {\n\n}\n\n\n"], ["html", "\n  \n  \n<h3>Eventi tooltip</h3>\n<div class=\"bd-example\">\n  <p  class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger me-4\" \n      itTooltip=\"Tooltip di esempio\"  \n      triggers=\"click\" \n      title=\"Titolo del Tooltip\" \n      (shown)=\"logShown()\" \n      (hidden)=\"logHidden()\"\n      [autoClose]=\"false\" \n      #destructibleTooltip=\"itTooltip\"\n      id=\"tooltip-example-disposable\">\n      Clicca per il tooltip distruttibile\n    </button>\n  \n    <button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"destructibleTooltip.close()\" id=\"tooltip-dispose-button\">\n      Distruggi il tooltip\n    </button>\n  </p>\n  \n  \n  <div class=\"tooltip-events mt-4\">\n    <div *ngIf = \"shownTime\">\n      Ultima emissione dell'evento shown = /{/{shownTime | date: 'long'/}/}\n    </div>\n    \n    <div *ngIf = \"hiddenTime\">\n      Ultima emissione dell'evento hidden = /{/{hiddenTime | date: 'long'/}/}\n    </div>\n  </div>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tooltip-events-example',\n  templateUrl: './tooltip-events-example.component.html',\n  styleUrls: ['./tooltip-events-example.component.scss']\n})\nexport class TooltipEventsExampleComponent {\n\n  showTime = '';\n  shownTime = '';\n  insertedTime = '';\n  hideTime = '';\n  hiddenTime = '';\n\n  logShow() {\n    this.showTime = (new Date()).toISOString();\n  }\n\n  logShown() {\n    this.shownTime = (new Date()).toISOString();\n  }\n\n  logInserted() {\n    this.insertedTime = (new Date()).toISOString();\n  }\n\n  logHide() {\n    this.hideTime = (new Date()).toISOString();\n  }\n\n  logHidden() {\n    this.hiddenTime = (new Date()).toISOString();\n  }\n\n\n}\n\n\n"], ["html", "\n  \n  <h3>Configurazione globale dei tooltip</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger\" itTooltip=\"Tooltip di esempio\">\n      Clicca per attivare/disattivare il tooltip preconfigurato\n    </button>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\nimport { ItTooltipConfig } from 'projects/design-angular-kit/src/public_api';\n\n@Component({\n  selector: 'it-tooltip-config-example',\n  templateUrl: './tooltip-config-example.component.html',\n  styleUrls: ['./tooltip-config-example.component.scss'],\n  providers: [ItTooltipConfig]\n})\nexport class TooltipConfigExampleComponent {\n\n  constructor(tooltipConfig: ItTooltipConfig) {\n    tooltipConfig.container = 'body';\n    tooltipConfig.placement = 'left';\n    tooltipConfig.triggers = 'click';\n  }\n\n}\n\n\n"]], template: function TooltipExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "it-tooltip-example")(1, "it-source-display", 0)(2, "it-tooltip-placements-example")(3, "it-source-display", 1)(4, "it-tooltip-disabled-example")(5, "it-source-display", 2)(6, "it-tooltip-events-example")(7, "it-source-display", 3)(8, "it-tooltip-config-example")(9, "it-source-display", 4);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _tooltip_example_tooltip_example_component__WEBPACK_IMPORTED_MODULE_1__.TooltipExampleComponent, _tooltip_placements_example_tooltip_placements_example_component__WEBPACK_IMPORTED_MODULE_2__.TooltipPlacementsExampleComponent, _tooltip_events_example_tooltip_events_example_component__WEBPACK_IMPORTED_MODULE_3__.TooltipEventsExampleComponent, _tooltip_disabled_example_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__.TooltipDisabledExampleComponent, _tooltip_config_example_tooltip_config_example_component__WEBPACK_IMPORTED_MODULE_5__.TooltipConfigExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6295:
/*!******************************************************************!*\
  !*** ./src/app/tooltip/tooltip-index/tooltip-index.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipIndexComponent": () => (/* binding */ TooltipIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _tooltip_examples_tooltip_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip-examples/tooltip-examples.component */ 8396);






class TooltipIndexComponent {
    constructor() {
        this.directive = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.directives.find(directive => directive.name === 'ItTooltip');
    }
}
TooltipIndexComponent.ɵfac = function TooltipIndexComponent_Factory(t) { return new (t || TooltipIndexComponent)(); };
TooltipIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TooltipIndexComponent, selectors: [["it-tooltip-index"]], decls: 11, vars: 2, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function TooltipIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "La direttiva tooltip utilizzabile per aggiungere dei tooltip informativi a qualsiasi elemento del tuo sito");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-tooltip-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.directive.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.directive);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _tooltip_examples_tooltip_examples_component__WEBPACK_IMPORTED_MODULE_4__.TooltipExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 858:
/*!********************************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-placements-example/tooltip-placements-example.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipPlacementsExampleComponent": () => (/* binding */ TooltipPlacementsExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tooltip/tooltip.directive */ 3622);


class TooltipPlacementsExampleComponent {
    constructor() {
        this.currentPlacement = 'right';
    }
    changeCurrentPlacement() {
        switch (this.currentPlacement) {
            case 'right':
                this.currentPlacement = 'top';
                break;
            case 'top':
                this.currentPlacement = 'left';
                break;
            case 'left':
                this.currentPlacement = 'bottom';
                break;
            case 'bottom':
                this.currentPlacement = 'right';
                break;
        }
    }
}
TooltipPlacementsExampleComponent.ɵfac = function TooltipPlacementsExampleComponent_Factory(t) { return new (t || TooltipPlacementsExampleComponent)(); };
TooltipPlacementsExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TooltipPlacementsExampleComponent, selectors: [["it-tooltip-placements-example"]], decls: 17, vars: 1, consts: [[1, "bd-example"], [1, "example-section", "mb-5"], ["type", "button", "id", "tooltip-example-1", "itTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "top", 1, "btn", "btn-outline-secondary", "me-2"], ["type", "button", "id", "tooltip-example-2", "itTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "right", 1, "btn", "btn-outline-secondary", "me-2"], ["type", "button", "id", "tooltip-example-3", "itTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "left", 1, "btn", "btn-outline-secondary", "me-2"], ["type", "button", "id", "tooltip-example-4", "itTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "bottom", 1, "btn", "btn-outline-secondary"], [1, "example-section"], ["type", "button", "itTooltip", "Tooltip di esempio", "it-title", "Titolo del Tooltip", "triggers", "click", "id", "tooltip-example-5", 1, "btn", "btn-lg", "btn-danger", "me-4", 3, "placement"], ["type", "button", "id", "tooltip-placement-button", 1, "btn", "btn-lg", "btn-primary", 3, "click"]], template: function TooltipPlacementsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Le quattro direzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Tooltip in alto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Tooltip a destra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Tooltip a sinistra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Tooltip in basso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 6)(13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Clicca per il tooltip ricollocabile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TooltipPlacementsExampleComponent_Template_button_click_15_listener() { return ctx.changeCurrentPlacement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Cambia il collocamento della tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placement", ctx.currentPlacement);
    } }, dependencies: [_projects_design_angular_kit_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__.ItTooltip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLXBsYWNlbWVudHMtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4372:
/*!***************************************************!*\
  !*** ./src/app/tooltip/tooltip-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipRoutingModule": () => (/* binding */ TooltipRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tooltip_index_tooltip_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-index/tooltip-index.component */ 6295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _tooltip_index_tooltip_index_component__WEBPACK_IMPORTED_MODULE_0__.TooltipIndexComponent }
];
class TooltipRoutingModule {
}
TooltipRoutingModule.ɵfac = function TooltipRoutingModule_Factory(t) { return new (t || TooltipRoutingModule)(); };
TooltipRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TooltipRoutingModule });
TooltipRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TooltipRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3030:
/*!*******************************************!*\
  !*** ./src/app/tooltip/tooltip.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipModule": () => (/* binding */ TooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-routing.module */ 4372);
/* harmony import */ var _tooltip_example_tooltip_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-example/tooltip-example.component */ 5271);
/* harmony import */ var _tooltip_examples_tooltip_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-examples/tooltip-examples.component */ 8396);
/* harmony import */ var _tooltip_index_tooltip_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-index/tooltip-index.component */ 6295);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _tooltip_placements_example_tooltip_placements_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip-placements-example/tooltip-placements-example.component */ 858);
/* harmony import */ var _tooltip_events_example_tooltip_events_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip-events-example/tooltip-events-example.component */ 6195);
/* harmony import */ var _tooltip_disabled_example_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltip-disabled-example/tooltip-disabled-example.component */ 3784);
/* harmony import */ var _tooltip_config_example_tooltip_config_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tooltip-config-example/tooltip-config-example.component */ 9504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);












class TooltipModule {
}
TooltipModule.ɵfac = function TooltipModule_Factory(t) { return new (t || TooltipModule)(); };
TooltipModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: TooltipModule });
TooltipModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_0__.TooltipRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](TooltipModule, { declarations: [_tooltip_example_tooltip_example_component__WEBPACK_IMPORTED_MODULE_1__.TooltipExampleComponent, _tooltip_examples_tooltip_examples_component__WEBPACK_IMPORTED_MODULE_2__.TooltipExamplesComponent, _tooltip_index_tooltip_index_component__WEBPACK_IMPORTED_MODULE_3__.TooltipIndexComponent,
        _tooltip_placements_example_tooltip_placements_example_component__WEBPACK_IMPORTED_MODULE_6__.TooltipPlacementsExampleComponent, _tooltip_events_example_tooltip_events_example_component__WEBPACK_IMPORTED_MODULE_7__.TooltipEventsExampleComponent,
        _tooltip_disabled_example_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_8__.TooltipDisabledExampleComponent, _tooltip_config_example_tooltip_config_example_component__WEBPACK_IMPORTED_MODULE_9__.TooltipConfigExampleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_0__.TooltipRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_tooltip_tooltip_module_ts.js.map