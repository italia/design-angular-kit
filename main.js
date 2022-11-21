"use strict";
(self["webpackChunkdesign_angular_kit_bundle"] = self["webpackChunkdesign_angular_kit_bundle"] || []).push([["main"],{

/***/ 4009:
/*!**********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/badge/badge.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeDirective": () => (/* binding */ BadgeDirective)
/* harmony export */ });
/* harmony import */ var _models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ThemeColor */ 5131);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




/**
 * Una badge con design bootstrap italia.
 */
class BadgeDirective {
    constructor(el) {
        this.el = el;
        this._badgeColor = _models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__.THEME_COLORS.LIGHT;
        this._badgeText = '';
        this._isPill = false;
    }
    /**
     * (Opzionale) indica il colore del badge. Può essere `primary`, `secondary`, `danger`, `warning`, `info`, `success`, `light` o `dark`.
     * Se non viene fornito o il valore è diverso da quelli previsti il suo valore di default è `light`.
     */
    get badgeColor() {
        return this._badgeColor;
    }
    set badgeColor(value) {
        if (_models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__.ThemeColor.is(value)) {
            this._badgeColor = value;
        }
        else {
            this._badgeColor = _models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__.THEME_COLORS.LIGHT;
        }
    }
    /**
     * La direttiva che abilita l'elemento come badge. Mostra il testo come contenuto del badge.
     * Se valutato ad `undefined`, `null` o stringa vuota il badge non viene mostrato.
     */
    get badgeText() { return this._badgeText; }
    set badgeText(value) {
        if (value) {
            this._badgeText = value;
        }
        else {
            this._badgeText = '';
        }
    }
    /**
     * Indica se il badge è arrotondato o meno.
     */
    get isPill() { return this._isPill; }
    set isPill(value) {
        this._isPill = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value);
    }
    getBadgeColorClassName() {
        return `bg-${this._badgeColor}`;
    }
    get hostClasses() {
        return [
            'badge',
            this.getBadgeColorClassName(),
            this.isPill ? 'rounded-pill' : '',
        ].join(' ');
    }
}
BadgeDirective.ɵfac = function BadgeDirective_Factory(t) { return new (t || BadgeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
BadgeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: BadgeDirective, selectors: [["", "itBadge", ""]], hostVars: 3, hostBindings: function BadgeDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("innerText", ctx.badgeText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.hostClasses);
    } }, inputs: { badgeColor: "badgeColor", badgeText: ["itBadge", "badgeText"], isPill: "isPill" }, exportAs: ["itBadge"] });


/***/ }),

/***/ 3220:
/*!*************************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/breadcrumb/breadcrumb-item.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbItemComponent": () => (/* binding */ BreadcrumbItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/focus-mouse.directive */ 1724);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/icon.component */ 9132);





function BreadcrumbItemComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.separator);
} }
const _c0 = ["*"];
let identifier = 0;
class BreadcrumbItemComponent {
    constructor(_cdRef, _elemRef) {
        this._cdRef = _cdRef;
        this._elemRef = _elemRef;
        this.id = `it-breadcrumb-item-${identifier++}`;
        this._isLast = false;
        this.customClass = '';
    }
    /**
     * Il link alla pagina verso cui andare al click di questo elemento del breadcrumb
     */
    get link() { return this._link; }
    set link(value) { this._link = value; }
    /**
     * La classe dell'icona da usare prima del testo dell'elemento del breadcrumb
     */
    get icon() { return this._icon; }
    set icon(value) { this._icon = value; }
    get iconColor() { return this._iconColor; }
    set iconColor(value) {
        if (this._iconColor !== value) {
            this._iconColor = value;
            this._cdRef.detectChanges();
        }
    }
    get separator() { return this._separator; }
    set separator(value) { this._separator = value; }
    get isLast() { return this._isLast; }
    set isLast(value) {
        this._isLast = value;
        const breadcrumbItem = this._elemRef.nativeElement.querySelector('.breadcrumb-item');
        if (this._isLast) {
            breadcrumbItem.setAttribute('aria-current', 'page');
        }
        else {
            if (breadcrumbItem.hasAttribute('aria-current')) {
                breadcrumbItem.removeAttribute('aria-current');
            }
        }
        this._cdRef.detectChanges();
    }
    get breadcrumbClass() {
        return 'breadcrumb-item ' + (this.customClass ?? '') + (this.isLast ? ' active' : '');
    }
}
BreadcrumbItemComponent.ɵfac = function BreadcrumbItemComponent_Factory(t) { return new (t || BreadcrumbItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
BreadcrumbItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbItemComponent, selectors: [["it-breadcrumb-item"]], inputs: { link: "link", icon: "icon", iconColor: "iconColor", customClass: "customClass" }, ngContentSelectors: _c0, decls: 5, vars: 7, consts: [[3, "id"], [3, "icon", "color"], ["focusMouse", "", 3, "href"], ["class", "separator", 4, "ngIf"], [1, "separator"]], template: function BreadcrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "it-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BreadcrumbItemComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.breadcrumbClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.icon)("color", ctx.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLast);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__.FocusMouseDirective, _icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 6089:
/*!********************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/breadcrumb/breadcrumb.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb-item.component */ 3220);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = ["*"];
const DEFAULT_SEPARATOR = '/';
let identifier = 0;
/**
 * Una componente che indica la posizione della pagina corrente all’interno di una gerarchia di navigazione
 */
class BreadcrumbComponent {
    constructor() {
        this.id = `it-breadcrumb-${identifier++}`;
        this._dark = false;
        this._separator = DEFAULT_SEPARATOR;
        this.customClass = '';
        this.ariaLabel = 'breadcrumb';
        this._subscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    }
    /**
     * Indica che il breadcrumb utilizza il tema di colorazione scura.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get dark() { return this._dark; }
    set dark(value) {
        this._dark = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value);
    }
    /**
     * Il carattere che verrà usato come separatore tra gli elementi del breadcrumb
     */
    get separator() { return this._separator; }
    set separator(value) { this._separator = value ? value : DEFAULT_SEPARATOR; }
    get breadcrumbClass() {
        return 'breadcrumb ' + (this.customClass ?? '') + (this._dark ? ' dark' : '');
    }
    ngAfterContentInit() {
        this._reloadBreadcrumbs(this._items);
    }
    ngOnChanges(changes) {
        if (changes['separator']) {
            if (!changes['separator'].firstChange) {
                this._reloadBreadcrumbs(this._items);
            }
        }
        else if (changes['dark']) {
            this._reloadBreadcrumbs(this._items);
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    _reloadBreadcrumbs(currentItems) {
        currentItems.forEach(item => {
            item.separator = this.separator;
            item.isLast = (item === currentItems.last);
            item.iconColor = item.iconColor || (this._dark ? 'white' : 'primary');
        });
        this._subscribeToChanges();
    }
    _subscribeToChanges() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = this._items.changes.subscribe(items => {
            this._reloadBreadcrumbs(items);
        });
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["it-breadcrumb"]], contentQueries: function BreadcrumbComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbItemComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, inputs: { dark: "dark", separator: "separator", customClass: "customClass", ariaLabel: "ariaLabel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 3, consts: [[1, "breadcrumb-container", 3, "id"], [3, "ngClass"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.breadcrumbClass);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 9103:
/*!************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/button/button.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItButtonDirective": () => (/* binding */ ItButtonDirective)
/* harmony export */ });
/* harmony import */ var _models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ThemeColor */ 5131);
/* harmony import */ var _models_ButtonSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ButtonSize */ 9013);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon.component */ 9132);
/* harmony import */ var _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/icons.enum */ 8658);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ 7043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dropdown/dropdown.directive */ 1812);









/**
 * Un bottone con design bootstrap italia. Supporta tutte le funzionalità di un bottone HTML5.
 */
class ItButtonDirective {
    constructor(dropdownToggle, _cdr) {
        this._cdr = _cdr;
        this._isDropdownButton = false;
        this.autoUpdateIconColor = true;
        this._disabled = false;
        this._onFocus = false;
        this._outline = false;
        this._block = false;
        this._isDropdownButton = !!dropdownToggle;
    }
    isLightColor(color) {
        return color === _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum.light || color === _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum.info ||
            color === _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum.white;
    }
    set color(value) {
        if (_models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__.ThemeColor.is(value)) {
            this._color = value;
        }
        else {
            this._color = this._isDropdownButton ? "dropdown" : _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum.primary;
        }
        if (this.autoUpdateIconColor) {
            this.updateButtonIconColor();
        }
    }
    updateButtonIconColor() {
        this.iconComponents?.forEach(icon => {
            let newIconColor = _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum.primary;
            if (this._color === "dropdown") {
                newIconColor = _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum.primary;
            }
            else if (this.isLightColor(this._color)) {
                newIconColor = _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum["default"];
            }
            else {
                newIconColor = _enums_icons_enum__WEBPACK_IMPORTED_MODULE_4__.IconColorEnum.white;
            }
            icon.changeColor(newIconColor);
        });
    }
    /**
     * Stabilisce il colore del pulsante a seconda delle classi di bootstrap.
     * Può avere valori:
     * <ul>
     * <li> primary
     * <li> secondary
     * <li> danger
     * <li> warning
     * <li> info
     * <li> success
     * <li> light
     * <li> dark
     * </ul>
     */
    get color() {
        return this._color;
    }
    /**
     * Se presente, il pulsante avrà un effetto di trasparenza e non reagirà al click
     */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = _util_util__WEBPACK_IMPORTED_MODULE_2__.Util.coerceBooleanProperty(value); }
    onFocus() {
        this._onFocus = true;
    }
    onBlur() {
        this._onFocus = false;
    }
    /**
     * Stabilisce se lo stile del pulsante avrà un contorno.
     * Accetta una espressione booleana o può essere usato come attributo senza valore.
     * Deve funzionare solo in congiunzione con un colore definito, altrimenti l'attributo viene ignorato.
     */
    get outline() { return this._outline; }
    set outline(value) { this._outline = _util_util__WEBPACK_IMPORTED_MODULE_2__.Util.coerceBooleanProperty(value); }
    /**
     * Indica se il pulsante occupa tutta l'ampiezza a sua disposizione.
     */
    get block() { return this._block; }
    set block(value) { this._block = _util_util__WEBPACK_IMPORTED_MODULE_2__.Util.coerceBooleanProperty(value); }
    /**
     * Indica la grandezza del pulsante. Può assumere i valori:
     * <ul>
     * <li> lg
     * <li> sm
     * <li> xs
     * </ul>
     */
    get size() {
        return this._size;
    }
    set size(value) {
        if (_models_ButtonSize__WEBPACK_IMPORTED_MODULE_1__.ButtonSize.is(value)) {
            this._size = value;
        }
        else {
            this._size = undefined;
        }
    }
    get hostClasses() {
        let cssClass = 'btn';
        if (this.color) {
            if (this.outline) {
                cssClass += ` btn-outline-${this.color}`;
            }
            else {
                cssClass += ` btn-${this.color}`;
            }
        }
        if (this.size) {
            cssClass += ` btn-${this.size}`;
        }
        if (this.block) {
            cssClass += ' btn-block';
        }
        if (this.disabled) {
            cssClass += ' disabled';
        }
        if (this._onFocus) {
            cssClass += ' focus--mouse';
        }
        if (this.iconComponents?.length && !this.progressBar) {
            cssClass += ' btn-icon';
        }
        if (this.progressBar) {
            cssClass += ' btn-progress';
        }
        return cssClass;
    }
}
ItButtonDirective.ɵfac = function ItButtonDirective_Factory(t) { return new (t || ItButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownToggle, 9), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef)); };
ItButtonDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({ type: ItButtonDirective, selectors: [["", "itButton", ""]], contentQueries: function ItButtonDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.iconComponents = _t);
    } }, hostVars: 2, hostBindings: function ItButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function ItButtonDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ItButtonDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.hostClasses);
    } }, inputs: { autoUpdateIconColor: "autoUpdateIconColor", color: ["itButton", "color"], disabled: "disabled", outline: "outline", block: "block", size: "size" }, exportAs: ["itButton"] });


/***/ }),

/***/ 2681:
/*!*********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/button/button.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItButtonModule": () => (/* binding */ ItButtonModule)
/* harmony export */ });
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/icon.module */ 4898);
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.directive */ 9103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class ItButtonModule {
}
ItButtonModule.ɵfac = function ItButtonModule_Factory(t) { return new (t || ItButtonModule)(); };
ItButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ItButtonModule });
ItButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_icon_icon_module__WEBPACK_IMPORTED_MODULE_0__.ItIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ItButtonModule, { declarations: [_button_directive__WEBPACK_IMPORTED_MODULE_1__.ItButtonDirective], imports: [_icon_icon_module__WEBPACK_IMPORTED_MODULE_0__.ItIconModule], exports: [_button_directive__WEBPACK_IMPORTED_MODULE_1__.ItButtonDirective] }); })();


/***/ }),

/***/ 991:
/*!****************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/checkbox/checkbox.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxChange": () => (/* binding */ CheckboxChange),
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["input"];
function CheckboxComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx_r1.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.label);
} }
const _c1 = ["*"];
let identifier = 0;
class CheckboxChange {
}
/**
 * Una checkbox con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,
 * ed espone una API simile. Una `<it-checkbox>` può essere checked, unchecked, o disabled.
 */
class CheckboxComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._checked = false;
        this._grouped = false;
        this._disabled = false;
        this._inline = false;
        this._indeterminate = false;
        this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.focus = false;
        /**
         * Evento emesso quando il valore `checked` della checkbox cambia.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.inputId = `checkbox-${identifier++}`;
        this._onTouched = () => { };
        this._controlValueAccessorChangeFn = () => { };
    }
    /**
     * Se la checkbox è selezionata.
     */
    get checked() { return this._checked; }
    set checked(value) {
        if (value !== this.checked) {
            this._checked = value;
            if (this._checked) {
                this.indeterminate = false;
            }
            this._changeDetectorRef.markForCheck();
        }
    }
    get grouped() { return this._grouped; }
    set grouped(value) { this._grouped = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value); }
    /**
     * Se la checkbox è disabilitata.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        if (value !== this.disabled) {
            this._disabled = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    get inline() { return this._inline; }
    set inline(value) { this._inline = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value); }
    get indeterminate() { return this._indeterminate; }
    set indeterminate(value) {
        const newValue = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value);
        const changed = this._indeterminate !== newValue;
        if (changed) {
            this._indeterminate = newValue;
            this.indeterminateChange.emit(this._indeterminate);
            if (this._indeterminate) {
                queueMicrotask(() => {
                    this.checked = false;
                    this._emitChangeEvent();
                });
            }
        }
    }
    onFocus() {
        this.focus = true;
    }
    onBlur() {
        this.focus = false;
    }
    writeValue(value) {
        this.checked = !!value;
    }
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    handleChange(event) {
        event.stopPropagation();
        if (!this.disabled) {
            if (!this.indeterminate) {
                this._toggle();
            }
            else {
                this.indeterminate = false;
                // reset proprietà "checked" per prevenire il comportamento di default dell'elemento HTML
                this._inputElement.nativeElement.checked = this.checked;
            }
            this._emitChangeEvent();
        }
    }
    _toggle() {
        this.checked = !this.checked;
    }
    _emitChangeEvent() {
        const event = new CheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["it-checkbox"]], viewQuery: function CheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, inputs: { checked: "checked", grouped: "grouped", label: "label", disabled: "disabled", inline: "inline", indeterminate: "indeterminate" }, outputs: { indeterminateChange: "indeterminateChange", change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CheckboxComponent), multi: true }])], ngContentSelectors: _c1, decls: 5, vars: 12, consts: [[1, "form-check"], ["type", "checkbox", 3, "id", "checked", "disabled", "change", "focus", "blur"], ["input", ""], [4, "ngIf"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CheckboxComponent_Template_input_change_1_listener($event) { return ctx.handleChange($event); })("focus", function CheckboxComponent_Template_input_focus_1_listener() { return ctx.onFocus(); })("blur", function CheckboxComponent_Template_input_blur_1_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CheckboxComponent_label_3_Template, 2, 2, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("form-check-group", ctx.grouped)("form-check-inline", ctx.inline);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("focus--mouse", ctx.focus)("semi-checked", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 8146:
/*!**********************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/collapse/collapse-group.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItCollapseGroupComponent": () => (/* binding */ ItCollapseGroupComponent)
/* harmony export */ });
/* harmony import */ var _collapse_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse-item.component */ 3196);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const _c0 = ["*"];
let identifier = 0;
class ItCollapseGroupComponent {
    constructor() {
        this.id = `collapse-group-${identifier++}`;
        this._accordion = false;
    }
    /**
     * Indica se gli item del gruppo sono mutuamente richiudibili (o accordion)
     */
    get accordion() { return this._accordion; }
    set accordion(value) { this._accordion = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    onClick(target) {
        if (this.accordion) {
            const items = this._items.toArray();
            items.forEach(currentItem => {
                const isTargetPartOfItem = currentItem.elementRef.nativeElement.contains(target);
                if (!isTargetPartOfItem) {
                    if (!currentItem.directive.isCollapsed) {
                        currentItem.directive.toggle();
                    }
                }
            });
        }
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges['accordion']) {
            const isAccordion = simpleChanges['accordion'].currentValue;
            if (isAccordion) {
                const items = this._items.toArray();
                items.forEach(currentItem => {
                    if (!currentItem.directive.isCollapsed) {
                        currentItem.directive.toggle();
                    }
                });
            }
        }
    }
}
ItCollapseGroupComponent.ɵfac = function ItCollapseGroupComponent_Factory(t) { return new (t || ItCollapseGroupComponent)(); };
ItCollapseGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItCollapseGroupComponent, selectors: [["it-collapse-group"]], contentQueries: function ItCollapseGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _collapse_item_component__WEBPACK_IMPORTED_MODULE_0__.ItCollapseItemComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, hostBindings: function ItCollapseGroupComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItCollapseGroupComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } }, inputs: { accordion: "accordion" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["role", "tablist", 1, "collapse-div", 3, "id"]], template: function ItCollapseGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS1ncm91cC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3196:
/*!*********************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/collapse/collapse-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItCollapseItemComponent": () => (/* binding */ ItCollapseItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _collapse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.directive */ 2959);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/focus-mouse.directive */ 1724);






const _c0 = function (a0) { return { "collapsed": a0 }; };
const _c1 = ["*"];
let identifier = 0;
class ItCollapseItemComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.id = `collapse-item-${identifier++}`;
        this.headingId = `${this.id}-heading`;
        this._showEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this._shownEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this._hideEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this._hiddenEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    /**
     * Testo del bottone di apertura/chiusura del collapse item
     */
    get header() { return this._header; }
    set header(value) { this._header = value; }
    /**
     * Evento da emettere quando il collapse sta per essere mostrato
     */
    get showEvent() { return this._showEvent; }
    set showEvent(value) { this._showEvent = value; }
    /**
     * Evento da emettere quando il collapse è mostrato
     */
    get shownEvent() { return this._shownEvent; }
    set shownEvent(value) { this._shownEvent = value; }
    /**
     * Evento da emettere quando il collapse sta per essere nascosto
     */
    get hideEvent() { return this._hideEvent; }
    set hideEvent(value) { this._hideEvent = value; }
    /**
     * Evento da emettere quando il collapse è nascosto
     */
    get hiddenEvent() { return this._hiddenEvent; }
    set hiddenEvent(value) { this._hiddenEvent = value; }
    show() {
        this.showEvent.emit(this);
    }
    hide() {
        this.hideEvent.emit(this);
    }
    shown() {
        this.shownEvent.emit(this);
    }
    hidden() {
        this.hiddenEvent.emit(this);
    }
}
ItCollapseItemComponent.ɵfac = function ItCollapseItemComponent_Factory(t) { return new (t || ItCollapseItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
ItCollapseItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItCollapseItemComponent, selectors: [["it-collapse-item"]], viewQuery: function ItCollapseItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_collapse_directive__WEBPACK_IMPORTED_MODULE_0__.ItCollapseDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.directive = _t.first);
    } }, inputs: { header: "header" }, outputs: { showEvent: "show", shownEvent: "shown", hideEvent: "hide", hiddenEvent: "hidden" }, ngContentSelectors: _c1, decls: 8, vars: 9, consts: [[1, "collapse-header", 3, "id"], ["focusMouse", "", "data-toggle", "collapse", 3, "ngClass", "click"], ["toggleButton", ""], ["itCollapse", "", "role", "tabpanel", 3, "id", "shown", "hidden"], ["collapse", "itCollapse"], [1, "collapse-body"]], template: function ItCollapseItemComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItCollapseItemComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r1.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shown", function ItCollapseItemComponent_Template_div_shown_4_listener() { return ctx.shown(); })("hidden", function ItCollapseItemComponent_Template_div_hidden_4_listener() { return ctx.hidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.headingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, _r1.isCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !_r1.isCollapsed)("aria-controls", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.header, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-labelledby", ctx.headingId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_1__.FocusMouseDirective, _collapse_directive__WEBPACK_IMPORTED_MODULE_0__.ItCollapseDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2285:
/*!*************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/collapse/collapse.config.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItCollapseConfig": () => (/* binding */ ItCollapseConfig)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ItCollapseConfig extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbCollapseConfig {
}
ItCollapseConfig.ɵfac = /*@__PURE__*/ function () { let ɵItCollapseConfig_BaseFactory; return function ItCollapseConfig_Factory(t) { return (ɵItCollapseConfig_BaseFactory || (ɵItCollapseConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ItCollapseConfig)))(t || ItCollapseConfig); }; }();
ItCollapseConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItCollapseConfig, factory: ItCollapseConfig.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2959:
/*!****************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/collapse/collapse.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItCollapseDirective": () => (/* binding */ ItCollapseDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _collapse_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.config */ 2285);





/**
 * Per ottimizzare l’ingombro dei contenuti di una pagina si possono usare degli elementi richiudibili
 * (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l’uno dall’altro
 */
class ItCollapseDirective extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCollapse {
    constructor(_cd, _elementRef, _config, _ngZone) {
        super(_elementRef, _config, _ngZone);
        this._cd = _cd;
        this.itCollapseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        super.ngOnInit();
        super.collapsed = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(this.itCollapse);
        super.ngbCollapseChange = this.itCollapseChange;
        this._cd.detectChanges();
    }
    ngOnChanges({ itCollapse }) {
        const coercedValue = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(itCollapse.currentValue);
        super.collapsed = coercedValue;
        super.ngOnChanges({ collapsed: itCollapse });
    }
    get isCollapsed() {
        return this.collapsed;
    }
    show() {
        if (this.isCollapsed) {
            super.toggle();
        }
    }
    hide() {
        if (!this.isCollapsed) {
            super.toggle();
        }
    }
}
ItCollapseDirective.ɵfac = function ItCollapseDirective_Factory(t) { return new (t || ItCollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_collapse_config__WEBPACK_IMPORTED_MODULE_1__.ItCollapseConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); };
ItCollapseDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ItCollapseDirective, selectors: [["", "itCollapse", ""]], inputs: { itCollapse: "itCollapse" }, outputs: { itCollapseChange: "itCollapseChange" }, exportAs: ["itCollapse"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 2484:
/*!*************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/collapse/collapse.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItCollapseModule": () => (/* binding */ ItCollapseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _util_utils_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils.module */ 5842);
/* harmony import */ var _collapse_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse-group.component */ 8146);
/* harmony import */ var _collapse_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse-item.component */ 3196);
/* harmony import */ var _collapse_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse.directive */ 2959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class ItCollapseModule {
}
ItCollapseModule.ɵfac = function ItCollapseModule_Factory(t) { return new (t || ItCollapseModule)(); };
ItCollapseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ItCollapseModule });
ItCollapseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapseModule, _util_utils_module__WEBPACK_IMPORTED_MODULE_0__.ItUtilsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ItCollapseModule, { declarations: [_collapse_directive__WEBPACK_IMPORTED_MODULE_3__.ItCollapseDirective, _collapse_item_component__WEBPACK_IMPORTED_MODULE_2__.ItCollapseItemComponent, _collapse_group_component__WEBPACK_IMPORTED_MODULE_1__.ItCollapseGroupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapseModule, _util_utils_module__WEBPACK_IMPORTED_MODULE_0__.ItUtilsModule], exports: [_collapse_directive__WEBPACK_IMPORTED_MODULE_3__.ItCollapseDirective, _collapse_item_component__WEBPACK_IMPORTED_MODULE_2__.ItCollapseItemComponent, _collapse_group_component__WEBPACK_IMPORTED_MODULE_1__.ItCollapseGroupComponent] }); })();


