"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_popover_popover_module_ts"],{

/***/ 6152:
/*!************************************************************************************!*\
  !*** ./src/app/popover/popover-config-example/popover-config-example.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverConfigExampleComponent": () => (/* binding */ PopoverConfigExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/popover/popover.directive */ 5440);



class PopoverConfigExampleComponent {
    constructor(popoverConfig) {
        popoverConfig.triggers = 'focus';
        popoverConfig.container = 'body';
        popoverConfig.placement = 'left';
    }
}
PopoverConfigExampleComponent.ɵfac = function PopoverConfigExampleComponent_Factory(t) { return new (t || PopoverConfigExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ItPopoverConfig)); };
PopoverConfigExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PopoverConfigExampleComponent, selectors: [["it-popover-config-example"]], decls: 9, vars: 0, consts: [[1, "bd-example"], [1, "example-section"], ["type", "button", "itPopover", "Popover di esempio", "popoverTitle", "Titolo del Popover", 1, "btn", "btn-lg", "btn-danger"]], template: function PopoverConfigExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Configurazione globale dei popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Clicca per attivare/disattivare il popover preconfigurato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 1)(7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Clicca per attivare/disattivare l'altro popover preconfigurato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_1__.ItPopover], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWNvbmZpZy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8711:
/*!******************************************************************************************!*\
  !*** ./src/app/popover/popover-container-example/popover-container-example.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverContainerExampleComponent": () => (/* binding */ PopoverContainerExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/popover/popover.directive */ 5440);


class PopoverContainerExampleComponent {
}
PopoverContainerExampleComponent.ɵfac = function PopoverContainerExampleComponent_Factory(t) { return new (t || PopoverContainerExampleComponent)(); };
PopoverContainerExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverContainerExampleComponent, selectors: [["it-popover-container-example"]], decls: 6, vars: 0, consts: [[1, "bd-example"], [1, "example-section"], ["type", "button", "itPopover", "Popover di esempio", "popoverTitle", "Titolo del Popover", "container", "body", 1, "btn", "btn-lg", "btn-danger"]], template: function PopoverContainerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Container per popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Popover con container nel body ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__.ItPopover], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWNvbnRhaW5lci1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4677:
/*!****************************************************************************************!*\
  !*** ./src/app/popover/popover-disabled-example/popover-disabled-example.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverDisabledExampleComponent": () => (/* binding */ PopoverDisabledExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/popover/popover.directive */ 5440);


class PopoverDisabledExampleComponent {
}
PopoverDisabledExampleComponent.ɵfac = function PopoverDisabledExampleComponent_Factory(t) { return new (t || PopoverDisabledExampleComponent)(); };
PopoverDisabledExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverDisabledExampleComponent, selectors: [["it-popover-disabled-example"]], decls: 11, vars: 0, consts: [[1, "bd-example"], [1, "example-section"], ["itPopover", "Popover disabilitato", 1, "d-inline-block"], ["type", "button", "disabled", "", 1, "btn", "btn-primary", 2, "pointer-events", "none"], ["itPopover", "Popover disabilitato", "disablePopover", "true", 1, "d-inline-block"], ["type", "button", 1, "btn", "btn-primary", 2, "pointer-events", "none"]], template: function PopoverDisabledExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Elementi disabilitati");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "span", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Elemento disabilitato con popover abilitato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 1)(8, "span", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Elemento attivo con popover disabilitato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__.ItPopover], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWRpc2FibGVkLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7698:
/*!**********************************************************************!*\
  !*** ./src/app/popover/popover-example/popover-example.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverExampleComponent": () => (/* binding */ PopoverExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/popover/popover.directive */ 5440);


class PopoverExampleComponent {
}
PopoverExampleComponent.ɵfac = function PopoverExampleComponent_Factory(t) { return new (t || PopoverExampleComponent)(); };
PopoverExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverExampleComponent, selectors: [["it-popover-example"]], decls: 6, vars: 0, consts: [[1, "bd-example"], [1, "example-section"], ["type", "button", "itPopover", "Popover di esempio", "popoverTitle", "Titolo del Popover", "id", "popover-example-simple", 1, "btn", "btn-lg", "btn-danger"]], template: function PopoverExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Esempio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Clicca per attivare/disattivare il popover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__.ItPopover], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 600:
/*!************************************************************************!*\
  !*** ./src/app/popover/popover-examples/popover-examples.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverExamplesComponent": () => (/* binding */ PopoverExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _popover_example_popover_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popover-example/popover-example.component */ 7698);
