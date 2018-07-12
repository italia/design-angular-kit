(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/design-angular-kit/src/lib/checkbox/checkbox.component.css":
/*!*****************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/checkbox/checkbox.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/design-angular-kit/src/lib/checkbox/checkbox.component.html":
/*!******************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/checkbox/checkbox.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=form-check>\n  <input type=checkbox\n    [id]=inputId\n    [checked]=checked\n    [disabled]=disabled\n    (change)=handleChange($event)>\n  <label\n    [attr.for]=inputId>{{label}}</label>\n</div>\n"

/***/ }),

/***/ "./projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts ***!
  \****************************************************************************/
/*! exports provided: CheckboxChange, CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxChange", function() { return CheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var identifier = 0;
var CheckboxChange = /** @class */ (function () {
    function CheckboxChange() {
    }
    return CheckboxChange;
}());

/**
 * Una checkbox con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,
 * ed espone una API simile. Una `<it-checkbox>` può essere checked, unchecked, o disabled.
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._checked = false;
        this._disabled = false;
        /**
         * Evento emesso quando il valore `checked` della checkbox cambia.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputId = "checkbox-" + identifier++;
        this._onTouched = function () { };
        this._controlValueAccessorChangeFn = function () { };
    }
    CheckboxComponent_1 = CheckboxComponent;
    Object.defineProperty(CheckboxComponent.prototype, "checked", {
        /**
         * Se la checkbox è selezionata.
         */
        get: function () { return this._checked; },
        set: function (value) {
            if (value !== this.checked) {
                this._checked = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "disabled", {
        /**
         * Se la checkbox è disabilitata.
         */
        get: function () { return this._disabled; },
        set: function (value) {
            if (value !== this.disabled) {
                this._disabled = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CheckboxComponent.prototype.handleChange = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this._toggle();
            this._emitChangeEvent();
        }
    };
    CheckboxComponent.prototype._toggle = function () {
        this.checked = !this.checked;
    };
    CheckboxComponent.prototype._emitChangeEvent = function () {
        var event = new CheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CheckboxComponent.prototype, "checked", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CheckboxComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CheckboxComponent.prototype, "change", void 0);
    CheckboxComponent = CheckboxComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./projects/design-angular-kit/src/lib/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.css */ "./projects/design-angular-kit/src/lib/checkbox/checkbox.component.css")],
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CheckboxComponent_1; }), multi: true }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CheckboxComponent);
    return CheckboxComponent;
    var CheckboxComponent_1;
}());



/***/ }),

/***/ "./projects/design-angular-kit/src/lib/design-angular-kit.module.ts":
/*!**************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/design-angular-kit.module.ts ***!
  \**************************************************************************/
/*! exports provided: DesignAngularKitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignAngularKitModule", function() { return DesignAngularKitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts");
/* harmony import */ var _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle/toggle.component */ "./projects/design-angular-kit/src/lib/toggle/toggle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DesignAngularKitModule = /** @class */ (function () {
    function DesignAngularKitModule() {
    }
    DesignAngularKitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"]],
            exports: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"]]
        })
    ], DesignAngularKitModule);
    return DesignAngularKitModule;
}());



/***/ }),

/***/ "./projects/design-angular-kit/src/lib/toggle/toggle.component.css":
/*!*************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/toggle/toggle.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/design-angular-kit/src/lib/toggle/toggle.component.html":
/*!**************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/toggle/toggle.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-check\">\n  <div class=\"toggles\">\n    <label [attr.for]=inputId>\n      {{label}}\n      <input type=checkbox\n        [id]=inputId\n        [checked]=checked\n        [disabled]=disabled\n        (change)=handleChange($event)>\n      <span class=\"lever\"></span>\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "./projects/design-angular-kit/src/lib/toggle/toggle.component.ts":
/*!************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/toggle/toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: ToggleChange, ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleChange", function() { return ToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var identifier = 0;
var ToggleChange = /** @class */ (function () {
    function ToggleChange() {
    }
    return ToggleChange;
}());

/**
 * Una toggle con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,
 * ed espone una API simile. Una `<it-toggle>` può essere checked, unchecked, o disabled.
 */