/***/ }),

/***/ 3078:
/*!**************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/design-angular-kit.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignAngularKitModule": () => (/* binding */ DesignAngularKitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox/checkbox.component */ 991);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ 7043);
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio/radio.component */ 3320);
/* harmony import */ var _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle/toggle.component */ 4404);
/* harmony import */ var _badge_badge_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge/badge.directive */ 4009);
/* harmony import */ var _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-input/form-input.component */ 8012);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 6089);
/* harmony import */ var _breadcrumb_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb/breadcrumb-item.component */ 3220);
/* harmony import */ var _form_input_it_prefix_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-input/it-prefix.directive */ 4376);
/* harmony import */ var _form_input_it_suffix_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-input/it-suffix.directive */ 3988);
/* harmony import */ var _form_input_it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-input/it-text-prefix.directive */ 6441);
/* harmony import */ var _form_input_it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-input/it-text-suffix.directive */ 2936);
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popover/popover.module */ 643);
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltip/tooltip.module */ 8099);
/* harmony import */ var _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./collapse/collapse.module */ 2484);
/* harmony import */ var _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dropdown/dropdown.module */ 1405);
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icon/icon.module */ 4898);
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./button/button.module */ 2681);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tabs/tabs.module */ 4405);
/* harmony import */ var _form_input_mark_matching_text_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form-input/mark-matching-text.pipe */ 2711);
/* harmony import */ var _util_utils_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util/utils.module */ 5842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);
























class DesignAngularKitModule {
}
DesignAngularKitModule.ɵfac = function DesignAngularKitModule_Factory(t) { return new (t || DesignAngularKitModule)(); };
DesignAngularKitModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: DesignAngularKitModule });
DesignAngularKitModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _util_utils_module__WEBPACK_IMPORTED_MODULE_20__.ItUtilsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _popover_popover_module__WEBPACK_IMPORTED_MODULE_12__.ItPopoverModule,
        _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_13__.ItTooltipModule,
        _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_14__.ItCollapseModule,
        _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__.ItDropdownModule,
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_16__.ItIconModule,
        _button_button_module__WEBPACK_IMPORTED_MODULE_17__.ItButtonModule,
        _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_18__.ItTabsModule, _button_button_module__WEBPACK_IMPORTED_MODULE_17__.ItButtonModule,
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_16__.ItIconModule,
        _popover_popover_module__WEBPACK_IMPORTED_MODULE_12__.ItPopoverModule,
        _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_13__.ItTooltipModule,
        _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_14__.ItCollapseModule,
        _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__.ItDropdownModule,
        _util_utils_module__WEBPACK_IMPORTED_MODULE_20__.ItUtilsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](DesignAngularKitModule, { declarations: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent,
        _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__.ToggleComponent,
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_2__.RadioGroupDirective,
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_2__.RadioButtonComponent,
        _badge_badge_directive__WEBPACK_IMPORTED_MODULE_4__.BadgeDirective,
        _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarComponent,
        _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_5__.FormInputComponent,
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent,
        _breadcrumb_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbItemComponent,
        _form_input_it_prefix_directive__WEBPACK_IMPORTED_MODULE_8__.ItPrefixDirective,
        _form_input_it_suffix_directive__WEBPACK_IMPORTED_MODULE_9__.ItSuffixDirective,
        _form_input_it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_10__.ItTextPrefixDirective,
        _form_input_it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_11__.ItTextSuffixDirective,
        _form_input_mark_matching_text_pipe__WEBPACK_IMPORTED_MODULE_19__.MarkMatchingTextPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _util_utils_module__WEBPACK_IMPORTED_MODULE_20__.ItUtilsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _popover_popover_module__WEBPACK_IMPORTED_MODULE_12__.ItPopoverModule,
        _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_13__.ItTooltipModule,
        _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_14__.ItCollapseModule,
        _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__.ItDropdownModule,
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_16__.ItIconModule,
        _button_button_module__WEBPACK_IMPORTED_MODULE_17__.ItButtonModule,
        _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_18__.ItTabsModule], exports: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent,
        _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__.ToggleComponent,
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_2__.RadioGroupDirective,
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_2__.RadioButtonComponent,
        _badge_badge_directive__WEBPACK_IMPORTED_MODULE_4__.BadgeDirective,
        _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarComponent,
        _button_button_module__WEBPACK_IMPORTED_MODULE_17__.ItButtonModule,
        _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_5__.FormInputComponent,
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent,
        _breadcrumb_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbItemComponent,
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_16__.ItIconModule,
        _form_input_it_prefix_directive__WEBPACK_IMPORTED_MODULE_8__.ItPrefixDirective,
        _form_input_it_suffix_directive__WEBPACK_IMPORTED_MODULE_9__.ItSuffixDirective,
        _form_input_it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_10__.ItTextPrefixDirective,
        _form_input_it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_11__.ItTextSuffixDirective,
        _popover_popover_module__WEBPACK_IMPORTED_MODULE_12__.ItPopoverModule,
        _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_13__.ItTooltipModule,
        _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_14__.ItCollapseModule,
        _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_15__.ItDropdownModule,
        _util_utils_module__WEBPACK_IMPORTED_MODULE_20__.ItUtilsModule] }); })();


/***/ }),

/***/ 5569:
/*!************************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/dropdown/dropdown-divider.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownDividerComponent": () => (/* binding */ DropdownDividerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DropdownDividerComponent {
}
DropdownDividerComponent.ɵfac = function DropdownDividerComponent_Factory(t) { return new (t || DropdownDividerComponent)(); };
DropdownDividerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownDividerComponent, selectors: [["it-dropdown-divider"]], decls: 2, vars: 0, consts: [[1, "divider"]], template: function DropdownDividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1kaXZpZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2280:
/*!*********************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/dropdown/dropdown-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownItemComponent": () => (/* binding */ DropdownItemComponent)
/* harmony export */ });
/* harmony import */ var _enums_icons_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/icons.enum */ 8658);
/* harmony import */ var _models_Alignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Alignment */ 6729);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon.component */ 9132);
/* harmony import */ var _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/focus-mouse.directive */ 1724);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown.directive */ 1812);








function DropdownItemComponent_it_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "it-icon", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r0.icon)("position", ctx_r0.iconPosition)("color", ctx_r0.iconColor);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5) { return { "large": a0, "active": a1, "disabled": a2, "disabled-item-link": a3, "left-icon": a4, "right-icon": a5 }; };
const _c1 = ["*"];
let identifier = 0;
/**
 * Componente usata per visualizzare una voce di menù all'interno di una dropdown
 */
class DropdownItemComponent {
    constructor() {
        this.id = `dropdown-item-${identifier++}`;
        this._link = '';
        this._active = false;
        this._disabled = false;
        this._large = false;
        this._icon = undefined;
        this._iconPosition = _models_Alignment__WEBPACK_IMPORTED_MODULE_1__.HorizontalAlign.right;
        this._iconColor = _enums_icons_enum__WEBPACK_IMPORTED_MODULE_0__.IconColorEnum.primary;
    }
    /**
     * Il link alla pagina verso cui andare al click sull'elemento del dropdown
     */
    get link() { return !this.disabled ? this._link : ''; }
    set link(value) { this._link = value; }
    /**
     * Se presente indica che l'elemento viene renderizzato come elemento attivo.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get active() { return this._active; }
    set active(value) { this._active = _util_util__WEBPACK_IMPORTED_MODULE_2__.Util.coerceBooleanProperty(value); }
    /**
     * Se presente indica che l'elemento è disabilitato.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = _util_util__WEBPACK_IMPORTED_MODULE_2__.Util.coerceBooleanProperty(value);
    }
    /**
     * Se presente indica che il testo dell'elemento viene renderizzato più grande.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get large() { return this._large; }
    set large(value) { this._large = _util_util__WEBPACK_IMPORTED_MODULE_2__.Util.coerceBooleanProperty(value); }
    /**
     * La classe dell'icona da usare prima o dopo del testo dell'elemento del dropdown
     */
    get icon() { return this._icon; }
    set icon(value) { this._icon = value; }
    /**
     * La posizione dell'icona rispetto al testo dell'elemento del dropdown.
     * Può assumere valori right o left.
     */
    get iconPosition() { return this._iconPosition; }
    set iconPosition(value) {
        if (_models_Alignment__WEBPACK_IMPORTED_MODULE_1__.HORIZONTAL_ALIGN.is(value)) {
            this._iconPosition = value;
        }
        else {
            this._iconPosition = _models_Alignment__WEBPACK_IMPORTED_MODULE_1__.HorizontalAlign.right;
        }
    }
    get iconColor() { return this._iconColor; }
    set iconColor(value) { this._iconColor = value; }
    get dropdownItemClass() {
        return `list-item ${this.iconPosition}-icon`;
    }
    get iconClass() {
        return `${this.icon} ${this.iconPosition}`;
    }
}
DropdownItemComponent.ɵfac = function DropdownItemComponent_Factory(t) { return new (t || DropdownItemComponent)(); };
DropdownItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DropdownItemComponent, selectors: [["it-dropdown-item"]], inputs: { link: "link", active: "active", disabled: "disabled", large: "large", icon: "icon", iconPosition: "iconPosition", iconColor: "iconColor" }, ngContentSelectors: _c1, decls: 5, vars: 14, consts: [[3, "id"], ["itDropdownItem", "", "focusMouse", "", 3, "ngClass"], [3, "icon", "position", "color", 4, "ngIf"], [3, "icon", "position", "color"]], template: function DropdownItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 0)(1, "a", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DropdownItemComponent_it_icon_4_Template, 1, 3, "it-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.dropdownItemClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction6"](7, _c0, ctx.large, ctx.active, ctx.disabled, ctx.disabled, ctx.iconPosition === "left", ctx.iconPosition === "right"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("tabindex", ctx.disabled ? -1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.icon);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_4__.FocusMouseDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_5__.ItDropdownItem], styles: [".disabled-item-link[_ngcontent-%COMP%] {\n    pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJkcm9wZG93bi1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQtaXRlbS1saW5rIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ 1657:
/*!****************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/dropdown/dropdown.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _models_ThemeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ThemeColor */ 5131);
/* harmony import */ var _dropdown_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-item.component */ 2280);
/* harmony import */ var _enums_icons_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/icons.enum */ 8658);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/icon.component */ 9132);
/* harmony import */ var _button_button_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/button.directive */ 9103);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown.directive */ 1812);










function DropdownComponent_it_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "it-icon", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r0.expandIcon)("expand", true);
} }
function DropdownComponent_it_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "it-icon", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.expandIcon)("expand", true);
} }
function DropdownComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.menuHeading);
} }
const _c0 = ["*"];
let identifier = 0;
const DEFAULT_COLOR = 'dropdown';
/**
 * Componente usata per attivare o disattivare overlay contestuali per visualizzare elenchi di link e altro ancora con questi menù a tendina
 */
class DropdownComponent {
    constructor() {
        this.id = `dropdown-${identifier++}`;
        this.menuHeading = "";
        this.expandIcon = "it-expand";
        this.expandIconPosition = 'end';
        this._dark = false;
        this._fullWidth = false;
        this._color = DEFAULT_COLOR;
        this._label = '';
        this._onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this._onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.isOpen = false;
        this.autoUpdateMenuItemsIconColor = true;
    }
    get menuPlacement() {
        return this._menuPlacement;
    }
    set menuPlacement(value) {
        if (value === 'left-start') {
            this.expandIconPosition = 'start';
        }
        else if (value === 'right-start') {
            this.expandIconPosition = 'end';
        }
        this._menuPlacement = value;
    }
    /**
     * Se presente indica che il dropdown utilizza il tema di colorazione scura.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get dark() { return this._dark; }
    set dark(value) {
        this._dark = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value);
        if (this.autoUpdateMenuItemsIconColor) {
            this.updateMenuItemsIconColor();
        }
    }
    /**
     * Se presente indica che le voci del dropdown si sviluppano orizzontalmente.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get fullWidth() { return this._fullWidth; }
    set fullWidth(value) { this._fullWidth = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value); }
    /**
     * Il colore del pulsante che attiva il dropdown.
     * Può assumere i valori primary, secondary, danger, warning, info, warning, success, light e dark
     */
    get color() { return this._color; }
    set color(value) {
        if (_models_ThemeColor__WEBPACK_IMPORTED_MODULE_1__.ThemeColor.is(value)) {
            this._color = value;
        }
        else {
            this._color = DEFAULT_COLOR;
        }
    }
    /**
     * Il testo presente sul pulsante che attiva il dropdown
     */
    get label() { return this._label; }
    set label(value) { this._label = value; }
    /**
     * Evento che viene lanciato ogni volta che il dropdown viene aperto
     */
    get onOpen() { return this._onOpen; }
    set onOpen(value) { this._onOpen = value; }
    /**
    * Evento che viene lanciato ogni volta che il dropdown viene chiuso
    */
    get onClose() { return this._onClose; }
    set onClose(value) { this._onClose = value; }
    onOpenChange(isOpen) {
        this.isOpen = isOpen;
        if (this.isOpen) {
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
        }
    }
    updateMenuItemsIconColor() {
        this.menuItems?.forEach(item => {
            item.iconColor = this._dark ? _enums_icons_enum__WEBPACK_IMPORTED_MODULE_3__.IconColorEnum.light : _enums_icons_enum__WEBPACK_IMPORTED_MODULE_3__.IconColorEnum.primary;
        });
    }
    get isDropend() {
        return this._menuPlacement === 'right-start';
    }
    get isDropstart() {
        return this._menuPlacement === 'left-start';
    }
    get isDropup() {
        return this._menuPlacement === 'top-start';
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["it-dropdown"]], contentQueries: function DropdownComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, _dropdown_item_component__WEBPACK_IMPORTED_MODULE_2__.DropdownItemComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
    } }, inputs: { menuHeading: "menuHeading", expandIcon: "expandIcon", expandIconPosition: "expandIconPosition", menuPlacement: "menuPlacement", dark: "dark", fullWidth: "fullWidth", color: "color", label: "label", autoUpdateMenuItemsIconColor: "autoUpdateMenuItemsIconColor" }, outputs: { onOpen: "onOpen", onClose: "onClose" }, ngContentSelectors: _c0, decls: 10, vars: 16, consts: [["itDropdown", "", 3, "placement", "openChange"], ["itDropdownToggle", "", "id", "dropdownMenuButton", "aria-haspopup", "true", 1, "dropdown-toggle", 3, "itButton"], [3, "icon", "expand", 4, "ngIf"], ["itDropdownMenu", "", "aria-labelledby", "dropdownMenuButton"], [1, "link-list-wrapper"], ["class", "link-list-heading", 4, "ngIf"], [1, "link-list"], [3, "icon", "expand"], [1, "link-list-heading"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("openChange", function DropdownComponent_Template_div_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DropdownComponent_it_icon_2_Template, 1, 2, "it-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DropdownComponent_it_icon_4_Template, 1, 2, "it-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DropdownComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("dropstart", ctx.isDropstart)("dropend", ctx.isDropend)("dropup", ctx.isDropup);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placement", ctx.menuPlacement);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("itButton", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.expandIcon && ctx.expandIconPosition === "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.expandIcon && ctx.expandIconPosition === "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("dark", ctx.dark)("full-width", ctx.fullWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.menuHeading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _button_button_directive__WEBPACK_IMPORTED_MODULE_5__.ItButtonDirective, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdown, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownMenu, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownToggle], styles: [".dropup .dropdown-toggle::after {\n    display: none;\n}\n\n.dropup .dropdown-toggle .icon-expand, .dropup .btn-dropdown .icon-expand {\n    transform: scaleY(-1);\n}\n\n.dropup .btn-dropdown[aria-expanded=true] .icon-expand, .dropup .dropdown-toggle[aria-expanded=true] .icon-expand {\n    transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImRyb3Bkb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcHVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcHVwIC5kcm9wZG93bi10b2dnbGUgLmljb24tZXhwYW5kLCAuZHJvcHVwIC5idG4tZHJvcGRvd24gLmljb24tZXhwYW5kIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG5cbi5kcm9wdXAgLmJ0bi1kcm9wZG93blthcmlhLWV4cGFuZGVkPXRydWVdIC5pY29uLWV4cGFuZCwgLmRyb3B1cCAuZHJvcGRvd24tdG9nZ2xlW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gLmljb24tZXhwYW5kIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbn0iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 5261:
/*!*************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/dropdown/dropdown.config.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItDropdownConfig": () => (/* binding */ ItDropdownConfig)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ItDropdownConfig extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDropdownConfig {
}
ItDropdownConfig.ɵfac = /*@__PURE__*/ function () { let ɵItDropdownConfig_BaseFactory; return function ItDropdownConfig_Factory(t) { return (ɵItDropdownConfig_BaseFactory || (ɵItDropdownConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ItDropdownConfig)))(t || ItDropdownConfig); }; }();
ItDropdownConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItDropdownConfig, factory: ItDropdownConfig.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1812:
/*!****************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/dropdown/dropdown.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItDropdown": () => (/* binding */ ItDropdown),
/* harmony export */   "ItDropdownAnchor": () => (/* binding */ ItDropdownAnchor),
/* harmony export */   "ItDropdownItem": () => (/* binding */ ItDropdownItem),
/* harmony export */   "ItDropdownMenu": () => (/* binding */ ItDropdownMenu),
/* harmony export */   "ItDropdownToggle": () => (/* binding */ ItDropdownToggle),
/* harmony export */   "ItNavbar": () => (/* binding */ ItNavbar)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _dropdown_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.config */ 5261);





class ItNavbar extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar {
}
ItNavbar.ɵfac = /*@__PURE__*/ function () { let ɵItNavbar_BaseFactory; return function ItNavbar_Factory(t) { return (ɵItNavbar_BaseFactory || (ɵItNavbar_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ItNavbar)))(t || ItNavbar); }; }();
ItNavbar.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItNavbar, selectors: [["", 8, "navbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */
class ItDropdownItem extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownItem {
    constructor(elementRef, _renderer) {
        super(elementRef, _renderer);
    }
}
ItDropdownItem.ɵfac = function ItDropdownItem_Factory(t) { return new (t || ItDropdownItem)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
ItDropdownItem.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItDropdownItem, selectors: [["", "itDropdownItem", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
class ItDropdownMenu extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu {
    constructor(dropdown, _elementRef) {
        super(dropdown, _elementRef);
        this.dropdown = dropdown;
    }
    ngAfterContentInit() {
        super.menuItems = this.menuItems;
    }
}
ItDropdownMenu.ɵfac = function ItDropdownMenu_Factory(t) { return new (t || ItDropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => ItDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
ItDropdownMenu.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItDropdownMenu, selectors: [["", "itDropdownMenu", ""]], contentQueries: function ItDropdownMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, ItDropdownItem, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
    } }, hostVars: 1, hostBindings: function ItDropdownMenu_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-popper-placement", ctx.placement);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */
class ItDropdownAnchor extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownAnchor {
    constructor(dropdown, _elementRef) {
        super(dropdown, _elementRef);
        this.dropdown = dropdown;
    }
}
ItDropdownAnchor.ɵfac = function ItDropdownAnchor_Factory(t) { return new (t || ItDropdownAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => ItDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
ItDropdownAnchor.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItDropdownAnchor, selectors: [["", "itDropdownAnchor", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
class ItDropdownToggle extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle {
    constructor(dropdown, elementRef) {
        super(dropdown, elementRef);
        this.dropdown = dropdown;
    }
}
ItDropdownToggle.ɵfac = function ItDropdownToggle_Factory(t) { return new (t || ItDropdownToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => ItDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
ItDropdownToggle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItDropdownToggle, selectors: [["", "itDropdownToggle", ""]], hostVars: 2, hostBindings: function ItDropdownToggle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.placement);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: ItDropdownAnchor, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => ItDropdownToggle) }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
class ItDropdown extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown {
    constructor(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, itNavbar) {
        super(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, itNavbar);
        /**
         * An event fired when the dropdown is opened or closed.
         *
         * The event payload is a `boolean`:
         * * `true` - the dropdown was opened
         * * `false` - the dropdown was closed
         */
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngAfterContentInit() {
        super["_menu"] = this._itMenu;
        super["_anchor"] = this._itAnchor;
        super.ngAfterContentInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    ngOnDestroy() { super.ngOnDestroy(); }
}
ItDropdown.ɵfac = function ItDropdown_Factory(t) { return new (t || ItDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dropdown_config__WEBPACK_IMPORTED_MODULE_0__.ItDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ItNavbar, 8)); };
ItDropdown.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItDropdown, selectors: [["", "itDropdown", ""]], contentQueries: function ItDropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, ItDropdownMenu, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, ItDropdownAnchor, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._itMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._itAnchor = _t.first);
    } }, outputs: { openChange: "openChange" }, exportAs: ["itDropdown"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 1405:
/*!*************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/dropdown/dropdown.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItDropdownModule": () => (/* binding */ ItDropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button.module */ 2681);
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/icon.module */ 4898);
/* harmony import */ var _util_utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utils.module */ 5842);
/* harmony import */ var _dropdown_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-divider.component */ 5569);
/* harmony import */ var _dropdown_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-item.component */ 2280);
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown.component */ 1657);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown.directive */ 1812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class ItDropdownModule {
}
ItDropdownModule.ɵfac = function ItDropdownModule_Factory(t) { return new (t || ItDropdownModule)(); };
ItDropdownModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ItDropdownModule });
ItDropdownModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule, _icon_icon_module__WEBPACK_IMPORTED_MODULE_1__.ItIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_0__.ItButtonModule, _util_utils_module__WEBPACK_IMPORTED_MODULE_2__.ItUtilsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ItDropdownModule, { declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.DropdownComponent, _dropdown_divider_component__WEBPACK_IMPORTED_MODULE_3__.DropdownDividerComponent, _dropdown_item_component__WEBPACK_IMPORTED_MODULE_4__.DropdownItemComponent, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdown, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItNavbar, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownMenu, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownAnchor, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownToggle, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownItem], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule, _icon_icon_module__WEBPACK_IMPORTED_MODULE_1__.ItIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_0__.ItButtonModule, _util_utils_module__WEBPACK_IMPORTED_MODULE_2__.ItUtilsModule], exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.DropdownComponent, _dropdown_divider_component__WEBPACK_IMPORTED_MODULE_3__.DropdownDividerComponent, _dropdown_item_component__WEBPACK_IMPORTED_MODULE_4__.DropdownItemComponent, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdown, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItNavbar, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownMenu, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownAnchor, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownToggle, _dropdown_directive__WEBPACK_IMPORTED_MODULE_6__.ItDropdownItem] }); })();


/***/ }),

/***/ 8658:
/*!*****************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/enums/icons.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconBackgroundColorEnum": () => (/* binding */ IconBackgroundColorEnum),
/* harmony export */   "IconColorEnum": () => (/* binding */ IconColorEnum),
/* harmony export */   "IconSizeEnum": () => (/* binding */ IconSizeEnum)
/* harmony export */ });
var IconSizeEnum;
(function (IconSizeEnum) {
    IconSizeEnum["sx"] = "icon-xs";
    IconSizeEnum["sm"] = "icon-sm";
    IconSizeEnum["lg"] = "icon-lg";
    IconSizeEnum["xl"] = "icon-xl";
    IconSizeEnum["default"] = "";
})(IconSizeEnum || (IconSizeEnum = {}));
var IconColorEnum;
(function (IconColorEnum) {
    IconColorEnum["default"] = "default";
    IconColorEnum["primary"] = "primary";
    IconColorEnum["secondary"] = "secondary";
    IconColorEnum["info"] = "info";
    IconColorEnum["success"] = "success";
    IconColorEnum["warning"] = "warning";
    IconColorEnum["danger"] = "danger";
    IconColorEnum["disable"] = "disable";
    IconColorEnum["light"] = "light";
    IconColorEnum["white"] = "white";
})(IconColorEnum || (IconColorEnum = {}));
var IconBackgroundColorEnum;
(function (IconBackgroundColorEnum) {
    IconBackgroundColorEnum["light"] = "light";
    IconBackgroundColorEnum["dark"] = "dark";
})(IconBackgroundColorEnum || (IconBackgroundColorEnum = {}));


/***/ }),

/***/ 5384:
/*!*************************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/form-input/form-input-password.utils.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputPasswordUtils": () => (/* binding */ FormInputPasswordUtils)
/* harmony export */ });
/**
 * Classe di utility creata sulla base del seguente sorgente di bootstrap-italia: https://github.com/italia/bootstrap-italia/blob/main/src/js/plugins/input-password.js
 * TODO: Da sostituire una volta che i metodi scoreText, scoreColor, e calculateScore
 * saranno importabili dalla libreria bootstrap-italia.
 */