/* harmony import */ var _popover_placements_example_popover_placements_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover-placements-example/popover-placements-example.component */ 8254);
/* harmony import */ var _popover_focus_example_popover_focus_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover-focus-example/popover-focus-example.component */ 7898);
/* harmony import */ var _popover_disabled_example_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover-disabled-example/popover-disabled-example.component */ 4677);
/* harmony import */ var _popover_container_example_popover_container_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover-container-example/popover-container-example.component */ 8711);
/* harmony import */ var _popover_config_example_popover_config_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover-config-example/popover-config-example.component */ 6152);
/* harmony import */ var _popover_interactive_example_popover_interactive_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover-interactive-example/popover-interactive-example.component */ 7951);









class PopoverExamplesComponent {
}
PopoverExamplesComponent.ɵfac = function PopoverExamplesComponent_Factory(t) { return new (t || PopoverExamplesComponent)(); };
PopoverExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PopoverExamplesComponent, selectors: [["it-popover-examples"]], decls: 14, vars: 0, consts: [["html", "\n  \n  \n<h3>Esempio Popover</h3>\n<div class=\"bd-example\">\n  <button type=\"button\" id=\"popover-interactive-button\" class=\"btn btn-primary\" \n    [itPopover]=\"myDescription\" \n    [popoverTitle]=\"myTitle\"\n    [container]=\"container\" \n    [placement]=\"placement\" \n    [disabled]=\"disabled\" \n    [class.disabled]=\"disabled\"\n    (shown)=\"logShown()\" \n    (hidden)=\"logHidden()\"\n    #interactivePopover=\"itPopover\">\n    Bottone con popover\n  </button>\n\n  <it-checkbox [(ngModel)]=\"disabled\" label=\"Disabilita bottone e popover\" id=\"disable-popover-checkbox\"></it-checkbox>\n  <it-checkbox [(ngModel)]=\"removeTitle\" label=\"Rimuovi titolo\" id=\"remove-title-checkbox\"></it-checkbox>\n\n  <div class=\"row\">\n    <div class=\"form-check col-4\">\n      <h5>Container</h5>\n      <it-radio-group [(ngModel)]=\"container\">\n        <it-radio-button id=\"radio-self\" name=\"self\" value=\"\" label=\"Apposito\"></it-radio-button>\n        <it-radio-button id=\"radio-body\" name=\"body\" value=\"body\" label=\"Nel body\"></it-radio-button>\n      </it-radio-group>\n    </div>\n    <div class=\"form-check col-5\">\n      <h5>Collocamento</h5>\n      <it-radio-group [(ngModel)]=\"placement\">\n        <it-radio-button id=\"radio-right\" name=\"right\" value=\"right\" label=\"Destra\"></it-radio-button>\n        <it-radio-button id=\"radio-top\" name=\"top\" value=\"top\" label=\"Sopra\"></it-radio-button>\n        <it-radio-button id=\"radio-left\" name=\"left\" value=\"left\" label=\"Sinistra\"></it-radio-button>\n        <it-radio-button id=\"radio-bottom\" name=\"bottom\" value=\"bottom\" label=\"Sotto\"></it-radio-button>\n      </it-radio-group>\n    </div>\n  </div>\n\n  <button itButton=\"danger\" (click)=\"interactivePopover.close()\" id=\"popover-disposing-button\">\n    Distruggi il popover\n  </button>\n\n  <div class=\"popover-events mt-3\">\n    <div *ngIf = \"shownTime\">\n      Ultima emissione dell'evento shown = /{/{shownTime | date: 'long'/}/}\n    </div>\n    \n    <div *ngIf = \"hiddenTime\">\n      Ultima emissione dell'evento hidden = /{/{hiddenTime | date: 'long'/}/}\n    </div>\n  </div>\n  \n</div>\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-popover-interactive-example',\n  templateUrl: './popover-interactive-example.component.html',\n  styleUrls: ['./popover-interactive-example.component.scss']\n})\nexport class PopoverInteractiveExampleComponent {\n  placement = 'right';\n  container = '';\n  disabled = false;\n  removeTitle = false;\n\n  shownTime = '';\n  hiddenTime = '';\n\n  logShown() {\n    this.shownTime = (new Date()).toISOString();\n  }\n\n\n  logHidden() {\n    this.hiddenTime = (new Date()).toISOString();\n  }\n\n  get myDescription() {\n    return !this.removeTitle ? 'Testo del Popover' : 'Popover senza nessun titolo';\n  }\n\n  get myTitle() {\n    return !this.removeTitle ? 'Titolo del Popover' : '';\n  }\n\n}\n\n\n"], ["html", "\n  \n  <h3>Esempio</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger\" itPopover=\"Popover di esempio\" popoverTitle=\"Titolo del Popover\" id=\"popover-example-simple\">\n      Clicca per attivare/disattivare il popover\n    </button>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-popover-example',\n  templateUrl: './popover-example.component.html',\n  styleUrls: ['./popover-example.component.scss']\n})\nexport class PopoverExampleComponent {\n\n}\n\n\n"], ["html", "\n  \n  <h3>Container per popover</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger\" itPopover=\"Popover di esempio\" popoverTitle=\"Titolo del Popover\"\n      container=\"body\">\n      Popover con container nel body\n    </button>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-popover-container-example',\n  templateUrl: './popover-container-example.component.html',\n  styleUrls: ['./popover-container-example.component.scss']\n})\nexport class PopoverContainerExampleComponent {\n\n}\n\n\n"], ["html", "\n  \n  <h3>Le quattro direzioni</h3>\n<div class=\"bd-example\">\n  <p class=\"row justify-content-around\">\n    <button type=\"button\" class=\"col-2 btn btn-outline-secondary\" \n      placement=\"top\"\n      itPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" \n      id=\"popover-example-top\">\n      Popover in alto\n    </button>\n    \n    <button type=\"button\" class=\"col-2 btn btn-outline-secondary\" \n      placement=\"right\"\n      itPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" \n      id=\"popover-example-right\">\n      Popover a destra\n    </button>\n\n    <button type=\"button\" class=\"col-2 btn btn-outline-secondary\" \n      placement=\"left\"\n      itPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" \n      id=\"popover-example-left\">\n      Popover a sinistra\n    </button>\n\n    <button type=\"button\" class=\"col-2 btn btn-outline-secondary\" \n      placement=\"bottom\"\n      itPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" \n      id=\"popover-example-bottom\">\n      Popover in basso\n    </button>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-popover-placements-example',\n  templateUrl: './popover-placements-example.component.html',\n  styleUrls: ['./popover-placements-example.component.scss']\n})\nexport class PopoverPlacementsExampleComponent {\n\n}\n\n\n"], ["html", "\n  \n  <h3 id=\"popover-lose-focus\">Dismiss al click successivo</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <a tabindex=\"0\" class=\"btn btn-lg btn-danger\" role=\"button\" \n      triggers=\"focus\" title=\"Dismissible popover\"\n      itPopover=\"Ed ecco alcuni contenuti sorprendenti. \u00C8 molto coinvolgente. Non trovi?\" id=\"popover-example-focus\">\n      Dismissible popover\n    </a>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-popover-focus-example',\n  templateUrl: './popover-focus-example.component.html',\n  styleUrls: ['./popover-focus-example.component.scss']\n})\nexport class PopoverFocusExampleComponent {\n\n}\n\n\n"], ["html", "\n  \n  \n<h3>Elementi disabilitati</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <span class=\"d-inline-block\" itPopover=\"Popover disabilitato\">\n      <button class=\"btn btn-primary\" style=\"pointer-events: none;\" type=\"button\" disabled>\n        Elemento disabilitato con popover abilitato\n      </button>\n    </span>\n  </p>\n\n  <p class=\"example-section\">\n    <span class=\"d-inline-block\" itPopover=\"Popover disabilitato\" disablePopover=\"true\">\n      <button class=\"btn btn-primary\" style=\"pointer-events: none;\" type=\"button\">\n        Elemento attivo con popover disabilitato\n      </button>\n    </span>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-popover-disabled-example',\n  templateUrl: './popover-disabled-example.component.html',\n  styleUrls: ['./popover-disabled-example.component.scss']\n})\nexport class PopoverDisabledExampleComponent {\n\n}\n\n\n"], ["html", "\n  \n  \n<h3>Configurazione globale dei popover</h3>\n<div class=\"bd-example\">\n  <p class=\"card-text\" class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger\" itPopover=\"Popover di esempio\" popoverTitle=\"Titolo del Popover\">\n      Clicca per attivare/disattivare il popover preconfigurato\n    </button>\n  </p>\n\n  <p class=\"card-text\" class=\"example-section\">\n    <button type=\"button\" class=\"btn btn-lg btn-danger\" itPopover=\"Popover di esempio\" popoverTitle=\"Titolo del Popover\">\n      Clicca per attivare/disattivare l'altro popover preconfigurato\n    </button>\n  </p>\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\nimport { ItPopoverConfig } from 'projects/design-angular-kit/src/public_api';\n\n@Component({\n  selector: 'it-popover-config-example',\n  templateUrl: './popover-config-example.component.html',\n  styleUrls: ['./popover-config-example.component.scss']\n})\nexport class PopoverConfigExampleComponent {\n\n  constructor(popoverConfig: ItPopoverConfig) {\n    popoverConfig.triggers = 'focus';\n    popoverConfig.container = 'body';\n    popoverConfig.placement = 'left';\n  }\n\n}\n\n\n"]], template: function PopoverExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "it-popover-interactive-example")(1, "it-source-display", 0)(2, "it-popover-example")(3, "it-source-display", 1)(4, "it-popover-container-example")(5, "it-source-display", 2)(6, "it-popover-placements-example")(7, "it-source-display", 3)(8, "it-popover-focus-example")(9, "it-source-display", 4)(10, "it-popover-disabled-example")(11, "it-source-display", 5)(12, "it-popover-config-example")(13, "it-source-display", 6);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _popover_example_popover_example_component__WEBPACK_IMPORTED_MODULE_1__.PopoverExampleComponent, _popover_placements_example_popover_placements_example_component__WEBPACK_IMPORTED_MODULE_2__.PopoverPlacementsExampleComponent, _popover_focus_example_popover_focus_example_component__WEBPACK_IMPORTED_MODULE_3__.PopoverFocusExampleComponent, _popover_disabled_example_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__.PopoverDisabledExampleComponent, _popover_container_example_popover_container_example_component__WEBPACK_IMPORTED_MODULE_5__.PopoverContainerExampleComponent, _popover_config_example_popover_config_example_component__WEBPACK_IMPORTED_MODULE_6__.PopoverConfigExampleComponent, _popover_interactive_example_popover_interactive_example_component__WEBPACK_IMPORTED_MODULE_7__.PopoverInteractiveExampleComponent], styles: [".example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJwb3BvdmVyLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 7898:
/*!**********************************************************************************!*\
  !*** ./src/app/popover/popover-focus-example/popover-focus-example.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverFocusExampleComponent": () => (/* binding */ PopoverFocusExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/popover/popover.directive */ 5440);


