import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeService {
    constructor() { }
}
TvmazeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TvmazeService.ctorParameters = () => [];
/** @nocollapse */ TvmazeService.ngInjectableDef = defineInjectable({ factory: function TvmazeService_Factory() { return new TvmazeService(); }, token: TvmazeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TvmazeComponent.decorators = [
    { type: Component, args: [{
                selector: 'tm-tvmaze',
                template: `
    <p>
      tvmaze works!
    </p>
  `
            }] }
];
/** @nocollapse */
TvmazeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TvmazeModule {
}
TvmazeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TvmazeComponent],
                imports: [],
                exports: [TvmazeComponent]
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

export { TvmazeService, TvmazeComponent, TvmazeModule };

//# sourceMappingURL=tvmaze.js.map