"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_form-input_form-input_module_ts"],{

/***/ 1239:
/*!*********************************************************************************!*\
  !*** ./src/app/form-input/form-input-calendar/form-input-calendar.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputCalendarExampleComponent": () => (/* binding */ FormInputCalendarExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/form-input.component */ 8012);


class FormInputCalendarExampleComponent {
}
FormInputCalendarExampleComponent.ɵfac = function FormInputCalendarExampleComponent_Factory(t) { return new (t || FormInputCalendarExampleComponent)(); };
FormInputCalendarExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormInputCalendarExampleComponent, selectors: [["it-form-input-calendar-example"]], decls: 8, vars: 0, consts: [[1, "bd-example"], [1, "mb-5"], ["id", "interactive-input-calendar-0", "type", "date", "name", "interactive-input-calendar-example-0", "label", "Datepicker"]], template: function FormInputCalendarExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Input Calendario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Clicca sull\u2019icona a destra per visualizzare il datepicker.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "it-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_0__.FormInputComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWlucHV0LWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4394:
/*!*******************************************************************************!*\
  !*** ./src/app/form-input/form-input-example/form-input-example.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputExampleComponent": () => (/* binding */ FormInputExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/form-input.component */ 8012);





class FormInputExampleComponent {
    constructor() {
        this.i = 0;
        this.readOnly = false;
        this.disabled = false;
        this.type = 'text';
        this.icon = 'it-pencil';
        this.value = 'myNgModel';
        this._hasPlaceholder = true;
        this._hasLabel = true;
        this._hasNote = false;
        this._autoCompleteData = [
            {
                value: 'Luisa Neri',
                avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',
                avatarAltText: 'Luisa Neri',
                label: 'Profilo'
            },
            {
                value: 'Cristian Borelli',
                avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',
                avatarAltText: 'Cristian Borelli',
                label: 'Profilo'
            },
            {
                value: 'Andrea Stagi',
                avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',
                avatarAltText: 'Andrea Stagi',
                label: 'Profilo'
            },
            {
                value: 'Comune di Firenze',
                icon: 'it-pa',
                link: 'https://www.comune.fi.it/',
                label: 'Comune'
            },
            {
                value: 'Italia',
                avatarSrcPath: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',
                avatarAltText: 'Italia'
            }
        ];
    }
    get placeholder() {
        return this.hasPlaceholder ? 'Testo di esempio' : '';
    }
    get label() {
        return this.hasLabel ? 'Label dell\'input' : '';
    }
    get note() {
        return this.hasNote ? 'non condivideremo mai i tuoi dati' : '';
    }
    get hasPlaceholder() {
        return this._hasPlaceholder;
    }
    set hasPlaceholder(value) {
        this._hasPlaceholder = value;
    }
    get hasLabel() {
        return this._hasLabel;
    }
    set hasLabel(value) {
        this._hasLabel = value;
    }
    get hasNote() {
        return this._hasNote;
    }
    set hasNote(value) {
        this._hasNote = value;
    }
    get autoCompleteData() {
        return this._autoCompleteData;
    }
    set autoCompleteData(value) {
        this._autoCompleteData = value;
    }
}
FormInputExampleComponent.ɵfac = function FormInputExampleComponent_Factory(t) { return new (t || FormInputExampleComponent)(); };
FormInputExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FormInputExampleComponent, selectors: [["it-form-input-example"]], decls: 33, vars: 15, consts: [[1, "bd-example"], [1, "row"], [1, "col-4"], ["id", "interactive-input-0", "name", "interactive-input-example-1", 3, "label", "placeholder", "disabled", "readonly", "type", "ngModel", "note", "autoCompleteData", "enablePasswordStrengthMeter", "ngModelChange"], [1, "form-check", "col-6"], ["label", "Disabled", "id", "disabled-checkbox", 3, "ngModel", "ngModelChange"], ["label", "Readonly", "id", "readonly-checkbox", 3, "ngModel", "ngModelChange"], ["label", "Label", "id", "has-label-checkbox", 3, "ngModel", "ngModelChange"], [1, "col-auto"], ["label", "Placeholder", "id", "has-placeholder-checkbox", 3, "ngModel", "ngModelChange"], ["label", "Note", "id", "has-note-checkbox", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["id", "radio-text", "name", "text", "value", "text", "label", "text"], ["id", "radio-email", "name", "email", "value", "email", "label", "email"], ["id", "radio-password", "name", "password", "value", "password", "label", "password"], ["id", "radio-number", "name", "number", "value", "number", "label", "number"], ["id", "radio-time", "name", "time", "value", "time", "label", "time"], ["id", "radio-search", "name", "search", "value", "search", "label", "search"]], template: function FormInputExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Interazione con Form Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Elementi e stili per la creazione di input accessibili e responsivi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "it-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputExampleComponent_Template_it_input_ngModelChange_7_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "div", 4)(10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Opzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 1)(13, "div", 2)(14, "it-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputExampleComponent_Template_it_checkbox_ngModelChange_14_listener($event) { return ctx.disabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "it-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputExampleComponent_Template_it_checkbox_ngModelChange_15_listener($event) { return ctx.readOnly = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "it-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputExampleComponent_Template_it_checkbox_ngModelChange_16_listener($event) { return ctx.hasLabel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8)(18, "it-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputExampleComponent_Template_it_checkbox_ngModelChange_18_listener($event) { return ctx.hasPlaceholder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "it-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputExampleComponent_Template_it_checkbox_ngModelChange_19_listener($event) { return ctx.hasNote = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4)(21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Tipo Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "it-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputExampleComponent_Template_it_radio_group_ngModelChange_23_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 1)(25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "it-radio-button", 12)(27, "it-radio-button", 13)(28, "it-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "it-radio-button", 15)(31, "it-radio-button", 16)(32, "it-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx.label)("placeholder", ctx.placeholder)("disabled", ctx.disabled)("readonly", ctx.readOnly)("type", ctx.type)("ngModel", ctx.value)("note", ctx.note)("autoCompleteData", ctx.autoCompleteData)("enablePasswordStrengthMeter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.readOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.hasLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.hasPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.hasNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.type);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioGroupDirective, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent, _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__.FormInputComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWlucHV0LWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6555:
/*!*********************************************************************************!*\
  !*** ./src/app/form-input/form-input-examples/form-input-examples.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputExamplesComponent": () => (/* binding */ FormInputExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _form_input_example_form_input_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-input-example/form-input-example.component */ 4394);
/* harmony import */ var _form_input_icon_form_input_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-input-icon/form-input-icon.component */ 8166);
/* harmony import */ var _template_driven_validation_example_template_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template-driven-validation-example/template-driven-validation-example.component */ 9169);
/* harmony import */ var _model_driven_validation_example_model_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model-driven-validation-example/model-driven-validation-example.component */ 434);
/* harmony import */ var _form_input_number_form_input_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-input-number/form-input-number.component */ 7496);
/* harmony import */ var _form_input_calendar_form_input_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-input-calendar/form-input-calendar.component */ 1239);








