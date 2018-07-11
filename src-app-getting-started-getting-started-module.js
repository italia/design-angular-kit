(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-getting-started-getting-started-module"],{

/***/ "./src/app/getting-started/getting-started-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/getting-started/getting-started-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: GettingStartedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedRoutingModule", function() { return GettingStartedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/getting-started/getting-started/getting-started.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedComponent"] }
];
var GettingStartedRoutingModule = /** @class */ (function () {
    function GettingStartedRoutingModule() {
    }
    GettingStartedRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GettingStartedRoutingModule);
    return GettingStartedRoutingModule;
}());



/***/ }),

/***/ "./src/app/getting-started/getting-started.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/getting-started/getting-started.module.ts ***!
  \***********************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getting-started-routing.module */ "./src/app/getting-started/getting-started-routing.module.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/getting-started/getting-started/getting-started.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GettingStartedModule = /** @class */ (function () {
    function GettingStartedModule() {
    }
    GettingStartedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_2__["GettingStartedRoutingModule"]
            ],
            declarations: [_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"]]
        })
    ], GettingStartedModule);
    return GettingStartedModule;
}());



/***/ }),

/***/ "./src/app/getting-started/getting-started/getting-started.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/getting-started/getting-started/getting-started.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Corsair aft holystone loaded to the gunwalls hulk grog chase guns wench boatswain driver. Parrel Sea Legs careen plunder brig lee yo-ho-ho draught trysail man-of-war. Sink me gun trysail weigh anchor rutters grog blossom take a caulk line Cat o'nine tails gaff.\n\n    Handsomely fathom gangplank no prey, no pay lugsail Chain Shot black spot blow the man down nipper haul wind. Pink Chain Shot ballast ye avast crack Jennys tea cup cackle fruit boom barkadeer haul wind. Reef sails scuttle bilge rat Barbary Coast spanker pirate fore run a shot across the bow hornswaggle sloop.\n\n    Handsomely bowsprit ho run a shot across the bow pillage belay come about provost heave to grog blossom. Interloper snow Pieces of Eight spike crimp list hail-shot reef hands sloop. Davy Jones' Locker swing the lead lateen sail black spot capstan galleon Nelsons folly hulk landlubber or just lubber hearties.\n</p>\n"

/***/ }),

/***/ "./src/app/getting-started/getting-started/getting-started.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/getting-started/getting-started/getting-started.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/getting-started/getting-started/getting-started.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/getting-started/getting-started/getting-started.component.ts ***!
  \******************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
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

var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
    };
    GettingStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-getting-started',
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/getting-started/getting-started/getting-started.component.html"),
            styles: [__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/getting-started/getting-started/getting-started.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-getting-started-getting-started-module.js.map