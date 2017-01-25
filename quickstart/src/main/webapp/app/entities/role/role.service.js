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
// Template pack-angular:src/main/webapp/app/entities/entity.service.ts.e.vm
//
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var message_service_1 = require('../../service/message.service');
var paging_1 = require('../../support/paging');
var RoleService = (function () {
    function RoleService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.options = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
    }
    /**
     * Get a Role by id.
     */
    RoleService.prototype.getRole = function (id) {
        return this.http.get('/api/roles/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Update the passed role.
     */
    RoleService.prototype.update = function (role) {
        var body = JSON.stringify(role);
        return this.http.put('/api/roles/', body, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Load a page (for paginated datatable) of Role using the passed
     * role as an example for the search by example facility.
     */
    RoleService.prototype.getPage = function (role, event) {
        var req = new paging_1.PageRequestByExample(role, event);
        var body = JSON.stringify(req);
        return this.http.post('/api/roles/page', body, this.options)
            .map(function (response) {
            var pr = response.json();
            return new paging_1.PageResponse(pr.totalPages, pr.totalElements, pr.content);
        })
            .catch(this.handleError);
    };
    /**
     * Performs a search by example on 1 attribute (defined on server side) and returns at most 10 results.
     * Used by RoleCompleteComponent.
     */
    RoleService.prototype.complete = function (query) {
        var body = JSON.stringify({ 'query': query, 'maxResults': 10 });
        return this.http.post('/api/roles/complete', body, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Delete an Role by id.
     */
    RoleService.prototype.delete = function (id) {
        return this.http.delete('/api/roles/' + id).catch(this.handleError);
    };
    // sample method from angular doc
    RoleService.prototype.handleError = function (error) {
        // TODO: seems we cannot use messageService from here...
        var errMsg = (error.message) ? error.message :
            error.status ? "Status: " + error.status + " - Text: " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    RoleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, message_service_1.MessageService])
    ], RoleService);
    return RoleService;
}());
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map