class FormInputPasswordUtils {
    constructor(_config) {
        this._config = _config;
    }
    /**
   * Returns a value between -1 and 100 to score
   * the user's password.
   *
   * @param  string password The password to be checked.
   * @return int
   */
    calculateScore(password) {
        var score = 0;
        // empty password
        if (password.trim().length === 0) {
            return -2;
        }
        // password < this._config.minimumLength
        if (password.length < this._config.minimumLength) {
            return -1;
        }
        // password length
        score += password.length * 4;
        score += this._checkRepetition(1, password).length - password.length;
        score += this._checkRepetition(2, password).length - password.length;
        score += this._checkRepetition(3, password).length - password.length;
        score += this._checkRepetition(4, password).length - password.length;
        // password has 3 numbers
        if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
            score += 5;
        }
        // password has at least 2 sybols
        let symbols = '.*[!,@,#,$,%,^,&,*,?,_,~]';
        symbols = new RegExp('(' + symbols + symbols + ')');
        if (password.match(symbols)) {
            score += 5;
        }
        // password has Upper and Lower chars
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            score += 10;
        }
        // password has number and chars
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
            score += 15;
        }
        // password has number and symbol
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
            score += 15;
        }
        // password has char and symbol
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
            score += 15;
        }
        // password is just numbers or chars
        if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
            score -= 10;
        }
        if (score > 100) {
            score = 100;
        }
        if (score < 0) {
            score = 0;
        }
        return score;
    }
    /**
     * Checks for repetition of characters in
     * a string
     *
     * @param int rLen Repetition length.
     * @param string str The string to be checked.
     * @return string
     */
    _checkRepetition(rLen, str) {
        var res = '', repeated = false;
        for (var i = 0; i < str.length; i++) {
            repeated = true;
            for (var j = 0; j < rLen && j + i + rLen < str.length; j++) {
                repeated = repeated && str.charAt(j + i) === str.charAt(j + i + rLen);
            }
            if (j < rLen) {
                repeated = false;
            }
            if (repeated) {
                i += rLen - 1;
                repeated = false;
            }
            else {
                res += str.charAt(i);
            }
        }
        return res;
    }
    /**
     * Returns strings based on the score given.
     *
     * @param int score Score base.
     * @return string
     */
    scoreText(score) {
        if (score === -1) {
            return this._config.shortPass;
        }
        else if (score === -2) {
            return this._config.enterPass;
        }
        score = score < 0 ? 0 : score;
        if (score < 26) {
            return this._config.shortPass;
        }
        if (score < 51) {
            return this._config.badPass;
        }
        if (score < 76) {
            return this._config.goodPass;
        }
        return this._config.strongPass;
    }
    scoreColor(score) {
        if (score === -1) {
            return 'danger';
        }
        if (score === -2) {
            return 'muted';
        }
        score = score < 0 ? 0 : score;
        if (score < 26) {
            return 'danger';
        }
        if (score < 51) {
            return 'warning';
        }
        if (score < 76) {
            return 'success';
        }
        return 'success';
    }
}
FormInputPasswordUtils.DEFAULT_CONFIG = {
    shortPass: 'Password molto debole',
    badPass: 'Password debole',
    goodPass: 'Password sicura',
    strongPass: 'Password molto sicura',
    enterPass: 'Inserisci almeno 8 caratteri e una lettera maiuscola',
    alertCaps: 'CAPS LOCK inserito',
    showText: true,
    minimumLength: 4,
};


/***/ }),

/***/ 8012:
/*!********************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/form-input/form-input.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputChange": () => (/* binding */ FormInputChange),
/* harmony export */   "FormInputComponent": () => (/* binding */ FormInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var _models_InputType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/InputType */ 558);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _form_input_password_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-input-password.utils */ 5384);
/* harmony import */ var _it_prefix_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./it-prefix.directive */ 4376);
/* harmony import */ var _it_suffix_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./it-suffix.directive */ 3988);
/* harmony import */ var _it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./it-text-prefix.directive */ 6441);
/* harmony import */ var _it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it-text-suffix.directive */ 2936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/focus-mouse.directive */ 1724);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/icon.component */ 9132);
/* harmony import */ var _mark_matching_text_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mark-matching-text.pipe */ 2711);















const _c0 = ["inputElement"];
function FormInputComponent_div_1_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "it-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", ctx_r14.icon);
} }
function FormInputComponent_div_1_ng_container_1_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function FormInputComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FormInputComponent_div_1_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FormInputComponent_div_1_ng_container_1_ng_container_2_ng_container_3_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12._textPrefixChildren.length);
} }
function FormInputComponent_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function FormInputComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FormInputComponent_div_1_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FormInputComponent_div_1_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10._textPrefixChildren.length || ctx_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10._prefixChildren.length);
} }
function FormInputComponent_div_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function FormInputComponent_div_1_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function FormInputComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FormInputComponent_div_1_ng_container_3_ng_container_2_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FormInputComponent_div_1_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11._textSuffixChildren.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11._suffixChildren.length);
} }
function FormInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FormInputComponent_div_1_ng_container_1_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FormInputComponent_div_1_ng_container_3_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0._textPrefixChildren.length || ctx_r0._prefixChildren.length || ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0._suffixChildren.length || ctx_r0._textSuffixChildren.length);
} }
const _c1 = function (a0, a1, a2) { return { "form-control": a0, "form-control-plaintext": a1, "autocomplete": a2 }; };
function FormInputComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("focus", function FormInputComponent_ng_template_2_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.onFocus()); })("blur", function FormInputComponent_ng_template_2_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.onBlur()); })("change", function FormInputComponent_ng_template_2_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.onChange()); })("input", function FormInputComponent_ng_template_2_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.onInput()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx_r2.adaptive && ctx_r2.valueLength ? "calc(44px + " + ctx_r2.valueLength + "ch)" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("focus--mouse", ctx_r2.focus)("input-password", ctx_r2.isPasswordMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx_r2.type)("id", ctx_r2.id)("min", ctx_r2.min)("max", ctx_r2.max)("step", ctx_r2.step)("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("placeholder", ctx_r2.placeholder)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](17, _c1, (!ctx_r2.readonly || !ctx_r2.readonlyPlainText) && ctx_r2.type !== ctx_r2.INPUT_TYPES.NUMBER, ctx_r2.readonly && ctx_r2.readonlyPlainText, ctx_r2.isAutocompletable()));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("name", ctx_r2.name)("aria-describedby", ctx_r2.note ? ctx_r2.noteId : undefined);
} }
function FormInputComponent_ng_template_4_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("visually-hidden", ctx_r24.labelVisuallyHidden)("input-number-label", ctx_r24.type === ctx_r24.INPUT_TYPES.NUMBER)("active", ctx_r24.isLabelActive && !ctx_r24.labelVisuallyHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("for", ctx_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r24.label, " ");
} }
function FormInputComponent_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FormInputComponent_ng_template_4_ng_container_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.incrementNumberValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FormInputComponent_ng_template_4_ng_container_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.decrementNumberValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("input-number-adaptive", ctx_r25.adaptive)("input-number-currency", ctx_r25.currency)("input-number-percentage", ctx_r25.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Aumenta valore di ", ctx_r25.step, " Euro");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Diminuisci valore di ", ctx_r25.step, " Euro");
} }
function FormInputComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, FormInputComponent_ng_template_4_label_0_Template, 2, 8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FormInputComponent_ng_template_4_ng_container_1_Template, 9, 9, "ng-container", 18);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.type === ctx_r4.INPUT_TYPES.NUMBER)("ngIfElse", _r1);
} }
function FormInputComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx_r5.noteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r5.note, " ");
} }
const _c2 = function (a0) { return [a0]; };
function FormInputComponent_ng_container_7_div_3_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c2, "text-" + ctx_r30.passwordScoreColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r30.passwordScoreText, " ");
} }
function FormInputComponent_ng_container_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FormInputComponent_ng_container_7_div_3_small_1_Template, 2, 4, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 31)(5, "div", 31)(6, "div", 31)(7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r29.passwordStrengthMeterConfig.showText);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c2, "bg-" + ctx_r29.passwordScoreColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx_r29.passwordScore >= 0 ? ctx_r29.passwordScore : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-valuenow", ctx_r29.passwordScore >= 0 ? ctx_r29.passwordScore : 0);
} }
function FormInputComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FormInputComponent_ng_container_7_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r31.isPasswordVisible = !ctx_r31.isPasswordVisible); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "it-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FormInputComponent_ng_container_7_div_3_Template, 9, 8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", "it-password-" + (ctx_r6.isPasswordVisible ? "invisible" : "visible"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.isPasswordMode && ctx_r6.enablePasswordStrengthMeter);
} }
function FormInputComponent_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.capsLockActiveLabel);
} }
function FormInputComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "it-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function FormInputComponent_ul_10_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
} }
function FormInputComponent_ul_10_li_1_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", entry_r34.avatarSrcPath, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", entry_r34.avatarAltText);
} }
function FormInputComponent_ul_10_li_1_ng_template_3_it_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "it-icon", 13);
} if (rf & 2) {
    const entry_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", entry_r34.icon);
} }
function FormInputComponent_ul_10_li_1_ng_template_3_em_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](entry_r34.label);
} }
function FormInputComponent_ul_10_li_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, FormInputComponent_ul_10_li_1_ng_template_3_div_0_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FormInputComponent_ul_10_li_1_ng_template_3_it_icon_1_Template, 1, 1, "it-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "markMatchingText");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, FormInputComponent_ul_10_li_1_ng_template_3_em_5_Template, 2, 1, "em", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", entry_r34.avatarSrcPath);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", entry_r34.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 4, entry_r34.original, ctx_r37.value), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", entry_r34.label);
} }
function FormInputComponent_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FormInputComponent_ul_10_li_1_Template_li_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const entry_r34 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.onEntryClick(entry_r34, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FormInputComponent_ul_10_li_1_ng_container_2_Template, 1, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FormInputComponent_ul_10_li_1_ng_template_3_Template, 6, 7, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r34 = ctx.$implicit;
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", entry_r34.link, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r36);
} }
function FormInputComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FormInputComponent_ul_10_li_1_Template, 5, 2, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("autocomplete-list-show", ctx_r9.showAutocompletion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r9.getRelatedEntries())("ngForTrackBy", ctx_r9.autocompleteItemTrackByValueFn);
} }
const _c3 = [[["", "itTextPrefix", ""]], [["", "itPrefix", ""]], [["", "itTextSuffix", ""]], [["", "itSuffix", ""]]];
const _c4 = ["[itTextPrefix]", "[itPrefix]", "[itTextSuffix]", "[itSuffix]"];
let identifier = 0;
class FormInputChange {
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * Elementi e stili per la creazione di input accessibili e responsivi.
 */
class FormInputComponent {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.INPUT_TYPES = _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES;
        this._readonlyPlainText = false;
        this._enablePasswordStrengthMeter = false;
        /**
         * Punteggio di sicurezza calcolato in base alla password immessa se enablePasswordStrengthMeter ha valore true
         */
        this.passwordScore = 0;
        /**
         * Dimensione dell'input di autocomplete. Di default ha dimensione standard.
         */
        this.autocompleteWrapperSize = 'default';
        this._passwordStrengthMeterConfig = _form_input_password_utils__WEBPACK_IMPORTED_MODULE_2__.FormInputPasswordUtils.DEFAULT_CONFIG;
        this._id = `form-input-${identifier++}`;
        this._type = _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.TEXT;
        this._labelVisuallyHidden = false;
        this._step = 1;
        this._disabled = false;
        this._currency = false;
        this._percentage = false;
        this._adaptive = false;
        this._readonly = false;
        /**
         * Evento emesso quando il valore dell'input cambia.
         * Gli eventi di change sono emessi soltanto quando il valore cambia a causa dell'interazione dell'utente
         * con il campo d'input.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this._disableCapsLockAlert = false;
        /**
         * Indica se è attivo il CAPS LOCK
         */
        this.isCapsLockActive = false;
        /**
         * La label da mostrare in caso sia attivo il CAPS LOCK
         */
        this.capsLockActiveLabel = 'CAPS LOCK inserito';
        this._isPasswordMode = false;
        this._isPasswordVisible = false;
        this.showAutocompletion = false;
        this._isInitialized = false;
        this._controlValueAccessorChangeFn = () => { };
        this._onTouched = () => { };
        /** Indica se è stato effettuato il focus sul campo di input */
        this.focus = false;
    }
    /**
     * Opzionale. Indica se mostrare gli input readonly nella forma stilizzata come testo normale
     */
    get readonlyPlainText() { return this._readonlyPlainText; }
    set readonlyPlainText(value) { this._readonlyPlainText = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    /**
     * Opzionale. Indica se abilitare il controllo sulla sicurezza della password
     */
    get enablePasswordStrengthMeter() { return this._enablePasswordStrengthMeter; }
    set enablePasswordStrengthMeter(value) { this._enablePasswordStrengthMeter = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    set passwordStrengthMeterConfig(newConfig) {
        this._passwordStrengthMeterConfig = { ...this._passwordStrengthMeterConfig, ...newConfig };
    }
    get passwordStrengthMeterConfig() {
        return this._passwordStrengthMeterConfig;
    }
    /**
     * Indica l'id dell'elemento HTML
     */
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    /**
     * Indica l'attributo name del componente HTML
     */
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Indica il tipo di campo. Puo' assumere i valori text, email, password e number
     */
    get type() {
        return this._type;
    }
    set type(value) {
        if (_models_InputType__WEBPACK_IMPORTED_MODULE_0__.InputType.is(value)) {
            if (value === _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.NUMBER) {
                if (isNaN(Number(this.value))) {
                    this.value = '';
                    this.onChange();
                }
            }
            this._type = value;
        }
        else {
            this._type = _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.TEXT;
        }
        this._isPasswordMode = this._type === _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.PASSWORD;
        this._isPasswordVisible = false;
        this.showAutocompletion = false;
    }
    /**
     * Indica il valore della label da visualizzare
     */
    get label() { return this._label; }
    set label(value) { this._label = value; }
    /**
     * Indica se la label dell'input deve essere visualizzata dall'utente o solamente visibile per lo screen reader
     */
    get labelVisuallyHidden() { return this._labelVisuallyHidden; }
    set labelVisuallyHidden(value) { this._labelVisuallyHidden = value; }
    /**
     * Indica il valore che avrà l'attributo HTML "min" per l'input di tipo number
     */
    get min() { return this._min; }
    set min(value) { this._min = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceNumberProperty(value); }
    /**
     * Indica il valore che avrà l'attributo HTML "max" per l'input di tipo number
     */
    get max() { return this._max; }
    set max(value) { this._max = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceNumberProperty(value); }
    /**
     * Indica il valore che avrà l'attributo HTML "step" per l'input di tipo number
     */
    get step() { return this._step; }
    set step(value) { this._step = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceNumberProperty(value); }
    /**
     * Indica il testo di aiuto sotto la input
     */
    get note() { return this._note; }
    set note(value) { this._note = value; }
    /**
     * Indica il testo presente nel campo vuoto. Nel caso sia già presente la label, il placeholder non verrà mostrato
     */
    get placeholder() {
        return this._placeholder || '';
    }
    set placeholder(value) { this._placeholder = value; }
    /**
     * Indica l'icona da visualizzare a sinistra del campo di input
     */
    get icon() { return this._icon; }
    set icon(value) { this._icon = value; }
    /**
     * Opzionale.
     * Indica se il campo in questione è disabilitato.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    /**
    * Opzionale.
    * Nel caso di input numerico, indica se il campo è una valuta.
    * Accetta una espressione booleana o può essere usato come attributo senza valore
    */
    get currency() { return this._currency; }
    set currency(value) { this._currency = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    /**
    * Opzionale.
    * Nel caso di input numerico, indica se il campo è una percentuale.
    * Accetta una espressione booleana o può essere usato come attributo senza valore
    */
    get percentage() { return this._percentage; }
    set percentage(value) { this._percentage = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    /**
     * Opzionale.
     * Nel caso di input numerico, indica se il campo si deve ridimensionare automaticamente a seconda del valore contenuto in esso.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get adaptive() { return this._adaptive; }
    set adaptive(value) { this._adaptive = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    /**
     * Opzionale.
     * Indica se il campo in questione è di sola lettura.
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get readonly() { return this._readonly; }
    set readonly(value) { this._readonly = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    get value() { return this._inputElement?.nativeElement?.value; }
    set value(value) {
        if (this._inputElement) {
            this._inputElement.nativeElement.value = value;
        }
    }
    /**
     * Opzionale.
     * Disponibile solo se il type è search.
     * Indica la lista di elementi ricercabili su cui basare il sistema di autocompletamento della input
     */
    get autoCompleteData() { return this._autoCompleteData; }
    set autoCompleteData(value) { this._autoCompleteData = value; }
    /**
     * Opzionale.
     * Indica se disabilitare l'avviso di CAPS LOCK attivo
     * Accetta una espressione booleana o può essere usato come attributo senza valore
     */
    get disableCapsLockAlert() { return this._disableCapsLockAlert; }
    set disableCapsLockAlert(value) { this._disableCapsLockAlert = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    get isLabelActive() {
        return this._isLabelActive;
    }
    set isLabelActive(value) {
        const newValue = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value);
        // In alcuni casi la label deve essere sempre posizionata sopra l'input per evitare sovrapposizioni 
        // di testo, come in caso di presenza del placeholder o per l'input di tipo "date" o "time"
        if (newValue || (!this.value && !this.placeholder && this.type !== _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.TIME &&
            this.type !== _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.DATE && this.type !== _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.NUMBER)) {
            this._isLabelActive = newValue;
        }
        else {
            this._isLabelActive = true;
        }
    }
    get isPasswordMode() {
        return this._isPasswordMode;
    }
    set isPasswordMode(value) {
        this._isPasswordMode = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value);
    }
    get isPasswordVisible() {
        return this._isPasswordVisible;
    }
    set isPasswordVisible(value) {
        this._isPasswordVisible = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value);
        this._type = this._isPasswordVisible ? _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.TEXT : _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.PASSWORD;
    }
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.change.emit(new FormInputChange(this, this.value));
        }
    }
    ngOnInit() {
        this.isLabelActive = false;
        this._formInputPasswordUtils = new _form_input_password_utils__WEBPACK_IMPORTED_MODULE_2__.FormInputPasswordUtils(this.passwordStrengthMeterConfig);
    }
    writeValue(value) {
        this.value = value;
        if (this.value) {
            this.isLabelActive = true;
        }
        this.onChange();
        if (this._isInitialized) {
            this._changeDetector.detectChanges();
        }
    }
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    ngAfterContentInit() {
        this._isInitialized = true;
        // Run change detection if the suffix or prefix changes.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this._prefixChildren.changes, this._suffixChildren.changes, this._textPrefixChildren.changes, this._textSuffixChildren.changes).subscribe(() => {
            this._changeDetector.markForCheck();
        });
    }
    onChange() {
        this._emitChangeEvent();
        this._controlValueAccessorChangeFn(this.value);
    }
    onInput() {
        if (this.isPasswordMode && this._enablePasswordStrengthMeter) {
            this.recalculatePasswordStrength();
        }
        this.showAutocompletion = this._type === _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.SEARCH && this.isAutocompletable() && this.value;
        this._emitChangeEvent();
        this._controlValueAccessorChangeFn(this.value);
    }
    onFocus() {
        this.focus = true;
        this.isLabelActive = true;
    }
    onBlur() {
        this.focus = false;
        const inputValue = this.value;
        if (!inputValue || inputValue.length === 0) {
            this.isLabelActive = false;
            if (this.type === _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.NUMBER) {
                this.value = '';
            }
        }
    }
    get noteId() {
        return `${this.id}-note`;
    }
    getRelatedEntries() {
        if (this.value) {
            const lowercaseValue = this.value.toLowerCase();
            const lowercaseData = this._autoCompleteData.filter((item) => item.value).map(item => {
                return { ...item, original: item.value, lowercase: item.value.toLowerCase() };
            });
            const relatedEntries = [];
            lowercaseData.forEach(lowercaseEntry => {
                const matching = (lowercaseEntry.lowercase).includes(lowercaseValue);
                if (matching) {
                    relatedEntries.push(lowercaseEntry);
                }
            });
            return relatedEntries;
        }
        else {
            return [];
        }
    }
    isAutocompletable() {
        if (this._autoCompleteData && this._type === _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.SEARCH) {
            return this._autoCompleteData.length > 0;
        }
        else {
            return false;
        }
    }
    onEntryClick(entry, event) {
        // Se non è stato definito un link associato all'elemento dell'autocomplete, probabilmente il desiderata 
        // non è effettuare la navigazione al default '#', pertanto in tal caso meglio annullare la navigazione.
        if (!entry.link) {
            event.preventDefault();
        }
        this.value = entry.value;
        this.showAutocompletion = false;
        this.onChange();
    }
    /**
     * indica se il campo di input è composto da altri elementi accessori come
     * icone o bottoni da posizionare adiacenti al campo di input
     */
    get isInputGroup() {
        return this._textPrefixChildren.length > 0 || this._prefixChildren.length > 0 || !!this.icon
            || this._suffixChildren.length > 0 || this._textSuffixChildren.length > 0;
    }
    /**
     * Ricalcola il punteggio di sicurezza in base al valore corrente
     */
    recalculatePasswordStrength() {
        this.passwordScore = this._formInputPasswordUtils.calculateScore(this.value);
    }
    get passwordScoreText() {
        return this._formInputPasswordUtils.scoreText(this.passwordScore);
    }
    get passwordScoreColor() {
        return this._formInputPasswordUtils.scoreColor(this.passwordScore);
    }
    get valueLength() {
        if (!this.value) {
            return 0;
        }
        return this.value.toString().length;
    }
    onKeyUp(event) {
        this.isCapsLockActive = event.getModifierState && event.getModifierState('CapsLock');
    }
    autocompleteItemTrackByValueFn(index, item) {
        return item.value;
    }
    /**
     * Incrementa il valore dell'input numerico di tanto quanto vale lo step
     */
    incrementNumberValue() {
        if (this.type === _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.NUMBER) {
            const tempValue = +this.value + this.step;
            if (this.max === undefined || tempValue <= this.max) {
                this.value = tempValue;
            }
        }
    }
    /**
     * Decrementa il valore dell'input numerico di tanto quanto vale lo step
     */
    decrementNumberValue() {
        if (this.type === _models_InputType__WEBPACK_IMPORTED_MODULE_0__.INPUT_TYPES.NUMBER) {
            const tempValue = +this.value - this.step;
            if (this.min === undefined || tempValue >= this.min) {
                this.value = tempValue;
            }
        }
    }
}
FormInputComponent.ɵfac = function FormInputComponent_Factory(t) { return new (t || FormInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef)); };
FormInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: FormInputComponent, selectors: [["it-input"]], contentQueries: function FormInputComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, _it_prefix_directive__WEBPACK_IMPORTED_MODULE_3__.ItPrefixDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, _it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_5__.ItTextPrefixDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, _it_suffix_directive__WEBPACK_IMPORTED_MODULE_4__.ItSuffixDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, _it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_6__.ItTextSuffixDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._textPrefixChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._textSuffixChildren = _t);
    } }, viewQuery: function FormInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, hostBindings: function FormInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FormInputComponent_click_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"])("keydown", function FormInputComponent_keydown_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"])("keyup", function FormInputComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    } }, inputs: { readonlyPlainText: "readonlyPlainText", enablePasswordStrengthMeter: "enablePasswordStrengthMeter", autocompleteWrapperSize: "autocompleteWrapperSize", passwordStrengthMeterConfig: "passwordStrengthMeterConfig", id: "id", name: "name", type: "type", label: "label", labelVisuallyHidden: "labelVisuallyHidden", min: "min", max: "max", step: "step", note: "note", placeholder: "placeholder", icon: "icon", disabled: "disabled", currency: "currency", percentage: "percentage", adaptive: "adaptive", readonly: "readonly", autoCompleteData: "autoCompleteData", disableCapsLockAlert: "disableCapsLockAlert", capsLockActiveLabel: "capsLockActiveLabel" }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.forwardRef)(() => FormInputComponent),
                multi: true
            }])], ngContentSelectors: _c4, decls: 11, vars: 9, consts: [[1, "form-group"], ["class", "input-group", 4, "ngIf", "ngIfElse"], ["formInput", ""], ["formInputWithLabel", ""], ["class", "form-text", 3, "id", 4, "ngIf"], [4, "ngIf"], ["class", "password-caps form-text text-warning position-absolute bg-white w-100", 4, "ngIf"], ["class", "autocomplete-icon", "aria-hidden", "true", 4, "ngIf"], ["class", "autocomplete-list", 3, "autocomplete-list-show", 4, "ngIf"], [1, "input-group"], [3, "ngTemplateOutlet"], [1, "input-group-prepend"], [1, "input-group-text"], ["size", "icon-sm", 3, "icon"], [1, "input-group-append"], [3, "type", "id", "min", "max", "step", "disabled", "readonly", "placeholder", "ngClass", "focus", "blur", "change", "input"], ["inputElement", ""], [3, "visually-hidden", "input-number-label", "active", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "input-number"], ["focusMouse", "", 1, "input-number-add", 3, "click"], [1, "visually-hidden"], ["focusMouse", "", 1, "input-number-sub", 3, "click"], [1, "form-text", 3, "id"], ["aria-hidden", "true", 1, "password-icon", 3, "click"], ["size", "icon-sm", "color", "default", 3, "icon"], ["class", "password-strength-meter", 4, "ngIf"], [1, "password-strength-meter"], ["class", "form-text", 3, "ngClass", 4, "ngIf"], [1, "password-meter", "progress", "rounded-0", "position-absolute"], [1, "row", "position-absolute", "w-100", "m-0"], [1, "col-3", "border-start", "border-end", "border-white"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], [1, "form-text", 3, "ngClass"], [1, "password-caps", "form-text", "text-warning", "position-absolute", "bg-white", "w-100"], ["aria-hidden", "true", 1, "autocomplete-icon"], ["icon", "it-search", "size", "icon-sm", "color", "default"], [1, "autocomplete-list"], [3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], [3, "href"], [4, "ngTemplateOutlet"], ["autocompleteItemTemplate", ""], ["class", "avatar size-sm", 4, "ngIf"], ["size", "icon-sm", 3, "icon", 4, "ngIf"], [1, "autocomplete-list-text"], [3, "innerHTML"], [1, "avatar", "size-sm"], [3, "src", "alt"]], template: function FormInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FormInputComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FormInputComponent_ng_template_2_Template, 2, 21, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, FormInputComponent_ng_template_4_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, FormInputComponent_small_6_Template, 2, 2, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, FormInputComponent_ng_container_7_Template, 4, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, FormInputComponent_small_8_Template, 2, 1, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, FormInputComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, FormInputComponent_ul_10_Template, 2, 4, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("autocomplete-wrapper-big", ctx.autocompleteWrapperSize === "big");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isInputGroup)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isPasswordMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isCapsLockActive && !ctx.disableCapsLockAlert && ctx.type !== ctx.INPUT_TYPES.NUMBER);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isAutocompletable());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isAutocompletable());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_7__.FocusMouseDirective, _icon_icon_component__WEBPACK_IMPORTED_MODULE_8__.IconComponent, _mark_matching_text_pipe__WEBPACK_IMPORTED_MODULE_9__.MarkMatchingTextPipe], styles: ["label[_ngcontent-%COMP%] {\n    pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJmb3JtLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 4376:
/*!*******************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/form-input/it-prefix.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItPrefixDirective": () => (/* binding */ ItPrefixDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ItPrefixDirective {
}
ItPrefixDirective.ɵfac = function ItPrefixDirective_Factory(t) { return new (t || ItPrefixDirective)(); };
ItPrefixDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ItPrefixDirective, selectors: [["", "itPrefix", ""]] });


