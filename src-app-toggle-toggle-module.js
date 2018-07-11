(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-toggle-toggle-module"],{

/***/ "./src/app/toggle/toggle-example/toggle-example.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/toggle/toggle-example/toggle-example.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-50 mt-2\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Configurazione toggle</h4>\n\n    <p class=\"card-text\" class=\"example-section\">\n      <it-toggle [(ngModel)]=\"checked\" label=\"Spuntato\"></it-toggle>\n      <it-toggle [(ngModel)]=\"disabled\" label=\"Disabilitato\"></it-toggle>\n    </p>\n  </div>\n</div>\n\n<div class=\"card w-50 mt-2\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Risultato</h4>\n\n    <p class=\"card-text\" class=\"example-section\">\n        <it-toggle [(ngModel)]=\"checked\" [label]=\"label\" [disabled]=\"disabled\"></it-toggle>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/toggle/toggle-example/toggle-example.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/toggle/toggle-example/toggle-example.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n"

/***/ }),

/***/ "./src/app/toggle/toggle-example/toggle-example.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/toggle/toggle-example/toggle-example.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToggleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleExampleComponent", function() { return ToggleExampleComponent; });
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

var ToggleExampleComponent = /** @class */ (function () {
    function ToggleExampleComponent() {
        this.checked = true;
        this.label = 'Sono una toggle';
        this.disabled = false;
    }
    ToggleExampleComponent.prototype.ngOnInit = function () {
    };
    ToggleExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-toggle-example',
            template: __webpack_require__(/*! ./toggle-example.component.html */ "./src/app/toggle/toggle-example/toggle-example.component.html"),
            styles: [__webpack_require__(/*! ./toggle-example.component.scss */ "./src/app/toggle/toggle-example/toggle-example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleExampleComponent);
    return ToggleExampleComponent;
}());



/***/ }),

/***/ "./src/app/toggle/toggle-examples/toggle-examples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/toggle/toggle-examples/toggle-examples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<it-toggle-example></it-toggle-example>\n\n<it-source-display html=\"&lt;div class=&quot;card w-50 mt-2&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;\n    &lt;h4 class=&quot;card-title&quot;&gt;Configurazione toggle&lt;/h4&gt;\n\n    &lt;p class=&quot;card-text&quot; class=&quot;example-section&quot;&gt;\n      &lt;it-toggle [(ngModel)]=&quot;checked&quot; label=&quot;Spuntato&quot;&gt;&lt;/it-toggle&gt;\n      &lt;it-toggle [(ngModel)]=&quot;disabled&quot; label=&quot;Disabilitato&quot;&gt;&lt;/it-toggle&gt;\n    &lt;/p&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=&quot;card w-50 mt-2&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;\n    &lt;h4 class=&quot;card-title&quot;&gt;Risultato&lt;/h4&gt;\n\n    &lt;p class=&quot;card-text&quot; class=&quot;example-section&quot;&gt;\n        &lt;it-toggle [(ngModel)]=&quot;checked&quot; [label]=&quot;label&quot; [disabled]=&quot;disabled&quot;&gt;&lt;/it-toggle&gt;\n    &lt;/p&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\" typescript=\"import { Component, OnInit } from &#39;@angular/core&#39;;\n\n@Component({\n  selector: &#39;it-toggle-example&#39;,\n  templateUrl: &#39;./toggle-example.component.html&#39;,\n  styleUrls: [&#39;./toggle-example.component.scss&#39;]\n})\nexport class ToggleExampleComponent implements OnInit {\n\n  checked = true;\n  label = &#39;Sono una toggle&#39;;\n  disabled = false;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n\" >\n</it-source-display>\n"

/***/ }),

/***/ "./src/app/toggle/toggle-examples/toggle-examples.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/toggle/toggle-examples/toggle-examples.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/toggle/toggle-examples/toggle-examples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/toggle/toggle-examples/toggle-examples.component.ts ***!
  \*********************************************************************/
/*! exports provided: ToggleExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleExamplesComponent", function() { return ToggleExamplesComponent; });
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

var ToggleExamplesComponent = /** @class */ (function () {
    function ToggleExamplesComponent() {
    }
    ToggleExamplesComponent.prototype.ngOnInit = function () {
    };
    ToggleExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-toggle-examples',
            template: __webpack_require__(/*! ./toggle-examples.component.html */ "./src/app/toggle/toggle-examples/toggle-examples.component.html"),
            styles: [__webpack_require__(/*! ./toggle-examples.component.scss */ "./src/app/toggle/toggle-examples/toggle-examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleExamplesComponent);
    return ToggleExamplesComponent;
}());



/***/ }),

