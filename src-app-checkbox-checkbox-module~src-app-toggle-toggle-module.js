(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-checkbox-checkbox-module~src-app-toggle-toggle-module"],{

/***/ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js ***!
  \***************************************************************/
/*! exports provided: HighlightModule, HighlightJS, HighlightDirective, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightModule", function() { return HighlightModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightJS", function() { return HighlightJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return HighlightFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HighlightJS = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function HighlightJS(options) {
        this.options = {
            theme: 'github',
            path: 'assets/lib/hljs',
            auto: true
        };
        this._isReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.options = Object.assign({}, this.options, options);
        if (typeof hljs !== 'undefined') {
            /** hljs is loaded by the user */
            hljs.configure(this.options.config);
            this._isReady$.next(true);
        }
        else {
            /** Load hljs script and style locally */
            this._loadScript();
            this._loadTheme();
        }
    }
    Object.defineProperty(HighlightJS.prototype, "isReady", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isReady$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (isReady) { return isReady; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} ignore_illegals
     * @param {?=} continuation
     * @return {?}
     */
    HighlightJS.prototype.highlight = function (name, value, ignore_illegals, continuation) {
        if (typeof hljs !== 'undefined') {
            return hljs.highlight(name, value, ignore_illegals, continuation);
        }
    };
    /**
     * @param {?} value
     * @param {?} languageSubset
     * @return {?}
     */
    HighlightJS.prototype.highlightAuto = function (value, languageSubset) {
        if (typeof hljs !== 'undefined') {
            return hljs.highlightAuto(value, languageSubset);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    HighlightJS.prototype.fixMarkup = function (value) {
        if (typeof hljs !== 'undefined') {
            return hljs.fixMarkup(value);
        }
    };
    /**
     * @param {?} block
     * @return {?}
     */
    HighlightJS.prototype.highlightBlock = function (block) {
        if (typeof hljs !== 'undefined') {
            hljs.highlightBlock(block);
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    HighlightJS.prototype.configure = function (options) {
        if (typeof hljs !== 'undefined') {
            hljs.configure(this.options.config);
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype.initHighlighting = function () {
        if (typeof hljs !== 'undefined') {
            hljs.initHighlighting();
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype.initHighlightingOnLoad = function () {
        if (typeof hljs !== 'undefined') {
            hljs.initHighlightingOnLoad();
        }
    };
    /**
     * @param {?} name
     * @param {?} language
     * @return {?}
     */
    HighlightJS.prototype.registerLanguage = function (name, language) {
        if (typeof hljs !== 'undefined') {
            hljs.registerLanguage(name, language);
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype.listLanguages = function () {
        if (typeof hljs !== 'undefined') {
            return hljs.listLanguages();
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    HighlightJS.prototype.getLanguage = function (name) {
        if (typeof hljs !== 'undefined') {
            return hljs.getLanguage(name);
        }
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype._loadScript = function () {
        var _this = this;
        var /** @type {?} */ script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.onload = function () {
            hljs.configure(_this.options.config);
            _this._isReady$.next(true);
        };
        script.src = this.options.path + "/highlight.pack.js";
        document.head.appendChild(script);
    };
    /**
     * @return {?}
     */
    HighlightJS.prototype._loadTheme = function () {
        var /** @type {?} */ style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = this.options.path + "/styles/" + this.options.theme + ".css";
        document.head.appendChild(style);
    };
    return HighlightJS;
}());
HighlightJS.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
HighlightJS.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [OPTIONS,] },] },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * There are 2 ways to higlight a code
 *  1 - using the [code] input (default) <code highlight [code]="yourCode"></code>
 *  2 - using element text content <code> {{yourCode}} </code>
 */
var HighlightDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} hljs
     */
    function HighlightDirective(el, renderer, hljs) {
        this.renderer = renderer;
        this.hljs = hljs;
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.el = el.nativeElement;
    }
    Object.defineProperty(HighlightDirective.prototype, "setCode", {
        /**
         * @param {?} code
         * @return {?}
         */
        set: function (code) {
            var _this = this;
            this.code = code;
            this.hljs.isReady.subscribe(function () { return _this.highlightElement(_this.el, code); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HighlightDirective.prototype.ngOnInit = function () {
        var _this = this;
        /** Acitvate MutationObserver if `auto` option is true and `[code]` input is not used
             * This will highlight using the text content */
        if (!this.code && this.hljs.options.auto) {
            this.hljs.isReady.subscribe(function () {
                _this.highlightTextContent();
                /** Highlight when text content changes */
                _this.domObs = new MutationObserver(function () { return _this.highlightTextContent(); });
                _this.domObs.observe(_this.el, { childList: true, subtree: true });
            });
        }
    };
    /**
     * Highlight using element text content
     * @return {?}
     */
    HighlightDirective.prototype.highlightTextContent = function () {
        if (!this.highlight) {
            if (this.el.tagName.toLowerCase() === 'code') {
                this.highlightElement(this.el, this.el.innerText.trim());
            }
            else {
                console.warn("[HighlightDirective]: Use 'highlight' on <code> element only");
            }
        }
        else if (this.highlight === 'all') {
            this.highlightChildren(this.el, 'pre code');
        }
        else {
            this.highlightChildren(this.el, this.highlight);
        }
    };
    /**
     * Highlight a code block
     * @param {?} el
     * @param {?} code
     * @return {?}
     */
    HighlightDirective.prototype.highlightElement = function (el, code) {
        var /** @type {?} */ res = this.hljs.highlightAuto(code, this.language);
        if (res.value !== el.innerHTML) {
            this.renderer.addClass(el, 'hljs');
            this.renderer.setProperty(el, 'innerHTML', res.value);
            this.highlighted.emit(res);
        }
    };
    /**
     * Highlight multiple code blocks
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    HighlightDirective.prototype.highlightChildren = function (el, selector) {
        var _this = this;
        var /** @type {?} */ codeElements = el.querySelectorAll(selector);
        /** highlight children with the same selector */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(codeElements).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (code) { return code.childNodes.length === 1 && code.childNodes[0].nodeName === '#text'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (codeElement) { return _this.highlightElement(codeElement, codeElement.innerText.trim()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
    };
    /**
     * @return {?}
     */
    HighlightDirective.prototype.ngOnDestroy = function () {
        /** Disconnect MutationObserver */
        if (!this.code && this.hljs.options.auto) {
            this.domObs.disconnect();
        }
    };
    return HighlightDirective;
}());
HighlightDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[highlight]'
            },] },
];
/** @nocollapse */
HighlightDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: HighlightJS, },
]; };
HighlightDirective.propDecorators = {
    "highlight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "language": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "setCode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['code',] },],
    "highlighted": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function HighlightFactory(options) {
    return new HighlightJS(options);
}
var HighlightModule = /** @class */ (function () {
    function HighlightModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    HighlightModule.forRoot = function (options) {
        return {
            ngModule: HighlightModule,
            providers: [
                { provide: OPTIONS, useValue: options },
                {
                    provide: HighlightJS,
                    useFactory: HighlightFactory,
                    deps: [OPTIONS]
                }
            ]
        };
    };
    return HighlightModule;
}());
HighlightModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [HighlightDirective],
                exports: [HighlightDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-highlightjs.js.map


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _source_display_source_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source-display/source-display.component */ "./src/app/shared/source-display/source-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["HighlightModule"].forRoot({ theme: 'agate' })
            ],
            declarations: [
                _source_display_source_display_component__WEBPACK_IMPORTED_MODULE_3__["SourceDisplayComponent"]
            ],
            exports: [
                _source_display_source_display_component__WEBPACK_IMPORTED_MODULE_3__["SourceDisplayComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/source-display/source-display.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/source-display/source-display.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" [id]=\"idTab\" role=\"tablist\">\n  <li *ngIf=\"html\" class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#{{idTabHtml}}\" role=\"tab\" [attr.aria-controls]=\"idTabHtml\" aria-selected=\"true\">HTML</a></li>\n  <li *ngIf=\"typescript\" class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#{{idTypescript}}\" role=\"tab\" [attr.aria-controls]=\"idTypescript\" aria-selected=\"false\">TS</a></li>\n  <li *ngIf=\"css\" class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#{{idTabCss}}\" role=\"tab\" [attr.aria-controls]=\"idTabCss\" aria-selected=\"false\">CSS</a></li>\n</ul>\n<div class=\"tab-content\" [id]=\"idTabContent\">\n  <div *ngIf=\"html\" class=\"tab-pane p-3 fade show active\" [id]=\"idTabHtml\" role=\"tabpanel\" aria-labelledby=\"html-tab\">\n    <pre><code highlight [language]=\"['html']\" [textContent]=\"html\"></code></pre>\n  </div>\n  <div *ngIf=\"typescript\" class=\"tab-pane p-3 fade\" [id]=\"idTypescript\" role=\"tabpanel\" aria-labelledby=\"typescript-tab\">\n    <pre><code highlight [language]=\"['typescript']\" [textContent]=\"typescript\"></code></pre>\n  </div>\n  <div *ngIf=\"css\" class=\"tab-pane p-3 fade\" [id]=\"idTabCss\" role=\"tabpanel\" aria-labelledby=\"css-tab\">\n    <pre><code highlight [language]=\"['scss']\" [textContent]=\"css\"></code></pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/source-display/source-display.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/source-display/source-display.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/source-display/source-display.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/source-display/source-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: SourceDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDisplayComponent", function() { return SourceDisplayComponent; });
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

var tabIdentifier = 0;
var tabContentIdentifier = 0;
var tabHtmlIdentifier = 0;
var tabTypescriptIdentifier = 0;
var tabCssIdentifier = 0;
var SourceDisplayComponent = /** @class */ (function () {
    function SourceDisplayComponent() {
        this.idTab = "source-display-tab-" + tabIdentifier++;
        this.idTabContent = "source-display-tab-content-" + tabContentIdentifier++;
        this.idTabHtml = "tab-html-" + tabHtmlIdentifier++;
        this.idTypescript = "tab-typescript-" + tabTypescriptIdentifier++;
        this.idTabCss = "tab-css-" + tabCssIdentifier++;
    }
    SourceDisplayComponent.prototype.ngOnInit = function () {
        this.html = this.html.replace(/\/{\/{/g, '{{');
        this.html = this.html.replace(/\/}\/}/g, '}}');
        this.typescript = this.typescript.replace(/\/{\/{/g, '{{');
        this.typescript = this.typescript.replace(/\/}\/}/g, '}}');
        this.css = this.css.replace(/\/{\/{/g, '{{');
        this.css = this.css.replace(/\/}\/}/g, '}}');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SourceDisplayComponent.prototype, "html", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SourceDisplayComponent.prototype, "typescript", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SourceDisplayComponent.prototype, "css", void 0);
    SourceDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'it-source-display',
            template: __webpack_require__(/*! ./source-display.component.html */ "./src/app/shared/source-display/source-display.component.html"),
            styles: [__webpack_require__(/*! ./source-display.component.scss */ "./src/app/shared/source-display/source-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SourceDisplayComponent);
    return SourceDisplayComponent;
}());



/***/ }),

/***/ "./src/assets/documentation.json":
/*!***************************************!*\
  !*** ./src/assets/documentation.json ***!
  \***************************************/
/*! exports provided: pipes, interfaces, injectables, classes, directives, components, modules, miscellaneous, routes, coverage, default */
/***/ (function(module) {

module.exports = {"pipes":[],"interfaces":[],"injectables":[],"classes":[{"name":"CheckboxChange","id":"class-CheckboxChange-061d883b3f4d581a0a4d05a1d1a8bf78","file":"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts","type":"class","sourceCode":"import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\nlet identifier = 0;\n\nexport class CheckboxChange {\n  source: CheckboxComponent;\n  checked: boolean;\n}\n\n/**\n * Una checkbox con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,\n * ed espone una API simile. Una `<it-checkbox>` può essere checked, unchecked, o disabled.\n */\n@Component({\n  selector: 'it-checkbox',\n  templateUrl: './checkbox.component.html',\n  styleUrls: ['./checkbox.component.css'],\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true }],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class CheckboxComponent implements ControlValueAccessor {\n  /**\n   * Se la checkbox è selezionata.\n   */\n  @Input()\n  get checked(): boolean { return this._checked; }\n  set checked(value: boolean) {\n    if (value !== this.checked) {\n      this._checked = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _checked = false;\n\n  /**\n   * L'etichetta della checkbox.\n   */\n  @Input()\n  label: string;\n\n  /**\n   * Se la checkbox è disabilitata.\n   */\n  @Input()\n  get disabled(): boolean { return this._disabled; }\n  set disabled(value: boolean) {\n    if (value !== this.disabled) {\n      this._disabled = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _disabled = false;\n\n  /**\n   * Evento emesso quando il valore `checked` della checkbox cambia.\n   */\n  @Output() readonly change: EventEmitter<CheckboxChange> =\n    new EventEmitter<CheckboxChange>();\n\n    inputId = `checkbox-${identifier++}`;\n\n  private _onTouched: () => any = () => {};\n\n  private _controlValueAccessorChangeFn: (value: any) => void = () => { };\n\n  constructor(\n    private _changeDetectorRef: ChangeDetectorRef\n  ) { }\n\n  writeValue(value: any) {\n    this.checked = !!value;\n  }\n\n  registerOnChange(fn: (value: any) => void) {\n    this._controlValueAccessorChangeFn = fn;\n  }\n\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n\n  handleChange(event: Event) {\n    event.stopPropagation();\n    if (!this.disabled) {\n      this._toggle();\n      this._emitChangeEvent();\n    }\n  }\n\n  private _toggle(): void {\n    this.checked = !this.checked;\n  }\n\n  private _emitChangeEvent() {\n    const event = new CheckboxChange();\n    event.source = this;\n    event.checked = this.checked;\n\n    this._controlValueAccessorChangeFn(this.checked);\n    this.change.emit(event);\n  }\n}\n","properties":[{"name":"checked","type":"boolean","optional":false,"description":"","line":8},{"name":"source","type":"CheckboxComponent","optional":false,"description":"","line":7}],"methods":[],"indexSignatures":[],"inputsClass":[],"outputsClass":[],"hostBindings":[],"hostListeners":[]},{"name":"ToggleChange","id":"class-ToggleChange-96bbfccd611f40d2afe13f6321b42ce3","file":"projects/design-angular-kit/src/lib/toggle/toggle.component.ts","type":"class","sourceCode":"import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\nlet identifier = 0;\n\nexport class ToggleChange {\n  source: ToggleComponent;\n  checked: boolean;\n}\n\n/**\n * Una toggle con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,\n * ed espone una API simile. Una `<it-toggle>` può essere checked, unchecked, o disabled.\n */\n@Component({\n  selector: 'it-toggle',\n  templateUrl: './toggle.component.html',\n  styleUrls: ['./toggle.component.css'],\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleComponent), multi: true }],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ToggleComponent implements ControlValueAccessor {\n  /**\n   * Se la toggle è selezionata.\n   */\n  @Input()\n  get checked(): boolean { return this._checked; }\n  set checked(value: boolean) {\n    if (value !== this.checked) {\n      this._checked = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _checked = false;\n\n  /**\n   * L'etichetta della toggle.\n   */\n  @Input()\n  label: string;\n\n  /**\n   * Se la toggle è disabilitata.\n   */\n  @Input()\n  get disabled(): boolean { return this._disabled; }\n  set disabled(value: boolean) {\n    if (value !== this.disabled) {\n      this._disabled = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _disabled = false;\n\n  /**\n   * Evento emesso quando il valore `checked` della toggle cambia.\n   */\n  @Output() readonly change: EventEmitter<ToggleChange> =\n    new EventEmitter<ToggleChange>();\n\n    inputId = `toggle-${identifier++}`;\n\n  private _onTouched: () => any = () => {};\n\n  private _controlValueAccessorChangeFn: (value: any) => void = () => { };\n\n  constructor(\n    private _changeDetectorRef: ChangeDetectorRef\n  ) { }\n\n  writeValue(value: any) {\n    this.checked = !!value;\n  }\n\n  registerOnChange(fn: (value: any) => void) {\n    this._controlValueAccessorChangeFn = fn;\n  }\n\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n\n  handleChange(event: Event) {\n    event.stopPropagation();\n    if (!this.disabled) {\n      this._toggle();\n      this._emitChangeEvent();\n    }\n  }\n\n  private _toggle(): void {\n    this.checked = !this.checked;\n  }\n\n  private _emitChangeEvent() {\n    const event = new ToggleChange();\n    event.source = this;\n    event.checked = this.checked;\n\n    this._controlValueAccessorChangeFn(this.checked);\n    this.change.emit(event);\n  }\n}\n","properties":[{"name":"checked","type":"boolean","optional":false,"description":"","line":8},{"name":"source","type":"ToggleComponent","optional":false,"description":"","line":7}],"methods":[],"indexSignatures":[],"inputsClass":[],"outputsClass":[],"hostBindings":[],"hostListeners":[]}],"directives":[],"components":[{"name":"CheckboxComponent","id":"component-CheckboxComponent-061d883b3f4d581a0a4d05a1d1a8bf78","file":"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts","changeDetection":"ChangeDetectionStrategy.OnPush","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[{"name":"{ : , : (() => ), : true }"}],"selector":"it-checkbox","styleUrls":["checkbox.component.css"],"styles":[],"templateUrl":["./checkbox.component.html"],"viewProviders":[],"inputsClass":[{"name":"checked","description":"<p>Se la checkbox è selezionata.</p>\n","line":27,"type":"boolean"},{"name":"disabled","description":"<p>Se la checkbox è disabilitata.</p>\n","line":46,"type":"boolean"},{"name":"label","description":"<p>L&#39;etichetta della checkbox.</p>\n","line":40,"type":"string"}],"outputsClass":[{"name":"change","defaultValue":"new EventEmitter<CheckboxChange>()","description":"<p>Evento emesso quando il valore <code>checked</code> della checkbox cambia.</p>\n","line":58,"type":"EventEmitter<CheckboxChange>"}],"propertiesClass":[{"name":"_checked","defaultValue":"false","type":"","optional":false,"description":"","line":34,"modifierKind":[112]},{"name":"_controlValueAccessorChangeFn","defaultValue":"() => { }","type":"function","optional":false,"description":"","line":65,"modifierKind":[112]},{"name":"_disabled","defaultValue":"false","type":"","optional":false,"description":"","line":53,"modifierKind":[112]},{"name":"_onTouched","defaultValue":"() => {}","type":"function","optional":false,"description":"","line":63,"modifierKind":[112]},{"name":"inputId","defaultValue":"`checkbox-${identifier++}`","type":"","optional":false,"description":"","line":61}],"methodsClass":[{"name":"_emitChangeEvent","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":95,"modifierKind":[112]},{"name":"_toggle","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":91,"modifierKind":[112]},{"name":"handleChange","args":[{"name":"event","type":"Event"}],"optional":false,"returnType":"void","typeParameters":[],"line":83,"jsdoctags":[{"name":"event","type":"Event","tagName":{"text":"param"}}]},{"name":"registerOnChange","args":[{"name":"fn","type":"function","function":[{"name":"value","type":"any"}]}],"optional":false,"returnType":"void","typeParameters":[],"line":75,"jsdoctags":[{"name":"fn","type":"function","function":[{"name":"value","type":"any"}],"tagName":{"text":"param"}}]},{"name":"registerOnTouched","args":[{"name":"fn","type":"any"}],"optional":false,"returnType":"void","typeParameters":[],"line":79,"jsdoctags":[{"name":"fn","type":"any","tagName":{"text":"param"}}]},{"name":"writeValue","args":[{"name":"value","type":"any"}],"optional":false,"returnType":"void","typeParameters":[],"line":71,"jsdoctags":[{"name":"value","type":"any","tagName":{"text":"param"}}]}],"hostBindings":[],"hostListeners":[],"description":"<p>Una checkbox con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,\ned espone una API simile. Una <code>&lt;it-checkbox&gt;</code> può essere checked, unchecked, o disabled.</p>\n","type":"component","sourceCode":"import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\nlet identifier = 0;\n\nexport class CheckboxChange {\n  source: CheckboxComponent;\n  checked: boolean;\n}\n\n/**\n * Una checkbox con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,\n * ed espone una API simile. Una `<it-checkbox>` può essere checked, unchecked, o disabled.\n */\n@Component({\n  selector: 'it-checkbox',\n  templateUrl: './checkbox.component.html',\n  styleUrls: ['./checkbox.component.css'],\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true }],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class CheckboxComponent implements ControlValueAccessor {\n  /**\n   * Se la checkbox è selezionata.\n   */\n  @Input()\n  get checked(): boolean { return this._checked; }\n  set checked(value: boolean) {\n    if (value !== this.checked) {\n      this._checked = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _checked = false;\n\n  /**\n   * L'etichetta della checkbox.\n   */\n  @Input()\n  label: string;\n\n  /**\n   * Se la checkbox è disabilitata.\n   */\n  @Input()\n  get disabled(): boolean { return this._disabled; }\n  set disabled(value: boolean) {\n    if (value !== this.disabled) {\n      this._disabled = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _disabled = false;\n\n  /**\n   * Evento emesso quando il valore `checked` della checkbox cambia.\n   */\n  @Output() readonly change: EventEmitter<CheckboxChange> =\n    new EventEmitter<CheckboxChange>();\n\n    inputId = `checkbox-${identifier++}`;\n\n  private _onTouched: () => any = () => {};\n\n  private _controlValueAccessorChangeFn: (value: any) => void = () => { };\n\n  constructor(\n    private _changeDetectorRef: ChangeDetectorRef\n  ) { }\n\n  writeValue(value: any) {\n    this.checked = !!value;\n  }\n\n  registerOnChange(fn: (value: any) => void) {\n    this._controlValueAccessorChangeFn = fn;\n  }\n\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n\n  handleChange(event: Event) {\n    event.stopPropagation();\n    if (!this.disabled) {\n      this._toggle();\n      this._emitChangeEvent();\n    }\n  }\n\n  private _toggle(): void {\n    this.checked = !this.checked;\n  }\n\n  private _emitChangeEvent() {\n    const event = new CheckboxChange();\n    event.source = this;\n    event.checked = this.checked;\n\n    this._controlValueAccessorChangeFn(this.checked);\n    this.change.emit(event);\n  }\n}\n","constructorObj":{"name":"constructor","description":"","args":[{"name":"_changeDetectorRef","type":"ChangeDetectorRef"}],"line":65,"jsdoctags":[{"name":"_changeDetectorRef","type":"ChangeDetectorRef","tagName":{"text":"param"}}]},"implements":["ControlValueAccessor"],"accessors":{"checked":{"name":"checked","setSignature":{"name":"checked","type":"void","args":[{"name":"value","type":"boolean"}],"returnType":"void","line":28,"jsdoctags":[{"name":"value","type":"boolean","tagName":{"text":"param"}}]}},"disabled":{"name":"disabled","setSignature":{"name":"disabled","type":"void","args":[{"name":"value","type":"boolean"}],"returnType":"void","line":47,"jsdoctags":[{"name":"value","type":"boolean","tagName":{"text":"param"}}]}}},"templateData":"<div class=form-check>\n  <input type=checkbox\n    [id]=inputId\n    [checked]=checked\n    [disabled]=disabled\n    (change)=handleChange($event)>\n  <label\n    [attr.for]=inputId>{{label}}</label>\n</div>\n"},{"name":"ToggleComponent","id":"component-ToggleComponent-96bbfccd611f40d2afe13f6321b42ce3","file":"projects/design-angular-kit/src/lib/toggle/toggle.component.ts","changeDetection":"ChangeDetectionStrategy.OnPush","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[{"name":"{ : , : (() => ), : true }"}],"selector":"it-toggle","styleUrls":["toggle.component.css"],"styles":[],"templateUrl":["./toggle.component.html"],"viewProviders":[],"inputsClass":[{"name":"checked","description":"<p>Se la toggle è selezionata.</p>\n","line":27,"type":"boolean"},{"name":"disabled","description":"<p>Se la toggle è disabilitata.</p>\n","line":46,"type":"boolean"},{"name":"label","description":"<p>L&#39;etichetta della toggle.</p>\n","line":40,"type":"string"}],"outputsClass":[{"name":"change","defaultValue":"new EventEmitter<ToggleChange>()","description":"<p>Evento emesso quando il valore <code>checked</code> della toggle cambia.</p>\n","line":58,"type":"EventEmitter<ToggleChange>"}],"propertiesClass":[{"name":"_checked","defaultValue":"false","type":"","optional":false,"description":"","line":34,"modifierKind":[112]},{"name":"_controlValueAccessorChangeFn","defaultValue":"() => { }","type":"function","optional":false,"description":"","line":65,"modifierKind":[112]},{"name":"_disabled","defaultValue":"false","type":"","optional":false,"description":"","line":53,"modifierKind":[112]},{"name":"_onTouched","defaultValue":"() => {}","type":"function","optional":false,"description":"","line":63,"modifierKind":[112]},{"name":"inputId","defaultValue":"`toggle-${identifier++}`","type":"","optional":false,"description":"","line":61}],"methodsClass":[{"name":"_emitChangeEvent","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":95,"modifierKind":[112]},{"name":"_toggle","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":91,"modifierKind":[112]},{"name":"handleChange","args":[{"name":"event","type":"Event"}],"optional":false,"returnType":"void","typeParameters":[],"line":83,"jsdoctags":[{"name":"event","type":"Event","tagName":{"text":"param"}}]},{"name":"registerOnChange","args":[{"name":"fn","type":"function","function":[{"name":"value","type":"any"}]}],"optional":false,"returnType":"void","typeParameters":[],"line":75,"jsdoctags":[{"name":"fn","type":"function","function":[{"name":"value","type":"any"}],"tagName":{"text":"param"}}]},{"name":"registerOnTouched","args":[{"name":"fn","type":"any"}],"optional":false,"returnType":"void","typeParameters":[],"line":79,"jsdoctags":[{"name":"fn","type":"any","tagName":{"text":"param"}}]},{"name":"writeValue","args":[{"name":"value","type":"any"}],"optional":false,"returnType":"void","typeParameters":[],"line":71,"jsdoctags":[{"name":"value","type":"any","tagName":{"text":"param"}}]}],"hostBindings":[],"hostListeners":[],"description":"<p>Una toggle con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,\ned espone una API simile. Una <code>&lt;it-toggle&gt;</code> può essere checked, unchecked, o disabled.</p>\n","type":"component","sourceCode":"import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\nlet identifier = 0;\n\nexport class ToggleChange {\n  source: ToggleComponent;\n  checked: boolean;\n}\n\n/**\n * Una toggle con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,\n * ed espone una API simile. Una `<it-toggle>` può essere checked, unchecked, o disabled.\n */\n@Component({\n  selector: 'it-toggle',\n  templateUrl: './toggle.component.html',\n  styleUrls: ['./toggle.component.css'],\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleComponent), multi: true }],\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class ToggleComponent implements ControlValueAccessor {\n  /**\n   * Se la toggle è selezionata.\n   */\n  @Input()\n  get checked(): boolean { return this._checked; }\n  set checked(value: boolean) {\n    if (value !== this.checked) {\n      this._checked = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _checked = false;\n\n  /**\n   * L'etichetta della toggle.\n   */\n  @Input()\n  label: string;\n\n  /**\n   * Se la toggle è disabilitata.\n   */\n  @Input()\n  get disabled(): boolean { return this._disabled; }\n  set disabled(value: boolean) {\n    if (value !== this.disabled) {\n      this._disabled = value;\n      this._changeDetectorRef.markForCheck();\n    }\n  }\n  private _disabled = false;\n\n  /**\n   * Evento emesso quando il valore `checked` della toggle cambia.\n   */\n  @Output() readonly change: EventEmitter<ToggleChange> =\n    new EventEmitter<ToggleChange>();\n\n    inputId = `toggle-${identifier++}`;\n\n  private _onTouched: () => any = () => {};\n\n  private _controlValueAccessorChangeFn: (value: any) => void = () => { };\n\n  constructor(\n    private _changeDetectorRef: ChangeDetectorRef\n  ) { }\n\n  writeValue(value: any) {\n    this.checked = !!value;\n  }\n\n  registerOnChange(fn: (value: any) => void) {\n    this._controlValueAccessorChangeFn = fn;\n  }\n\n  registerOnTouched(fn: any) {\n    this._onTouched = fn;\n  }\n\n  handleChange(event: Event) {\n    event.stopPropagation();\n    if (!this.disabled) {\n      this._toggle();\n      this._emitChangeEvent();\n    }\n  }\n\n  private _toggle(): void {\n    this.checked = !this.checked;\n  }\n\n  private _emitChangeEvent() {\n    const event = new ToggleChange();\n    event.source = this;\n    event.checked = this.checked;\n\n    this._controlValueAccessorChangeFn(this.checked);\n    this.change.emit(event);\n  }\n}\n","constructorObj":{"name":"constructor","description":"","args":[{"name":"_changeDetectorRef","type":"ChangeDetectorRef"}],"line":65,"jsdoctags":[{"name":"_changeDetectorRef","type":"ChangeDetectorRef","tagName":{"text":"param"}}]},"implements":["ControlValueAccessor"],"accessors":{"checked":{"name":"checked","setSignature":{"name":"checked","type":"void","args":[{"name":"value","type":"boolean"}],"returnType":"void","line":28,"jsdoctags":[{"name":"value","type":"boolean","tagName":{"text":"param"}}]}},"disabled":{"name":"disabled","setSignature":{"name":"disabled","type":"void","args":[{"name":"value","type":"boolean"}],"returnType":"void","line":47,"jsdoctags":[{"name":"value","type":"boolean","tagName":{"text":"param"}}]}}},"templateData":"<div class=\"form-check\">\n  <div class=\"toggles\">\n    <label [attr.for]=inputId>\n      {{label}}\n      <input type=checkbox\n        [id]=inputId\n        [checked]=checked\n        [disabled]=disabled\n        (change)=handleChange($event)>\n      <span class=\"lever\"></span>\n    </label>\n  </div>\n</div>"}],"modules":[{"name":"DesignAngularKitModule","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[{"name":"CheckboxComponent"},{"name":"ToggleComponent"}]},{"type":"imports","elements":[]},{"type":"exports","elements":[{"name":"CheckboxComponent"},{"name":"ToggleComponent"}]},{"type":"bootstrap","elements":[]},{"type":"classes","elements":[]}]}],"miscellaneous":{"variables":[{"name":"identifier","ctype":"miscellaneous","subtype":"variable","file":"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts","type":"number","defaultValue":"0"},{"name":"identifier","ctype":"miscellaneous","subtype":"variable","file":"projects/design-angular-kit/src/lib/toggle/toggle.component.ts","type":"number","defaultValue":"0"}],"functions":[],"typealiases":[],"enumerations":[],"groupedVariables":{"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts":[{"name":"identifier","ctype":"miscellaneous","subtype":"variable","file":"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts","type":"number","defaultValue":"0"}],"projects/design-angular-kit/src/lib/toggle/toggle.component.ts":[{"name":"identifier","ctype":"miscellaneous","subtype":"variable","file":"projects/design-angular-kit/src/lib/toggle/toggle.component.ts","type":"number","defaultValue":"0"}]},"groupedFunctions":{},"groupedEnumerations":{},"groupedTypeAliases":{}},"routes":[],"coverage":{"count":9,"status":"low","files":[{"filePath":"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts","type":"component","linktype":"component","name":"CheckboxComponent","coveragePercent":29,"coverageCount":"5/17","status":"medium"},{"filePath":"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts","type":"class","linktype":"classe","name":"CheckboxChange","coveragePercent":0,"coverageCount":"0/3","status":"low"},{"filePath":"projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"identifier","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/design-angular-kit/src/lib/toggle/toggle.component.ts","type":"component","linktype":"component","name":"ToggleComponent","coveragePercent":29,"coverageCount":"5/17","status":"medium"},{"filePath":"projects/design-angular-kit/src/lib/toggle/toggle.component.ts","type":"class","linktype":"classe","name":"ToggleChange","coveragePercent":0,"coverageCount":"0/3","status":"low"},{"filePath":"projects/design-angular-kit/src/lib/toggle/toggle.component.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"identifier","coveragePercent":0,"coverageCount":"0/1","status":"low"}]}};

/***/ })

}]);
//# sourceMappingURL=src-app-checkbox-checkbox-module~src-app-toggle-toggle-module.js.map