/***/ }),

/***/ 3988:
/*!*******************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/form-input/it-suffix.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItSuffixDirective": () => (/* binding */ ItSuffixDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ItSuffixDirective {
}
ItSuffixDirective.ɵfac = function ItSuffixDirective_Factory(t) { return new (t || ItSuffixDirective)(); };
ItSuffixDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ItSuffixDirective, selectors: [["", "itSuffix", ""]] });


/***/ }),

/***/ 6441:
/*!************************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/form-input/it-text-prefix.directive.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTextPrefixDirective": () => (/* binding */ ItTextPrefixDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ItTextPrefixDirective {
}
ItTextPrefixDirective.ɵfac = function ItTextPrefixDirective_Factory(t) { return new (t || ItTextPrefixDirective)(); };
ItTextPrefixDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ItTextPrefixDirective, selectors: [["", "itTextPrefix", ""]] });


/***/ }),

/***/ 2936:
/*!************************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/form-input/it-text-suffix.directive.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTextSuffixDirective": () => (/* binding */ ItTextSuffixDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ItTextSuffixDirective {
}
ItTextSuffixDirective.ɵfac = function ItTextSuffixDirective_Factory(t) { return new (t || ItTextSuffixDirective)(); };
ItTextSuffixDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ItTextSuffixDirective, selectors: [["", "itTextSuffix", ""]] });


/***/ }),

/***/ 2711:
/*!***********************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/form-input/mark-matching-text.pipe.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkMatchingTextPipe": () => (/* binding */ MarkMatchingTextPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class MarkMatchingTextPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(allString, searchString) {
        if (!searchString) {
            return allString;
        }
        else if (!allString) {
            return "";
        }
        // Check if search string is a substring of pivot string (no case-sensitive)
        const idxOfMatchString = allString.toLowerCase().indexOf(searchString.toLowerCase());
        if (idxOfMatchString !== -1) {
            // retrieve the exactly substring
            const matchingString = allString.substring(idxOfMatchString, idxOfMatchString + searchString.length);
            // Replace original string marking as <strong> (bold) the matchinng substring
            const regEx = new RegExp('(' + matchingString + ')', 'gi');
            const res = allString.replace(regEx, '<mark>$1</mark>');
            return this.domSanitizer.bypassSecurityTrustHtml(res);
        }
        return allString;
    }
}
MarkMatchingTextPipe.ɵfac = function MarkMatchingTextPipe_Factory(t) { return new (t || MarkMatchingTextPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
MarkMatchingTextPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "markMatchingText", type: MarkMatchingTextPipe, pure: true });


/***/ }),

/***/ 9132:
/*!********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/icon/icon.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var _enums_icons_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/icons.enum */ 8658);
/* harmony import */ var _models_Alignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Alignment */ 6729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function IconComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function IconComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IconComponent_ng_container_0_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("rounded-icon" + ctx_r3.roundedColorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1);
} }
function IconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IconComponent_ng_container_0_ng_container_1_Template, 3, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.rounded)("ngIfElse", _r1);
} }
function IconComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate6"]("icon ", ctx_r2.iconName, " ", ctx_r2.size, " icon-", ctx_r2.color, " ", ctx_r2.bgColor ? "bg-" + ctx_r2.bgColor : "", " ", ctx_r2.position, " align-", ctx_r2.verticalAlign, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("icon-expand", ctx_r2.expand)("icon-padded", ctx_r2.padded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r2.svgPath, null, "xlink")("href", ctx_r2.svgPath);
} }
class IconComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this.rounded = false;
        this.roundedColor = null;
        this.iconName = '';
        this.wai = 'wai';
        this.size = _enums_icons_enum__WEBPACK_IMPORTED_MODULE_0__.IconSizeEnum["default"];
        this.color = _enums_icons_enum__WEBPACK_IMPORTED_MODULE_0__.IconColorEnum.primary;
        this.bgColor = null;
        this.padded = false;
        this.expand = false;
        /**
         * Allineamento orizzontale dell'icona rispetto al contenitor: 'left' | 'right'
         */
        this.position = _models_Alignment__WEBPACK_IMPORTED_MODULE_1__.HorizontalAlign.right;
        this._verticalAlign = _models_Alignment__WEBPACK_IMPORTED_MODULE_1__.VerticalAlign.middle;
        this.svgPath = null;
    }
    changeColor(color) {
        if (this.color !== color) {
            this.color = color;
            this._cdr.markForCheck();
        }
    }
    get roundedColorClass() {
        return this.roundedColor ? ' rounded-' + this.roundedColor : '';
    }
    set icon(newIcon) {
        if (newIcon) {
            this.svgPath = IconComponent.ICON_BASE_URL + newIcon;
            this.iconName = newIcon;
        }
        else {
            this.svgPath = null;
        }
    }
    /**
     * Allineamento verticale dell'icona rispetto al contenitore: 'top' | 'middle' | 'bottom'
     */
    get verticalAlign() {
        return this._verticalAlign;
    }
    set verticalAlign(value) {
        if (_models_Alignment__WEBPACK_IMPORTED_MODULE_1__.VERTICAL_ALIGN.is(value)) {
            this._verticalAlign = value;
        }
        else {
            this._verticalAlign = _models_Alignment__WEBPACK_IMPORTED_MODULE_1__.VerticalAlign.middle;
        }
    }
}
IconComponent.ICON_BASE_URL = 'bootstrap-italia/dist/svg/sprites.svg#';
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
IconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["it-icon"]], inputs: { rounded: "rounded", roundedColor: "roundedColor", icon: "icon", wai: "wai", size: "size", color: "color", bgColor: "bgColor", padded: "padded", expand: "expand", position: "position", verticalAlign: "verticalAlign" }, decls: 3, vars: 1, consts: [[4, "ngIf"], ["svgIcon", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IconComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IconComponent_ng_template_1_Template, 2, 14, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iconName && ctx.svgPath);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 4898:
/*!*****************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/icon/icon.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItIconModule": () => (/* binding */ ItIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.component */ 9132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ItIconModule {
}
ItIconModule.ɵfac = function ItIconModule_Factory(t) { return new (t || ItIconModule)(); };
ItIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItIconModule });
ItIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItIconModule, { declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent] }); })();


/***/ }),

/***/ 6729:
/*!*****************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/models/Alignment.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HORIZONTAL_ALIGN": () => (/* binding */ HORIZONTAL_ALIGN),
/* harmony export */   "HorizontalAlign": () => (/* binding */ HorizontalAlign),
/* harmony export */   "VERTICAL_ALIGN": () => (/* binding */ VERTICAL_ALIGN),
/* harmony export */   "VerticalAlign": () => (/* binding */ VerticalAlign)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! io-ts */ 9450);

var VerticalAlign;
(function (VerticalAlign) {
    VerticalAlign["top"] = "top";
    VerticalAlign["middle"] = "middle";
    VerticalAlign["bottom"] = "bottom";
})(VerticalAlign || (VerticalAlign = {}));
var HorizontalAlign;
(function (HorizontalAlign) {
    HorizontalAlign["left"] = "left";
    HorizontalAlign["right"] = "right";
})(HorizontalAlign || (HorizontalAlign = {}));
const HORIZONTAL_ALIGN = io_ts__WEBPACK_IMPORTED_MODULE_0__.keyof(HorizontalAlign);
const VERTICAL_ALIGN = io_ts__WEBPACK_IMPORTED_MODULE_0__.keyof(VerticalAlign);


/***/ }),

/***/ 9013:
/*!******************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/models/ButtonSize.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUTTON_SIZES": () => (/* binding */ BUTTON_SIZES),
/* harmony export */   "ButtonSize": () => (/* binding */ ButtonSize)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! io-ts */ 9450);

const ButtonSize = io_ts__WEBPACK_IMPORTED_MODULE_0__.keyof({
    lg: null,
    sm: null,
    xs: null,
});
const LG = 'lg';
const SM = 'sm';
const XS = 'xs';
const BUTTON_SIZES = {
    LG: LG,
    SM: SM,
    XS: XS,
};


/***/ }),

/***/ 558:
/*!*****************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/models/InputType.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INPUT_TYPES": () => (/* binding */ INPUT_TYPES),
/* harmony export */   "InputType": () => (/* binding */ InputType)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! io-ts */ 9450);

const InputType = io_ts__WEBPACK_IMPORTED_MODULE_0__.keyof({
    text: null,
    email: null,
    password: null,
    number: null,
    time: null,
    search: null,
    date: null,
    radio: null,
    checkbox: null,
    textarea: null,
    button: null,
    reset: null,
    submit: null,
    'datetime-local': null,
    hidden: null,
    image: null,
    month: null,
    range: null,
    tel: null,
    url: null,
    week: null,
    datetime: null,
    color: null,
    file: null
});
const TEXT = 'text';
const EMAIL = 'email';
const PASSWORD = 'password';
const NUMBER = 'number';
const TIME = 'time';
const SEARCH = 'search';
const DATE = 'date';
const INPUT_TYPES = {
    TEXT: TEXT,
    EMAIL: EMAIL,
    PASSWORD: PASSWORD,
    NUMBER: NUMBER,
    SEARCH: SEARCH,
    TIME: TIME,
    DATE: DATE
};


/***/ }),

/***/ 5131:
/*!******************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/models/ThemeColor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEME_COLORS": () => (/* binding */ THEME_COLORS),
/* harmony export */   "ThemeColor": () => (/* binding */ ThemeColor)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! io-ts */ 9450);

const ThemeColor = io_ts__WEBPACK_IMPORTED_MODULE_0__.keyof({
    primary: null,
    secondary: null,
    danger: null,
    warning: null,
    info: null,
    success: null,
    light: null,
    dark: null,
});
const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const DANGER = 'danger';
const WARNING = 'warning';
const INFO = 'info';
const SUCCESS = 'success';
const LIGHT = 'light';
const DARK = 'dark';
const THEME_COLORS = {
    PRIMARY: PRIMARY,
    SECONDARY: SECONDARY,
    DANGER: DANGER,
    WARNING: WARNING,
    INFO: INFO,
    SUCCESS: SUCCESS,
    LIGHT: LIGHT,
    DARK: DARK
};


/***/ }),

/***/ 8940:
/*!***********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/popover/popover.config.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItPopoverConfig": () => (/* binding */ ItPopoverConfig)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


/**
 * Servizio di configurazione per la direttiva ItPopover.
 * Il servizio può essere iniettato, tipicamente in un root component, per impostare i valori delle proprietà in
 * modo tale da fornire i valori di default per tutti i popover utilizzati in un'applicazione.
 */
class ItPopoverConfig extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbPopoverConfig {
}
ItPopoverConfig.ɵfac = /*@__PURE__*/ function () { let ɵItPopoverConfig_BaseFactory; return function ItPopoverConfig_Factory(t) { return (ɵItPopoverConfig_BaseFactory || (ɵItPopoverConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ItPopoverConfig)))(t || ItPopoverConfig); }; }();
ItPopoverConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItPopoverConfig, factory: ItPopoverConfig.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5440:
/*!**************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/popover/popover.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItPopover": () => (/* binding */ ItPopover)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.config */ 8940);





/**
 * A lightweight and extensible directive for fancy popover creation.
 */
class ItPopover extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPopover {
    constructor(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        super(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef);
    }
    ngOnInit() {
        super.ngOnInit();
        super.ngbPopover = this.itPopover;
        this.popoverClass = 'it-popover-window';
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
ItPopover.ɵfac = function ItPopover_Factory(t) { return new (t || ItPopover)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_popover_config__WEBPACK_IMPORTED_MODULE_0__.ItPopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef)); };
ItPopover.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItPopover, selectors: [["", "itPopover", ""]], inputs: { itPopover: "itPopover" }, exportAs: ["itPopover"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 643:
/*!***********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/popover/popover.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItPopoverModule": () => (/* binding */ ItPopoverModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.directive */ 5440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class ItPopoverModule {
}
ItPopoverModule.ɵfac = function ItPopoverModule_Factory(t) { return new (t || ItPopoverModule)(); };
ItPopoverModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItPopoverModule });
ItPopoverModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPopoverModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItPopoverModule, { declarations: [_popover_directive__WEBPACK_IMPORTED_MODULE_0__.ItPopover], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPopoverModule], exports: [_popover_directive__WEBPACK_IMPORTED_MODULE_0__.ItPopover] }); })();


/***/ }),

/***/ 7043:
/*!************************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/progress-bar/progress-bar.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ThemeColor */ 5131);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function ProgressBarComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ProgressBarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Progresso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProgressBarComponent_ng_container_0_ng_container_6_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1);
} }
function ProgressBarComponent_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.indeterminateHiddenText);
} }
function ProgressBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProgressBarComponent_ng_template_1_span_1_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("progress-indeterminate", ctx_r2.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.indeterminate && ctx_r2.indeterminateHiddenText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r2.progressbarId)("ngClass", ctx_r2.progressBarClass)("ngStyle", ctx_r2.pgStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx_r2.value)("aria-valuemin", ctx_r2.min)("aria-valuemax", ctx_r2.max);
} }
let progressbarId = 0;
/**
 * Una barra di avanzamento con design bootstrap italia.
 */
class ProgressBarComponent {
    constructor() {
        this.progressbarId = `it-progress-bar-${progressbarId++}`;
        this._min = ProgressBarComponent.PROGRESS_BAR_DEFAULT_MIN;
        this._max = ProgressBarComponent.PROGRESS_BAR_DEFAULT_MAX;
        this._value = ProgressBarComponent.PROGRESS_BAR_DEFAULT_VALUE;
        this._label = ProgressBarComponent.PROGRESS_BAR_DEFAULT_LABEL;
        this._indeterminate = false;
        this._indeterminateHiddenText = "In elaborazione...";
        this._color = _models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__.THEME_COLORS.PRIMARY;
    }
    /**
     * Il valore minimo della barra di avanzamento.
     */
    get min() { return this._min; }
    set min(v) { this._min = Math.round(v); }
    /**
     * Il valore massimo della barra di avanzamento.
     */
    get max() { return this._max; }
    set max(v) { this._max = Math.round(v); }
    /**
     * L'attuale valore della barra di avanzamento.
     */
    get value() { return this._value; }
    set value(v) { this._value = Math.min(Math.max(v, this._min), this._max); }
    /**
     * L'etichetta della barra di avanzamento.
     */
    get label() { return this._label; }
    set label(v) { this._label = v; }
    get indeterminate() { return this._indeterminate; }
    set indeterminate(value) { this._indeterminate = _util_util__WEBPACK_IMPORTED_MODULE_1__.Util.coerceBooleanProperty(value); }
    get indeterminateHiddenText() { return this._indeterminateHiddenText; }
    set indeterminateHiddenText(v) { this._indeterminateHiddenText = v; }
    /**
     * Il colore della barra di avanzamento.
     */
    get color() {
        return this._color;
    }
    set color(value) {
        if (_models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__.ThemeColor.is(value)) {
            this._color = value;
        }
        else {
            this._color = _models_ThemeColor__WEBPACK_IMPORTED_MODULE_0__.THEME_COLORS.PRIMARY;
        }
    }
    valuePercentage() {
        return ((this.value - this.min) * 100) / (this.max - this.min);
    }
    pgStyle() {
        return this.indeterminate ? null : { 'width': this.valuePercentage() + '%' };
    }
    get progressBarClass() {
        const progressbarClass = new Set();
        progressbarClass.add('progress-bar');
        if (this.color) {
            progressbarClass.add(`bg-${this.color}`);
        }
        return progressbarClass;
    }
}
ProgressBarComponent.PROGRESS_BAR_DEFAULT_MIN = 0;
ProgressBarComponent.PROGRESS_BAR_DEFAULT_MAX = 100;
ProgressBarComponent.PROGRESS_BAR_DEFAULT_VALUE = 0;
ProgressBarComponent.PROGRESS_BAR_DEFAULT_LABEL = '';
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["it-progress-bar"]], inputs: { min: "min", max: "max", value: "value", label: "label", indeterminate: "indeterminate", indeterminateHiddenText: "indeterminateHiddenText", color: "color" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["progressBarEl", ""], [1, "progress-bar-wrapper"], [1, "progress-bar-label"], [1, "visually-hidden"], [4, "ngTemplateOutlet"], [1, "progress"], ["class", "visually-hidden", 4, "ngIf"], ["role", "progressbar", 3, "id", "ngClass", "ngStyle"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProgressBarComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProgressBarComponent_ng_template_1_Template, 3, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.label)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 3320:
/*!**********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/radio/radio.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonComponent": () => (/* binding */ RadioButtonComponent),
/* harmony export */   "RadioChange": () => (/* binding */ RadioChange),
/* harmony export */   "RadioGroupDirective": () => (/* binding */ RadioGroupDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _unique_selection_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unique-selection-dispatcher */ 2167);
/* harmony import */ var _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/focus-mouse.directive */ 1724);





let identifier = 0;
function _coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
class RadioChange {
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
class RadioGroupDirective {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.role = 'radiogroup';
        /**
         * Il valore selezionato per il gruppo. Dovrebbe essere uguale al valore del radio button selezionato se
         * *esiste* un radio button con un valore corrispondente. Se *non esiste* un radio button corrispondente
         * questo valore persiste ed è applicato nel caso in cui un nuovo radio button viene aggiunto con il valore
         * corrispondente.
         */
        this._value = null;
        /** L'attributo HTML name da applicare ai radio button in questo gruppo */
        this._name = `it-radio-group-${identifier++}`;
        /** Il radio button attualmente selezionato. */
        this._selected = null;
        /** se `value` è stato settato al suo valore iniziale. */
        this._isInitialized = false;
        /** Se il radio group è disabilitato. */
        this._disabled = false;
        /**
         * Evento emesso quando il valore del gruppo cambia.
         * Gli eventi di change sono emessi soltanto quando il valore cambia a causa dell'interazione dell'utente
         * con il radio button (stesso comportamento di `<input type-"radio">`).
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /** Il metodo da chiamare per aggiornare ngModel */
        this._controlValueAccessorChangeFn = () => { };
        this.onTouched = () => { };
    }
    /** Nome del gruppo di radio button. Tutti i radio button all'interno del gruppo avranno questo nome. */
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /** Valore del radio button. */
    get value() { return this._value; }
    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /** Il radio button selezionato. */
    get selected() { return this._selected; }
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /** Se il gruppo è disabled */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = _coerceBooleanProperty(value);
        this._markRadiosForCheck();
    }
    /**
     * Inizializza le proprietà quando il contenuto dei figliè disponibile.
     * Questo permette di propagare gli attributi rilevanti ai radio buttons associati.
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
            });
        }
    }
    /** Aggiorna il radio button `selected` a seconda del suo _value. */
    _updateSelectedRadioFromValue() {
        this._selected = null;
        this._radios.forEach(radio => {
            radio.checked = this.value === radio.value;
            if (radio.checked) {
                this._selected = radio;
            }
        });
    }
    /** Invia l'evento change con la selezione corrente e il valore del gruppo. */
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.change.emit(new RadioChange(this._selected, this._value));
        }
    }
    _markRadiosForCheck() {
        if (this._radios) {
            this._radios.forEach(radio => radio._markForCheck());
        }
    }
    writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
    }
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
RadioGroupDirective.ɵfac = function RadioGroupDirective_Factory(t) { return new (t || RadioGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
RadioGroupDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: RadioGroupDirective, selectors: [["it-radio-group"]], contentQueries: function RadioGroupDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, RadioButtonComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    } }, hostVars: 1, hostBindings: function RadioGroupDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx.role);
    } }, inputs: { name: "name", value: "value", selected: "selected", disabled: "disabled" }, outputs: { change: "change" }, exportAs: ["itRadioGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => RadioGroupDirective),
                multi: true
            }])] });
/**
 * Un radio button con design bootstrap italia. Supporta tutte le funzionalità di una radio HTML5,
 * ed espone una API simile. Una `<it-radio-button>` può essere checked, unchecked, o disabled.
 */
