"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var author_list_component_1 = require('./entities/author/author-list.component');
var author_detail_component_1 = require('./entities/author/author-detail.component');
var book_list_component_1 = require('./entities/book/book-list.component');
var book_detail_component_1 = require('./entities/book/book-detail.component');
var project_list_component_1 = require('./entities/project/project-list.component');
var project_detail_component_1 = require('./entities/project/project-detail.component');
var role_list_component_1 = require('./entities/role/role-list.component');
var role_detail_component_1 = require('./entities/role/role-detail.component');
var useCase1_list_component_1 = require('./entities/useCase1/useCase1-list.component');
var useCase1_detail_component_1 = require('./entities/useCase1/useCase1-detail.component');
var useCase2_list_component_1 = require('./entities/useCase2/useCase2-list.component');
var useCase2_detail_component_1 = require('./entities/useCase2/useCase2-detail.component');
var useCase3_list_component_1 = require('./entities/useCase3/useCase3-list.component');
var useCase3_detail_component_1 = require('./entities/useCase3/useCase3-detail.component');
var user_list_component_1 = require('./entities/user/user-list.component');
var user_detail_component_1 = require('./entities/user/user-detail.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'author-list', component: author_list_component_1.AuthorListComponent },
    { path: 'author/:id', component: author_detail_component_1.AuthorDetailComponent },
    { path: 'book-list', component: book_list_component_1.BookListComponent },
    { path: 'book/:id', component: book_detail_component_1.BookDetailComponent },
    { path: 'project-list', component: project_list_component_1.ProjectListComponent },
    { path: 'project/:id', component: project_detail_component_1.ProjectDetailComponent },
    { path: 'role-list', component: role_list_component_1.RoleListComponent },
    { path: 'role/:id', component: role_detail_component_1.RoleDetailComponent },
    { path: 'useCase1-list', component: useCase1_list_component_1.UseCase1ListComponent },
    { path: 'useCase1/:id', component: useCase1_detail_component_1.UseCase1DetailComponent },
    { path: 'useCase2-list', component: useCase2_list_component_1.UseCase2ListComponent },
    { path: 'useCase2/:id', component: useCase2_detail_component_1.UseCase2DetailComponent },
    { path: 'useCase3-list', component: useCase3_list_component_1.UseCase3ListComponent },
    { path: 'useCase3/:id', component: useCase3_detail_component_1.UseCase3DetailComponent },
    { path: 'user-list', component: user_list_component_1.UserListComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map