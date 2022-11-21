"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_dropdown_dropdown_module_ts"],{

/***/ 2234:
/*!*************************************************************************!*\
  !*** ./src/app/dropdown/dropdown-example/dropdown-example.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownExampleComponent": () => (/* binding */ DropdownExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);
/* harmony import */ var _projects_design_angular_kit_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/dropdown/dropdown.component */ 1657);
/* harmony import */ var _projects_design_angular_kit_src_lib_dropdown_dropdown_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/dropdown/dropdown-divider.component */ 5569);
/* harmony import */ var _projects_design_angular_kit_src_lib_dropdown_dropdown_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/dropdown/dropdown-item.component */ 2280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








function DropdownExampleComponent_it_dropdown_divider_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "it-dropdown-divider");
} }
function DropdownExampleComponent_it_dropdown_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "it-dropdown-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("link", item_r2.link)("active", item_r2.active)("disabled", item_r2.disabled)("large", item_r2.large)("icon", item_r2.icon)("iconPosition", item_r2.iconPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r2.text, " ");
} }
class DropdownExampleComponent {
    constructor() {
        this.color = '';
        this.label = 'Click me';
        this.isDark = false;
        this.isFullWidth = false;
        this.withHeading = true;
        this.menuPlacement = 'bottom-start';
        this.items = [
            {
                link: 'https://www.google.com', active: false,
                disabled: false, large: true,
                icon: 'it-star-outline', iconPosition: 'right',
                text: 'Item 1'
            },
            {
                link: 'https://www.google.com', active: false,
                disabled: true, large: false,
                icon: 'it-link', iconPosition: 'right',
                text: 'Item 2'
            },
            {
                link: 'https://www.google.com', active: true,
                disabled: false, large: true,
                icon: undefined, iconPosition: 'right',
                text: 'Item 3'
            },
        ];
        this.openTime = '';
        this.closeTime = '';
    }
    onOpenEvent() {
        this.openTime = (new Date()).toISOString();
    }
    onCloseEvent() {
        this.closeTime = (new Date()).toISOString();
    }
}
DropdownExampleComponent.ɵfac = function DropdownExampleComponent_Factory(t) { return new (t || DropdownExampleComponent)(); };
DropdownExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DropdownExampleComponent, selectors: [["it-dropdown-example"]], decls: 57, vars: 17, consts: [[1, "bd-example"], [1, "example-section"], [3, "color", "label", "dark", "fullWidth", "menuPlacement", "menuHeading", "onOpen", "onClose"], [4, "ngIf"], [3, "link", "active", "disabled", "large", "icon", "iconPosition", 4, "ngFor", "ngForOf"], [1, "row"], [1, "form-check", "col-3"], ["label", "Disposizione orizzontale", "id", "fullwidth-checkbox", 3, "ngModel", "ngModelChange"], ["label", "Sfondo scuro", "id", "darktheme-checkbox", 3, "ngModel", "ngModelChange"], ["label", "Con intestazione", "id", "heading-checkbox", 3, "ngModel", "ngModelChange"], [1, "form-check", "col-2"], [3, "ngModel", "ngModelChange"], ["id", "radio-default", "name", "default", "value", "bottom-start", "label", "Default"], ["id", "radio-dropup", "name", "dropup", "value", "top-start", "label", "Dropup"], ["id", "radio-dropstart", "name", "dropstart", "value", "left-start", "label", "Dropstart"], ["id", "radio-dropend", "name", "dropend", "value", "right-start", "label", "Dropend"], ["id", "radio-click", "name", "clickMe", "value", "Click me", "label", "Click me"], ["id", "radio-check", "name", "check", "value", "Check", "label", "Check"], ["id", "radio-hello", "name", "hello", "value", "Hello world!", "label", "Hello world!"], [1, "form-check", "col-5"], [1, "form-check", "col-4"], ["id", "radio-none", "name", "none", "value", "", "label", "None"], ["id", "radio-primary", "name", "primary", "value", "primary", "label", "Primary"], ["id", "radio-secondary", "name", "secondary", "value", "secondary", "label", "Secondary"], ["id", "radio-success", "name", "success", "value", "success", "label", "Success"], ["id", "radio-warning", "name", "warning", "value", "warning", "label", "Warning"], ["id", "radio-danger", "name", "danger", "value", "danger", "label", "Danger"], ["id", "radio-info", "name", "info", "value", "info", "label", "Info"], ["id", "radio-light", "name", "light", "value", "light", "label", "Light"], ["id", "radio-dark", "name", "dark", "value", "dark", "label", "Dark"], [3, "link", "active", "disabled", "large", "icon", "iconPosition"]], template: function DropdownExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Esempio Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "it-dropdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onOpen", function DropdownExampleComponent_Template_it_dropdown_onOpen_4_listener() { return ctx.onOpenEvent(); })("onClose", function DropdownExampleComponent_Template_it_dropdown_onClose_4_listener() { return ctx.onCloseEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DropdownExampleComponent_it_dropdown_divider_5_Template, 1, 0, "it-dropdown-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DropdownExampleComponent_it_dropdown_item_6_Template, 2, 7, "it-dropdown-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Opzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "it-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DropdownExampleComponent_Template_it_checkbox_ngModelChange_15_listener($event) { return ctx.isFullWidth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "it-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DropdownExampleComponent_Template_it_checkbox_ngModelChange_16_listener($event) { return ctx.isDark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "it-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DropdownExampleComponent_Template_it_checkbox_ngModelChange_17_listener($event) { return ctx.withHeading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Posizione menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "it-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DropdownExampleComponent_Template_it_radio_group_ngModelChange_21_listener($event) { return ctx.menuPlacement = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "it-radio-button", 12)(23, "it-radio-button", 13)(24, "it-radio-button", 14)(25, "it-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 10)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Testo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "it-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DropdownExampleComponent_Template_it_radio_group_ngModelChange_29_listener($event) { return ctx.label = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "it-radio-button", 16)(31, "it-radio-button", 17)(32, "it-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 19)(34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Colorazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "it-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DropdownExampleComponent_Template_it_radio_group_ngModelChange_36_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 5)(38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "it-radio-button", 21)(40, "it-radio-button", 22)(41, "it-radio-button", 23)(42, "it-radio-button", 24)(43, "it-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "it-radio-button", 26)(46, "it-radio-button", 27)(47, "it-radio-button", 28)(48, "it-radio-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 5)(50, "div", 10)(51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Testo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "it-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DropdownExampleComponent_Template_it_radio_group_ngModelChange_53_listener($event) { return ctx.label = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "it-radio-button", 16)(55, "it-radio-button", 17)(56, "it-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx.color)("label", ctx.label)("dark", ctx.isDark)("fullWidth", ctx.isFullWidth)("menuPlacement", ctx.menuPlacement)("menuHeading", ctx.withHeading ? "Intestazione Menu" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.withHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Open: ", ctx.openTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Close: ", ctx.closeTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.isFullWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.withHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.menuPlacement);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.label);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioGroupDirective, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent, _projects_design_angular_kit_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.DropdownComponent, _projects_design_angular_kit_src_lib_dropdown_dropdown_divider_component__WEBPACK_IMPORTED_MODULE_3__.DropdownDividerComponent, _projects_design_angular_kit_src_lib_dropdown_dropdown_item_component__WEBPACK_IMPORTED_MODULE_4__.DropdownItemComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9851:
/*!***************************************************************************!*\
  !*** ./src/app/dropdown/dropdown-examples/dropdown-examples.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownExamplesComponent": () => (/* binding */ DropdownExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _dropdown_example_dropdown_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown-example/dropdown-example.component */ 2234);



class DropdownExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
DropdownExamplesComponent.ɵfac = function DropdownExamplesComponent_Factory(t) { return new (t || DropdownExamplesComponent)(); };
DropdownExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DropdownExamplesComponent, selectors: [["it-dropdown-examples"]], decls: 2, vars: 0, consts: [["html", "\n  \n  \n<h3>Esempio Dropdown</h3>\n<div class=\"bd-example\">\n  <p class=\"example-section\">\n    <it-dropdown\n      [color]=\"color\"\n      [label]=\"label\"\n      [dark]=\"isDark\"\n      [fullWidth]=\"isFullWidth\"\n      [menuPlacement] = \"menuPlacement\"\n      [menuHeading] = \"withHeading ? 'Intestazione Menu' : null\"\n      (onOpen)=\"onOpenEvent()\"\n      (onClose)=\"onCloseEvent()\" >\n      <it-dropdown-divider *ngIf=\"withHeading\"></it-dropdown-divider>\n\n      <it-dropdown-item *ngFor=\"let item of items\"\n        [link]=\"item.link\"\n        [active]=\"item.active\"\n        [disabled]=\"item.disabled\"\n        [large]=\"item.large\"\n        [icon]=\"item.icon\"\n        [iconPosition]=\"item.iconPosition\">\n        /{/{item.text/}/}\n      </it-dropdown-item>\n    </it-dropdown>\n  </p>\n\n  <p class=\"example-section\">\n    Open: /{/{openTime/}/}\n  </p>\n\n  <p class=\"example-section\">\n    Close: /{/{closeTime/}/}\n  </p>\n\n  <div class=\"row\">\n    <div class=\"form-check col-3\">\n      <h5>Opzioni</h5>\n      <it-checkbox [(ngModel)]=\"isFullWidth\" label=\"Disposizione orizzontale\" id=\"fullwidth-checkbox\"></it-checkbox>\n      <it-checkbox [(ngModel)]=\"isDark\" label=\"Sfondo scuro\" id=\"darktheme-checkbox\"></it-checkbox>\n      <it-checkbox [(ngModel)]=\"withHeading\" label=\"Con intestazione\" id=\"heading-checkbox\"></it-checkbox>\n    </div>\n    <div class=\"form-check col-2\">\n      <h5>Posizione menu</h5>\n      <it-radio-group [(ngModel)]=\"menuPlacement\">\n        <it-radio-button id=\"radio-default\" name=\"default\" value=\"bottom-start\" label=\"Default\"></it-radio-button>\n        <it-radio-button id=\"radio-dropup\" name=\"dropup\" value=\"top-start\" label=\"Dropup\"></it-radio-button>\n        <it-radio-button id=\"radio-dropstart\" name=\"dropstart\" value=\"left-start\" label=\"Dropstart\"></it-radio-button>\n        <it-radio-button id=\"radio-dropend\" name=\"dropend\" value=\"right-start\" label=\"Dropend\"></it-radio-button>\n      </it-radio-group>\n    </div>\n\n\n    <div class=\"form-check col-2\">\n      <h5>Testo</h5>\n      <it-radio-group [(ngModel)]=\"label\">\n        <it-radio-button id=\"radio-click\" name=\"clickMe\" value=\"Click me\" label=\"Click me\"></it-radio-button>\n        <it-radio-button id=\"radio-check\" name=\"check\" value=\"Check\" label=\"Check\"></it-radio-button>\n        <it-radio-button id=\"radio-hello\" name=\"hello\" value=\"Hello world!\" label=\"Hello world!\"></it-radio-button>\n      </it-radio-group>\n    </div>\n\n    <div class=\"form-check col-5\">\n      <h5>Colorazione</h5>\n      <it-radio-group [(ngModel)]=\"color\">\n        <div class=\"row\">\n          <div class=\"form-check col-4\">\n            <it-radio-button id=\"radio-none\" name=\"none\" value=\"\" label=\"None\"></it-radio-button>\n            <it-radio-button id=\"radio-primary\" name=\"primary\" value=\"primary\" label=\"Primary\"></it-radio-button>\n            <it-radio-button id=\"radio-secondary\" name=\"secondary\" value=\"secondary\" label=\"Secondary\"></it-radio-button>\n            <it-radio-button id=\"radio-success\" name=\"success\" value=\"success\" label=\"Success\"></it-radio-button>\n            <it-radio-button id=\"radio-warning\" name=\"warning\" value=\"warning\" label=\"Warning\"></it-radio-button>\n          </div>\n          <div class=\"form-check col-5\">\n            <it-radio-button id=\"radio-danger\" name=\"danger\" value=\"danger\" label=\"Danger\"></it-radio-button>\n            <it-radio-button id=\"radio-info\" name=\"info\" value=\"info\" label=\"Info\"></it-radio-button>\n            <it-radio-button id=\"radio-light\" name=\"light\" value=\"light\" label=\"Light\"></it-radio-button>\n            <it-radio-button id=\"radio-dark\" name=\"dark\" value=\"dark\" label=\"Dark\"></it-radio-button>\n          </div>\n        </div>\n      </it-radio-group>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"form-check col-2\">\n      <h5>Testo</h5>\n      <it-radio-group [(ngModel)]=\"label\">\n        <it-radio-button id=\"radio-click\" name=\"clickMe\" value=\"Click me\" label=\"Click me\"></it-radio-button>\n        <it-radio-button id=\"radio-check\" name=\"check\" value=\"Check\" label=\"Check\"></it-radio-button>\n        <it-radio-button id=\"radio-hello\" name=\"hello\" value=\"Hello world!\" label=\"Hello world!\"></it-radio-button>\n      </it-radio-group>\n    </div>\n  </div>\n\n</div>\n    \n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-dropdown-example',\n  templateUrl: './dropdown-example.component.html',\n  styleUrls: ['./dropdown-example.component.scss']\n})\nexport class DropdownExampleComponent {\n  color = '';\n  label = 'Click me';\n  isDark = false;\n  isFullWidth = false;\n  withHeading = true;\n  \n  menuPlacement = 'bottom-start';\n  items = [\n    {\n      link: 'https://www.google.com', active: false,\n      disabled: false, large: true,\n      icon: 'it-star-outline', iconPosition: 'right',\n      text: 'Item 1'\n    },\n    {\n      link: 'https://www.google.com', active: false,\n      disabled: true, large: false,\n      icon: 'it-link', iconPosition: 'right',\n      text: 'Item 2'\n    },\n    {\n      link: 'https://www.google.com', active: true,\n      disabled: false, large: true,\n      icon: undefined, iconPosition: 'right',\n      text: 'Item 3'\n    },\n  ];\n\n  openTime = '';\n  closeTime = '';\n\n  onOpenEvent() {\n    this.openTime = (new Date()).toISOString();\n  }\n\n  onCloseEvent() {\n    this.closeTime = (new Date()).toISOString();\n  }\n\n}\n\n\n"]], template: function DropdownExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "it-dropdown-example")(1, "it-source-display", 0);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _dropdown_example_dropdown_example_component__WEBPACK_IMPORTED_MODULE_1__.DropdownExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4339:
/*!*********************************************************************!*\
  !*** ./src/app/dropdown/dropdown-index/dropdown-index.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownIndexComponent": () => (/* binding */ DropdownIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _dropdown_examples_dropdown_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown-examples/dropdown-examples.component */ 9851);