class RadioButtonComponent {
    constructor(radioGroup, _changeDetector, _radioDispatcher) {
        this._changeDetector = _changeDetector;
        this._radioDispatcher = _radioDispatcher;
        this.id = `radio-${identifier++}`;
        /**
         * Evento emesso quando il valore `checked` del radio button cambia.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /** Se il radio button è checked. */
        this._checked = false;
        /** il valore assegnato al radio button. */
        this._value = null;
        this._removeUniqueSelectionListener = () => { };
        this.radioGroup = radioGroup;
        this._removeUniqueSelectionListener =
            _radioDispatcher.listen((id, name) => {
                if (id !== this.id && name === this.name) {
                    this.checked = false;
                }
            });
    }
    /** se il radio button è checked. */
    get checked() { return this._checked; }
    set checked(value) {
        const newCheckedState = _coerceBooleanProperty(value);
        if (this._checked !== newCheckedState) {
            this._checked = newCheckedState;
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                this._radioDispatcher.notify(this.id, this.name);
            }
            this._changeDetector.markForCheck();
        }
    }
    /** Il valore di questo radio button. */
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (this.radioGroup !== null) {
                if (!this.checked) {
                    this.checked = this.radioGroup.value === value;
                }
                if (this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        }
    }
    /** Se il radio button è disabled. */
    get disabled() {
        return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
    }
    set disabled(value) {
        const newDisabledState = !!value;
        if (this._disabled !== newDisabledState) {
            this._disabled = newDisabledState;
            this._changeDetector.markForCheck();
        }
    }
    /**
     * Segna il radio button come da controllare per la change detection.
     */
    _markForCheck() {
        this._changeDetector.markForCheck();
    }
    ngOnInit() {
        if (this.radioGroup) {
            // Se il radio button è all'interno di un gruppo, determina se deve essere selezionato
            this.checked = this.radioGroup.value === this._value;
            // Copia il `name` del radio group
            this.name = this.radioGroup.name;
        }
    }
    ngOnDestroy() {
        this._removeUniqueSelectionListener();
    }
    _emitChangeEvent() {
        this.change.emit(new RadioChange(this, this._value));
    }
    _onInputChange(event) {
        event.stopPropagation();
        const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            this.radioGroup._touch();
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    }
}
RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) { return new (t || RadioButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](RadioGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_unique_selection_dispatcher__WEBPACK_IMPORTED_MODULE_0__.UniqueSelectionDispatcher)); };
RadioButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RadioButtonComponent, selectors: [["it-radio-button"]], inputs: { name: "name", label: "label", checked: "checked", value: "value", disabled: "disabled" }, outputs: { change: "change" }, exportAs: ["itRadioButton"], decls: 4, vars: 6, consts: [[1, "form-check"], ["type", "radio", "focusMouse", "", 3, "id", "checked", "disabled", "change"]], template: function RadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RadioButtonComponent_Template_input_change_1_listener($event) { return ctx._onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id)("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.label);
    } }, dependencies: [_util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_1__.FocusMouseDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 2167:
/*!**********************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/radio/unique-selection-dispatcher.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueSelectionDispatcher": () => (/* binding */ UniqueSelectionDispatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
class UniqueSelectionDispatcher {
    constructor() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    notify(id, name) {
        for (const listener of this._listeners) {
            listener(id, name);
        }
    }
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    listen(listener) {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter((registered) => {
                return listener !== registered;
            });
        };
    }
    ngOnDestroy() {
        this._listeners = [];
    }
}
UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) { return new (t || UniqueSelectionDispatcher)(); };
UniqueSelectionDispatcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UniqueSelectionDispatcher, factory: UniqueSelectionDispatcher.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7223:
/*!*************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/tabs/tab-group.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTabGroupComponent": () => (/* binding */ ItTabGroupComponent),
/* harmony export */   "TabChangeEvent": () => (/* binding */ TabChangeEvent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ 9865);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ 1555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/focus-mouse.directive */ 1724);







function ItTabGroupComponent_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 7);
} if (rf & 2) {
    const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", tab_r2.icon);
} }
const _c0 = function (a1, a2) { return { "nav-link": true, "active": a1, "disabled": a2 }; };
function ItTabGroupComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ItTabGroupComponent_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const i_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6._handleClick($event, i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ItTabGroupComponent_li_1_i_2_Template, 1, 1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, ctx_r0.selectedIndex == i_r3, tab_r2.disabled))("id", ctx_r0._getTabLabelId(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-controls", ctx_r0._getTabContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", tab_r2.ariaLabel || null)("aria-labelledby", !tab_r2.ariaLabel && tab_r2.ariaLabelledby ? tab_r2.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tab_r2.label, " ");
} }
function ItTabGroupComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
const _c1 = function (a1) { return { "tab-pane p-3": true, "show active": a1 }; };
function ItTabGroupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ItTabGroupComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r1.selectedIndex == i_r9))("id", ctx_r1._getTabContentId(i_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r1._getTabLabelId(i_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", tab_r8._implicitContent);
} }
const _c2 = function (a0, a1, a2) { return { "nav-dark": a0, "nav-tabs": a1, "nav-pills mb-3": a2 }; };
/** Usato per generare ID univoci per ogni componente tab */
let nextId = 0;
/** Un change event emesso ai cambi di selezione. */
class TabChangeEvent {
}
/**
* Un componente tab-group con design bootstrap italia. Utilizzabile con il tag `<it-tab-group>`.
*
* Supporta al suo interno tab di base `<it-tab>` con una label e un contenuto.
*/
class ItTabGroupComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /** L'indice del tab che dovrebbe essere selezionato dopo che il contenuto e' stato controllato */
        this._indexToSelect = 0;
        /** Subscription all'aggiunta e rimozione di tab. */
        this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
        /** Subscription ai cambiamenti alle label dei tab. */
        this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
        this._isPill = false;
        this._selectedIndex = null;
        this._dark = false;
        /** abilita il supporto al data-binding bidirezionale `[(selectedIndex)]` */
        this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** emesso quando la selezione del tab cambia. */
        this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(true);
        this._groupId = nextId++;
    }
    /** Se le tab sono formattate come pill. */
    get pill() { return this._isPill; }
    set pill(value) {
        this._isPill = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value);
    }
    /** L'indice della tab attiva. */
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        this._indexToSelect = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceNumberProperty(value, null);
    }
    /**
     * Se il tab-group ha un tema scuro
     */
    get dark() { return this._dark; }
    set dark(value) {
        this._dark = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value);
    }
    /**
     * Dopo che il contenuto è controllato, il componente conosce i tab che sono stati definiti
     * e qual è l'indice del tab selezionato.
     */
    ngAfterContentChecked() {
        this.changeTab(this._indexToSelect);
    }
    changeTab(newIndex) {
        // Non fissare `indexToSelect` immediatamente nel setter perchè può accadere che
        // il numero di tab cambi prima che avvenga la change detection.
        const indexToSelect = this._indexToSelect = this._clampTabIndex(newIndex);
        // Se il nuovo tab è disabilitato, non fare niente
        if (this._tabs && this._tabs.length > 0 && this._tabs.toArray()[indexToSelect].disabled) {
            return;
        }
        if (this._selectedIndex !== indexToSelect && this._selectedIndex != null) {
            const tabChangeEvent = this._createChangeEvent(indexToSelect);
            this.selectedTabChange.emit(tabChangeEvent);
            // Emetto questo valore dopo che è partita la change detection
            // dal momento che il contenuto controllato potrebbe contenere questa variabile
            Promise.resolve().then(() => this.selectedIndexChange.emit(indexToSelect));
        }
        // Setta la posizione per ogni tab.
        this._tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            tab.isActive = index === indexToSelect;
        });
        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngAfterContentInit() {
        this._subscribeToTabLabels();
        // Sottoscrivi al cambiamento nel numero di tab, così da
        // poter ri-renderizzare il contenuto quando nuove tab vengono aggiunte o rimosse.
        this._tabsSubscription = this._tabs.changes.subscribe(() => {
            const indexToSelect = this._clampTabIndex(this._indexToSelect);
            // Mantieni il tab selezionato precedentemente se un nuovo tab è aggiunto o rimosso e non ci sono
            // cambiamenti espliciti che selezionino un tab differente.
            if (indexToSelect === this._selectedIndex) {
                const tabs = this._tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assegna `_indexToSelect` e `_selectedIndex` in modo da non emettere un change event
                        // per evitare al consumer loop infiniti in alcuni casi limite come ad esempio
                        // se si aggiunge un tab all'interno dell'evento `selectedIndexChange`.
                        this._indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this._subscribeToTabLabels();
            this._changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        this._tabsSubscription.unsubscribe();
        this._tabLabelSubscription.unsubscribe();
    }
    _createChangeEvent(index) {
        const event = new TabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    }
    /**
     * Sottoscrivi a cambiamenti nelle label dei tab. Necessario perchè l'input per la label è sul TabComponent
     * mentre il data binding è all'interno di TabGroupComponent. Per fare in modo che il binding sia aggiornato
     * bisogna sottoscriversi ai cambiamenti e azionare la change detection in maniera manuale.
     */
    _subscribeToTabLabels() {
        if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
        }
        this._tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(...this._tabs.map(tab => tab._disableChange), ...this._tabs.map(tab => tab._labelChange)).subscribe(() => {
            this._changeDetectorRef.markForCheck();
        });
    }
    /** fissa l'indice tra 0 e la dimensione dei tab. */
    _clampTabIndex(index) {
        return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** ritorna un id univoco per ogni label di tab */
    _getTabLabelId(i) {
        return `it-tab-label-${this._groupId}-${i}`;
    }
    /** ritorna un id univoco per ogni elemento di contenuto del tab */
    _getTabContentId(i) {
        return `it-tab-content-${this._groupId}-${i}`;
    }
    /** restituisce il tabIndex del tab. */
    _getTabIndex(tab, idx) {
        if (tab.disabled) {
            return null;
        }
        return this.selectedIndex === idx ? 0 : -1;
    }
    _handleClick($event, index) {
        $event.preventDefault();
        this.changeTab(index);
    }
}
ItTabGroupComponent.ɵfac = function ItTabGroupComponent_Factory(t) { return new (t || ItTabGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
ItTabGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ItTabGroupComponent, selectors: [["it-tab-group"]], contentQueries: function ItTabGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _tab_component__WEBPACK_IMPORTED_MODULE_1__.ItTabComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._tabs = _t);
    } }, inputs: { pill: "pill", selectedIndex: "selectedIndex", dark: "dark" }, outputs: { selectedIndexChange: "selectedIndexChange", selectedTabChange: "selectedTabChange" }, exportAs: ["itTabGroup"], decls: 4, vars: 7, consts: [["role", "tablist", 1, "nav", 3, "ngClass"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], [4, "ngFor", "ngForOf"], [1, "nav-item"], ["focusMouse", "", "href", "#", "role", "tab", 3, "ngClass", "id", "click"], ["class", "it-ico-lg d-block text-center", 3, "ngClass", 4, "ngIf"], [1, "it-ico-lg", "d-block", "text-center", 3, "ngClass"], ["role", "tabpanel", 3, "ngClass", "id"], [4, "ngTemplateOutlet"]], template: function ItTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ItTabGroupComponent_li_1_Template, 4, 11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ItTabGroupComponent_ng_container_3_Template, 3, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c2, ctx.dark, !ctx.pill, ctx.pill));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx._tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx._tabs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_2__.FocusMouseDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1555:
/*!*******************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/tabs/tab.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTabComponent": () => (/* binding */ ItTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ 9865);




function ItTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
/**
 * Un componente tab con design bootstrap italia. Indica la singola tab di un insieme di tab.
 * Utilizzabile con il tag `<it-tab>` all'interno di un tag `<it-tab-group>`.
 */
class ItTabComponent {
    constructor() {
        /** Testo della tab. */
        this.label = ''; // tslint:disable-line
        this._disabled = false;
        /**
         * La stringa rappresentante l'icona da utilizzare nel titolo della tab. Es. `it-file`
         */
        this.icon = null;
        /** Emette un evento ogni volta che la label cambia. */
        this._labelChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Emette un evento ogni volta che l'attributo disabled cambia */
        this._disableChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /**
         * La posizione relativa della tab dove 0 rappresenta il centro, i negativi sono a sinistra
         * e i positivi sono a destra.
         */
        this.position = null;
        /**
         * Se il tab è attivo.
         */
        this.isActive = false;
    }
    /** Se la tab è disabilitata. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = _util_util__WEBPACK_IMPORTED_MODULE_0__.Util.coerceBooleanProperty(value);
    }
    ngOnDestroy() {
        this._disableChange.complete();
        this._labelChange.complete();
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('label')
            || changes.hasOwnProperty('ariaLabel')
            || changes.hasOwnProperty('ariaLabelledby')) {
            this._labelChange.next();
        }
        if (changes.hasOwnProperty('disabled')) {
            this._disableChange.next();
        }
    }
}
ItTabComponent.ɵfac = function ItTabComponent_Factory(t) { return new (t || ItTabComponent)(); };
ItTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItTabComponent, selectors: [["it-tab"]], viewQuery: function ItTabComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
    } }, inputs: { label: "label", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], disabled: "disabled", icon: "icon" }, exportAs: ["itTab"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ItTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItTabComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 4405:
/*!*****************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/tabs/tabs.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTabsModule": () => (/* binding */ ItTabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _util_utils_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils.module */ 5842);
/* harmony import */ var _tab_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-group.component */ 7223);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.component */ 1555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ItTabsModule {
}
ItTabsModule.ɵfac = function ItTabsModule_Factory(t) { return new (t || ItTabsModule)(); };
ItTabsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ItTabsModule });
ItTabsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _util_utils_module__WEBPACK_IMPORTED_MODULE_0__.ItUtilsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ItTabsModule, { declarations: [_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _tab_group_component__WEBPACK_IMPORTED_MODULE_1__.ItTabGroupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _util_utils_module__WEBPACK_IMPORTED_MODULE_0__.ItUtilsModule], exports: [_tab_component__WEBPACK_IMPORTED_MODULE_2__.ItTabComponent, _tab_group_component__WEBPACK_IMPORTED_MODULE_1__.ItTabGroupComponent] }); })();


/***/ }),

/***/ 4404:
/*!************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/toggle/toggle.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleChange": () => (/* binding */ ToggleChange),
/* harmony export */   "ToggleComponent": () => (/* binding */ ToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/focus-mouse.directive */ 1724);




let identifier = 0;
class ToggleChange {
}
/**
 * Una toggle con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,
 * ed espone una API simile. Una `<it-toggle>` può essere checked, unchecked, o disabled.
 */
class ToggleComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._checked = false;
        this._disabled = false;
        /**
         * Evento emesso quando il valore `checked` della toggle cambia.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.inputId = `toggle-${identifier++}`;
        this._onTouched = () => { };
        this._controlValueAccessorChangeFn = () => { };
    }
    /**
     * Se la toggle è selezionata.
     */
    get checked() { return this._checked; }
    set checked(value) {
        if (value !== this.checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Se la toggle è disabilitata.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        if (value !== this.disabled) {
            this._disabled = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    writeValue(value) {
        this.checked = !!value;
    }
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    handleChange(event) {
        event.stopPropagation();
        if (!this.disabled) {
            this._toggle();
            this._emitChangeEvent();
        }
    }
    _toggle() {
        this.checked = !this.checked;
    }
    _emitChangeEvent() {
        const event = new ToggleChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["it-toggle"]], inputs: { checked: "checked", label: "label", disabled: "disabled" }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ToggleComponent), multi: true }])], decls: 6, vars: 5, consts: [[1, "form-check"], [1, "toggles"], ["type", "checkbox", "focusMouse", "", 3, "id", "checked", "disabled", "change"], [1, "lever"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ToggleComponent_Template_input_change_4_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled);
    } }, dependencies: [_util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__.FocusMouseDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2dnbGUuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 483:
/*!***********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/tooltip/tooltip.config.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTooltipConfig": () => (/* binding */ ItTooltipConfig)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


/**
 * Servizio di configurazione per la direttiva ItPopover.
 * Il servizio può essere iniettato, tipicamente in un root component, per impostare i valori delle proprietà in
 * modo tale da fornire i valori di default per tutti i popover utilizzati in un'applicazione.
 */
class ItTooltipConfig extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbTooltipConfig {
}
ItTooltipConfig.ɵfac = /*@__PURE__*/ function () { let ɵItTooltipConfig_BaseFactory; return function ItTooltipConfig_Factory(t) { return (ɵItTooltipConfig_BaseFactory || (ɵItTooltipConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ItTooltipConfig)))(t || ItTooltipConfig); }; }();
ItTooltipConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItTooltipConfig, factory: ItTooltipConfig.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3622:
/*!**************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/tooltip/tooltip.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTooltip": () => (/* binding */ ItTooltip)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.config */ 483);
/**
 * @license
 * Copyright Angular ng-bootstrap team All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE
 */





/**
 * Una direttiva per la creazione di un tooltip.
 */
class ItTooltip extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbTooltip {
    constructor(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        super(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef);
    }
    ngOnInit() {
        super.ngOnInit();
        super.ngbTooltip = this.itTooltip;
        this.tooltipClass = 'it-tooltip-window';
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
ItTooltip.ɵfac = function ItTooltip_Factory(t) { return new (t || ItTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tooltip_config__WEBPACK_IMPORTED_MODULE_0__.ItTooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef)); };
ItTooltip.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ItTooltip, selectors: [["", "itTooltip", ""]], inputs: { itTooltip: "itTooltip" }, exportAs: ["itTooltip"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 8099:
/*!***********************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/tooltip/tooltip.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItTooltipModule": () => (/* binding */ ItTooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.directive */ 3622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class ItTooltipModule {
}
ItTooltipModule.ɵfac = function ItTooltipModule_Factory(t) { return new (t || ItTooltipModule)(); };
ItTooltipModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItTooltipModule });
ItTooltipModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItTooltipModule, { declarations: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__.ItTooltip], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule], exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_0__.ItTooltip] }); })();


/***/ }),

/***/ 1724:
/*!***************************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/util/focus-mouse.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusMouseDirective": () => (/* binding */ FocusMouseDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


/**
 * Aggiunge la classe "focus--mouse" quando viene effettuato il focus sull'elemento a cui è applicata la direttiva
 */
class FocusMouseDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onFocus() {
        this.elementRef.nativeElement.classList.add('focus--mouse');
    }
    onBlur() {
        this.elementRef.nativeElement.classList.remove('focus--mouse');
    }
}
FocusMouseDirective.ɵfac = function FocusMouseDirective_Factory(t) { return new (t || FocusMouseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
FocusMouseDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FocusMouseDirective, selectors: [["", "focusMouse", ""]], hostBindings: function FocusMouseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function FocusMouseDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function FocusMouseDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, exportAs: ["focusMouse"] });


/***/ }),

/***/ 9865:
/*!**********************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/util/util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Util": () => (/* binding */ Util)
/* harmony export */ });
class Util {
    static coerceBooleanProperty(value) {
        return value != null && `${value}` !== 'false';
    }
    static coerceNumberProperty(value, fallbackValue = 0) {
        return Util._isNumberValue(value) ? Number(value) : fallbackValue;
    }
    static _isNumberValue(value) {
        return !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }
}


/***/ }),

/***/ 5842:
/*!******************************************************************!*\
  !*** ./projects/design-angular-kit/src/lib/util/utils.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItUtilsModule": () => (/* binding */ ItUtilsModule)
/* harmony export */ });
/* harmony import */ var _focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-mouse.directive */ 1724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ItUtilsModule {
}
ItUtilsModule.ɵfac = function ItUtilsModule_Factory(t) { return new (t || ItUtilsModule)(); };
ItUtilsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItUtilsModule });
ItUtilsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItUtilsModule, { declarations: [_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__.FocusMouseDirective], exports: [_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__.FocusMouseDirective] }); })();


/***/ }),

/***/ 8597:
/*!*******************************************************!*\
  !*** ./projects/design-angular-kit/src/public_api.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeDirective": () => (/* reexport safe */ _lib_badge_badge_directive__WEBPACK_IMPORTED_MODULE_12__.BadgeDirective),
/* harmony export */   "BreadcrumbComponent": () => (/* reexport safe */ _lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_25__.BreadcrumbComponent),
/* harmony export */   "BreadcrumbItemComponent": () => (/* reexport safe */ _lib_breadcrumb_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbItemComponent),
/* harmony export */   "CheckboxChange": () => (/* reexport safe */ _lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxChange),
/* harmony export */   "CheckboxComponent": () => (/* reexport safe */ _lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxComponent),
/* harmony export */   "DesignAngularKitModule": () => (/* reexport safe */ _lib_design_angular_kit_module__WEBPACK_IMPORTED_MODULE_35__.DesignAngularKitModule),
/* harmony export */   "DropdownComponent": () => (/* reexport safe */ _lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_22__.DropdownComponent),
/* harmony export */   "DropdownDividerComponent": () => (/* reexport safe */ _lib_dropdown_dropdown_divider_component__WEBPACK_IMPORTED_MODULE_24__.DropdownDividerComponent),
/* harmony export */   "DropdownItemComponent": () => (/* reexport safe */ _lib_dropdown_dropdown_item_component__WEBPACK_IMPORTED_MODULE_23__.DropdownItemComponent),
/* harmony export */   "FocusMouseDirective": () => (/* reexport safe */ _lib_util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_34__.FocusMouseDirective),
/* harmony export */   "FormInputChange": () => (/* reexport safe */ _lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_17__.FormInputChange),
/* harmony export */   "FormInputComponent": () => (/* reexport safe */ _lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_17__.FormInputComponent),
/* harmony export */   "IconComponent": () => (/* reexport safe */ _lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_28__.IconComponent),
/* harmony export */   "ItButtonDirective": () => (/* reexport safe */ _lib_button_button_directive__WEBPACK_IMPORTED_MODULE_10__.ItButtonDirective),
/* harmony export */   "ItButtonModule": () => (/* reexport safe */ _lib_button_button_module__WEBPACK_IMPORTED_MODULE_11__.ItButtonModule),
/* harmony export */   "ItCollapseDirective": () => (/* reexport safe */ _lib_collapse_collapse_directive__WEBPACK_IMPORTED_MODULE_13__.ItCollapseDirective),
/* harmony export */   "ItCollapseGroupComponent": () => (/* reexport safe */ _lib_collapse_collapse_group_component__WEBPACK_IMPORTED_MODULE_15__.ItCollapseGroupComponent),
/* harmony export */   "ItCollapseItemComponent": () => (/* reexport safe */ _lib_collapse_collapse_item_component__WEBPACK_IMPORTED_MODULE_14__.ItCollapseItemComponent),
/* harmony export */   "ItCollapseModule": () => (/* reexport safe */ _lib_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_16__.ItCollapseModule),
/* harmony export */   "ItDropdown": () => (/* reexport safe */ _lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_30__.ItDropdown),
/* harmony export */   "ItDropdownAnchor": () => (/* reexport safe */ _lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_30__.ItDropdownAnchor),
/* harmony export */   "ItDropdownConfig": () => (/* reexport safe */ _lib_dropdown_dropdown_config__WEBPACK_IMPORTED_MODULE_31__.ItDropdownConfig),
/* harmony export */   "ItDropdownItem": () => (/* reexport safe */ _lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_30__.ItDropdownItem),
/* harmony export */   "ItDropdownMenu": () => (/* reexport safe */ _lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_30__.ItDropdownMenu),
/* harmony export */   "ItDropdownModule": () => (/* reexport safe */ _lib_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_32__.ItDropdownModule),
/* harmony export */   "ItDropdownToggle": () => (/* reexport safe */ _lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_30__.ItDropdownToggle),
/* harmony export */   "ItIconModule": () => (/* reexport safe */ _lib_icon_icon_module__WEBPACK_IMPORTED_MODULE_29__.ItIconModule),
/* harmony export */   "ItNavbar": () => (/* reexport safe */ _lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_30__.ItNavbar),
/* harmony export */   "ItPopover": () => (/* reexport safe */ _lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__.ItPopover),
/* harmony export */   "ItPopoverConfig": () => (/* reexport safe */ _lib_popover_popover_config__WEBPACK_IMPORTED_MODULE_3__.ItPopoverConfig),
/* harmony export */   "ItPopoverModule": () => (/* reexport safe */ _lib_popover_popover_module__WEBPACK_IMPORTED_MODULE_4__.ItPopoverModule),
/* harmony export */   "ItPrefixDirective": () => (/* reexport safe */ _lib_form_input_it_prefix_directive__WEBPACK_IMPORTED_MODULE_18__.ItPrefixDirective),
/* harmony export */   "ItSuffixDirective": () => (/* reexport safe */ _lib_form_input_it_suffix_directive__WEBPACK_IMPORTED_MODULE_19__.ItSuffixDirective),
/* harmony export */   "ItTabGroupComponent": () => (/* reexport safe */ _lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_27__.ItTabGroupComponent),
/* harmony export */   "ItTextPrefixDirective": () => (/* reexport safe */ _lib_form_input_it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_21__.ItTextPrefixDirective),
/* harmony export */   "ItTextSuffixDirective": () => (/* reexport safe */ _lib_form_input_it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_20__.ItTextSuffixDirective),
/* harmony export */   "ItTooltip": () => (/* reexport safe */ _lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__.ItTooltip),
/* harmony export */   "ItTooltipConfig": () => (/* reexport safe */ _lib_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_9__.ItTooltipConfig),
/* harmony export */   "ItTooltipModule": () => (/* reexport safe */ _lib_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_8__.ItTooltipModule),
/* harmony export */   "ItUtilsModule": () => (/* reexport safe */ _lib_util_utils_module__WEBPACK_IMPORTED_MODULE_33__.ItUtilsModule),
/* harmony export */   "ProgressBarComponent": () => (/* reexport safe */ _lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent),
/* harmony export */   "RadioButtonComponent": () => (/* reexport safe */ _lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent),
/* harmony export */   "RadioChange": () => (/* reexport safe */ _lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__.RadioChange),
/* harmony export */   "RadioGroupDirective": () => (/* reexport safe */ _lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__.RadioGroupDirective),
/* harmony export */   "TabChangeEvent": () => (/* reexport safe */ _lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_27__.TabChangeEvent),
/* harmony export */   "ToggleChange": () => (/* reexport safe */ _lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__.ToggleChange),
/* harmony export */   "ToggleComponent": () => (/* reexport safe */ _lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__.ToggleComponent)
/* harmony export */ });
/* harmony import */ var _lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/progress-bar/progress-bar.component */ 7043);
/* harmony import */ var _lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/checkbox/checkbox.component */ 991);
/* harmony import */ var _lib_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/popover/popover.directive */ 5440);
/* harmony import */ var _lib_popover_popover_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/popover/popover.config */ 8940);
/* harmony import */ var _lib_popover_popover_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/popover/popover.module */ 643);
/* harmony import */ var _lib_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/toggle/toggle.component */ 4404);
/* harmony import */ var _lib_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/radio/radio.component */ 3320);
/* harmony import */ var _lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/tooltip/tooltip.directive */ 3622);
/* harmony import */ var _lib_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/tooltip/tooltip.module */ 8099);
/* harmony import */ var _lib_tooltip_tooltip_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/tooltip/tooltip.config */ 483);
/* harmony import */ var _lib_button_button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/button/button.directive */ 9103);
/* harmony import */ var _lib_button_button_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/button/button.module */ 2681);
/* harmony import */ var _lib_badge_badge_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/badge/badge.directive */ 4009);
/* harmony import */ var _lib_collapse_collapse_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/collapse/collapse.directive */ 2959);
/* harmony import */ var _lib_collapse_collapse_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/collapse/collapse-item.component */ 3196);
/* harmony import */ var _lib_collapse_collapse_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/collapse/collapse-group.component */ 8146);
/* harmony import */ var _lib_collapse_collapse_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/collapse/collapse.module */ 2484);
/* harmony import */ var _lib_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/form-input/form-input.component */ 8012);
/* harmony import */ var _lib_form_input_it_prefix_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/form-input/it-prefix.directive */ 4376);
/* harmony import */ var _lib_form_input_it_suffix_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/form-input/it-suffix.directive */ 3988);
/* harmony import */ var _lib_form_input_it_text_suffix_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/form-input/it-text-suffix.directive */ 2936);
/* harmony import */ var _lib_form_input_it_text_prefix_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/form-input/it-text-prefix.directive */ 6441);
/* harmony import */ var _lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/dropdown/dropdown.component */ 1657);
/* harmony import */ var _lib_dropdown_dropdown_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/dropdown/dropdown-item.component */ 2280);
/* harmony import */ var _lib_dropdown_dropdown_divider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/dropdown/dropdown-divider.component */ 5569);
/* harmony import */ var _lib_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/breadcrumb/breadcrumb.component */ 6089);
/* harmony import */ var _lib_breadcrumb_breadcrumb_item_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/breadcrumb/breadcrumb-item.component */ 3220);
/* harmony import */ var _lib_tabs_tab_group_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/tabs/tab-group.component */ 7223);
/* harmony import */ var _lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/icon/icon.component */ 9132);
/* harmony import */ var _lib_icon_icon_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/icon/icon.module */ 4898);
/* harmony import */ var _lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lib/dropdown/dropdown.directive */ 1812);
/* harmony import */ var _lib_dropdown_dropdown_config__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lib/dropdown/dropdown.config */ 5261);
/* harmony import */ var _lib_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lib/dropdown/dropdown.module */ 1405);
/* harmony import */ var _lib_util_utils_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lib/util/utils.module */ 5842);
/* harmony import */ var _lib_util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./lib/util/focus-mouse.directive */ 1724);
/* harmony import */ var _lib_design_angular_kit_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./lib/design-angular-kit.module */ 3078);
/*
 * Public API Surface of design-angular-kit
 */






































