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
// Template pack-angular:src/main/webapp/app/entities/entity-line.component.ts.e.vm
//
var core_1 = require('@angular/core');
var book_1 = require('./book');
var BookLineComponent = (function () {
    function BookLineComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookLineComponent.prototype, "book", void 0);
    BookLineComponent = __decorate([
        core_1.Component({
            template: "\n        {{ book.title }} \t",
            selector: 'book-line',
        }), 
        __metadata('design:paramtypes', [])
    ], BookLineComponent);
    return BookLineComponent;
}());
exports.BookLineComponent = BookLineComponent;
//# sourceMappingURL=book-line.component.js.map