var ToggleComponent = /** @class */ (function () {
    function ToggleComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._checked = false;
        this._disabled = false;
        /**
         * Evento emesso quando il valore `checked` della toggle cambia.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputId = "toggle-" + identifier++;
        this._onTouched = function () { };
        this._controlValueAccessorChangeFn = function () { };
    }
    ToggleComponent_1 = ToggleComponent;
    Object.defineProperty(ToggleComponent.prototype, "checked", {
        /**
         * Se la toggle è selezionata.
         */
        get: function () { return this._checked; },
        set: function (value) {
            if (value !== this.checked) {
                this._checked = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "disabled", {
        /**
         * Se la toggle è disabilitata.
         */
        get: function () { return this._disabled; },
        set: function (value) {
            if (value !== this.disabled) {
                this._disabled = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    ToggleComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    ToggleComponent.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    ToggleComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ToggleComponent.prototype.handleChange = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this._toggle();
            this._emitChangeEvent();
        }
    };
    ToggleComponent.prototype._toggle = function () {
        this.checked = !this.checked;
    };
    ToggleComponent.prototype._emitChangeEvent = function () {
        var event = new ToggleChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ToggleComponent.prototype, "checked", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ToggleComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ToggleComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToggleComponent.prototype, "change", void 0);
    ToggleComponent = ToggleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-toggle',
            template: __webpack_require__(/*! ./toggle.component.html */ "./projects/design-angular-kit/src/lib/toggle/toggle.component.html"),
            styles: [__webpack_require__(/*! ./toggle.component.css */ "./projects/design-angular-kit/src/lib/toggle/toggle.component.css")],
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ToggleComponent_1; }), multi: true }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ToggleComponent);
    return ToggleComponent;
    var ToggleComponent_1;
}());



/***/ }),

/***/ "./projects/design-angular-kit/src/public_api.ts":
/*!*******************************************************!*\
  !*** ./projects/design-angular-kit/src/public_api.ts ***!
  \*******************************************************/
/*! exports provided: CheckboxChange, CheckboxComponent, ToggleChange, ToggleComponent, DesignAngularKitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/checkbox/checkbox.component */ "./projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxChange", function() { return _lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__["CheckboxChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return _lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__["CheckboxComponent"]; });

/* harmony import */ var _lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/toggle/toggle.component */ "./projects/design-angular-kit/src/lib/toggle/toggle.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleChange", function() { return _lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return _lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]; });

/* harmony import */ var _lib_design_angular_kit_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/design-angular-kit.module */ "./projects/design-angular-kit/src/lib/design-angular-kit.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesignAngularKitModule", function() { return _lib_design_angular_kit_module__WEBPACK_IMPORTED_MODULE_2__["DesignAngularKitModule"]; });

/*
 * Public API Surface of design-angular-kit
 */





