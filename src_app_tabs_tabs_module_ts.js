"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 2976:
/*!*****************************************************************************!*\
  !*** ./src/app/tabs/tabs-dynamic-example/tabs-dynamic-example.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsDynamicExampleComponent": () => (/* binding */ TabsDynamicExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/button/button.directive */ 9103);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);








function TabsDynamicExampleComponent_it_tab_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "it-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TabsDynamicExampleComponent_it_tab_14_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const index_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.removeTab(index_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancella tab ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" contenuto del ", tab_r1, " tab ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.tabs.length === 1);
} }
class TabsDynamicExampleComponent {
    constructor() {
        this.tabs = ['Primo', 'Secondo', 'Terzo'];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(0);
        this.selectAfterAdding = false;
    }
    addTab(selectAfterAdding) {
        this.tabs.push('Nuovo');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabsDynamicExampleComponent.ɵfac = function TabsDynamicExampleComponent_Factory(t) { return new (t || TabsDynamicExampleComponent)(); };
TabsDynamicExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TabsDynamicExampleComponent, selectors: [["it-tabs-dynamic-example"]], decls: 15, vars: 4, consts: [[1, "bd-example"], [1, "form-group"], ["type", "number", 3, "formControl"], ["itButton", "primary", 3, "click"], ["label", "Seleziona il tab dopo averlo aggiunto", 3, "ngModel", "ngModelChange"], [1, "mt-5"], [1, "dynamic-tab-group", 3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["mat-raised-button", "", "itButton", "primary", 3, "disabled", "click"]], template: function TabsDynamicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tabs Dinamiche");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " indice del tab selezionato: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TabsDynamicExampleComponent_Template_button_click_7_listener() { return ctx.addTab(ctx.selectAfterAdding); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Aggiungi un nuovo tab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "it-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TabsDynamicExampleComponent_Template_it_checkbox_ngModelChange_9_listener($event) { return ctx.selectAfterAdding = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5)(11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Risultato tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "it-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function TabsDynamicExampleComponent_Template_it_tab_group_selectedIndexChange_13_listener($event) { return ctx.selected.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TabsDynamicExampleComponent_it_tab_14_Template, 4, 3, "it-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectAfterAdding);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selected.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_button_button_directive__WEBPACK_IMPORTED_MODULE_1__.ItButtonDirective, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLWR5bmFtaWMtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6676:
/*!*************************************************************!*\
  !*** ./src/app/tabs/tabs-example/tabs-example.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsExampleComponent": () => (/* binding */ TabsExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);






function TabsExampleComponent_it_tab_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "it-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", tab_r1.label)("icon", tab_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tab_r1.content, " ");
} }
class TabsExampleComponent {
    constructor() {
        this.isDarkTheme = false;
        this.isDisabled = false;
        this.isPill = false;
        this.tabs = [
            {
                label: 'tab1',
                content: 'content1',
                icon: 'it-file'
            },
            {
                label: 'tab2',
                content: 'content2',
                icon: 'it-calendar'
            },
            {
                label: 'tab3',
                content: 'content3',
                icon: 'it-comment'
            }
        ];
    }
}
TabsExampleComponent.ɵfac = function TabsExampleComponent_Factory(t) { return new (t || TabsExampleComponent)(); };
TabsExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TabsExampleComponent, selectors: [["it-tabs-example"]], decls: 19, vars: 7, consts: [[1, "bd-example"], [1, "example-section"], ["label", "Tema scuro", 3, "ngModel", "ngModelChange"], ["label", "Disabilita tab custom", 3, "ngModel", "ngModelChange"], ["label", "Navigazione con pill", 3, "ngModel", "ngModelChange"], [1, "mt-5", "mb-4"], [3, "dark", "pill"], [3, "label", "icon", 4, "ngFor", "ngForOf"], ["label", "custom", "icon", "it-settings", 3, "disabled"], ["it-badge", "badge"], [3, "label", "icon"]], template: function TabsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Configurazione tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0)(3, "p", 1)(4, "it-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TabsExampleComponent_Template_it_checkbox_ngModelChange_4_listener($event) { return ctx.isDarkTheme = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 1)(6, "it-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TabsExampleComponent_Template_it_checkbox_ngModelChange_6_listener($event) { return ctx.isDisabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 1)(8, "it-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TabsExampleComponent_Template_it_checkbox_ngModelChange_8_listener($event) { return ctx.isPill = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Risultato tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "it-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TabsExampleComponent_it_tab_12_Template, 2, 3, "it-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "it-tab", 8)(14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Titolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Contenuto complesso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isDarkTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isPill);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dark", ctx.isDarkTheme)("pill", ctx.isPill);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isDisabled);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _projects_design_angular_kit_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_1__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_2__.ItTabGroupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2376:
/*!***************************************************************!*\
  !*** ./src/app/tabs/tabs-examples/tabs-examples.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsExamplesComponent": () => (/* binding */ TabsExamplesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/source-display/source-display.component */ 6242);