class FormInputExamplesComponent {
}
FormInputExamplesComponent.ɵfac = function FormInputExamplesComponent_Factory(t) { return new (t || FormInputExamplesComponent)(); };
FormInputExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FormInputExamplesComponent, selectors: [["it-form-input-examples"]], decls: 12, vars: 0, consts: [["html", "\n  \n  \n<h3>Interazione con Form Input</h3>\n<p>Elementi e stili per la creazione di input accessibili e responsivi.</p>\n\n<div class=\"bd-example\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <it-input id=\"interactive-input-0\" name=\"interactive-input-example-1\" \n        [label]=\"label\" \n        [placeholder]=\"placeholder\" \n        [disabled]=\"disabled\" \n        [readonly]=\"readOnly\" \n        [type]=\"type\" \n        [(ngModel)]=\"value\"\n        [note]=\"note\" \n        [autoCompleteData]=\"autoCompleteData\" \n        [enablePasswordStrengthMeter]=\"true\">\n      </it-input>\n    </div>\n  </div>\n  \n\n  <div class=\"row\">\n    <div class=\"form-check col-6\">\n      <h5>Opzioni</h5>\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <it-checkbox [(ngModel)]=\"disabled\" label=\"Disabled\" id=\"disabled-checkbox\"></it-checkbox>\n          <it-checkbox [(ngModel)]=\"readOnly\" label=\"Readonly\" id=\"readonly-checkbox\"></it-checkbox>\n          <it-checkbox [(ngModel)]=\"hasLabel\" label=\"Label\" id=\"has-label-checkbox\"></it-checkbox>\n        </div>\n        <div class=\"col-auto\">\n          <it-checkbox [(ngModel)]=\"hasPlaceholder\" label=\"Placeholder\" id=\"has-placeholder-checkbox\"></it-checkbox>\n          <it-checkbox [(ngModel)]=\"hasNote\" label=\"Note\" id=\"has-note-checkbox\"></it-checkbox>\n        </div>\n\n      </div>\n\n    \n      </div>\n    <div class=\"form-check col-6\">\n      <h5>Tipo Input</h5>\n      <it-radio-group [(ngModel)]=\"type\">\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <it-radio-button id=\"radio-text\" name=\"text\" value=\"text\" label=\"text\"></it-radio-button>\n          <it-radio-button id=\"radio-email\" name=\"email\" value=\"email\" label=\"email\"></it-radio-button>\n          <it-radio-button id=\"radio-password\" name=\"password\" value=\"password\" label=\"password\"></it-radio-button>\n        </div>\n        <div class=\"col-auto\">\n          <it-radio-button id=\"radio-number\" name=\"number\" value=\"number\" label=\"number\"></it-radio-button>\n          <it-radio-button id=\"radio-time\" name=\"time\" value=\"time\" label=\"time\"></it-radio-button>\n          <it-radio-button id=\"radio-search\" name=\"search\" value=\"search\" label=\"search\"></it-radio-button>\n        </div>\n      </div>\n      </it-radio-group>\n    </div>\n  </div>\n\n</div>\n\n", "typescript", "\n  \n  import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { AutoCompleteItem } from 'projects/design-angular-kit/src/public_api';\n\n@Component({\n  selector: 'it-form-input-example',\n  templateUrl: './form-input-example.component.html',\n  styleUrls: ['./form-input-example.component.scss'],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class FormInputExampleComponent {\n  i = 0;\n  readOnly = false;\n  disabled = false;\n  type = 'text';\n  icon = 'it-pencil';\n  value = 'myNgModel';\n\n  get placeholder() {\n    return this.hasPlaceholder ? 'Testo di esempio' : '';\n  }\n\n  get label() {\n    return this.hasLabel ? 'Label dell\\'input' : '';\n  }\n\n  get note() {\n    return this.hasNote ? 'non condivideremo mai i tuoi dati' : '';\n  }\n\n  get hasPlaceholder(): boolean {\n    return this._hasPlaceholder;\n  }\n  set hasPlaceholder(value: boolean) {\n    this._hasPlaceholder = value;\n  }\n  private _hasPlaceholder = true;\n\n  get hasLabel(): boolean {\n    return this._hasLabel;\n  }\n  set hasLabel(value: boolean) {\n    this._hasLabel = value;\n  }\n  private _hasLabel = true;\n\n  get hasNote(): boolean {\n    return this._hasNote;\n  }\n  set hasNote(value: boolean) {\n    this._hasNote = value;\n  }\n  private _hasNote = false;\n\n  get autoCompleteData(): AutoCompleteItem[] {\n    return this._autoCompleteData;\n  }\n  set autoCompleteData(value: AutoCompleteItem[]) {\n    this._autoCompleteData = value;\n  }\n  private _autoCompleteData: AutoCompleteItem[] = [\n    {\n      value: 'Luisa Neri',\n      avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',\n      avatarAltText: 'Luisa Neri',\n      label: 'Profilo'\n    }, \n    {\n      value: 'Cristian Borelli',\n      avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',\n      avatarAltText: 'Cristian Borelli',\n      label: 'Profilo'\n    },\n    {\n      value: 'Andrea Stagi',\n      avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',\n      avatarAltText: 'Andrea Stagi',\n      label: 'Profilo'\n    },\n    {\n      value: 'Comune di Firenze',\n      icon: 'it-pa',\n      link: 'https://www.comune.fi.it/',\n      label: 'Comune'\n    },\n    {\n      value: 'Italia',\n      avatarSrcPath: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',\n      avatarAltText: 'Italia'\n    }\n  ];\n\n}\n\n\n"], ["html", "\n  \n  <h3>Input Numerico</h3>\n<div class=\"bd-example\">\n  <h5>Limiti e Step</h5>\n  <p class = \"mb-5\">Aggiungendo le propriet\u00E0 \"min\", \"max\" e \"step\" all\u2019input \u00E8 possibile \n                    limitare il valore minimo e massimo del campo e decidere di quanto varier\u00E0 a ogni click sui pulsanti.</p>\n  \n  <!-- Input numerico con min, max e step -->\n  <it-input id=\"interactive-input-number-0\" \n            type=\"number\" \n            name=\"interactive-input-number-example-0\" \n            label=\"Min, Max & Step\"\n            min=\"10\" max=\"100\" step=\"5\"\n  ></it-input>\n\n  \n\n  <h5>Valuta</h5>\n  <p class = \"mb-5\">Per anteporre il simbolo della valuta in Euro, aggiungere la propriet\u00E0 \"currency\"</p>\n  \n  <!-- Input numerico con valuta -->\n  <it-input id=\"interactive-input-number-1\" \n            type=\"number\" \n            name=\"interactive-input-number-example-1\" \n            label=\"Currency\" \n            currency\n  ></it-input>\n\n\n  <h5>Percentuale</h5>\n  <p class = \"mb-5\">Per anteporre il simbolo della percentuale in Euro, aggiungere la propriet\u00E0 \"percentage\"</p>\n  \n  <!-- Input numerico con percentuale -->\n  <it-input id=\"interactive-input-number-2\" \n            type=\"number\" \n            name=\"interactive-input-number-example-2\" \n            label=\"Percentage\" \n            percentage\n  ></it-input>\n\n\n  <h5>Ridimensionamento</h5>\n  <p class = \"mb-5\">\u00C8 possibile far s\u00EC che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso.\n                    Basta aggiungere la propriet\u00E0 \"adaptive\"</p>\n  \n  <!-- Input numerico con ridimensionamento automatico -->\n  <it-input id=\"interactive-input-number-3\" \n            type=\"number\" \n            name=\"interactive-input-number-example-3\" \n            label=\"Adattivo\" \n            adaptive\n            [(ngModel)]=\"adaptiveInputValue\" \n  ></it-input>\n\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-form-input-number-example',\n  templateUrl: './form-input-number.component.html',\n  styleUrls: ['./form-input-number.component.scss']\n})\nexport class FormInputNumberExampleComponent {\n  adaptiveInputValue: number = 99999;\n}\n\n\n"], ["html", "\n  \n  \n<h3>Input Calendario</h3>\n<div class=\"bd-example\">\n\n  <h5>Datepicker</h5>\n  <p class = \"mb-5\">Clicca sull\u2019icona a destra per visualizzare il datepicker.</p>\n  \n  <it-input id=\"interactive-input-calendar-0\" \n            type=\"date\" \n            name=\"interactive-input-calendar-example-0\" \n            label=\"Datepicker\" \n  ></it-input>\n\n</div>\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-form-input-calendar-example',\n  templateUrl: './form-input-calendar.component.html',\n  styleUrls: ['./form-input-calendar.component.scss']\n})\nexport class FormInputCalendarExampleComponent {}\n\n\n"], ["html", "\n  \n  \n<h3>Input con icona o pulsanti</h3>\n<div class=\"bd-example\">\n  <div class=\"row\">\n    \n    <div class=\"col-5\">\n\n      <!-- Input con icona a sinistra tramite attributo -->\n    <it-input id=\"interactive-input-icon-0\" \n              name=\"interactive-input-icon-example-0\" \n              [label]=\"label\" \n              [icon] = \"icon\">\n    </it-input>\n\n      <!-- Input con icona a sinistra tramite direttiva itTextSuffix -->\n    <it-input id=\"interactive-input-icon-1\" name=\"interactive-input-icon-example-1\" [label]=\"label\">\n      <it-icon *ngIf = \"icon\" size=\"icon-sm\" [icon]=\"icon\" itTextSuffix></it-icon>\n    </it-input>\n\n      <!-- Input con icona a sinistra tramite direttiva itTextSuffix e bottone a destra tramite direttiva itSuffix-->\n    <it-input id=\"interactive-input-icon-2\" name=\"interactive-input-icon-example-2\" [label]=\"label\">\n      <it-icon *ngIf = \"icon\" size=\"icon-sm\" [icon]=\"icon\" itTextPrefix></it-icon>\n      <button class = \"btn btn-primary\" itSuffix>Invia</button>\n    </it-input>\n    </div>\n\n\n    <div class=\"form-check col-auto offset-1\">\n      <h5>Icona</h5>\n      <it-radio-group [(ngModel)]=\"icon\">\n        <it-radio-button id=\"radio-none\" name=\"none\" [value]=\"undefined\" label=\"Nessuna\"></it-radio-button>\n        <it-radio-button id=\"radio-pencil\" name=\"it-pencil\" value=\"it-pencil\" label=\"it-pencil\"></it-radio-button>\n        <it-radio-button id=\"radio-link\" name=\"it-link\" value=\"it-link\" label=\"it-link\"></it-radio-button>\n        <it-radio-button id=\"radio-star\" name=\"it-star-outline\" value=\"it-star-outline\" label=\"it-star-outline\"></it-radio-button>\n      </it-radio-group>\n  </div>\n  </div>\n\n\n</div>\n    \n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-form-input-icon-example',\n  templateUrl: './form-input-icon.component.html',\n  styleUrls: ['./form-input-icon.component.scss']\n})\nexport class FormInputIconExampleComponent {\n  i = 0;\n  type = 'text';\n  icon = 'it-pencil';\n  value = '';\n  label = \"Etichetta di esempio\";\n}\n\n\n"], ["html", "\n  \n  \n<h3>Interazione con Form Input dotato di validazione Template Driven</h3>\n\n<div class=\"bd-example\">\n  <form #myForm=\"ngForm\">\n    <it-input [(ngModel)]=\"value\" \n              name=\"myInput\" \n              required \n              minlength=\"3\" \n              maxlength=\"10\" \n              pattern=\"[ab]+\">\n    </it-input>\n\n    <p id=\"tdv-required\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.required\">Il campo \u00E8 obbligatorio</p>\n\n    <p id=\"tdv-minlength\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.minlength\">deve essere almeno di lunghezza 3</p>\n\n    <p id=\"tdv-maxlength\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.maxlength\">deve essere massimo di lunghezza 10</p>\n\n    <p id=\"tdv-pattern\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.pattern\">non corrisponde al pattern [ab]+</p>\n\n    <button itButton [disabled]=\"!myForm.valid\" (click)=\"save(myForm)\">Salva</button>\n    \n    <div *ngIf=\"savedValue\">Salvato `/{/{savedValue/}/}`</div>\n  </form>\n</div>\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\nimport { NgForm } from '@angular/forms';\n\n@Component({\n  selector: 'it-template-driven-validation-example',\n  templateUrl: './template-driven-validation-example.component.html',\n  styleUrls: ['./template-driven-validation-example.component.scss']\n})\nexport class TemplateDrivenValidationExampleComponent {\n  value = '';\n  savedValue = undefined;\n\n  save(ngForm: NgForm) {\n    this.savedValue = ngForm.value.myInput;\n  }\n}\n\n\n"], ["html", "\n  \n  \n<h3>Interazione con Form Input dotato di validazione Model Driven</h3>\n\n<div class=\"bd-example\">\n  <form [formGroup]=\"myForm\">\n    <it-input formControlName=\"myInput\"></it-input>\n    \n    <p id=\"mdv-required\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.required\">Il campo \u00E8 obbligatorio</p>\n\n    <p id=\"mdv-minlength\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.minlength\">deve essere almeno di lunghezza 3</p>\n\n    <p id=\"mdv-maxlength\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.maxlength\">deve essere massimo di lunghezza 10</p>\n\n    <p id=\"mdv-pattern\" class=\"error\"\n        *ngIf=\"myForm.controls.myInput?.errors?.pattern\">non corrisponde al pattern [ab]+</p>\n\n    <button itButton [disabled]=\"!myForm.valid\" (click)=\"save(myForm)\">Salva</button>\n\n    <div *ngIf=\"savedValue\">Salvato `/{/{savedValue/}/}`</div>\n  </form>\n</div>\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\nimport { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';\n\n@Component({\n  selector: 'it-model-driven-validation-example',\n  templateUrl: './model-driven-validation-example.component.html',\n  styleUrls: ['./model-driven-validation-example.component.scss']\n})\nexport class ModelDrivenValidationExampleComponent {\n\n  myForm: UntypedFormGroup;\n\n  constructor(private _fb: UntypedFormBuilder) {\n    const validators = [\n      Validators.required,\n      Validators.minLength(3),\n      Validators.maxLength(10),\n      Validators.pattern('[ab]+')\n    ];\n    this.myForm = this._fb.group({\n      myInput: ['', validators]\n    });\n  }\n\n  value = '';\n  savedValue = undefined;\n\n  save(form: UntypedFormGroup) {\n    this.savedValue = form.value.myInput;\n  }\n\n}\n\n\n"]], template: function FormInputExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "it-form-input-example")(1, "it-source-display", 0)(2, "it-form-input-number-example")(3, "it-source-display", 1)(4, "it-form-input-calendar-example")(5, "it-source-display", 2)(6, "it-form-input-icon-example")(7, "it-source-display", 3)(8, "it-template-driven-validation-example")(9, "it-source-display", 4)(10, "it-model-driven-validation-example")(11, "it-source-display", 5);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _form_input_example_form_input_example_component__WEBPACK_IMPORTED_MODULE_1__.FormInputExampleComponent, _form_input_icon_form_input_icon_component__WEBPACK_IMPORTED_MODULE_2__.FormInputIconExampleComponent, _template_driven_validation_example_template_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_3__.TemplateDrivenValidationExampleComponent, _model_driven_validation_example_model_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_4__.ModelDrivenValidationExampleComponent, _form_input_number_form_input_number_component__WEBPACK_IMPORTED_MODULE_5__.FormInputNumberExampleComponent, _form_input_calendar_form_input_calendar_component__WEBPACK_IMPORTED_MODULE_6__.FormInputCalendarExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWlucHV0LWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8166:
/*!*************************************************************************!*\
  !*** ./src/app/form-input/form-input-icon/form-input-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputIconExampleComponent": () => (/* binding */ FormInputIconExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/radio/radio.component */ 3320);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/form-input.component */ 8012);