class PopoverFocusExampleComponent {
}
PopoverFocusExampleComponent.ɵfac = function PopoverFocusExampleComponent_Factory(t) { return new (t || PopoverFocusExampleComponent)(); };
PopoverFocusExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverFocusExampleComponent, selectors: [["it-popover-focus-example"]], decls: 6, vars: 0, consts: [["id", "popover-lose-focus"], [1, "bd-example"], [1, "example-section"], ["tabindex", "0", "role", "button", "triggers", "focus", "title", "Dismissible popover", "itPopover", "Ed ecco alcuni contenuti sorprendenti. \u00C8 molto coinvolgente. Non trovi?", "id", "popover-example-focus", 1, "btn", "btn-lg", "btn-danger"]], template: function PopoverFocusExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dismiss al click successivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Dismissible popover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__.ItPopover], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWZvY3VzLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5232:
/*!******************************************************************!*\
  !*** ./src/app/popover/popover-index/popover-index.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverIndexComponent": () => (/* binding */ PopoverIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _popover_examples_popover_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover-examples/popover-examples.component */ 600);






class PopoverIndexComponent {
    constructor() {
        this.directive = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.directives.find(directive => directive.name === 'ItPopover');
    }
}
PopoverIndexComponent.ɵfac = function PopoverIndexComponent_Factory(t) { return new (t || PopoverIndexComponent)(); };
PopoverIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PopoverIndexComponent, selectors: [["it-popover-index"]], decls: 11, vars: 2, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function PopoverIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "La direttiva popover utilizzabile per aggiungere dei tooltip informativi a qualsiasi elemento del tuo sito");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-popover-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.directive.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.directive);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _popover_examples_popover_examples_component__WEBPACK_IMPORTED_MODULE_4__.PopoverExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7951:
/*!**********************************************************************************************!*\
  !*** ./src/app/popover/popover-interactive-example/popover-interactive-example.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverInteractiveExampleComponent": () => (/* binding */ PopoverInteractiveExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);