/***/ "./src/app/toggle/toggle-index/toggle-index.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/toggle/toggle-index/toggle-index.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Toggle</h1>\n<h5>Il componente Toggle utilizzabile in un form</h5>\n\n<ul class=\"nav nav-tabs\" id=\"toggle-tab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" id=\"toggle-description-tab\" data-toggle=\"tab\" href=\"#toggle-description-tab-content\" role=\"tab\" aria-controls=\"toggle-description-tab-content\" aria-selected=\"true\">Descrizione</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"toggle-api-tab\" data-toggle=\"tab\" href=\"#toggle-api-tab-content\" role=\"tab\" aria-controls=\"toggle-api-tab-content\" aria-selected=\"false\">API</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"toggle-examples-tab\" data-toggle=\"tab\" href=\"#toggle-examples-tab-content\" role=\"tab\" aria-controls=\"toggle-examples-tab-content\" aria-selected=\"false\">Esempi</a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"toggle-content-tab\">\n  <div class=\"tab-pane p-3 fade show active\" id=\"toggle-description-tab-content\" role=\"tabpanel\" aria-labelledby=\"toggle-description-tab-content\">\n    <div [innerHTML]=\"component.description\"></div>\n  </div>\n  <div class=\"tab-pane p-3 fade\" id=\"toggle-api-tab-content\" role=\"tabpanel\" aria-labelledby=\"toggle-api-tab-content\">\n    <!-- TODO: da spostare in una componente ad hoc -->\n    <div *ngIf=\"component.inputsClass.length > 0\">\n      <h3>Input</h3>\n      <div *ngFor=\"let input of component.inputsClass\">\n        <table class=\"table table-bordered table-sm\">\n          <tbody>\n            <tr>\n              <td style=\"width: 20%\">\n                <code>{{input.name}}</code>\n              </td>\n              <td style=\"width: 80%\">\n                <p>\n                  <em>Tipo: </em>\n                  <code>{{input.type}}</code>\n                </p>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"col-md-2\" colspan=\"2\" [innerHTML]=\"input.description\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div *ngIf=\"component.outputsClass.length > 0\">\n      <h3>Output</h3>\n      <!-- TODO: usare lo stesso componente di input -->\n    </div>\n  </div>\n  <div class=\"tab-pane p-3 fade\" id=\"toggle-examples-tab-content\" role=\"tabpanel\" aria-labelledby=\"toggle-examples-tab-content\">\n    <it-toggle-examples></it-toggle-examples>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/toggle/toggle-index/toggle-index.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/toggle/toggle-index/toggle-index.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/toggle/toggle-index/toggle-index.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/toggle/toggle-index/toggle-index.component.ts ***!
  \***************************************************************/
/*! exports provided: ToggleIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleIndexComponent", function() { return ToggleIndexComponent; });
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


var ToggleIndexComponent = /** @class */ (function () {
    function ToggleIndexComponent() {
        this.component = _assets_documentation_json__WEBPACK_IMPORTED_MODULE_1__["components"].find(function (component) { return component.name === 'ToggleComponent'; });
    }
    ToggleIndexComponent.prototype.ngOnInit = function () {
    };
    ToggleIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-toggle-index',
            template: __webpack_require__(/*! ./toggle-index.component.html */ "./src/app/toggle/toggle-index/toggle-index.component.html"),
            styles: [__webpack_require__(/*! ./toggle-index.component.scss */ "./src/app/toggle/toggle-index/toggle-index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleIndexComponent);
    return ToggleIndexComponent;
}());



/***/ }),

/***/ "./src/app/toggle/toggle-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/toggle/toggle-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ToggleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleRoutingModule", function() { return ToggleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-index/toggle-index.component */ "./src/app/toggle/toggle-index/toggle-index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_2__["ToggleIndexComponent"] }
];
var ToggleRoutingModule = /** @class */ (function () {
    function ToggleRoutingModule() {
    }
    ToggleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ToggleRoutingModule);
    return ToggleRoutingModule;
}());



/***/ }),

/***/ "./src/app/toggle/toggle.module.ts":
/*!*****************************************!*\
  !*** ./src/app/toggle/toggle.module.ts ***!
  \*****************************************/
/*! exports provided: ToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleModule", function() { return ToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ "./projects/design-angular-kit/src/public_api.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-routing.module */ "./src/app/toggle/toggle-routing.module.ts");
/* harmony import */ var _toggle_example_toggle_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-example/toggle-example.component */ "./src/app/toggle/toggle-example/toggle-example.component.ts");
/* harmony import */ var _toggle_examples_toggle_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle-examples/toggle-examples.component */ "./src/app/toggle/toggle-examples/toggle-examples.component.ts");
/* harmony import */ var _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle-index/toggle-index.component */ "./src/app/toggle/toggle-index/toggle-index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ToggleModule = /** @class */ (function () {
    function ToggleModule() {
    }
    ToggleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_3__["DesignAngularKitModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToggleRoutingModule"]
            ],
            declarations: [_toggle_example_toggle_example_component__WEBPACK_IMPORTED_MODULE_6__["ToggleExampleComponent"], _toggle_examples_toggle_examples_component__WEBPACK_IMPORTED_MODULE_7__["ToggleExamplesComponent"], _toggle_index_toggle_index_component__WEBPACK_IMPORTED_MODULE_8__["ToggleIndexComponent"]]
        })
    ], ToggleModule);
    return ToggleModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-toggle-toggle-module.js.map