/* harmony import */ var _projects_design_angular_kit_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/icon/icon.component */ 9132);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_it_suffix_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/it-suffix.directive */ 3988);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/it-text-prefix.directive */ 6441);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/it-text-suffix.directive */ 2936);









function FormInputIconExampleComponent_it_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "it-icon", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r0.icon);
} }
function FormInputIconExampleComponent_it_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "it-icon", 16);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r1.icon);
} }
class FormInputIconExampleComponent {
    constructor() {
        this.i = 0;
        this.type = 'text';
        this.icon = 'it-pencil';
        this.value = '';
        this.label = "Etichetta di esempio";
    }
}
FormInputIconExampleComponent.ɵfac = function FormInputIconExampleComponent_Factory(t) { return new (t || FormInputIconExampleComponent)(); };
FormInputIconExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FormInputIconExampleComponent, selectors: [["it-form-input-icon-example"]], decls: 20, vars: 8, consts: [[1, "bd-example"], [1, "row"], [1, "col-5"], ["id", "interactive-input-icon-0", "name", "interactive-input-icon-example-0", 3, "label", "icon"], ["id", "interactive-input-icon-1", "name", "interactive-input-icon-example-1", 3, "label"], ["size", "icon-sm", "itTextSuffix", "", 3, "icon", 4, "ngIf"], ["id", "interactive-input-icon-2", "name", "interactive-input-icon-example-2", 3, "label"], ["size", "icon-sm", "itTextPrefix", "", 3, "icon", 4, "ngIf"], ["itSuffix", "", 1, "btn", "btn-primary"], [1, "form-check", "col-auto", "offset-1"], [3, "ngModel", "ngModelChange"], ["id", "radio-none", "name", "none", "label", "Nessuna", 3, "value"], ["id", "radio-pencil", "name", "it-pencil", "value", "it-pencil", "label", "it-pencil"], ["id", "radio-link", "name", "it-link", "value", "it-link", "label", "it-link"], ["id", "radio-star", "name", "it-star-outline", "value", "it-star-outline", "label", "it-star-outline"], ["size", "icon-sm", "itTextSuffix", "", 3, "icon"], ["size", "icon-sm", "itTextPrefix", "", 3, "icon"]], template: function FormInputIconExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input con icona o pulsanti");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "it-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "it-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FormInputIconExampleComponent_it_icon_7_Template, 1, 1, "it-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "it-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, FormInputIconExampleComponent_it_icon_9_Template, 1, 1, "it-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Invia");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Icona");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "it-radio-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FormInputIconExampleComponent_Template_it_radio_group_ngModelChange_15_listener($event) { return ctx.icon = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "it-radio-button", 11)(17, "it-radio-button", 12)(18, "it-radio-button", 13)(19, "it-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx.label)("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", undefined);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_0__.RadioGroupDirective, _projects_design_angular_kit_src_lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_0__.RadioButtonComponent, _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__.FormInputComponent, _projects_design_angular_kit_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _projects_design_angular_kit_src_lib_form_input_it_suffix_directive__WEBPACK_IMPORTED_MODULE_3__.ItSuffixDirective, _projects_design_angular_kit_src_lib_form_input_it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_4__.ItTextPrefixDirective, _projects_design_angular_kit_src_lib_form_input_it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_5__.ItTextSuffixDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWlucHV0LWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5468:
/*!***************************************************************************!*\
  !*** ./src/app/form-input/form-input-index/form-input-index.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputIndexComponent": () => (/* binding */ FormInputIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _form_input_examples_form_input_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-input-examples/form-input-examples.component */ 6555);






