import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibraryService {
    constructor() { }
}
LibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LibraryService.ctorParameters = () => [];
/** @nocollapse */ LibraryService.ngInjectableDef = defineInjectable({ factory: function LibraryService_Factory() { return new LibraryService(); }, token: LibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lb-library',
                template: `
    <p>
      library works!
    </p>
  `
            }] }
];
/** @nocollapse */
LibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibraryModule {
}
LibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LibraryComponent],
                imports: [],
                exports: [LibraryComponent]
            },] }
];

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