/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-dispatcher/router-dispatcher.component */ 5009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'info', component: _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_0__.RouterDispatcherComponent, children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/welcome/welcome.module */ 2526)).then(m => m.WelcomeModule) }
        ] },
    { path: 'componenti', component: _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_0__.RouterDispatcherComponent, children: [
            { path: '', redirectTo: 'badge', pathMatch: 'full' },
            { path: 'badge', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_badge_badge_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/badge/badge.module */ 5913)).then(m => m.BadgeModule) },
            { path: 'checkbox', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_checkbox_checkbox_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/checkbox/checkbox.module */ 5220)).then(m => m.CheckboxModule) },
            { path: 'progress-bar', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_progress-bar_progress-bar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/progress-bar/progress-bar.module */ 2279)).then(m => m.ProgressBarModule) },
            { path: 'toggle', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_toggle_toggle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/toggle/toggle.module */ 9909)).then(m => m.ToggleModule) },
            { path: 'popover', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_popover_popover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/popover/popover.module */ 2415)).then(m => m.PopoverModule) },
            { path: 'radio', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_radio_radio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/radio/radio.module */ 2107)).then(m => m.RadioModule) },
            { path: 'breadcrumb', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_breadcrumb_breadcrumb_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/breadcrumb/breadcrumb.module */ 7248)).then(m => m.BreadcrumbModule) },
            { path: 'tabs', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/tabs/tabs.module */ 5564)).then(m => m.TabsModule) },
            { path: 'tooltip', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_tooltip_tooltip_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/tooltip/tooltip.module */ 3030)).then(m => m.TooltipModule) },
            { path: 'button', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_button_button_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/button/button.module */ 7548)).then(m => m.ButtonModule) },
            { path: 'collapse', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_collapse_collapse_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/collapse/collapse.module */ 1176)).then(m => m.CollapseModule) },
            { path: 'form-input', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_form-input_form-input_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/form-input/form-input.module */ 4304)).then(m => m.FormInputModule) },
            { path: 'dropdown', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts-src_assets_documentation_json"), __webpack_require__.e("src_app_dropdown_dropdown_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/dropdown/dropdown.module */ 5237)).then(m => m.DropdownModule) },
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_design_angular_kit_src_lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/design-angular-kit/src/lib/dropdown/dropdown.directive */ 1812);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _table_of_content_table_of_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-of-content/table-of-content.component */ 5288);




class AppComponent {
    constructor() {
        this.title = 'design-angular-kit-doc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["it-root"]], decls: 59, vars: 0, consts: [[1, "navbar-institutional", "navbar", "navbar-expand-lg", "navbar-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsTop", "aria-controls", "navbarsTop", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["href", "http://www.agid.gov.it/", 1, "navbar-brand"], [1, "navbar-brand", "text-white"], ["href", "https://teamdigitale.governo.it/", 1, "navbar-brand"], [1, "d-none", "d-lg-inline"], ["id", "navbarsTop", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "nav-item-w-divider"], ["href", "https://pianotriennale-ict.italia.it/", 1, "nav-link"], [1, "nav-item"], ["href", "https://developers.italia.it/", 1, "nav-link"], ["href", "https://designers.italia.it/", 1, "nav-link"], ["href", "https://forum.italia.it/", 1, "nav-link"], ["href", "https://docs.italia.it/", 1, "nav-link"], ["href", "https://github.com/italia/", 1, "nav-link"], [1, "navbar", "navbar-dark", "bd-navbar", "sticky-top"], [1, "container-fluid"], ["href", "#/info/welcome", 1, "navbar-brand", "py-2", "text-decoration-none"], [1, "d-flex", "flex-row"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 92 74", "height", "48"], ["fill", "#FFF"], ["d", "M31.799 71.9V15.7h15.1V72h-15.1zM91.099 28.5h-13.8v23.1c0 2.3.1 3.8.2 4.8.1.9.5 1.7 1.2 2.4s1.8 1 3.3 1l8.6-.2.7 12c-5 1.1-8.9 1.7-11.5 1.7-6.8 0-11.4-1.5-13.8-4.6-2.5-3-3.7-8.6-3.7-16.8V0h15.1v15.6h13.8v12.9zM9.099 32.8c-2.6 0-4.8-.9-6.5-2.7s-2.6-4-2.6-6.6.9-4.8 2.5-6.6c1.7-1.8 3.9-2.6 6.5-2.6s4.8.9 6.5 2.7 2.5 4 2.5 6.7-.8 4.8-2.5 6.6c-1.6 1.6-3.7 2.5-6.4 2.5z"], [1, "d-flex", "flex-column", "ps-3", "ps-sm-4"], [1, "bd-logo-title"], [1, "bd-logo-subtitle"], [1, "d-none", "d-sm-inline"], [1, "navbar-nav", "flex-row", "ml-md-auto", "d-none", "d-md-flex"], [1, "nav-item", "pr-2"], ["title", "Vedi il codice sorgente su GitHub", "href", "https://github.com/italia/design-angular-kit", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "GitHub", 1, "nav-link", "d-flex", "align-items-center"], [1, "it-github"], [1, "sr-only"], [1, "row", "flex-xl-nowrap"], [1, "col-12", "col-md-3", "col-xl-2"], [1, "col-12", "col-md-9", "col-xl-10", "py-md-3", "px-md-3", "bd-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "AgID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "per la Trasformazione ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Digitale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "ul", 8)(15, "li", 9)(16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Piano Triennale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 11)(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 9)(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Designers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 11)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 11)(28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 11)(31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "header", 17)(34, "div", 18)(35, "a", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "svg", 21)(38, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24)(41, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Angular Kit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Il kit Angular per ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "lo sviluppo di applicazioni web per ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "la PA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ul", 28)(49, "li", 29)(50, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Vedi il codice sorgente su GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 18)(55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "it-table-of-content", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "main", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, dependencies: [_projects_design_angular_kit_src_lib_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.ItNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _table_of_content_table_of_content_component__WEBPACK_IMPORTED_MODULE_1__.TableOfContentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/design-angular-kit/src/public_api */ 8597);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _table_of_content_table_of_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-of-content/table-of-content.component */ 5288);
/* harmony import */ var _table_of_content_item_table_of_content_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-of-content-item/table-of-content-item.component */ 5263);
/* harmony import */ var _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router-dispatcher/router-dispatcher.component */ 5009);
/* harmony import */ var _link_sort_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link-sort.pipe */ 8431);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var projects_design_angular_kit_src_lib_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/design-angular-kit/src/lib/tabs/tabs.module */ 4405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [{
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__.HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 8622)),
                languages: {
                    typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 5281)),
                    HTML: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 526)),
                    scss: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_scss_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/scss */ 2166))
                }
            }
        }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        projects_design_angular_kit_src_lib_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_7__.ItTabsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _table_of_content_table_of_content_component__WEBPACK_IMPORTED_MODULE_3__.TableOfContentComponent,
        _table_of_content_item_table_of_content_item_component__WEBPACK_IMPORTED_MODULE_4__.TableOfContentItemComponent,
        _router_dispatcher_router_dispatcher_component__WEBPACK_IMPORTED_MODULE_5__.RouterDispatcherComponent,
        _link_sort_pipe__WEBPACK_IMPORTED_MODULE_6__.LinkSortPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        projects_design_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DesignAngularKitModule,
        projects_design_angular_kit_src_lib_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_7__.ItTabsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule] }); })();


/***/ }),

/***/ 8431:
/*!***********************************!*\
  !*** ./src/app/link-sort.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkSortPipe": () => (/* binding */ LinkSortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LinkSortPipe {
    transform(value) {
        return value.sort((a, b) => (a.link > b.link) ? 1 : ((b.link > a.link) ? -1 : 0));
    }
}
LinkSortPipe.ɵfac = function LinkSortPipe_Factory(t) { return new (t || LinkSortPipe)(); };
LinkSortPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "linksort", type: LinkSortPipe, pure: true });


/***/ }),

/***/ 5009:
/*!******************************************************************!*\
  !*** ./src/app/router-dispatcher/router-dispatcher.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterDispatcherComponent": () => (/* binding */ RouterDispatcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class RouterDispatcherComponent {
    constructor() { }
    ngOnInit() {
    }
}
RouterDispatcherComponent.ɵfac = function RouterDispatcherComponent_Factory(t) { return new (t || RouterDispatcherComponent)(); };
RouterDispatcherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouterDispatcherComponent, selectors: [["it-router-dispatcher"]], decls: 1, vars: 0, template: function RouterDispatcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZXItZGlzcGF0Y2hlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5263:
/*!**************************************************************************!*\
  !*** ./src/app/table-of-content-item/table-of-content-item.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOfContentItemComponent": () => (/* binding */ TableOfContentItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_design_angular_kit_src_lib_util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/design-angular-kit/src/lib/util/focus-mouse.directive */ 1724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _link_sort_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link-sort.pipe */ 8431);