class FormInputIndexComponent {
    constructor() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'FormInputComponent');
    }
}
FormInputIndexComponent.ɵfac = function FormInputIndexComponent_Factory(t) { return new (t || FormInputIndexComponent)(); };
FormInputIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FormInputIndexComponent, selectors: [["it-form-input-index"]], decls: 11, vars: 2, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function FormInputIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Form Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Il componente Form Input utilizzabile in un form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "it-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "it-form-input-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.component.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.component);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _form_input_examples_form_input_examples_component__WEBPACK_IMPORTED_MODULE_4__.FormInputExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWlucHV0LWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7496:
/*!*****************************************************************************!*\
  !*** ./src/app/form-input/form-input-number/form-input-number.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputNumberExampleComponent": () => (/* binding */ FormInputNumberExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/form-input.component */ 8012);



class FormInputNumberExampleComponent {
    constructor() {
        this.adaptiveInputValue = 99999;
    }
}
FormInputNumberExampleComponent.ɵfac = function FormInputNumberExampleComponent_Factory(t) { return new (t || FormInputNumberExampleComponent)(); };
FormInputNumberExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormInputNumberExampleComponent, selectors: [["it-form-input-number-example"]], decls: 23, vars: 1, consts: [[1, "bd-example"], [1, "mb-5"], ["id", "interactive-input-number-0", "type", "number", "name", "interactive-input-number-example-0", "label", "Min, Max & Step", "min", "10", "max", "100", "step", "5"], ["id", "interactive-input-number-1", "type", "number", "name", "interactive-input-number-example-1", "label", "Currency", "currency", ""], ["id", "interactive-input-number-2", "type", "number", "name", "interactive-input-number-example-2", "label", "Percentage", "percentage", ""], ["id", "interactive-input-number-3", "type", "number", "name", "interactive-input-number-example-3", "label", "Adattivo", "adaptive", "", 3, "ngModel", "ngModelChange"]], template: function FormInputNumberExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Input Numerico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Limiti e Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Aggiungendo le propriet\u00E0 \"min\", \"max\" e \"step\" all\u2019input \u00E8 possibile limitare il valore minimo e massimo del campo e decidere di quanto varier\u00E0 a ogni click sui pulsanti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "it-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Valuta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Per anteporre il simbolo della valuta in Euro, aggiungere la propriet\u00E0 \"currency\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "it-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Percentuale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Per anteporre il simbolo della percentuale in Euro, aggiungere la propriet\u00E0 \"percentage\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "it-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ridimensionamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u00C8 possibile far s\u00EC che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Basta aggiungere la propriet\u00E0 \"adaptive\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "it-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormInputNumberExampleComponent_Template_it_input_ngModelChange_22_listener($event) { return ctx.adaptiveInputValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.adaptiveInputValue);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_0__.FormInputComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWlucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3572:
/*!*********************************************************!*\
  !*** ./src/app/form-input/form-input-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputRoutingModule": () => (/* binding */ FormInputRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _form_input_index_form_input_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-input-index/form-input-index.component */ 5468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _form_input_index_form_input_index_component__WEBPACK_IMPORTED_MODULE_0__.FormInputIndexComponent }
];
class FormInputRoutingModule {
}
FormInputRoutingModule.ɵfac = function FormInputRoutingModule_Factory(t) { return new (t || FormInputRoutingModule)(); };
FormInputRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormInputRoutingModule });
FormInputRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormInputRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4304:
/*!*************************************************!*\
  !*** ./src/app/form-input/form-input.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputModule": () => (/* binding */ FormInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _form_input_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-input-routing.module */ 3572);