/* harmony import */ var _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/button/button.directive */ 9103);
/* harmony import */ var _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/popover/popover.directive */ 5440);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function PopoverInteractiveExampleComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Ultima emissione dell'evento shown = ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r1.shownTime, "long"), " ");
} }
function PopoverInteractiveExampleComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Ultima emissione dell'evento hidden = ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r2.hiddenTime, "long"), " ");
} }
class PopoverInteractiveExampleComponent {
    constructor() {
        this.placement = 'right';
        this.container = '';
        this.disabled = false;
        this.removeTitle = false;
        this.shownTime = '';
        this.hiddenTime = '';
    }
    logShown() {
        this.shownTime = (new Date()).toISOString();
    }
    logHidden() {
        this.hiddenTime = (new Date()).toISOString();
    }
    get myDescription() {
        return !this.removeTitle ? 'Testo del Popover' : 'Popover senza nessun titolo';
    }
    get myTitle() {
        return !this.removeTitle ? 'Titolo del Popover' : '';
    }
}
PopoverInteractiveExampleComponent.ɵfac = function PopoverInteractiveExampleComponent_Factory(t) { return new (t || PopoverInteractiveExampleComponent)(); };
PopoverInteractiveExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PopoverInteractiveExampleComponent, selectors: [["it-popover-interactive-example"]], decls: 28, vars: 13, consts: [[1, "bd-example"], ["type", "button", "id", "popover-interactive-button", 1, "btn", "btn-primary", 3, "itPopover", "popoverTitle", "container", "placement", "disabled", "shown", "hidden"], ["interactivePopover", "itPopover"], ["label", "Disabilita bottone e popover", "id", "disable-popover-checkbox", 3, "ngModel", "ngModelChange"], ["label", "Rimuovi titolo", "id", "remove-title-checkbox", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "form-check", "col-4"], [3, "ngModel", "ngModelChange"], ["id", "radio-self", "name", "self", "value", "", "label", "Apposito"], ["id", "radio-body", "name", "body", "value", "body", "label", "Nel body"], [1, "form-check", "col-5"], ["id", "radio-right", "name", "right", "value", "right", "label", "Destra"], ["id", "radio-top", "name", "top", "value", "top", "label", "Sopra"], ["id", "radio-left", "name", "left", "value", "left", "label", "Sinistra"], ["id", "radio-bottom", "name", "bottom", "value", "bottom", "label", "Sotto"], ["itButton", "danger", "id", "popover-disposing-button", 3, "click"], [1, "popover-events", "mt-3"], [4, "ngIf"]], template: function PopoverInteractiveExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Esempio Popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0)(3, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("shown", function PopoverInteractiveExampleComponent_Template_button_shown_3_listener() { return ctx.logShown(); })("hidden", function PopoverInteractiveExampleComponent_Template_button_hidden_3_listener() { return ctx.logHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Bottone con popover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "it-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PopoverInteractiveExampleComponent_Template_it_checkbox_ngModelChange_6_listener($event) { return ctx.disabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "it-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PopoverInteractiveExampleComponent_Template_it_checkbox_ngModelChange_7_listener($event) { return ctx.removeTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "it-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PopoverInteractiveExampleComponent_Template_it_radio_group_ngModelChange_12_listener($event) { return ctx.container = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "it-radio-button", 8)(14, "it-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10)(16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Collocamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "it-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PopoverInteractiveExampleComponent_Template_it_radio_group_ngModelChange_18_listener($event) { return ctx.placement = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "it-radio-button", 11)(20, "it-radio-button", 12)(21, "it-radio-button", 13)(22, "it-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopoverInteractiveExampleComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Distruggi il popover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, PopoverInteractiveExampleComponent_div_26_Template, 3, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PopoverInteractiveExampleComponent_div_27_Template, 3, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itPopover", ctx.myDescription)("popoverTitle", ctx.myTitle)("container", ctx.container)("placement", ctx.placement)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.removeTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.placement);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.shownTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hiddenTime);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioGroupDirective, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent, _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_2__.ItButtonDirective, _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__.ItPopover, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLWludGVyYWN0aXZlLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8254:
/*!********************************************************************************************!*\
  !*** ./src/app/popover/popover-placements-example/popover-placements-example.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverPlacementsExampleComponent": () => (/* binding */ PopoverPlacementsExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/popover/popover.directive */ 5440);


class PopoverPlacementsExampleComponent {
}
PopoverPlacementsExampleComponent.ɵfac = function PopoverPlacementsExampleComponent_Factory(t) { return new (t || PopoverPlacementsExampleComponent)(); };
PopoverPlacementsExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverPlacementsExampleComponent, selectors: [["it-popover-placements-example"]], decls: 12, vars: 0, consts: [[1, "bd-example"], [1, "row", "justify-content-around"], ["type", "button", "placement", "top", "itPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "id", "popover-example-top", 1, "col-2", "btn", "btn-outline-secondary"], ["type", "button", "placement", "right", "itPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "id", "popover-example-right", 1, "col-2", "btn", "btn-outline-secondary"], ["type", "button", "placement", "left", "itPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "id", "popover-example-left", 1, "col-2", "btn", "btn-outline-secondary"], ["type", "button", "placement", "bottom", "itPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "id", "popover-example-bottom", 1, "col-2", "btn", "btn-outline-secondary"]], template: function PopoverPlacementsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Le quattro direzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Popover in alto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Popover a destra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Popover a sinistra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Popover in basso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_0__.ItPopover], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLXBsYWNlbWVudHMtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1125:
/*!***************************************************!*\
  !*** ./src/app/popover/popover-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverRoutingModule": () => (/* binding */ PopoverRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _popover_index_popover_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-index/popover-index.component */ 5232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _popover_index_popover_index_component__WEBPACK_IMPORTED_MODULE_0__.PopoverIndexComponent }
];
class PopoverRoutingModule {
}
PopoverRoutingModule.ɵfac = function PopoverRoutingModule_Factory(t) { return new (t || PopoverRoutingModule)(); };
PopoverRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PopoverRoutingModule });
PopoverRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopoverRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2415:
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverModule": () => (/* binding */ PopoverModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-routing.module */ 1125);
/* harmony import */ var _popover_example_popover_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-example/popover-example.component */ 7698);
/* harmony import */ var _popover_examples_popover_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-examples/popover-examples.component */ 600);
/* harmony import */ var _popover_index_popover_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-index/popover-index.component */ 5232);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _popover_placements_example_popover_placements_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover-placements-example/popover-placements-example.component */ 8254);
/* harmony import */ var _popover_focus_example_popover_focus_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover-focus-example/popover-focus-example.component */ 7898);
/* harmony import */ var _popover_disabled_example_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-disabled-example/popover-disabled-example.component */ 4677);
/* harmony import */ var _popover_container_example_popover_container_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-container-example/popover-container-example.component */ 8711);
/* harmony import */ var _popover_config_example_popover_config_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover-config-example/popover-config-example.component */ 6152);
/* harmony import */ var _popover_interactive_example_popover_interactive_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popover-interactive-example/popover-interactive-example.component */ 7951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);