class DropdownIndexComponent {
    constructor() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'DropdownComponent');
        this.subcomponent = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'DropdownItemComponent');
    }
    ngOnInit() {
    }
}
DropdownIndexComponent.ɵfac = function DropdownIndexComponent_Factory(t) { return new (t || DropdownIndexComponent)(); };
DropdownIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DropdownIndexComponent, selectors: [["it-dropdown-index"]], decls: 16, vars: 3, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function DropdownIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Il componente Dropdown per men\u00F9 a tendina contestuali");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Dropdown Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "it-dropdown-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.component.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.component);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.subcomponent);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _dropdown_examples_dropdown_examples_component__WEBPACK_IMPORTED_MODULE_4__.DropdownExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1631:
/*!*****************************************************!*\
  !*** ./src/app/dropdown/dropdown-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownRoutingModule": () => (/* binding */ DropdownRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dropdown_index_dropdown_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-index/dropdown-index.component */ 4339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _dropdown_index_dropdown_index_component__WEBPACK_IMPORTED_MODULE_0__.DropdownIndexComponent }
];
class DropdownRoutingModule {
}
DropdownRoutingModule.ɵfac = function DropdownRoutingModule_Factory(t) { return new (t || DropdownRoutingModule)(); };
DropdownRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DropdownRoutingModule });
DropdownRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DropdownRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5237:
/*!*********************************************!*\
  !*** ./src/app/dropdown/dropdown.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownModule": () => (/* binding */ DropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _dropdown_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-routing.module */ 1631);
/* harmony import */ var _dropdown_example_dropdown_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-example/dropdown-example.component */ 2234);
/* harmony import */ var _dropdown_examples_dropdown_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-examples/dropdown-examples.component */ 9851);
/* harmony import */ var _dropdown_index_dropdown_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-index/dropdown-index.component */ 4339);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class DropdownModule {
}
DropdownModule.ɵfac = function DropdownModule_Factory(t) { return new (t || DropdownModule)(); };
DropdownModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DropdownModule });
DropdownModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _dropdown_routing_module__WEBPACK_IMPORTED_MODULE_0__.DropdownRoutingModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DropdownModule, { declarations: [_dropdown_example_dropdown_example_component__WEBPACK_IMPORTED_MODULE_1__.DropdownExampleComponent, _dropdown_examples_dropdown_examples_component__WEBPACK_IMPORTED_MODULE_2__.DropdownExamplesComponent, _dropdown_index_dropdown_index_component__WEBPACK_IMPORTED_MODULE_3__.DropdownIndexComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _dropdown_routing_module__WEBPACK_IMPORTED_MODULE_0__.DropdownRoutingModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_dropdown_dropdown_module_ts.js.map