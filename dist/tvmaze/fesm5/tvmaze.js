import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeService = /** @class */ (function () {
    function TvmazeService() {
    }
    TvmazeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TvmazeService.ctorParameters = function () { return []; };
    /** @nocollapse */ TvmazeService.ngInjectableDef = defineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(); }, token: TvmazeService, providedIn: "root" });
    return TvmazeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeComponent = /** @class */ (function () {
    function TvmazeComponent() {
    }
    /**
     * @return {?}
     */
    TvmazeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TvmazeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tm-tvmaze',
                    template: "\n    <p>\n      tvmaze works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    TvmazeComponent.ctorParameters = function () { return []; };
    return TvmazeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TvmazeModule = /** @class */ (function () {
    function TvmazeModule() {
    }
    TvmazeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TvmazeComponent],
                    imports: [],
                    exports: [TvmazeComponent]
                },] }
    ];
    return TvmazeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TvmazeService, TvmazeComponent, TvmazeModule };

//# sourceMappingURL=tvmaze.js.map