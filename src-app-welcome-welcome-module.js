(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-welcome-welcome-module"],{

/***/ "./src/app/welcome/welcome-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function() { return WelcomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
];
var WelcomeRoutingModule = /** @class */ (function () {
    function WelcomeRoutingModule() {
    }
    WelcomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WelcomeRoutingModule);
    return WelcomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__["WelcomeRoutingModule"]
            ],
            declarations: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome/welcome.component.html":
/*!********************************************************!*\
  !*** ./src/app/welcome/welcome/welcome.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi sed lorem dapibus consectetur. Vivamus sollicitudin neque justo, sed condimentum velit tincidunt vitae. Fusce accumsan porta condimentum. Sed dui dui, posuere ut nibh nec, vehicula consectetur mi. Morbi vehicula ligula ut mi imperdiet, non maximus felis venenatis. Fusce et consequat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ut ligula sed dolor scelerisque blandit in ut erat. Pellentesque maximus, nibh a pharetra porttitor, arcu enim egestas lectus, ac ultrices lectus orci viverra felis. Curabitur non arcu bibendum enim cursus mattis varius congue arcu. Sed sed nulla sit amet velit porttitor semper. Quisque a leo leo.\n\n    Nunc dui neque, malesuada ac neque nec, dictum varius libero. Suspendisse rhoncus lacus eget libero consectetur, id volutpat lorem viverra. Ut purus velit, rhoncus sed dolor et, sagittis ornare magna. Curabitur a erat vel est eleifend interdum. Sed eget lacus et orci maximus tristique ut molestie ligula. Praesent a pretium nulla. Aenean sit amet lorem nibh. Phasellus quis odio varius, vestibulum odio et, luctus eros. Quisque accumsan dui ex, vel pellentesque massa accumsan sed. In fringilla leo sapien, vel convallis metus pharetra nec. Vestibulum a nisi et nisl eleifend laoreet eget nec mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac porttitor dui. Sed egestas nulla et magna tincidunt, vitae tincidunt tellus vestibulum. Mauris in consectetur massa.\n\n    Sed ac ante neque. Suspendisse non quam quis leo venenatis facilisis. Ut at ligula odio. Donec non iaculis ex, id tempor augue. Cras hendrerit nulla non augue iaculis faucibus. Aliquam tempus ut libero sit amet vulputate. In venenatis gravida ligula ultrices pretium. Etiam consequat aliquet ornare. Suspendisse tortor leo, ultrices at ultricies quis, tempor ac purus. Sed vehicula ante vel nisl accumsan, in scelerisque sapien interdum. Praesent metus dui, efficitur ut vulputate at, laoreet sed nisi.\n\n    Pellentesque condimentum augue quis malesuada maximus. Nam dictum urna metus, et finibus mi luctus a. Duis facilisis tortor sed nunc porttitor volutpat. Donec feugiat semper eros sed varius. Aliquam et neque vitae lorem consequat aliquet eu nec neque. Sed consequat dolor commodo quam lacinia, sit amet consectetur erat accumsan. Vivamus et nunc a arcu porttitor consectetur. Proin congue iaculis sodales.\n\n    Donec sed est vitae erat molestie suscipit a ultrices arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin consectetur est enim. Suspendisse lacinia nibh non interdum facilisis. Donec eget tempor nisi. Nunc aliquet, turpis a malesuada maximus, nisi sem tempor mauris, ac iaculis quam orci rutrum odio. Curabitur blandit efficitur dolor at vestibulum. Morbi molestie est non tempus eleifend. Donec eget feugiat ipsum, et rhoncus risus.\n</p>\n"

/***/ }),

/***/ "./src/app/welcome/welcome/welcome.component.scss":
/*!********************************************************!*\
  !*** ./src/app/welcome/welcome/welcome.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome/welcome.component.ts":
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome/welcome.component.ts ***!
  \******************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-welcome-welcome-module.js.map