const _c0 = function () { return ["active", "bd-sidenav-active"]; };
function TableOfContentItemComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", link_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.label);
} }
class TableOfContentItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableOfContentItemComponent.ɵfac = function TableOfContentItemComponent_Factory(t) { return new (t || TableOfContentItemComponent)(); };
TableOfContentItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableOfContentItemComponent, selectors: [["it-table-of-content-item"]], inputs: { tocItem: "tocItem" }, decls: 6, vars: 6, consts: [[1, "bd-toc-item", 3, "routerLinkActive"], ["focusMouse", "", 1, "bd-toc-link", 3, "routerLink"], [1, "nav", "bd-sidenav", "pl-2"], [3, "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["focusMouse", "", 1, "list-item", 3, "routerLink"]], template: function TableOfContentItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TableOfContentItemComponent_li_4_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "linksort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.tocItem.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tocItem.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, ctx.tocItem.links));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _projects_design_angular_kit_src_lib_util_focus_mouse_directive__WEBPACK_IMPORTED_MODULE_0__.FocusMouseDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _link_sort_pipe__WEBPACK_IMPORTED_MODULE_1__.LinkSortPipe], styles: [".bd-links[_ngcontent-%COMP%] {\n  padding: 0;\n}\n@media (min-width: 768px) {\n  @supports (position: sticky) {\n    .bd-links[_ngcontent-%COMP%] {\n      max-height: calc(100vh - 5rem);\n      overflow-y: auto;\n    }\n  }\n}\n@media (min-width: 768px) {\n  .bd-links[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.bd-toc-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #343a40;\n}\n@media (min-width: 768px) {\n  .bd-toc-link[_ngcontent-%COMP%] {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n}\n.bd-toc-link[_ngcontent-%COMP%]:hover {\n  color: #0d6efd;\n}\n.bd-toc-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.bd-toc-item.active[_ngcontent-%COMP%]    > .bd-toc-link[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 600;\n}\n.bd-toc-item.active[_ngcontent-%COMP%]    > .bd-toc-link[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.bd-toc-item.active[_ngcontent-%COMP%]   .bd-sidenav[_ngcontent-%COMP%] {\n  display: block;\n}\n.bd-sidenav[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem 0.25rem 1.5rem;\n  font-size: 16px;\n  color: #343a40;\n}\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0d6efd;\n  background-color: transparent;\n}\n.nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d6efd;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW9mLWNvbnRlbnQtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsVUFBQTtBQUhGO0FDNkRJO0VEdkRBO0lBSko7TUFLTSw4QkFBQTtNQUNBLGdCQUFBO0lBRkY7RUFDRjtBQUNGO0FDcURJO0VEM0RKO0lBWUkseUJBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFLQSxjRVhTO0FGS1g7QUMwQ0k7RUQzQ0o7SUFJSSxvQkFBQTtJQUNBLHVCQUFBO0VBQ0Y7QUFDRjtBQUVFO0VBQ0UsY0VRTTtBRlJWO0FBSUE7RUFDSSxzQkUzQk87QUYwQlg7QUFHTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQURSO0FBR1E7RUFDRSw2QkFBQTtBQURWO0FBS007RUFDRSxjQUFBO0FBSFI7QUFRQTtFQUNFLGFBQUE7QUFMRjtBQVdFO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxjRS9DTztBRnVDWDtBQVNJO0VBQ0UsY0UzQkk7RUY0QkosNkJBQUE7QUFQTjtBQVVFOztFQUVFLGdCQUFBO0VBQ0EsY0VsQ007RUZtQ04sNkJBQUE7QUFSSiIsImZpbGUiOiJ0YWJsZS1vZi1jb250ZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ2Jvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbi5iZC1saW5rcyB7XG4gIHBhZGRpbmc6IDA7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIEBzdXBwb3J0cyAocG9zaXRpb246IHN0aWNreSkge1xuICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gIH1cblxuICAvLyBPdmVycmlkZSBjb2xsYXBzZSBiZWhhdmlvcnNcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmJkLXRvYy1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIH1cbiAgY29sb3I6ICRncmF5LTgwMDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gIH1cbn1cblxuLmJkLXRvYy1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgJi5hY3RpdmUge1xuICAgICAgPiAuYmQtdG9jLWxpbmsge1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJkLXNpZGVuYXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG59XG5cbi5iZC1zaWRlbmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vLyBBbGwgbGV2ZWxzIG9mIG5hdlxuLm5hdiB7XG4gID4gbGkgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogLjI1cmVtIC41cmVtIC4yNXJlbSAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAkZ3JheS04MDA7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgPiAuYWN0aXZlID4gYSxcbiAgPiAuYWN0aXZlOmhvdmVyID4gYSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEBpZiBub3QgJG4ge1xuICAgIEBlcnJvciBcImJyZWFrcG9pbnQgYCN7JG5hbWV9YCBub3QgZm91bmQgaW4gYCN7JGJyZWFrcG9pbnRzfWBcIjtcbiAgfVxuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46ICBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogIGJyZWFrcG9pbnQtbWF4KCRuZXh0KTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5leHQsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyYXktY29sb3ItdmFyaWFibGVzXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGdyYXktY29sb3ItdmFyaWFibGVzXG5cbi8vIGZ1c3YtZGlzYWJsZVxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyYXktY29sb3JzLW1hcFxuJGdyYXlzOiAoXG4gIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgXCIyMDBcIjogJGdyYXktMjAwLFxuICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgXCI1MDBcIjogJGdyYXktNTAwLFxuICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgXCI4MDBcIjogJGdyYXktODAwLFxuICBcIjkwMFwiOiAkZ3JheS05MDBcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGdyYXktY29sb3JzLW1hcFxuLy8gZnVzdi1lbmFibGVcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbG9yLXZhcmlhYmxlc1xuJGJsdWU6ICAgICMwZDZlZmQgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNkNjMzODQgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzE5ODc1NCAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMwZGNhZjAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbG9yLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sb3JzLW1hcFxuJGNvbG9yczogKFxuICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sb3JzLW1hcFxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGhlbWUtY29sb3ItdmFyaWFibGVzXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtY29sb3ItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1jb2xvcnMtbWFwXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICBcImRhcmtcIjogICAgICAgJGRhcmtcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLWNvbG9ycy1tYXBcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1yZ2JcbiR0aGVtZS1jb2xvcnMtcmdiOiBtYXAtbG9vcCgkdGhlbWUtY29sb3JzLCB0by1yZ2IsIFwiJHZhbHVlXCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvcnMtcmdiXG5cbi8vIFRoZSBjb250cmFzdCByYXRpbyB0byByZWFjaCBhZ2FpbnN0IHdoaXRlLCB0byBkZXRlcm1pbmUgaWYgY29sb3IgY2hhbmdlcyBmcm9tIFwibGlnaHRcIiB0byBcImRhcmtcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgZm9yIFdDQUcgMi4wIGFyZSAzLCA0LjUgYW5kIDcuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0XG4kbWluLWNvbnRyYXN0LXJhdGlvOiAgIDQuNSAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiRjb2xvci1jb250cmFzdC1kYXJrOiAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjb2xvci1jb250cmFzdC1saWdodDogICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gZnVzdi1kaXNhYmxlXG4kYmx1ZS0xMDA6IHRpbnQtY29sb3IoJGJsdWUsIDgwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0yMDA6IHRpbnQtY29sb3IoJGJsdWUsIDYwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0zMDA6IHRpbnQtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS00MDA6IHRpbnQtY29sb3IoJGJsdWUsIDIwJSkgIWRlZmF1bHQ7XG4kYmx1ZS01MDA6ICRibHVlICFkZWZhdWx0O1xuJGJsdWUtNjAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgMjAlKSAhZGVmYXVsdDtcbiRibHVlLTcwMDogc2hhZGUtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS04MDA6IHNoYWRlLWNvbG9yKCRibHVlLCA2MCUpICFkZWZhdWx0O1xuJGJsdWUtOTAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgODAlKSAhZGVmYXVsdDtcblxuJGluZGlnby0xMDA6IHRpbnQtY29sb3IoJGluZGlnbywgODAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tMjAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDYwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTMwMDogdGludC1jb2xvcigkaW5kaWdvLCA0MCUpICFkZWZhdWx0O1xuJGluZGlnby00MDA6IHRpbnQtY29sb3IoJGluZGlnbywgMjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tNTAwOiAkaW5kaWdvICFkZWZhdWx0O1xuJGluZGlnby02MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDIwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTcwMDogc2hhZGUtY29sb3IoJGluZGlnbywgNDAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tODAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCA2MCUpICFkZWZhdWx0O1xuJGluZGlnby05MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDgwJSkgIWRlZmF1bHQ7XG5cbiRwdXJwbGUtMTAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDgwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTIwMDogdGludC1jb2xvcigkcHVycGxlLCA2MCUpICFkZWZhdWx0O1xuJHB1cnBsZS0zMDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgNDAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtNDAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDIwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTUwMDogJHB1cnBsZSAhZGVmYXVsdDtcbiRwdXJwbGUtNjAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCAyMCUpICFkZWZhdWx0O1xuJHB1cnBsZS03MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDQwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTgwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgNjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtOTAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCA4MCUpICFkZWZhdWx0O1xuXG4kcGluay0xMDA6IHRpbnQtY29sb3IoJHBpbmssIDgwJSkgIWRlZmF1bHQ7XG4kcGluay0yMDA6IHRpbnQtY29sb3IoJHBpbmssIDYwJSkgIWRlZmF1bHQ7XG4kcGluay0zMDA6IHRpbnQtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay00MDA6IHRpbnQtY29sb3IoJHBpbmssIDIwJSkgIWRlZmF1bHQ7XG4kcGluay01MDA6ICRwaW5rICFkZWZhdWx0O1xuJHBpbmstNjAwOiBzaGFkZS1jb2xvcigkcGluaywgMjAlKSAhZGVmYXVsdDtcbiRwaW5rLTcwMDogc2hhZGUtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay04MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCA2MCUpICFkZWZhdWx0O1xuJHBpbmstOTAwOiBzaGFkZS1jb2xvcigkcGluaywgODAlKSAhZGVmYXVsdDtcblxuJHJlZC0xMDA6IHRpbnQtY29sb3IoJHJlZCwgODAlKSAhZGVmYXVsdDtcbiRyZWQtMjAwOiB0aW50LWNvbG9yKCRyZWQsIDYwJSkgIWRlZmF1bHQ7XG4kcmVkLTMwMDogdGludC1jb2xvcigkcmVkLCA0MCUpICFkZWZhdWx0O1xuJHJlZC00MDA6IHRpbnQtY29sb3IoJHJlZCwgMjAlKSAhZGVmYXVsdDtcbiRyZWQtNTAwOiAkcmVkICFkZWZhdWx0O1xuJHJlZC02MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLTcwMDogc2hhZGUtY29sb3IoJHJlZCwgNDAlKSAhZGVmYXVsdDtcbiRyZWQtODAwOiBzaGFkZS1jb2xvcigkcmVkLCA2MCUpICFkZWZhdWx0O1xuJHJlZC05MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDgwJSkgIWRlZmF1bHQ7XG5cbiRvcmFuZ2UtMTAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDgwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTIwMDogdGludC1jb2xvcigkb3JhbmdlLCA2MCUpICFkZWZhdWx0O1xuJG9yYW5nZS0zMDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgNDAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtNDAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDIwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTUwMDogJG9yYW5nZSAhZGVmYXVsdDtcbiRvcmFuZ2UtNjAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCAyMCUpICFkZWZhdWx0O1xuJG9yYW5nZS03MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDQwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTgwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgNjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtOTAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCA4MCUpICFkZWZhdWx0O1xuXG4keWVsbG93LTEwMDogdGludC1jb2xvcigkeWVsbG93LCA4MCUpICFkZWZhdWx0O1xuJHllbGxvdy0yMDA6IHRpbnQtY29sb3IoJHllbGxvdywgNjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctMzAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDQwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTQwMDogdGludC1jb2xvcigkeWVsbG93LCAyMCUpICFkZWZhdWx0O1xuJHllbGxvdy01MDA6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4keWVsbG93LTYwMDogc2hhZGUtY29sb3IoJHllbGxvdywgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctNzAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCA0MCUpICFkZWZhdWx0O1xuJHllbGxvdy04MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDYwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTkwMDogc2hhZGUtY29sb3IoJHllbGxvdywgODAlKSAhZGVmYXVsdDtcblxuJGdyZWVuLTEwMDogdGludC1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tMjAwOiB0aW50LWNvbG9yKCRncmVlbiwgNjAlKSAhZGVmYXVsdDtcbiRncmVlbi0zMDA6IHRpbnQtY29sb3IoJGdyZWVuLCA0MCUpICFkZWZhdWx0O1xuJGdyZWVuLTQwMDogdGludC1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNTAwOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kZ3JlZW4tNjAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNzAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDQwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tODAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDYwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tOTAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG5cbiR0ZWFsLTEwMDogdGludC1jb2xvcigkdGVhbCwgODAlKSAhZGVmYXVsdDtcbiR0ZWFsLTIwMDogdGludC1jb2xvcigkdGVhbCwgNjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTMwMDogdGludC1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTQwMDogdGludC1jb2xvcigkdGVhbCwgMjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTUwMDogJHRlYWwgIWRlZmF1bHQ7XG4kdGVhbC02MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCAyMCUpICFkZWZhdWx0O1xuJHRlYWwtNzAwOiBzaGFkZS1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTgwMDogc2hhZGUtY29sb3IoJHRlYWwsIDYwJSkgIWRlZmF1bHQ7XG4kdGVhbC05MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCA4MCUpICFkZWZhdWx0O1xuXG4kY3lhbi0xMDA6IHRpbnQtY29sb3IoJGN5YW4sIDgwJSkgIWRlZmF1bHQ7XG4kY3lhbi0yMDA6IHRpbnQtY29sb3IoJGN5YW4sIDYwJSkgIWRlZmF1bHQ7XG4kY3lhbi0zMDA6IHRpbnQtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi00MDA6IHRpbnQtY29sb3IoJGN5YW4sIDIwJSkgIWRlZmF1bHQ7XG4kY3lhbi01MDA6ICRjeWFuICFkZWZhdWx0O1xuJGN5YW4tNjAwOiBzaGFkZS1jb2xvcigkY3lhbiwgMjAlKSAhZGVmYXVsdDtcbiRjeWFuLTcwMDogc2hhZGUtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi04MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCA2MCUpICFkZWZhdWx0O1xuJGN5YW4tOTAwOiBzaGFkZS1jb2xvcigkY3lhbiwgODAlKSAhZGVmYXVsdDtcblxuJGJsdWVzOiAoXG4gIFwiYmx1ZS0xMDBcIjogJGJsdWUtMTAwLFxuICBcImJsdWUtMjAwXCI6ICRibHVlLTIwMCxcbiAgXCJibHVlLTMwMFwiOiAkYmx1ZS0zMDAsXG4gIFwiYmx1ZS00MDBcIjogJGJsdWUtNDAwLFxuICBcImJsdWUtNTAwXCI6ICRibHVlLTUwMCxcbiAgXCJibHVlLTYwMFwiOiAkYmx1ZS02MDAsXG4gIFwiYmx1ZS03MDBcIjogJGJsdWUtNzAwLFxuICBcImJsdWUtODAwXCI6ICRibHVlLTgwMCxcbiAgXCJibHVlLTkwMFwiOiAkYmx1ZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRpbmRpZ29zOiAoXG4gIFwiaW5kaWdvLTEwMFwiOiAkaW5kaWdvLTEwMCxcbiAgXCJpbmRpZ28tMjAwXCI6ICRpbmRpZ28tMjAwLFxuICBcImluZGlnby0zMDBcIjogJGluZGlnby0zMDAsXG4gIFwiaW5kaWdvLTQwMFwiOiAkaW5kaWdvLTQwMCxcbiAgXCJpbmRpZ28tNTAwXCI6ICRpbmRpZ28tNTAwLFxuICBcImluZGlnby02MDBcIjogJGluZGlnby02MDAsXG4gIFwiaW5kaWdvLTcwMFwiOiAkaW5kaWdvLTcwMCxcbiAgXCJpbmRpZ28tODAwXCI6ICRpbmRpZ28tODAwLFxuICBcImluZGlnby05MDBcIjogJGluZGlnby05MDBcbikgIWRlZmF1bHQ7XG5cbiRwdXJwbGVzOiAoXG4gIFwicHVycGxlLTEwMFwiOiAkcHVycGxlLTIwMCxcbiAgXCJwdXJwbGUtMjAwXCI6ICRwdXJwbGUtMTAwLFxuICBcInB1cnBsZS0zMDBcIjogJHB1cnBsZS0zMDAsXG4gIFwicHVycGxlLTQwMFwiOiAkcHVycGxlLTQwMCxcbiAgXCJwdXJwbGUtNTAwXCI6ICRwdXJwbGUtNTAwLFxuICBcInB1cnBsZS02MDBcIjogJHB1cnBsZS02MDAsXG4gIFwicHVycGxlLTcwMFwiOiAkcHVycGxlLTcwMCxcbiAgXCJwdXJwbGUtODAwXCI6ICRwdXJwbGUtODAwLFxuICBcInB1cnBsZS05MDBcIjogJHB1cnBsZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRwaW5rczogKFxuICBcInBpbmstMTAwXCI6ICRwaW5rLTEwMCxcbiAgXCJwaW5rLTIwMFwiOiAkcGluay0yMDAsXG4gIFwicGluay0zMDBcIjogJHBpbmstMzAwLFxuICBcInBpbmstNDAwXCI6ICRwaW5rLTQwMCxcbiAgXCJwaW5rLTUwMFwiOiAkcGluay01MDAsXG4gIFwicGluay02MDBcIjogJHBpbmstNjAwLFxuICBcInBpbmstNzAwXCI6ICRwaW5rLTcwMCxcbiAgXCJwaW5rLTgwMFwiOiAkcGluay04MDAsXG4gIFwicGluay05MDBcIjogJHBpbmstOTAwXG4pICFkZWZhdWx0O1xuXG4kcmVkczogKFxuICBcInJlZC0xMDBcIjogJHJlZC0xMDAsXG4gIFwicmVkLTIwMFwiOiAkcmVkLTIwMCxcbiAgXCJyZWQtMzAwXCI6ICRyZWQtMzAwLFxuICBcInJlZC00MDBcIjogJHJlZC00MDAsXG4gIFwicmVkLTUwMFwiOiAkcmVkLTUwMCxcbiAgXCJyZWQtNjAwXCI6ICRyZWQtNjAwLFxuICBcInJlZC03MDBcIjogJHJlZC03MDAsXG4gIFwicmVkLTgwMFwiOiAkcmVkLTgwMCxcbiAgXCJyZWQtOTAwXCI6ICRyZWQtOTAwXG4pICFkZWZhdWx0O1xuXG4kb3JhbmdlczogKFxuICBcIm9yYW5nZS0xMDBcIjogJG9yYW5nZS0xMDAsXG4gIFwib3JhbmdlLTIwMFwiOiAkb3JhbmdlLTIwMCxcbiAgXCJvcmFuZ2UtMzAwXCI6ICRvcmFuZ2UtMzAwLFxuICBcIm9yYW5nZS00MDBcIjogJG9yYW5nZS00MDAsXG4gIFwib3JhbmdlLTUwMFwiOiAkb3JhbmdlLTUwMCxcbiAgXCJvcmFuZ2UtNjAwXCI6ICRvcmFuZ2UtNjAwLFxuICBcIm9yYW5nZS03MDBcIjogJG9yYW5nZS03MDAsXG4gIFwib3JhbmdlLTgwMFwiOiAkb3JhbmdlLTgwMCxcbiAgXCJvcmFuZ2UtOTAwXCI6ICRvcmFuZ2UtOTAwXG4pICFkZWZhdWx0O1xuXG4keWVsbG93czogKFxuICBcInllbGxvdy0xMDBcIjogJHllbGxvdy0xMDAsXG4gIFwieWVsbG93LTIwMFwiOiAkeWVsbG93LTIwMCxcbiAgXCJ5ZWxsb3ctMzAwXCI6ICR5ZWxsb3ctMzAwLFxuICBcInllbGxvdy00MDBcIjogJHllbGxvdy00MDAsXG4gIFwieWVsbG93LTUwMFwiOiAkeWVsbG93LTUwMCxcbiAgXCJ5ZWxsb3ctNjAwXCI6ICR5ZWxsb3ctNjAwLFxuICBcInllbGxvdy03MDBcIjogJHllbGxvdy03MDAsXG4gIFwieWVsbG93LTgwMFwiOiAkeWVsbG93LTgwMCxcbiAgXCJ5ZWxsb3ctOTAwXCI6ICR5ZWxsb3ctOTAwXG4pICFkZWZhdWx0O1xuXG4kZ3JlZW5zOiAoXG4gIFwiZ3JlZW4tMTAwXCI6ICRncmVlbi0xMDAsXG4gIFwiZ3JlZW4tMjAwXCI6ICRncmVlbi0yMDAsXG4gIFwiZ3JlZW4tMzAwXCI6ICRncmVlbi0zMDAsXG4gIFwiZ3JlZW4tNDAwXCI6ICRncmVlbi00MDAsXG4gIFwiZ3JlZW4tNTAwXCI6ICRncmVlbi01MDAsXG4gIFwiZ3JlZW4tNjAwXCI6ICRncmVlbi02MDAsXG4gIFwiZ3JlZW4tNzAwXCI6ICRncmVlbi03MDAsXG4gIFwiZ3JlZW4tODAwXCI6ICRncmVlbi04MDAsXG4gIFwiZ3JlZW4tOTAwXCI6ICRncmVlbi05MDBcbikgIWRlZmF1bHQ7XG5cbiR0ZWFsczogKFxuICBcInRlYWwtMTAwXCI6ICR0ZWFsLTEwMCxcbiAgXCJ0ZWFsLTIwMFwiOiAkdGVhbC0yMDAsXG4gIFwidGVhbC0zMDBcIjogJHRlYWwtMzAwLFxuICBcInRlYWwtNDAwXCI6ICR0ZWFsLTQwMCxcbiAgXCJ0ZWFsLTUwMFwiOiAkdGVhbC01MDAsXG4gIFwidGVhbC02MDBcIjogJHRlYWwtNjAwLFxuICBcInRlYWwtNzAwXCI6ICR0ZWFsLTcwMCxcbiAgXCJ0ZWFsLTgwMFwiOiAkdGVhbC04MDAsXG4gIFwidGVhbC05MDBcIjogJHRlYWwtOTAwXG4pICFkZWZhdWx0O1xuXG4kY3lhbnM6IChcbiAgXCJjeWFuLTEwMFwiOiAkY3lhbi0xMDAsXG4gIFwiY3lhbi0yMDBcIjogJGN5YW4tMjAwLFxuICBcImN5YW4tMzAwXCI6ICRjeWFuLTMwMCxcbiAgXCJjeWFuLTQwMFwiOiAkY3lhbi00MDAsXG4gIFwiY3lhbi01MDBcIjogJGN5YW4tNTAwLFxuICBcImN5YW4tNjAwXCI6ICRjeWFuLTYwMCxcbiAgXCJjeWFuLTcwMFwiOiAkY3lhbi03MDAsXG4gIFwiY3lhbi04MDBcIjogJGN5YW4tODAwLFxuICBcImN5YW4tOTAwXCI6ICRjeWFuLTkwMFxuKSAhZGVmYXVsdDtcbi8vIGZ1c3YtZW5hYmxlXG5cbi8vIENoYXJhY3RlcnMgd2hpY2ggYXJlIGVzY2FwZWQgYnkgdGhlIGVzY2FwZS1zdmcgZnVuY3Rpb25cbiRlc2NhcGVkLWNoYXJhY3RlcnM6IChcbiAgKFwiPFwiLCBcIiUzY1wiKSxcbiAgKFwiPlwiLCBcIiUzZVwiKSxcbiAgKFwiI1wiLCBcIiUyM1wiKSxcbiAgKFwiKFwiLCBcIiUyOFwiKSxcbiAgKFwiKVwiLCBcIiUyOVwiKSxcbikgIWRlZmF1bHQ7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlZHVjZWQtbW90aW9uOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zbW9vdGgtc2Nyb2xsOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWNzc2dyaWQ6ICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtYnV0dG9uLXBvaW50ZXJzOiAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJmczogICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtbmVnYXRpdmUtbWFyZ2luczogICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllczogIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgOnJvb3QgQ1NTIHZhcmlhYmxlc1xuXG4kdmFyaWFibGUtcHJlZml4OiAgICAgICAgICAgICBicy0gIWRlZmF1bHQ7XG5cbi8vIEdyYWRpZW50XG4vL1xuLy8gVGhlIGdyYWRpZW50IHdoaWNoIGlzIGFkZGVkIHRvIGNvbXBvbmVudHMgaWYgYCRlbmFibGUtZ3JhZGllbnRzYCBpcyBgdHJ1ZWBcbi8vIFRoaXMgZ3JhZGllbnQgaXMgYWxzbyBhZGRlZCB0byBlbGVtZW50cyB3aXRoIGAuYmctZ3JhZGllbnRgXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdmFyaWFibGUtZ3JhZGllbnRcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgkd2hpdGUsIC4xNSksIHJnYmEoJHdoaXRlLCAwKSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHZhcmlhYmxlLWdyYWRpZW50XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgc3BhY2VyLXZhcmlhYmxlcy1tYXBzXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6IChcbiAgMDogMCxcbiAgMTogJHNwYWNlciAqIC4yNSxcbiAgMjogJHNwYWNlciAqIC41LFxuICAzOiAkc3BhY2VyLFxuICA0OiAkc3BhY2VyICogMS41LFxuICA1OiAkc3BhY2VyICogMyxcbikgIWRlZmF1bHQ7XG5cbiRuZWdhdGl2ZS1zcGFjZXJzOiBpZigkZW5hYmxlLW5lZ2F0aXZlLW1hcmdpbnMsIG5lZ2F0aXZpZnktbWFwKCRzcGFjZXJzKSwgbnVsbCkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHNwYWNlci12YXJpYWJsZXMtbWFwc1xuXG4vLyBQb3NpdGlvblxuLy9cbi8vIERlZmluZSB0aGUgZWRnZSBwb3NpdGlvbmluZyBhbmNob3JzIG9mIHRoZSBwb3NpdGlvbiB1dGlsaXRpZXMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwb3NpdGlvbi1tYXBcbiRwb3NpdGlvbi12YWx1ZXM6IChcbiAgMDogMCxcbiAgNTA6IDUwJSxcbiAgMTAwOiAxMDAlXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwb3NpdGlvbi1tYXBcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kYm9keS10ZXh0LWFsaWduOiAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuLy8gVXRpbGl0aWVzIG1hcHNcbi8vXG4vLyBFeHRlbmRzIHRoZSBkZWZhdWx0IGAkdGhlbWUtY29sb3JzYCBtYXBzIHRvIGhlbHAgY3JlYXRlIG91ciB1dGlsaXRpZXMuXG5cbi8vIENvbWUgdjYsIHdlJ2xsIGRlLWR1cGUgdGhlc2UgdmFyaWFibGVzLiBVbnRpbCB0aGVuLCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgd2Uga2VlcCB0aGVtIHRvIHJlYXNzaWduLlxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHV0aWxpdGllcy1jb2xvcnNcbiR1dGlsaXRpZXMtY29sb3JzOiAkdGhlbWUtY29sb3JzLXJnYiAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdXRpbGl0aWVzLWNvbG9yc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdXRpbGl0aWVzLXRleHQtY29sb3JzXG4kdXRpbGl0aWVzLXRleHQ6IG1hcC1tZXJnZShcbiAgJHV0aWxpdGllcy1jb2xvcnMsXG4gIChcbiAgICBcImJsYWNrXCI6IHRvLXJnYigkYmxhY2spLFxuICAgIFwid2hpdGVcIjogdG8tcmdiKCR3aGl0ZSksXG4gICAgXCJib2R5XCI6IHRvLXJnYigkYm9keS1jb2xvcilcbiAgKVxuKSAhZGVmYXVsdDtcbiR1dGlsaXRpZXMtdGV4dC1jb2xvcnM6IG1hcC1sb29wKCR1dGlsaXRpZXMtdGV4dCwgcmdiYS1jc3MtdmFyLCBcIiRrZXlcIiwgXCJ0ZXh0XCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB1dGlsaXRpZXMtdGV4dC1jb2xvcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHV0aWxpdGllcy1iZy1jb2xvcnNcbiR1dGlsaXRpZXMtYmc6IG1hcC1tZXJnZShcbiAgJHV0aWxpdGllcy1jb2xvcnMsXG4gIChcbiAgICBcImJsYWNrXCI6IHRvLXJnYigkYmxhY2spLFxuICAgIFwid2hpdGVcIjogdG8tcmdiKCR3aGl0ZSksXG4gICAgXCJib2R5XCI6IHRvLXJnYigkYm9keS1iZylcbiAgKVxuKSAhZGVmYXVsdDtcbiR1dGlsaXRpZXMtYmctY29sb3JzOiBtYXAtbG9vcCgkdXRpbGl0aWVzLWJnLCByZ2JhLWNzcy12YXIsIFwiJGtleVwiLCBcImJnXCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB1dGlsaXRpZXMtYmctY29sb3JzXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbiRsaW5rLXNoYWRlLXBlcmNlbnRhZ2U6ICAgICAgICAgICAgICAgICAgIDIwJSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0LWNvbG9yKCRsaW5rLWNvbG9yLCAkbGluay1zaGFkZS1wZXJjZW50YWdlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRzdHJldGNoZWQtbGluay1wc2V1ZG8tZWxlbWVudDogICAgICAgICAgIGFmdGVyICFkZWZhdWx0O1xuJHN0cmV0Y2hlZC1saW5rLXotaW5kZXg6ICAgICAgICAgICAgICAgICAgMSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JpZC1icmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4XG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBncmlkLWJyZWFrcG9pbnRzXG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4LFxuICB4eGw6IDEzMjBweFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29udGFpbmVyLW1heC13aWR0aHNcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kZ3JpZC1yb3ctY29sdW1uczogICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG4kZ3V0dGVyczogJHNwYWNlcnMgIWRlZmF1bHQ7XG5cbi8vIENvbnRhaW5lciBwYWRkaW5nXG5cbiRjb250YWluZXItcGFkZGluZy14OiAkZ3JpZC1ndXR0ZXItd2lkdGggKiAuNSAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXZhcmlhYmxlc1xuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci13aWR0aHM6IChcbiAgMTogMXB4LFxuICAyOiAycHgsXG4gIDM6IDNweCxcbiAgNDogNHB4LFxuICA1OiA1cHhcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiAgICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZXQtdmFyaWFibGVzXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJldC12YXJpYWJsZXNcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sbGFwc2UtdHJhbnNpdGlvblxuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlLXdpZHRoOiAgIHdpZHRoIC4zNXMgZWFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sbGFwc2UtdHJhbnNpdGlvblxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3Rcbi8vIHNjc3MtZG9jcy1zdGFydCBhc3BlY3QtcmF0aW9zXG4kYXNwZWN0LXJhdGlvczogKFxuICBcIjF4MVwiOiAxMDAlLFxuICBcIjR4M1wiOiBjYWxjKDMgLyA0ICogMTAwJSksXG4gIFwiMTZ4OVwiOiBjYWxjKDkgLyAxNiAqIDEwMCUpLFxuICBcIjIxeDlcIjogY2FsYyg5IC8gMjEgKiAxMDAlKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYXNwZWN0LXJhdGlvc1xuLy8gc3R5bGVsaW50LWVuYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9udC12YXJpYWJsZXNcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICB2YXIoLS0jeyR2YXJpYWJsZS1wcmVmaXh9Zm9udC1zYW5zLXNlcmlmKSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1jb2RlOiAgICAgICAgICAgIHZhcigtLSN7JHZhcmlhYmxlLXByZWZpeH1mb250LW1vbm9zcGFjZSkgIWRlZmF1bHQ7XG5cbi8vICRmb250LXNpemUtcm9vdCBhZmZlY3RzIHRoZSB2YWx1ZSBvZiBgcmVtYCwgd2hpY2ggaXMgdXNlZCBmb3IgYXMgd2VsbCBmb250IHNpemVzLCBwYWRkaW5ncywgYW5kIG1hcmdpbnNcbi8vICRmb250LXNpemUtYmFzZSBhZmZlY3RzIHRoZSBmb250IHNpemUgb2YgdGhlIGJvZHkgdGV4dFxuJGZvbnQtc2l6ZS1yb290OiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAyICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvbnQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb250LXNpemVzXG4kZm9udC1zaXplczogKFxuICAxOiAkaDEtZm9udC1zaXplLFxuICAyOiAkaDItZm9udC1zaXplLFxuICAzOiAkaDMtZm9udC1zaXplLFxuICA0OiAkaDQtZm9udC1zaXplLFxuICA1OiAkaDUtZm9udC1zaXplLFxuICA2OiAkaDYtZm9udC1zaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb250LXNpemVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBoZWFkaW5ncy12YXJpYWJsZXNcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1zdHlsZTogICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaGVhZGluZ3MtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkaXNwbGF5LWhlYWRpbmdzXG4kZGlzcGxheS1mb250LXNpemVzOiAoXG4gIDE6IDVyZW0sXG4gIDI6IDQuNXJlbSxcbiAgMzogNHJlbSxcbiAgNDogMy41cmVtLFxuICA1OiAzcmVtLFxuICA2OiAyLjVyZW1cbikgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5LWZvbnQtd2VpZ2h0OiAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBkaXNwbGF5LWhlYWRpbmdzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0eXBlLXZhcmlhYmxlc1xuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgLjg3NWVtICFkZWZhdWx0O1xuXG4kc3ViLXN1cC1mb250LXNpemU6ICAgICAgICAgICAuNzVlbSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kaW5pdGlhbGlzbS1mb250LXNpemU6ICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1tYXJnaW4teTogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvb3Rlci1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvb3Rlci1mb250LXNpemU6ICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kaHItY29sb3I6ICAgICAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGhyLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRoci1vcGFjaXR5OiAgICAgICAgICAgICAgICAgIC4yNSAhZGVmYXVsdDtcblxuJGxlZ2VuZC1tYXJnaW4tYm90dG9tOiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtd2VpZ2h0OiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0eXBlLXZhcmlhYmxlc1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRhYmxlLXZhcmlhYmxlc1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6ICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteS1zbTogICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteC1zbTogICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWNlbGwtdmVydGljYWwtYWxpZ246ICAgdG9wICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiR0YWJsZS10aC1mb250LXdlaWdodDogICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLWNvbG9yOiAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1zdHJpcGVkLWJnLWZhY3RvcjogICAgIC4wNSAhZGVmYXVsdDtcbiR0YWJsZS1zdHJpcGVkLWJnOiAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAkdGFibGUtc3RyaXBlZC1iZy1mYWN0b3IpICFkZWZhdWx0O1xuXG4kdGFibGUtYWN0aXZlLWNvbG9yOiAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnLWZhY3RvcjogICAgICAuMSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAkdGFibGUtYWN0aXZlLWJnLWZhY3RvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZy1mYWN0b3I6ICAgICAgIC4wNzUgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgJHRhYmxlLWhvdmVyLWJnLWZhY3RvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItZmFjdG9yOiAgICAgICAgIC4xICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWdyb3VwLXNlcGFyYXRvci1jb2xvcjogY3VycmVudENvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLXNjYWxlOiAgICAgICAgICAgICAgLTgwJSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGFibGUtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0YWJsZS1sb29wXG4kdGFibGUtdmFyaWFudHM6IChcbiAgXCJwcmltYXJ5XCI6ICAgIHNoaWZ0LWNvbG9yKCRwcmltYXJ5LCAkdGFibGUtYmctc2NhbGUpLFxuICBcInNlY29uZGFyeVwiOiAgc2hpZnQtY29sb3IoJHNlY29uZGFyeSwgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJzdWNjZXNzXCI6ICAgIHNoaWZ0LWNvbG9yKCRzdWNjZXNzLCAkdGFibGUtYmctc2NhbGUpLFxuICBcImluZm9cIjogICAgICAgc2hpZnQtY29sb3IoJGluZm8sICR0YWJsZS1iZy1zY2FsZSksXG4gIFwid2FybmluZ1wiOiAgICBzaGlmdC1jb2xvcigkd2FybmluZywgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJkYW5nZXJcIjogICAgIHNoaWZ0LWNvbG9yKCRkYW5nZXIsICR0YWJsZS1iZy1zY2FsZSksXG4gIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gIFwiZGFya1wiOiAgICAgICAkZGFyayxcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRhYmxlLWxvb3BcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGlucHV0LWJ0bi12YXJpYWJsZXNcbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvci1vcGFjaXR5OiAuMjUgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsICRpbnB1dC1idG4tZm9jdXMtY29sb3Itb3BhY2l0eSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJsdXI6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAkaW5wdXQtYnRuLWZvY3VzLWJsdXIgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGlucHV0LWJ0bi12YXJpYWJsZXNcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBidG4tdmFyaWFibGVzXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRidG4td2hpdGUtc3BhY2U6ICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstY29sb3I6ICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRidG4tbGluay1ob3Zlci1jb2xvcjogICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGJ0bi1ob3Zlci1iZy1zaGFkZS1hbW91bnQ6ICAgICAgIDE1JSAhZGVmYXVsdDtcbiRidG4taG92ZXItYmctdGludC1hbW91bnQ6ICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kYnRuLWhvdmVyLWJvcmRlci1zaGFkZS1hbW91bnQ6ICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1ob3Zlci1ib3JkZXItdGludC1hbW91bnQ6ICAgIDEwJSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJnLXNoYWRlLWFtb3VudDogICAgICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1iZy10aW50LWFtb3VudDogICAgICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm9yZGVyLXNoYWRlLWFtb3VudDogIDI1JSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJvcmRlci10aW50LWFtb3VudDogICAxMCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJ0bi12YXJpYWJsZXNcblxuXG4vLyBGb3Jtc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLXRleHQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1mb250LXN0eWxlOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLXRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1sYWJlbC12YXJpYWJsZXNcbiRmb3JtLWxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC1zdHlsZTogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWxhYmVsLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1pbnB1dC12YXJpYWJsZXNcbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA1MCUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAuNSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLWNvbG9yLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAzcmVtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWlucHV0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1jaGVjay12YXJpYWJsZXNcbiRmb3JtLWNoZWNrLWlucHV0LXdpZHRoOiAgICAgICAgICAgICAgICAgIDFlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLW1pbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stcGFkZGluZy1zdGFydDogICAgICAgICAgICAgICAgJGZvcm0tY2hlY2staW5wdXQtd2lkdGggKyAuNWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1sYWJlbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtYWN0aXZlLWZpbHRlcjogICAgICAgICAgYnJpZ2h0bmVzcyg5MCUpICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1ib3JkZXI6ICAgICAgICAgICAgICAgICAxcHggc29saWQgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXJhZGlvLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWZvY3VzLWJvcmRlcjogICAgICAgICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3I6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogICAkZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1pbWFnZTogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzMnIGQ9J002IDEwbDMgM2w2LTYnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1yYWRpby1jaGVja2VkLWJnLWltYWdlOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPScyJyBmaWxsPScjeyRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYmctY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICAgJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYmctaW1hZ2U6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSczJyBkPSdNNiAxMGg4Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjUgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1sYWJlbC1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgJGZvcm0tY2hlY2staW5wdXQtZGlzYWJsZWQtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWJ0bi1jaGVjay1kaXNhYmxlZC1vcGFjaXR5OiAgICAkYnRuLWRpc2FibGVkLW9wYWNpdHkgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4tZW5kOiAgICAxcmVtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWNoZWNrLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1zd2l0Y2gtdmFyaWFibGVzXG4kZm9ybS1zd2l0Y2gtY29sb3I6ICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgMmVtICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLXBhZGRpbmctc3RhcnQ6ICAgICAgICRmb3JtLXN3aXRjaC13aWR0aCArIC41ZW0gIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtYmctaW1hZ2U6ICAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWJvcmRlci1yYWRpdXM6ICAgICAgICRmb3JtLXN3aXRjaC13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC10cmFuc2l0aW9uOiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXN3aXRjaC1mb2N1cy1jb2xvcjogICAgICAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWZvY3VzLWJnLWltYWdlOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGZvcm0tc3dpdGNoLWZvY3VzLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tc3dpdGNoLWNoZWNrZWQtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctaW1hZ2U6ICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGZvcm0tc3dpdGNoLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctcG9zaXRpb246IHJpZ2h0IGNlbnRlciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1zd2l0Y2gtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBpbnB1dC1ncm91cC12YXJpYWJsZXNcbiRpbnB1dC1ncm91cC1hZGRvbi1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaW5wdXQtZ3JvdXAtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXNlbGVjdC12YXJpYWJsZXNcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAgICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggKiAzICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIGZvciBiYWNrZ3JvdW5kLWltYWdlXG4kZm9ybS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1iZy1wb3NpdGlvbjogICAgICAgICAgIHJpZ2h0ICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgICAgMTZweCAxMnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTIgNWw2IDYgNi02Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLWVuZDogJGZvcm0tc2VsZWN0LXBhZGRpbmcteCAqIDIuNSArICRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICBjZW50ZXIgcmlnaHQgJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkZm9ybS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1yYWRpdXMtc206ICAgICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1cy1sZzogICAgJGlucHV0LWJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC10cmFuc2l0aW9uOiAgICAgICAgICAkaW5wdXQtdHJhbnNpdGlvbiAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1zZWxlY3QtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXJhbmdlLXZhcmlhYmxlc1xuJGZvcm0tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICAkYm94LXNoYWRvdy1pbnNldCAhZGVmYXVsdDtcblxuJGZvcm0tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGZvcm0tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIEVkZ2VcbiRmb3JtLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA3MCUpICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLXRyYW5zaXRpb246ICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tcmFuZ2UtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZpbGUtdmFyaWFibGVzXG4kZm9ybS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRmb3JtLWZpbGUtYnV0dG9uLWhvdmVyLWJnOiAgICAgICBzaGFkZS1jb2xvcigkZm9ybS1maWxlLWJ1dHRvbi1iZywgNSUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWZpbGUtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZsb2F0aW5nLXZhcmlhYmxlc1xuJGZvcm0tZmxvYXRpbmctaGVpZ2h0OiAgICAgICAgICAgIGFkZCgzLjVyZW0sICRpbnB1dC1oZWlnaHQtYm9yZGVyKSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWxpbmUtaGVpZ2h0OiAgICAgICAxLjI1ICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctcGFkZGluZy14OiAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1wYWRkaW5nLXk6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWlucHV0LXBhZGRpbmctdDogICAxLjYyNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWlucHV0LXBhZGRpbmctYjogICAuNjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGFiZWwtb3BhY2l0eTogICAgIC42NSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWxhYmVsLXRyYW5zZm9ybTogICBzY2FsZSguODUpIHRyYW5zbGF0ZVkoLS41cmVtKSB0cmFuc2xhdGVYKC4xNXJlbSkgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmxvYXRpbmctdmFyaWFibGVzXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1mZWVkYmFjay12YXJpYWJsZXNcbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRmb3JtLXRleHQtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zdHlsZTogICAgICAgICAgJGZvcm0tdGV4dC1mb250LXN0eWxlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICAkZGFuZ2VyICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAxMicgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfSc+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1mZWVkYmFjay12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoXG4gIFwidmFsaWRcIjogKFxuICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcbiAgKSxcbiAgXCJpbnZhbGlkXCI6IChcbiAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXG4gICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICApXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHppbmRleC1zdGFja1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1vZmZjYW52YXMtYmFja2Ryb3A6ICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtb2ZmY2FudmFzOiAgICAgICAgICAgICAgICAgIDEwNDUgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1NSAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB6aW5kZXgtc3RhY2tcblxuXG4vLyBOYXZzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBuYXYtdmFyaWFibGVzXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZm9udC1zaXplOiAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRuYXYtbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LWxpbmstdHJhbnNpdGlvbjogICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG5hdi12YXJpYWJsZXNcblxuXG4vLyBOYXZiYXJcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG5hdmJhci12YXJpYWJsZXNcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpICogLjUgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLW1hcmdpbi1lbmQ6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvY3VzLXdpZHRoOiAgICAgICAgJGJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci10cmFuc2l0aW9uOiAgICAgICAgIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbmF2YmFyLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLXRoZW1lLXZhcmlhYmxlc1xuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNTUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG5hdmJhci10aGVtZS12YXJpYWJsZXNcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkcm9wZG93bi12YXJpYWJsZXNcbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZHJvcGRvd24tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgJGJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIHNoYWRlLWNvbG9yKCRkcm9wZG93bi1saW5rLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgICRzcGFjZXIgKiAuMjUgIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICRkcm9wZG93bi1pdGVtLXBhZGRpbmcteCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZHJvcGRvd24tdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkcm9wZG93bi1kYXJrLXZhcmlhYmxlc1xuJGRyb3Bkb3duLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgICAgJGRyb3Bkb3duLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWRpdmlkZXItYmc6ICAgICAgICAgICRkcm9wZG93bi1kaXZpZGVyLWJnICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstYm94LXNoYWRvdzogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstY29sb3I6ICAgICAgICAgICRkcm9wZG93bi1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1ob3Zlci1jb2xvcjogICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1ob3Zlci1iZzogICAgICAgcmdiYSgkd2hpdGUsIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWFjdGl2ZS1jb2xvcjogICAkZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWFjdGl2ZS1iZzogICAgICAkZHJvcGRvd24tbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1oZWFkZXItY29sb3I6ICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGRyb3Bkb3duLWRhcmstdmFyaWFibGVzXG5cblxuLy8gUGFnaW5hdGlvblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcGFnaW5hdGlvbi12YXJpYWJsZXNcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1tYXJnaW4tc3RhcnQ6ICAgICAgICAgICAtJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBhZ2luYXRpb24tdmFyaWFibGVzXG5cblxuLy8gUGxhY2Vob2xkZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwbGFjZWhvbGRlcnNcbiRwbGFjZWhvbGRlci1vcGFjaXR5LW1heDogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJHBsYWNlaG9sZGVyLW9wYWNpdHktbWluOiAgICAgICAgICAgLjIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBsYWNlaG9sZGVyc1xuXG4vLyBDYXJkc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZC12YXJpYWJsZXNcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtc3BhY2VyLXk6ICAgICAgICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAqIC41ICFkZWZhdWx0O1xuJGNhcmQtY2FwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXggIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggKiAuNSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2FyZC12YXJpYWJsZXNcblxuLy8gQWNjb3JkaW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBhY2NvcmRpb24tdmFyaWFibGVzXG4kYWNjb3JkaW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFjY29yZGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICBzdWJ0cmFjdCgkYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMsICRhY2NvcmRpb24tYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24tcGFkZGluZy15OiAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRhY2NvcmRpb24tY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1iZzogICAgICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWJnICFkZWZhdWx0O1xuJGFjY29yZGlvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uLCBib3JkZXItcmFkaXVzIC4xNXMgZWFzZSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgIHRpbnQtY29sb3IoJGNvbXBvbmVudC1hY3RpdmUtYmcsIDkwJSkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICBzaGFkZS1jb2xvcigkcHJpbWFyeSwgMTAlKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24tZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRidG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRhY2NvcmRpb24tYnV0dG9uLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi10cmFuc2Zvcm06ICAgICAgICAgICAgICAgIHJvdGF0ZSgtMTgwZGVnKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24taWNvbjogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skYWNjb3JkaW9uLWljb24tY29sb3J9Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtaWNvbjogIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRhY2NvcmRpb24taWNvbi1hY3RpdmUtY29sb3J9Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGFjY29yZGlvbi12YXJpYWJsZXNcblxuLy8gVG9vbHRpcHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRvb2x0aXAtdmFyaWFibGVzXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIC4yNSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdG9vbHRpcC12YXJpYWJsZXNcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRvb2x0aXAtZmVlZGJhY2stdmFyaWFibGVzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRvb2x0aXAtZmVlZGJhY2stdmFyaWFibGVzXG5cblxuLy8gUG9wb3ZlcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBvcG92ZXItdmFyaWFibGVzXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgc3VidHJhY3QoJHBvcG92ZXItYm9yZGVyLXJhZGl1cywgJHBvcG92ZXItYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBzaGFkZS1jb2xvcigkcG9wb3Zlci1iZywgNiUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBvcG92ZXItdmFyaWFibGVzXG5cblxuLy8gVG9hc3RzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0b2FzdC12YXJpYWJsZXNcbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgJGJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kdG9hc3Qtc3BhY2luZzogICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdG9hc3QtdmFyaWFibGVzXG5cblxuLy8gQmFkZ2VzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBiYWRnZS12YXJpYWJsZXNcbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC43NWVtICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMzVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC42NWVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJhZGdlLXZhcmlhYmxlc1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbW9kYWwtdmFyaWFibGVzXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdCgkbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzLCAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgJGJveC1zaGFkb3ctc20gIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgJG1vZGFsLWlubmVyLXBhZGRpbmcgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBtb2RhbC12YXJpYWJsZXNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGFsZXJ0LXZhcmlhYmxlc1xuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kYWxlcnQtYmctc2NhbGU6ICAgICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXNjYWxlOiAgICAgICAgICAgIC03MCUgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3Itc2NhbGU6ICAgICAgICAgICAgIDQwJSAhZGVmYXVsdDtcbiRhbGVydC1kaXNtaXNzaWJsZS1wYWRkaW5nLXI6ICAgJGFsZXJ0LXBhZGRpbmcteCAqIDMgIWRlZmF1bHQ7IC8vIDN4IGNvdmVycyB3aWR0aCBvZiB4IHBsdXMgZGVmYXVsdCBwYWRkaW5nIG9uIGVpdGhlciBzaWRlXG4vLyBzY3NzLWRvY3MtZW5kIGFsZXJ0LXZhcmlhYmxlc1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHByb2dyZXNzLXZhcmlhYmxlc1xuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwcm9ncmVzcy12YXJpYWJsZXNcblxuXG4vLyBMaXN0IGdyb3VwXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBsaXN0LWdyb3VwLXZhcmlhYmxlc1xuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1iZy1zY2FsZTogICAgICAgICAgLTgwJSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tY29sb3Itc2NhbGU6ICAgICAgIDQwJSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGxpc3QtZ3JvdXAtdmFyaWFibGVzXG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGh1bWJuYWlsLXZhcmlhYmxlc1xuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAkYm94LXNoYWRvdy1zbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGh1bWJuYWlsLXZhcmlhYmxlc1xuXG5cbi8vIEZpZ3VyZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZpZ3VyZS12YXJpYWJsZXNcbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZpZ3VyZS12YXJpYWJsZXNcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnJlYWRjcnVtYi12YXJpYWJsZXNcbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWZsaXBwZWQ6ICAgICAgICAkYnJlYWRjcnVtYi1kaXZpZGVyICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYnJlYWRjcnVtYi12YXJpYWJsZXNcblxuLy8gQ2Fyb3VzZWxcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNhcm91c2VsLXZhcmlhYmxlc1xuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itb3BhY2l0eTogICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1vcGFjaXR5OiAgMSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLXBhZGRpbmcteTogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tc3BhY2VyOiAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9Jz48cGF0aCBkPSdNMTEuMzU0IDEuNjQ2YS41LjUgMCAwIDEgMCAuNzA4TDUuNzA3IDhsNS42NDcgNS42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtNi02YS41LjUgMCAwIDEgMC0uNzA4bDYtNmEuNS41IDAgMCAxIC43MDggMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9Jz48cGF0aCBkPSdNNC42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggNC42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuJGNhcm91c2VsLWRhcmstaW5kaWNhdG9yLWFjdGl2ZS1iZzogICRibGFjayAhZGVmYXVsdDtcbiRjYXJvdXNlbC1kYXJrLWNhcHRpb24tY29sb3I6ICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtZGFyay1jb250cm9sLWljb24tZmlsdGVyOiAgaW52ZXJ0KDEpIGdyYXlzY2FsZSgxMDApICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJvdXNlbC12YXJpYWJsZXNcblxuXG4vLyBTcGlubmVyc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgc3Bpbm5lci12YXJpYWJsZXNcbiRzcGlubmVyLXdpZHRoOiAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodDogICAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci12ZXJ0aWNhbC1hbGlnbjogIC0uMTI1ZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAgIC4yNWVtICFkZWZhdWx0O1xuJHNwaW5uZXItYW5pbWF0aW9uLXNwZWVkOiAuNzVzICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBzcGlubmVyLXZhcmlhYmxlc1xuXG5cbi8vIENsb3NlXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjbG9zZS12YXJpYWJsZXNcbiRidG4tY2xvc2Utd2lkdGg6ICAgICAgICAgICAgMWVtICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1oZWlnaHQ6ICAgICAgICAgICAkYnRuLWNsb3NlLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1wYWRkaW5nLXg6ICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtcGFkZGluZy15OiAgICAgICAgJGJ0bi1jbG9zZS1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWNvbG9yOiAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRidG4tY2xvc2UtYmc6ICAgICAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGJ0bi1jbG9zZS1jb2xvcn0nPjxwYXRoIGQ9J00uMjkzLjI5M2ExIDEgMCAwMTEuNDE0IDBMOCA2LjU4NiAxNC4yOTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMOS40MTQgOGw2LjI5MyA2LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEw4IDkuNDE0bC02LjI5MyA2LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw2LjU4NiA4IC4yOTMgMS43MDdhMSAxIDAgMDEwLTEuNDE0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtZm9jdXMtc2hhZG93OiAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1vcGFjaXR5OiAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtaG92ZXItb3BhY2l0eTogICAgLjc1ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1mb2N1cy1vcGFjaXR5OiAgICAxICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1kaXNhYmxlZC1vcGFjaXR5OiAuMjUgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXdoaXRlLWZpbHRlcjogICAgIGludmVydCgxKSBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyMDAlKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2xvc2UtdmFyaWFibGVzXG5cblxuLy8gT2ZmY2FudmFzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBvZmZjYW52YXMtdmFyaWFibGVzXG4kb2ZmY2FudmFzLXBhZGRpbmcteTogICAgICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRvZmZjYW52YXMtcGFkZGluZy14OiAgICAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ob3Jpem9udGFsLXdpZHRoOiAgICAgICAgNDAwcHggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXZlcnRpY2FsLWhlaWdodDogICAgICAgICAzMHZoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgLjNzICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10aXRsZS1saW5lLWhlaWdodDogICAgICAgJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iZy1jb2xvcjogICAgICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkbW9kYWwtY29udGVudC1jb2xvciAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAkbW9kYWwtYmFja2Ryb3AtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAkbW9kYWwtYmFja2Ryb3Atb3BhY2l0eSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgb2ZmY2FudmFzLXZhcmlhYmxlc1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiJdfQ== */"] });