/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/checkbox/checkbox.module": [
		"./src/app/checkbox/checkbox.module.ts",
		"src-app-checkbox-checkbox-module~src-app-toggle-toggle-module",
		"src-app-checkbox-checkbox-module"
	],
	"src/app/getting-started/getting-started.module": [
		"./src/app/getting-started/getting-started.module.ts",
		"src-app-getting-started-getting-started-module"
	],
	"src/app/toggle/toggle.module": [
		"./src/app/toggle/toggle.module.ts",
		"src-app-checkbox-checkbox-module~src-app-toggle-toggle-module",
		"src-app-toggle-toggle-module"
	],
	"src/app/welcome/welcome.module": [
		"./src/app/welcome/welcome.module.ts",
		"src-app-welcome-welcome-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router-dispatcher/router-dispatcher.component */ "./src/app/router-dispatcher/router-dispatcher.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'info', component: _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_2__["RouterDispatcherComponent"], children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', loadChildren: 'src/app/welcome/welcome.module#WelcomeModule' },
            { path: 'getting-started', loadChildren: 'src/app/getting-started/getting-started.module#GettingStartedModule' }
        ] },
    { path: 'componenti', component: _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_2__["RouterDispatcherComponent"], children: [
            { path: '', redirectTo: 'checkbox', pathMatch: 'full' },
            { path: 'checkbox', loadChildren: 'src/app/checkbox/checkbox.module#CheckboxModule' },
            { path: 'toggle', loadChildren: 'src/app/toggle/toggle.module#ToggleModule' }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row flex-xl-nowrap\">\n  <it-table-of-content class=\"col-12 col-md-3 col-xl-2\"></it-table-of-content>\n  <main class=\"col-12 col-md-9 col-xl-10 py-md-3 px-md-3 bd-content\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'design-angular-kit-doc';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ "./projects/design-angular-kit/src/public_api.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _table_of_content_table_of_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-of-content/table-of-content.component */ "./src/app/table-of-content/table-of-content.component.ts");
/* harmony import */ var _table_of_content_item_table_of_content_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-of-content-item/table-of-content-item.component */ "./src/app/table-of-content-item/table-of-content-item.component.ts");
/* harmony import */ var _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router-dispatcher/router-dispatcher.component */ "./src/app/router-dispatcher/router-dispatcher.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _table_of_content_table_of_content_component__WEBPACK_IMPORTED_MODULE_5__["TableOfContentComponent"],
                _table_of_content_item_table_of_content_item_component__WEBPACK_IMPORTED_MODULE_6__["TableOfContentItemComponent"],
                _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_7__["RouterDispatcherComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_2__["DesignAngularKitModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/router-dispatcher/router-dispatcher.component.html":
/*!********************************************************************!*\
  !*** ./src/app/router-dispatcher/router-dispatcher.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/router-dispatcher/router-dispatcher.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/router-dispatcher/router-dispatcher.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/router-dispatcher/router-dispatcher.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/router-dispatcher/router-dispatcher.component.ts ***!
  \******************************************************************/
/*! exports provided: RouterDispatcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterDispatcherComponent", function() { return RouterDispatcherComponent; });
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

var RouterDispatcherComponent = /** @class */ (function () {
    function RouterDispatcherComponent() {
    }
    RouterDispatcherComponent.prototype.ngOnInit = function () {
    };
    RouterDispatcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-router-dispatcher',
            template: __webpack_require__(/*! ./router-dispatcher.component.html */ "./src/app/router-dispatcher/router-dispatcher.component.html"),
            styles: [__webpack_require__(/*! ./router-dispatcher.component.scss */ "./src/app/router-dispatcher/router-dispatcher.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterDispatcherComponent);
    return RouterDispatcherComponent;
}());



/***/ }),

/***/ "./src/app/table-of-content-item/table-of-content-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/table-of-content-item/table-of-content-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bd-toc-item\" [routerLinkActive]=\"'active'\">\n  <a [routerLink]=\"tocItem.link\" class=\"bd-toc-link\" >{{tocItem.label}}</a>\n  <ul class=\"nav bd-sidenav pl-2\" >\n    <li *ngFor=\"let link of tocItem.links\" [routerLinkActive]=\"['active', 'bd-sidenav-active']\">\n      <a [routerLink]=\"link.link\" >{{link.label}}</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/table-of-content-item/table-of-content-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/table-of-content-item/table-of-content-item.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bd-links {\n  padding: 0; }\n  @media (min-width: 768px) {\n    @supports ((position: -webkit-sticky) or (position: sticky)) {\n      .bd-links {\n        max-height: calc(100vh - 5rem);\n        overflow-y: auto; } } }\n  @media (min-width: 768px) {\n    .bd-links {\n      display: block !important; } }\n  .bd-toc-link {\n  display: block;\n  padding: .5rem 1rem;\n  color: #343a40; }\n  @media (min-width: 768px) {\n    .bd-toc-link {\n      padding-top: .25rem;\n      padding-bottom: .25rem; } }\n  .bd-toc-link:hover {\n    color: #007bff; }\n  .bd-toc-item {\n  background-color: #fff; }\n  .bd-toc-item.active > .bd-toc-link {\n    color: #007bff;\n    font-weight: 600; }\n  .bd-toc-item.active > .bd-toc-link:hover {\n      background-color: transparent; }\n  .bd-toc-item.active .bd-sidenav {\n    display: block; }\n  .bd-sidenav {\n  display: none; }\n  .nav > li > a {\n  display: inline-block;\n  padding: .25rem .5rem .25rem 1.5rem;\n  font-size: 16px;\n  color: #343a40; }\n  .nav > li > a:hover {\n    color: #007bff;\n    background-color: transparent; }\n  .nav > .active > a,\n.nav > .active:hover > a {\n  font-weight: 600;\n  color: #007bff;\n  background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/table-of-content-item/table-of-content-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/table-of-content-item/table-of-content-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: TableOfContentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContentItemComponent", function() { return TableOfContentItemComponent; });
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

var TableOfContentItemComponent = /** @class */ (function () {
    function TableOfContentItemComponent() {
    }
    TableOfContentItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableOfContentItemComponent.prototype, "tocItem", void 0);
    TableOfContentItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-table-of-content-item',
            template: __webpack_require__(/*! ./table-of-content-item.component.html */ "./src/app/table-of-content-item/table-of-content-item.component.html"),
            styles: [__webpack_require__(/*! ./table-of-content-item.component.scss */ "./src/app/table-of-content-item/table-of-content-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableOfContentItemComponent);
    return TableOfContentItemComponent;
}());



/***/ }),