/* harmony import */ var _tabs_example_tabs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs-example/tabs-example.component */ 6676);
/* harmony import */ var _tabs_dynamic_example_tabs_dynamic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs-dynamic-example/tabs-dynamic-example.component */ 2976);




class TabsExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabsExamplesComponent.ɵfac = function TabsExamplesComponent_Factory(t) { return new (t || TabsExamplesComponent)(); };
TabsExamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TabsExamplesComponent, selectors: [["it-tabs-examples"]], decls: 4, vars: 0, consts: [["html", "\n  \n  \n    <h3>Configurazione tabs</h3>\n    <div class=\"bd-example\">\n      <p  class=\"example-section\">\n        <it-checkbox [(ngModel)]=\"isDarkTheme\" label=\"Tema scuro\"></it-checkbox>\n      </p>\n      <p  class=\"example-section\">\n        <it-checkbox [(ngModel)]=\"isDisabled\" label=\"Disabilita tab custom\"></it-checkbox>\n      </p>\n      <p  class=\"example-section\">\n        <it-checkbox [(ngModel)]=\"isPill\" label=\"Navigazione con pill\"></it-checkbox>\n      </p>\n      \n  \n      \n      <h4 class=\"mt-5 mb-4\">Risultato tabs</h4>\n      <it-tab-group [dark]=\"isDarkTheme\" [pill]=\"isPill\">\n        <it-tab *ngFor=\"let tab of tabs\" [label]=\"tab.label\" [icon]=\"tab.icon\">\n          /{/{tab.content/}/}\n        </it-tab>\n        <it-tab label=\"custom\" [disabled]=\"isDisabled\" icon=\"it-settings\">\n          <h4>Titolo</h4>\n          <p>Contenuto complesso <span it-badge=\"badge\"></span></p>\n        </it-tab>\n      </it-tab-group>\n      \n    </div>\n\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tabs-example',\n  templateUrl: './tabs-example.component.html',\n  styleUrls: ['./tabs-example.component.scss']\n})\nexport class TabsExampleComponent {\n\n  isDarkTheme = false;\n\n  isDisabled = false;\n\n  isPill = false;\n\n  tabs = [\n    {\n      label: 'tab1',\n      content: 'content1',\n      icon: 'it-file'\n    },\n    {\n      label: 'tab2',\n      content: 'content2',\n      icon: 'it-calendar'\n    },\n    {\n      label: 'tab3',\n      content: 'content3',\n      icon: 'it-comment'\n    }\n  ];\n}\n\n\n"], ["html", "\n  \n  \n<h3>Tabs Dinamiche</h3>\n<div class=\"bd-example\">\n  <div class=\"form-group\">\n    <span> indice del tab selezionato: </span>\n    <input type=\"number\" [formControl]=\"selected\">\n  </div>\n  <button itButton=\"primary\" (click)=\"addTab(selectAfterAdding)\">\n    Aggiungi un nuovo tab\n  </button>\n  <it-checkbox [(ngModel)]=\"selectAfterAdding\" label=\"Seleziona il tab dopo averlo aggiunto\"></it-checkbox>\n\n\n<div class=\"mt-5\">\n  <h4>Risultato tabs</h4>\n  <it-tab-group [selectedIndex]=\"selected.value\"\n                (selectedIndexChange)=\"selected.setValue($event)\"\n                class=\"dynamic-tab-group\">\n    <it-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n      contenuto del /{/{tab/}/} tab\n\n      <button mat-raised-button\n              itButton=\"primary\"\n              [disabled]=\"tabs.length === 1\"\n              (click)=\"removeTab(index)\">\n        Cancella tab\n      </button>\n    </it-tab>\n  </it-tab-group>\n</div>\n\n\n\n</div>\n\n\n", "typescript", "\n  \n  import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'it-tabs-dynamic-example',\n  templateUrl: './tabs-dynamic-example.component.html',\n  styleUrls: ['./tabs-dynamic-example.component.scss']\n})\nexport class TabsDynamicExampleComponent {\n\n  tabs = ['Primo', 'Secondo', 'Terzo'];\n  selected = new UntypedFormControl(0);\n  selectAfterAdding = false;\n\n  addTab(selectAfterAdding: boolean) {\n    this.tabs.push('Nuovo');\n\n    if (selectAfterAdding) {\n      this.selected.setValue(this.tabs.length - 1);\n    }\n  }\n\n  removeTab(index: number) {\n    this.tabs.splice(index, 1);\n  }\n}\n\n\n"]], template: function TabsExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "it-tabs-example")(1, "it-source-display", 0)(2, "it-tabs-dynamic-example")(3, "it-source-display", 1);
    } }, dependencies: [_shared_source_display_source_display_component__WEBPACK_IMPORTED_MODULE_0__.SourceDisplayComponent, _tabs_example_tabs_example_component__WEBPACK_IMPORTED_MODULE_1__.TabsExampleComponent, _tabs_dynamic_example_tabs_dynamic_example_component__WEBPACK_IMPORTED_MODULE_2__.TabsDynamicExampleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3289:
/*!*********************************************************!*\
  !*** ./src/app/tabs/tabs-index/tabs-index.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsIndexComponent": () => (/* binding */ TabsIndexComponent)
