"use strict";
var PageResponse = (function () {
    function PageResponse(totalPages, totalElements, content) {
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.content = content;
    }
    // remove the passed element from the content array.
    PageResponse.prototype.remove = function (element) {
        var indexToRemove = this.content.indexOf(element);
        this.content.splice(indexToRemove, 1);
        this.totalElements = this.totalElements - 1;
    };
    return PageResponse;
}());
exports.PageResponse = PageResponse;
var PageRequestByExample = (function () {
    function PageRequestByExample(example, lazyLoadEvent) {
        this.example = example;
        this.lazyLoadEvent = lazyLoadEvent;
    }
    return PageRequestByExample;
}());
exports.PageRequestByExample = PageRequestByExample;
//# sourceMappingURL=paging.js.map