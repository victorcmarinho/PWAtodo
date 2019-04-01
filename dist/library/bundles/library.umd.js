(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('library', ['exports', '@angular/core'], factory) :
    (factory((global.library = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibraryService = /** @class */ (function () {
        function LibraryService() {
        }
        LibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ LibraryService.ngInjectableDef = i0.defineInjectable({ factory: function LibraryService_Factory() { return new LibraryService(); }, token: LibraryService, providedIn: "root" });
        return LibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibraryComponent = /** @class */ (function () {
        function LibraryComponent() {
        }
        /**
         * @return {?}
         */
        LibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lb-library',
                        template: "\n    <p>\n      library works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        LibraryComponent.ctorParameters = function () { return []; };
        return LibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibraryModule = /** @class */ (function () {
        function LibraryModule() {
        }
        LibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LibraryComponent],
                        imports: [],
                        exports: [LibraryComponent]
                    },] }
        ];
        return LibraryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LibraryService = LibraryService;
    exports.LibraryComponent = LibraryComponent;
    exports.LibraryModule = LibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=library.umd.js.map