/***/ }),

/***/ 5288:
/*!****************************************************************!*\
  !*** ./src/app/table-of-content/table-of-content.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOfContentComponent": () => (/* binding */ TableOfContentComponent)
/* harmony export */ });
/* harmony import */ var _assets_table_of_content_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/table-of-content.json */ 9533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _table_of_content_item_table_of_content_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-of-content-item/table-of-content-item.component */ 5263);




function TableOfContentComponent_it_table_of_content_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "it-table-of-content-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableOfContentComponent_it_table_of_content_item_2_Template_it_table_of_content_item_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const tocItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggle($event, tocItem_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tocItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tocItem", tocItem_r1);
} }
class TableOfContentComponent {
    constructor() {
        this.tableOfContent = _assets_table_of_content_json__WEBPACK_IMPORTED_MODULE_0__.tableOfContent;
    }
    toggle(event, tocItem) {
        this.tableOfContent = this.tableOfContent.map((item) => {
            const newTocItem = item;
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
    }
}
TableOfContentComponent.ɵfac = function TableOfContentComponent_Factory(t) { return new (t || TableOfContentComponent)(); };
TableOfContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableOfContentComponent, selectors: [["it-table-of-content"]], decls: 3, vars: 1, consts: [[1, "bd-sidebar", "sidebar-linklist-wrapper"], [1, "link-list-wrapper"], [3, "tocItem", "click", 4, "ngFor", "ngForOf"], [3, "tocItem", "click"]], template: function TableOfContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableOfContentComponent_it_table_of_content_item_2_Template, 1, 1, "it-table-of-content-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableOfContent);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _table_of_content_item_table_of_content_item_component__WEBPACK_IMPORTED_MODULE_1__.TableOfContentItemComponent], styles: [".bd-sidebar[_ngcontent-%COMP%] {\n  order: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n@media (min-width: 768px) {\n  .bd-sidebar[_ngcontent-%COMP%] {\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  @supports (position: sticky) {\n    .bd-sidebar[_ngcontent-%COMP%] {\n      position: sticky;\n      top: 5rem;\n      height: calc(100vh - 5rem);\n      overflow-y: auto;\n    }\n  }\n}\n@media (min-width: 768px) {\n  .bd-sidebar[_ngcontent-%COMP%] {\n    padding: 1.5rem 0;\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n  }\n}\n@media (min-width: 1200px) {\n  .bd-sidebar[_ngcontent-%COMP%] {\n    flex: 0 1 320px;\n  }\n}\n.bd-links[_ngcontent-%COMP%] {\n  padding: 0;\n}\n@media (min-width: 768px) {\n  @supports (position: sticky) {\n    .bd-links[_ngcontent-%COMP%] {\n      max-height: calc(100vh - 5rem);\n      overflow-y: auto;\n    }\n  }\n}\n@media (min-width: 768px) {\n  .bd-links[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW9mLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsUUFBQTtFQUNBLDJDQUFBO0FBSEY7QUM0REk7RUQzREo7SUFVSSwwQ0FBQTtFQVBGO0VBQ0U7SUFKSjtNQUtNLGdCQUFBO01BQ0EsU0FBQTtNQUNBLDBCQUFBO01BQ0EsZ0JBQUE7SUFFRjtFQUNGO0FBQ0Y7QUMrQ0k7RUQzREo7SUFjSSxpQkFBQTtJQUNBLDBDQUFBO0VBRUY7QUFDRjtBQ3lDSTtFRDNESjtJQW1CSSxlQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0UsVUFBQTtBQUdGO0FDZ0NJO0VEaENBO0lBSko7TUFLTSw4QkFBQTtNQUNBLGdCQUFBO0lBSUY7RUFDRjtBQUNGO0FDd0JJO0VEcENKO0lBWUkseUJBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InRhYmxlLW9mLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ2Jvb3RzdHJhcC9zY3NzL21peGlucyc7XG5cbi5iZC1zaWRlYmFyIHtcbiAgb3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIEBzdXBwb3J0cyAocG9zaXRpb246IHN0aWNreSkge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogNXJlbTtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgcGFkZGluZzogMS41cmVtIDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhsKSB7XG4gICAgZmxleDogMCAxIDMyMHB4O1xuICB9XG59XG5cbi5iZC1saW5rcyB7XG4gIHBhZGRpbmc6IDA7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIEBzdXBwb3J0cyAocG9zaXRpb246IHN0aWNreSkge1xuICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gIH1cblxuICAvLyBPdmVycmlkZSBjb2xsYXBzZSBiZWhhdmlvcnNcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5cblxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQGlmIG5vdCAkbiB7XG4gICAgQGVycm9yIFwiYnJlYWtwb2ludCBgI3skbmFtZX1gIG5vdCBmb3VuZCBpbiBgI3skYnJlYWtwb2ludHN9YFwiO1xuICB9XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiAgYnJlYWtwb2ludC1tYXgoJG5leHQpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmV4dCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 9533:
/*!******************************************!*\
  !*** ./src/assets/table-of-content.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"tableOfContent":[{"label":"Informazioni","link":"/info","links":[{"label":"Benvenuti","link":"/info/welcome"}]},{"label":"Componenti","link":"/componenti","links":[{"label":"Checkbox","link":"/componenti/checkbox"},{"label":"Progress Bar","link":"/componenti/progress-bar"},{"label":"Toggle","link":"/componenti/toggle"},{"label":"Popover","link":"/componenti/popover"},{"label":"Radio button","link":"/componenti/radio"},{"label":"Tooltip","link":"/componenti/tooltip"},{"label":"Button","link":"/componenti/button"},{"label":"Badge","link":"/componenti/badge"},{"label":"Dropdown","link":"/componenti/dropdown"},{"label":"Breadcrumb","link":"/componenti/breadcrumb"},{"label":"Tabs","link":"/componenti/tabs"},{"label":"Collapse","link":"/componenti/collapse"},{"label":"Form Input","link":"/componenti/form-input"}]}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map