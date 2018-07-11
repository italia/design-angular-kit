(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-checkbox-checkbox-module"],{

/***/ "./src/app/checkbox/checkbox-example/checkbox-example.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/checkbox/checkbox-example/checkbox-example.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-50 mt-2\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Configurazione checkbox</h4>\n\n    <p class=\"card-text\" class=\"example-section\">\n      <it-checkbox [(ngModel)]=\"checked\" label=\"Spuntato\"></it-checkbox>\n      <it-checkbox [(ngModel)]=\"disabled\" label=\"Disabilitato\"></it-checkbox>\n    </p>\n  </div>\n</div>\n\n<div class=\"card w-50 mt-2\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Risultato</h4>\n\n    <p class=\"card-text\" class=\"example-section\">\n        <it-checkbox [(ngModel)]=\"checked\" [label]=\"label\" [disabled]=\"disabled\"></it-checkbox>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/checkbox/checkbox-example/checkbox-example.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/checkbox/checkbox-example/checkbox-example.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n"

/***/ }),

/***/ "./src/app/checkbox/checkbox-example/checkbox-example.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/checkbox/checkbox-example/checkbox-example.component.ts ***!
  \*************************************************************************/
/*! exports provided: CheckboxExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxExampleComponent", function() { return CheckboxExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckboxExampleComponent = /** @class */ (function () {
    function CheckboxExampleComponent() {
        this.checked = true;
        this.label = 'Sono una checkbox';
        this.disabled = false;
    }
    CheckboxExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-checkbox-example',
            template: __webpack_require__(/*! ./checkbox-example.component.html */ "./src/app/checkbox/checkbox-example/checkbox-example.component.html"),
            styles: [__webpack_require__(/*! ./checkbox-example.component.scss */ "./src/app/checkbox/checkbox-example/checkbox-example.component.scss")]
        })
    ], CheckboxExampleComponent);
    return CheckboxExampleComponent;
}());



/***/ }),

/***/ "./src/app/checkbox/checkbox-examples/checkbox-examples.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/checkbox/checkbox-examples/checkbox-examples.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<it-checkbox-example></it-checkbox-example>\n\n<it-source-display html=\"&lt;div class=&quot;card w-50 mt-2&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;\n    &lt;h4 class=&quot;card-title&quot;&gt;Configurazione checkbox&lt;/h4&gt;\n\n    &lt;p class=&quot;card-text&quot; class=&quot;example-section&quot;&gt;\n      &lt;it-checkbox [(ngModel)]=&quot;checked&quot; label=&quot;Spuntato&quot;&gt;&lt;/it-checkbox&gt;\n      &lt;it-checkbox [(ngModel)]=&quot;disabled&quot; label=&quot;Disabilitato&quot;&gt;&lt;/it-checkbox&gt;\n    &lt;/p&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=&quot;card w-50 mt-2&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;\n    &lt;h4 class=&quot;card-title&quot;&gt;Risultato&lt;/h4&gt;\n\n    &lt;p class=&quot;card-text&quot; class=&quot;example-section&quot;&gt;\n        &lt;it-checkbox [(ngModel)]=&quot;checked&quot; [label]=&quot;label&quot; [disabled]=&quot;disabled&quot;&gt;&lt;/it-checkbox&gt;\n    &lt;/p&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\" typescript=\"import { Component, OnInit } from &#39;@angular/core&#39;;\n\n@Component({\n  selector: &#39;it-checkbox-example&#39;,\n  templateUrl: &#39;./checkbox-example.component.html&#39;,\n  styleUrls: [&#39;./checkbox-example.component.scss&#39;]\n})\nexport class CheckboxExampleComponent {\n\n  checked = true;\n  label = &#39;Sono una checkbox&#39;;\n  disabled = false;\n\n}\n\" >\n</it-source-display>\n"

/***/ }),

/***/ "./src/app/checkbox/checkbox-examples/checkbox-examples.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/checkbox/checkbox-examples/checkbox-examples.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkbox/checkbox-examples/checkbox-examples.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/checkbox/checkbox-examples/checkbox-examples.component.ts ***!
  \***************************************************************************/
/*! exports provided: CheckboxExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxExamplesComponent", function() { return CheckboxExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxExamplesComponent = /** @class */ (function () {
    function CheckboxExamplesComponent() {
    }
    CheckboxExamplesComponent.prototype.ngOnInit = function () {
    };
    CheckboxExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-checkbox-examples',
            template: __webpack_require__(/*! ./checkbox-examples.component.html */ "./src/app/checkbox/checkbox-examples/checkbox-examples.component.html"),
            styles: [__webpack_require__(/*! ./checkbox-examples.component.scss */ "./src/app/checkbox/checkbox-examples/checkbox-examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxExamplesComponent);
    return CheckboxExamplesComponent;
}());



/***/ }),

