"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// Resource: http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
var EmailValidator = (function () {
    function EmailValidator() {
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    EmailValidator.prototype.validate = function (c) {
        return c.value == null || c.value == "" || this.EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    EmailValidator = __decorate([
        core_1.Directive({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return EmailValidator; }), multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailValidator);
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email.validator.js.map