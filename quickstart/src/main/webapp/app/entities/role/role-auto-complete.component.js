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
//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-angular:src/main/webapp/app/entities/entity-auto-complete.component.ts.e.vm
//
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var message_service_1 = require('../../service/message.service');
var role_service_1 = require('./role.service');
// Resource: http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
exports.ROLE_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RoleCompleteComponent; }),
    multi: true
};
var RoleCompleteComponent = (function () {
    function RoleCompleteComponent(roleService, messageService) {
        this.roleService = roleService;
        this.messageService = messageService;
        this.disabled = false;
        //The internal data model
        this._value = null;
        this.suggestions = [];
        //Placeholders for the callbacks
        this._onTouchedCallback = function () { };
        this._onChangeCallback = function () { };
    }
    Object.defineProperty(RoleCompleteComponent.prototype, "value", {
        get: function () { return this._value; },
        //set accessor including call the onchange callback
        set: function (v) {
            if (this._value != null && (v == null || v == "")) {
                this.select(null);
            }
            // nop, see writeValue and select method
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    RoleCompleteComponent.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    RoleCompleteComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    RoleCompleteComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    RoleCompleteComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    //From ControlValueAccessor interface
    RoleCompleteComponent.prototype.setDisabledState = function (isDisabled) {
    };
    RoleCompleteComponent.prototype.complete = function (event) {
        var _this = this;
        this.roleService.complete(event.query).
            subscribe(function (results) { return _this.suggestions = results; }, function (error) { return _this.messageService.error(error, 'Error during auto-complete'); });
    };
    RoleCompleteComponent.prototype.select = function (v) {
        this._value = v;
        this._onChangeCallback(v);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RoleCompleteComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RoleCompleteComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RoleCompleteComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RoleCompleteComponent.prototype, "value", null);
    RoleCompleteComponent = __decorate([
        core_1.Component({
            template: "\n        <p-autoComplete [(ngModel)]=\"value\" [disabled]=\"disabled\" placeholder=\"Hint: type to search...\" field=\"roleName\" [suggestions]=\"suggestions\" (completeMethod)=\"complete($event)\" (onSelect)=\"select($event)\">\n            <template let-role>\n                <role-line [role]=\"role\"></role-line>\n            </template>\n        </p-autoComplete>\n\t",
            selector: 'role-auto-complete',
            providers: [exports.ROLE_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [role_service_1.RoleService, message_service_1.MessageService])
    ], RoleCompleteComponent);
    return RoleCompleteComponent;
}());
exports.RoleCompleteComponent = RoleCompleteComponent;
//# sourceMappingURL=role-auto-complete.component.js.map