/***/ "./src/app/checkbox/checkbox-index/checkbox-index.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/checkbox/checkbox-index/checkbox-index.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Checkbox</h1>\n<h5>Il componente Checkbox utilizzabile in un form</h5>\n\n<ul class=\"nav nav-tabs\" id=\"checkbox-tab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" id=\"checkbox-description-tab\" data-toggle=\"tab\" href=\"#checkbox-description-tab-content\" role=\"tab\" aria-controls=\"checkbox-description-tab-content\" aria-selected=\"true\">Descrizione</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"checkbox-api-tab\" data-toggle=\"tab\" href=\"#checkbox-api-tab-content\" role=\"tab\" aria-controls=\"checkbox-api-tab-content\" aria-selected=\"false\">API</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"checkbox-examples-tab\" data-toggle=\"tab\" href=\"#checkbox-examples-tab-content\" role=\"tab\" aria-controls=\"checkbox-examples-tab-content\" aria-selected=\"false\">Esempi</a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"checkbox-content-tab\">\n  <div class=\"tab-pane p-3 fade show active\" id=\"checkbox-description-tab-content\" role=\"tabpanel\" aria-labelledby=\"checkbox-description-tab-content\">\n    <div [innerHTML]=\"component.description\"></div>\n  </div>\n  <div class=\"tab-pane p-3 fade\" id=\"checkbox-api-tab-content\" role=\"tabpanel\" aria-labelledby=\"checkbox-api-tab-content\">\n    <!-- TODO: da spostare in una componente ad hoc -->\n    <div *ngIf=\"component.inputsClass.length > 0\">\n      <h3>Input</h3>\n      <div *ngFor=\"let input of component.inputsClass\">\n        <table class=\"table table-bordered table-sm\">\n          <tbody>\n            <tr>\n              <td style=\"width: 20%\">\n                <code>{{input.name}}</code>\n              </td>\n              <td style=\"width: 80%\">\n                <p>\n                  <em>Tipo: </em>\n                  <code>{{input.type}}</code>\n                </p>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"col-md-2\" colspan=\"2\" [innerHTML]=\"input.description\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div *ngIf=\"component.outputsClass.length > 0\">\n      <h3>Output</h3>\n      <!-- TODO: usare lo stesso componente di input -->\n    </div>\n  </div>\n  <div class=\"tab-pane p-3 fade\" id=\"checkbox-examples-tab-content\" role=\"tabpanel\" aria-labelledby=\"checkbox-examples-tab-content\">\n    <it-checkbox-examples></it-checkbox-examples>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/checkbox/checkbox-index/checkbox-index.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/checkbox/checkbox-index/checkbox-index.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkbox/checkbox-index/checkbox-index.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/checkbox/checkbox-index/checkbox-index.component.ts ***!
  \*********************************************************************/
/*! exports provided: CheckboxIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxIndexComponent", function() { return CheckboxIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/documentation.json */ "./src/assets/documentation.json");
var _assets_documentation_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _assets_documentation_json__WEBPACK_IMPORTED_MODULE_1__, {"default": _assets_documentation_json__WEBPACK_IMPORTED_MODULE_1__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxIndexComponent = /** @class */ (function () {
    function CheckboxIndexComponent() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_1__["components"].find(function (component) { return component.name === 'CheckboxComponent'; });
    }
    CheckboxIndexComponent.prototype.ngOnInit = function () {
    };
    CheckboxIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-checkbox-index',
            template: __webpack_require__(/*! ./checkbox-index.component.html */ "./src/app/checkbox/checkbox-index/checkbox-index.component.html"),
            styles: [__webpack_require__(/*! ./checkbox-index.component.scss */ "./src/app/checkbox/checkbox-index/checkbox-index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxIndexComponent);
    return CheckboxIndexComponent;
}());



/***/ }),

/***/ "./src/app/checkbox/checkbox-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/checkbox/checkbox-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRoutingModule", function() { return CheckboxRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _checkbox_index_checkbox_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox-index/checkbox-index.component */ "./src/app/checkbox/checkbox-index/checkbox-index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _checkbox_index_checkbox_index_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxIndexComponent"] }
];
var CheckboxRoutingModule = /** @class */ (function () {
    function CheckboxRoutingModule() {
    }
    CheckboxRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CheckboxRoutingModule);
    return CheckboxRoutingModule;
}());



/***/ }),

/***/ "./src/app/checkbox/checkbox.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkbox/checkbox.module.ts ***!
  \*********************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ "./projects/design-angular-kit/src/public_api.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-routing.module */ "./src/app/checkbox/checkbox-routing.module.ts");
/* harmony import */ var _checkbox_examples_checkbox_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-examples/checkbox-examples.component */ "./src/app/checkbox/checkbox-examples/checkbox-examples.component.ts");
/* harmony import */ var _checkbox_example_checkbox_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox-example/checkbox-example.component */ "./src/app/checkbox/checkbox-example/checkbox-example.component.ts");
/* harmony import */ var _checkbox_index_checkbox_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox-index/checkbox-index.component */ "./src/app/checkbox/checkbox-index/checkbox-index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_3__["DesignAngularKitModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckboxRoutingModule"]
            ],
            declarations: [_checkbox_example_checkbox_example_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxExampleComponent"], _checkbox_examples_checkbox_examples_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxExamplesComponent"], _checkbox_index_checkbox_index_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxIndexComponent"]]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-checkbox-checkbox-module.js.map