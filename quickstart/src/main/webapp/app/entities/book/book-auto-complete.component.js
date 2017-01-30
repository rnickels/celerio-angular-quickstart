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
var book_service_1 = require('./book.service');
// Resource: http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
exports.BOOK_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return BookCompleteComponent; }),
    multi: true
};
var BookCompleteComponent = (function () {
    function BookCompleteComponent(bookService, messageService) {
        this.bookService = bookService;
        this.messageService = messageService;
        this.disabled = false;
        //The internal data model
        this._value = null;
        this.suggestions = [];
        //Placeholders for the callbacks
        this._onTouchedCallback = function () { };
        this._onChangeCallback = function () { };
    }
    Object.defineProperty(BookCompleteComponent.prototype, "value", {
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
    BookCompleteComponent.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    BookCompleteComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    //From ControlValueAccessor interface
    BookCompleteComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    BookCompleteComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    //From ControlValueAccessor interface
    BookCompleteComponent.prototype.setDisabledState = function (isDisabled) {
    };
    BookCompleteComponent.prototype.complete = function (event) {
        var _this = this;
        this.bookService.complete(event.query).
            subscribe(function (results) { return _this.suggestions = results; }, function (error) { return _this.messageService.error(error, 'Error during auto-complete'); });
    };
    BookCompleteComponent.prototype.select = function (v) {
        this._value = v;
        this._onChangeCallback(v);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BookCompleteComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BookCompleteComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BookCompleteComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BookCompleteComponent.prototype, "value", null);
    BookCompleteComponent = __decorate([
        core_1.Component({
            template: "\n        <p-autoComplete [(ngModel)]=\"value\" [disabled]=\"disabled\" placeholder=\"Hint: type to search...\" field=\"title\" [suggestions]=\"suggestions\" (completeMethod)=\"complete($event)\" (onSelect)=\"select($event)\">\n            <template let-book>\n                <book-line [book]=\"book\"></book-line>\n            </template>\n        </p-autoComplete>\n\t",
            selector: 'book-auto-complete',
            providers: [exports.BOOK_AUTO_COMPLETE_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, message_service_1.MessageService])
    ], BookCompleteComponent);
    return BookCompleteComponent;
}());
exports.BookCompleteComponent = BookCompleteComponent;
//# sourceMappingURL=book-auto-complete.component.js.map