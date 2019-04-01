(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tvmaze', ['exports', '@angular/core'], factory) :
    (factory((global.tvmaze = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TvmazeService = /** @class */ (function () {
        function TvmazeService() {
        }
        TvmazeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TvmazeService.ctorParameters = function () { return []; };
        /** @nocollapse */ TvmazeService.ngInjectableDef = i0.defineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(); }, token: TvmazeService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.TvmazeService = TvmazeService;
    exports.TvmazeComponent = TvmazeComponent;
    exports.TvmazeModule = TvmazeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=tvmaze.umd.js.map