/* harmony import */ var _form_input_example_form_input_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-input-example/form-input-example.component */ 4394);
/* harmony import */ var _form_input_examples_form_input_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-input-examples/form-input-examples.component */ 6555);
/* harmony import */ var _form_input_index_form_input_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-input-index/form-input-index.component */ 5468);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _template_driven_validation_example_template_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template-driven-validation-example/template-driven-validation-example.component */ 9169);
/* harmony import */ var _model_driven_validation_example_model_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model-driven-validation-example/model-driven-validation-example.component */ 434);
/* harmony import */ var _form_input_icon_form_input_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-input-icon/form-input-icon.component */ 8166);
/* harmony import */ var _form_input_number_form_input_number_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-input-number/form-input-number.component */ 7496);
/* harmony import */ var _form_input_calendar_form_input_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-input-calendar/form-input-calendar.component */ 1239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);














class FormInputModule {
}
FormInputModule.ɵfac = function FormInputModule_Factory(t) { return new (t || FormInputModule)(); };
FormInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: FormInputModule });
FormInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _form_input_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormInputRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](FormInputModule, { declarations: [_form_input_example_form_input_example_component__WEBPACK_IMPORTED_MODULE_1__.FormInputExampleComponent,
        _form_input_icon_form_input_icon_component__WEBPACK_IMPORTED_MODULE_8__.FormInputIconExampleComponent,
        _form_input_examples_form_input_examples_component__WEBPACK_IMPORTED_MODULE_2__.FormInputExamplesComponent,
        _form_input_index_form_input_index_component__WEBPACK_IMPORTED_MODULE_3__.FormInputIndexComponent,
        _template_driven_validation_example_template_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_6__.TemplateDrivenValidationExampleComponent,
        _model_driven_validation_example_model_driven_validation_example_component__WEBPACK_IMPORTED_MODULE_7__.ModelDrivenValidationExampleComponent,
        _form_input_number_form_input_number_component__WEBPACK_IMPORTED_MODULE_9__.FormInputNumberExampleComponent,
        _form_input_calendar_form_input_calendar_component__WEBPACK_IMPORTED_MODULE_10__.FormInputCalendarExampleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_5__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _form_input_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormInputRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 434:
/*!*********************************************************************************************************!*\
  !*** ./src/app/form-input/model-driven-validation-example/model-driven-validation-example.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelDrivenValidationExampleComponent": () => (/* binding */ ModelDrivenValidationExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/button/button.directive */ 9103);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/form-input.component */ 8012);






function ModelDrivenValidationExampleComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Il campo \u00E8 obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ModelDrivenValidationExampleComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "deve essere almeno di lunghezza 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ModelDrivenValidationExampleComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "deve essere massimo di lunghezza 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ModelDrivenValidationExampleComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "non corrisponde al pattern [ab]+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ModelDrivenValidationExampleComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Salvato `", ctx_r4.savedValue, "`");
} }
class ModelDrivenValidationExampleComponent {
    constructor(_fb) {
        this._fb = _fb;
        this.value = '';
        this.savedValue = undefined;
        const validators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[ab]+')
        ];
        this.myForm = this._fb.group({
            myInput: ['', validators]
        });
    }
    save(form) {
        this.savedValue = form.value.myInput;
    }
}
ModelDrivenValidationExampleComponent.ɵfac = function ModelDrivenValidationExampleComponent_Factory(t) { return new (t || ModelDrivenValidationExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder)); };
ModelDrivenValidationExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModelDrivenValidationExampleComponent, selectors: [["it-model-driven-validation-example"]], decls: 12, vars: 7, consts: [[1, "bd-example"], [3, "formGroup"], ["formControlName", "myInput"], ["id", "mdv-required", "class", "error", 4, "ngIf"], ["id", "mdv-minlength", "class", "error", 4, "ngIf"], ["id", "mdv-maxlength", "class", "error", 4, "ngIf"], ["id", "mdv-pattern", "class", "error", 4, "ngIf"], ["itButton", "", 3, "disabled", "click"], [4, "ngIf"], ["id", "mdv-required", 1, "error"], ["id", "mdv-minlength", 1, "error"], ["id", "mdv-maxlength", 1, "error"], ["id", "mdv-pattern", 1, "error"]], template: function ModelDrivenValidationExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Interazione con Form Input dotato di validazione Model Driven");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "it-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ModelDrivenValidationExampleComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ModelDrivenValidationExampleComponent_p_6_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ModelDrivenValidationExampleComponent_p_7_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ModelDrivenValidationExampleComponent_p_8_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModelDrivenValidationExampleComponent_Template_button_click_9_listener() { return ctx.save(ctx.myForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Salva");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ModelDrivenValidationExampleComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myForm.controls.myInput == null ? null : ctx.myForm.controls.myInput.errors == null ? null : ctx.myForm.controls.myInput.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myForm.controls.myInput == null ? null : ctx.myForm.controls.myInput.errors == null ? null : ctx.myForm.controls.myInput.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myForm.controls.myInput == null ? null : ctx.myForm.controls.myInput.errors == null ? null : ctx.myForm.controls.myInput.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myForm.controls.myInput == null ? null : ctx.myForm.controls.myInput.errors == null ? null : ctx.myForm.controls.myInput.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.myForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.savedValue);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_0__.ItButtonDirective, _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__.FormInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbC1kcml2ZW4tdmFsaWRhdGlvbi1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9169:
/*!***************************************************************************************************************!*\
  !*** ./src/app/form-input/template-driven-validation-example/template-driven-validation-example.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateDrivenValidationExampleComponent": () => (/* binding */ TemplateDrivenValidationExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/button/button.directive */ 9103);
/* harmony import */ var _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/form-input/form-input.component */ 8012);





function TemplateDrivenValidationExampleComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Il campo \u00E8 obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TemplateDrivenValidationExampleComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "deve essere almeno di lunghezza 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TemplateDrivenValidationExampleComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "deve essere massimo di lunghezza 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TemplateDrivenValidationExampleComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "non corrisponde al pattern [ab]+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TemplateDrivenValidationExampleComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Salvato `", ctx_r5.savedValue, "`");
} }
class TemplateDrivenValidationExampleComponent {
    constructor() {
        this.value = '';
        this.savedValue = undefined;
    }
    save(ngForm) {
        this.savedValue = ngForm.value.myInput;
    }
}
TemplateDrivenValidationExampleComponent.ɵfac = function TemplateDrivenValidationExampleComponent_Factory(t) { return new (t || TemplateDrivenValidationExampleComponent)(); };
TemplateDrivenValidationExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TemplateDrivenValidationExampleComponent, selectors: [["it-template-driven-validation-example"]], decls: 13, vars: 7, consts: [[1, "bd-example"], ["myForm", "ngForm"], ["name", "myInput", "required", "", "minlength", "3", "maxlength", "10", "pattern", "[ab]+", 3, "ngModel", "ngModelChange"], ["id", "tdv-required", "class", "error", 4, "ngIf"], ["id", "tdv-minlength", "class", "error", 4, "ngIf"], ["id", "tdv-maxlength", "class", "error", 4, "ngIf"], ["id", "tdv-pattern", "class", "error", 4, "ngIf"], ["itButton", "", 3, "disabled", "click"], [4, "ngIf"], ["id", "tdv-required", 1, "error"], ["id", "tdv-minlength", 1, "error"], ["id", "tdv-maxlength", 1, "error"], ["id", "tdv-pattern", 1, "error"]], template: function TemplateDrivenValidationExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Interazione con Form Input dotato di validazione Template Driven");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "form", null, 1)(5, "it-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TemplateDrivenValidationExampleComponent_Template_it_input_ngModelChange_5_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TemplateDrivenValidationExampleComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TemplateDrivenValidationExampleComponent_p_7_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TemplateDrivenValidationExampleComponent_p_8_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TemplateDrivenValidationExampleComponent_p_9_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TemplateDrivenValidationExampleComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.save(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Salva");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TemplateDrivenValidationExampleComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.controls.myInput == null ? null : _r0.controls.myInput.errors == null ? null : _r0.controls.myInput.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.controls.myInput == null ? null : _r0.controls.myInput.errors == null ? null : _r0.controls.myInput.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.controls.myInput == null ? null : _r0.controls.myInput.errors == null ? null : _r0.controls.myInput.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.controls.myInput == null ? null : _r0.controls.myInput.errors == null ? null : _r0.controls.myInput.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.savedValue);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_0__.ItButtonDirective, _projects_design_angular_kit_src_lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__.FormInputComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1kcml2ZW4tdmFsaWRhdGlvbi1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_form-input_form-input_module_ts.js.map