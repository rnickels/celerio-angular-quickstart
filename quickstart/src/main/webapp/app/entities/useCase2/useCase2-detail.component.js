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
// Template pack-angular:src/main/webapp/app/entities/entity-detail.component.ts.e.vm
//
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var message_service_1 = require('../../service/message.service');
var useCase2_1 = require('./useCase2');
var useCase2_service_1 = require('./useCase2.service');
var UseCase2DetailComponent = (function () {
    function UseCase2DetailComponent(route, router, messageService, useCase2Service) {
        this.route = route;
        this.router = router;
        this.messageService = messageService;
        this.useCase2Service = useCase2Service;
        this.showUseCase3s = true;
        this.sub = false;
        this.onSaveClicked = new core_1.EventEmitter();
        this.onCancelClicked = new core_1.EventEmitter();
    }
    UseCase2DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.sub) {
            return;
        }
        this.params_subscription = this.route.params.subscribe(function (params) {
            var id = params['id'];
            console.log('ngOnInit for useCase2-detail ' + id);
            if (id === 'new') {
                _this.useCase2 = new useCase2_1.UseCase2();
            }
            else {
                _this.useCase2Service.getUseCase2(id)
                    .subscribe(function (useCase2) {
                    _this.useCase2 = useCase2;
                }, function (error) { return _this.messageService.error('ngOnInit error', error); });
            }
        });
    };
    UseCase2DetailComponent.prototype.ngOnDestroy = function () {
        if (!this.sub) {
            this.params_subscription.unsubscribe();
        }
    };
    UseCase2DetailComponent.prototype.onSave = function () {
        var _this = this;
        this.useCase2Service.update(this.useCase2).
            subscribe(function (useCase2) {
            _this.useCase2 = useCase2;
            if (_this.sub) {
                _this.onSaveClicked.emit(_this.useCase2);
                _this.messageService.info('Saved OK and msg emitted', 'Angular Rocks!');
            }
            else {
                _this.messageService.info('Saved OK', 'Angular Rocks!');
            }
        }, function (error) { return _this.messageService.error('Could not save', error); });
    };
    UseCase2DetailComponent.prototype.onCancel = function () {
        if (this.sub) {
            this.onCancelClicked.emit("cancel");
            this.messageService.info('Cancel clicked and msg emitted', 'Angular Rocks!');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], UseCase2DetailComponent.prototype, "sub", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UseCase2DetailComponent.prototype, "onSaveClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UseCase2DetailComponent.prototype, "onCancelClicked", void 0);
    UseCase2DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'useCase2-detail.component.html',
            selector: 'useCase2-detail',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, message_service_1.MessageService, useCase2_service_1.UseCase2Service])
    ], UseCase2DetailComponent);
    return UseCase2DetailComponent;
}());
exports.UseCase2DetailComponent = UseCase2DetailComponent;
//# sourceMappingURL=useCase2-detail.component.js.map