/***/ "./src/app/table-of-content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/table-of-content.service.ts ***!
  \*********************************************/
/*! exports provided: TableOfContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContentService", function() { return TableOfContentService; });
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

var TableOfContentService = /** @class */ (function () {
    function TableOfContentService() {
    }
    TableOfContentService.prototype.getTableOfContent = function () {
        // TODO prendere da un file json di configurazione
        return [
            {
                label: 'Informazioni',
                link: '/info',
                links: [
                    {
                        label: 'Benvenuti',
                        link: '/info/welcome',
                    },
                    {
                        label: 'Getting started',
                        link: '/info/getting-started'
                    }
                ]
            },
            {
                label: 'Componenti',
                link: '/componenti',
                links: [
                    {
                        label: 'Checkbox',
                        link: '/componenti/checkbox',
                    },
                    {
                        label: 'Toggle',
                        link: '/componenti/toggle',
                    }
                ]
            }
        ];
    };
    TableOfContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TableOfContentService);
    return TableOfContentService;
}());



/***/ }),

/***/ "./src/app/table-of-content/table-of-content.component.html":
/*!******************************************************************!*\
  !*** ./src/app/table-of-content/table-of-content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bd-sidebar\">\n  <nav class=\"bd-links\">\n    <it-table-of-content-item [tocItem]=\"tocItem\" *ngFor=\"let tocItem of tableOfContent\" (click)=\"toggle($event, tocItem)\"></it-table-of-content-item>\n  </nav>\n</div>\n\n"

/***/ }),

/***/ "./src/app/table-of-content/table-of-content.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/table-of-content/table-of-content.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bd-sidebar {\n  order: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  @media (min-width: 768px) {\n    .bd-sidebar {\n      border-right: 1px solid rgba(0, 0, 0, 0.1); }\n      @supports ((position: -webkit-sticky) or (position: sticky)) {\n        .bd-sidebar {\n          position: -webkit-sticky;\n          position: sticky;\n          top: 5rem;\n          height: calc(100vh - 5rem);\n          overflow-y: auto; } } }\n  @media (min-width: 768px) {\n    .bd-sidebar {\n      padding: 1.5rem 0;\n      border-right: 1px solid rgba(0, 0, 0, 0.1); } }\n  @media (min-width: 1200px) {\n    .bd-sidebar {\n      flex: 0 1 320px; } }\n  .bd-links {\n  padding: 0; }\n  @media (min-width: 768px) {\n    @supports ((position: -webkit-sticky) or (position: sticky)) {\n      .bd-links {\n        max-height: calc(100vh - 5rem);\n        overflow-y: auto; } } }\n  @media (min-width: 768px) {\n    .bd-links {\n      display: block !important; } }\n"

/***/ }),

/***/ "./src/app/table-of-content/table-of-content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/table-of-content/table-of-content.component.ts ***!
  \****************************************************************/
/*! exports provided: TableOfContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContentComponent", function() { return TableOfContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_of_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-of-content.service */ "./src/app/table-of-content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableOfContentComponent = /** @class */ (function () {
    function TableOfContentComponent(tocService) {
        this.tocService = tocService;
    }
    TableOfContentComponent.prototype.ngOnInit = function () {
        this.getTableOfContent();
    };
    TableOfContentComponent.prototype.getTableOfContent = function () {
        this.tableOfContent = this.tocService.getTableOfContent();
    };
    TableOfContentComponent.prototype.toggle = function (event, tocItem) {
        this.tableOfContent = this.tableOfContent.map(function (item) {
            var newTocItem = item;
            if (item.label === tocItem.label) {
                newTocItem.active = true;
                if (newTocItem.links.length > 0) {
                    newTocItem.links[0].active = true;
                }
            }
            else {
                newTocItem.active = false;
            }
            return newTocItem;
        });
    };
    TableOfContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-table-of-content',
            template: __webpack_require__(/*! ./table-of-content.component.html */ "./src/app/table-of-content/table-of-content.component.html"),
            styles: [__webpack_require__(/*! ./table-of-content.component.scss */ "./src/app/table-of-content/table-of-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_table_of_content_service__WEBPACK_IMPORTED_MODULE_1__["TableOfContentService"]])
    ], TableOfContentComponent);
    return TableOfContentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/circleci/design-angular-kit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map