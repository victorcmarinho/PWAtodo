import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibraryService = /** @class */ (function () {
    function LibraryService() {
    }
    LibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ LibraryService.ngInjectableDef = defineInjectable({ factory: function LibraryService_Factory() { return new LibraryService(); }, token: LibraryService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { LibraryService, LibraryComponent, LibraryModule };

//# sourceMappingURL=library.js.map