class PopoverModule {
}
PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
PopoverModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: PopoverModule });
PopoverModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopoverRoutingModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PopoverModule, { declarations: [_popover_examples_popover_examples_component__WEBPACK_IMPORTED_MODULE_2__.PopoverExamplesComponent, _popover_index_popover_index_component__WEBPACK_IMPORTED_MODULE_3__.PopoverIndexComponent, _popover_example_popover_example_component__WEBPACK_IMPORTED_MODULE_1__.PopoverExampleComponent,
        _popover_placements_example_popover_placements_example_component__WEBPACK_IMPORTED_MODULE_6__.PopoverPlacementsExampleComponent, _popover_focus_example_popover_focus_example_component__WEBPACK_IMPORTED_MODULE_7__.PopoverFocusExampleComponent,
        _popover_disabled_example_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_8__.PopoverDisabledExampleComponent, _popover_container_example_popover_container_example_component__WEBPACK_IMPORTED_MODULE_9__.PopoverContainerExampleComponent,
        _popover_config_example_popover_config_example_component__WEBPACK_IMPORTED_MODULE_10__.PopoverConfigExampleComponent, _popover_interactive_example_popover_interactive_example_component__WEBPACK_IMPORTED_MODULE_11__.PopoverInteractiveExampleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopoverRoutingModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_popover_popover_module_ts.js.map