/* harmony export */ });
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/documentation.json */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api-parameters/api-parameters.component */ 8340);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab.component */ 1555);
/* harmony import */ var _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/design-angular-kit/src/lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _tabs_examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabs-examples/tabs-examples.component */ 2376);






class TabsIndexComponent {
    constructor() {
        this.tabGroupComponent = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'ItTabGroupComponent');
        this.tabComponent = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_0__.components.find(component => component.name === 'ItTabComponent');
    }
}
TabsIndexComponent.ɵfac = function TabsIndexComponent_Factory(t) { return new (t || TabsIndexComponent)(); };
TabsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TabsIndexComponent, selectors: [["it-tabs-index"]], decls: 21, vars: 4, consts: [[1, "bd-title"], [1, "bd-lead"], ["label", "Descrizione"], [3, "innerHTML"], ["label", "API"], [3, "component"], ["label", "Esempi"]], template: function TabsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Il componente Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "it-tab-group")(5, "it-tab", 2)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Tab Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "it-tab", 4)(13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Tab Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "it-api-parameters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "it-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "it-tabs-examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.tabGroupComponent.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.tabComponent.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.tabGroupComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("component", ctx.tabComponent);
    } }, dependencies: [_shared_api_parameters_api_parameters_component__WEBPACK_IMPORTED_MODULE_1__.ApiParametersComponent, _projects_design_angular_kit_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _projects_design_angular_kit_src_lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_3__.ItTabGroupComponent, _tabs_examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__.TabsExamplesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsRoutingModule": () => (/* binding */ TabsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_index_tabs_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-index/tabs-index.component */ 3289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _tabs_index_tabs_index_component__WEBPACK_IMPORTED_MODULE_0__.TabsIndexComponent }
];
class TabsRoutingModule {
}
TabsRoutingModule.ɵfac = function TabsRoutingModule_Factory(t) { return new (t || TabsRoutingModule)(); };
TabsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TabsRoutingModule });
TabsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsModule": () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_example_tabs_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-example/tabs-example.component */ 6676);
/* harmony import */ var _tabs_examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-examples/tabs-examples.component */ 2376);
/* harmony import */ var _tabs_index_tabs_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-index/tabs-index.component */ 3289);
/* harmony import */ var _tabs_dynamic_example_tabs_dynamic_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-dynamic-example/tabs-dynamic-example.component */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class TabsModule {
}
TabsModule.ɵfac = function TabsModule_Factory(t) { return new (t || TabsModule)(); };
TabsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TabsModule });
TabsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TabsModule, { declarations: [_tabs_example_tabs_example_component__WEBPACK_IMPORTED_MODULE_3__.TabsExampleComponent, _tabs_examples_tabs_examples_component__WEBPACK_IMPORTED_MODULE_4__.TabsExamplesComponent, _tabs_index_tabs_index_component__WEBPACK_IMPORTED_MODULE_5__.TabsIndexComponent, _tabs_dynamic_example_tabs_dynamic_example_component__WEBPACK_IMPORTED_MODULE_6__.TabsDynamicExampleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map