//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-angular:src/main/webapp/app/app.routes.ts.p.vm
//
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { AuthorListComponent } from './entities/author/author-list.component';
import { AuthorDetailComponent } from './entities/author/author-detail.component';

import { BookListComponent } from './entities/book/book-list.component';
import { BookDetailComponent } from './entities/book/book-detail.component';

import { ProjectListComponent } from './entities/project/project-list.component';
import { ProjectDetailComponent } from './entities/project/project-detail.component';

import { RoleListComponent } from './entities/role/role-list.component';
import { RoleDetailComponent } from './entities/role/role-detail.component';

import { UseCase1ListComponent } from './entities/useCase1/useCase1-list.component';
import { UseCase1DetailComponent } from './entities/useCase1/useCase1-detail.component';

import { UseCase2ListComponent } from './entities/useCase2/useCase2-list.component';
import { UseCase2DetailComponent } from './entities/useCase2/useCase2-detail.component';

import { UseCase3ListComponent } from './entities/useCase3/useCase3-list.component';
import { UseCase3DetailComponent } from './entities/useCase3/useCase3-detail.component';

import { UserListComponent } from './entities/user/user-list.component';
import { UserDetailComponent } from './entities/user/user-detail.component';

export const routes: Routes = [
    { path : '',  component: HomeComponent }
    ,
    {path: 'author-list', component: AuthorListComponent },
    {path: 'author/:id', component: AuthorDetailComponent }
    ,
    {path: 'book-list', component: BookListComponent },
    {path: 'book/:id', component: BookDetailComponent }
    ,
    {path: 'project-list', component: ProjectListComponent },
    {path: 'project/:id', component: ProjectDetailComponent }
    ,
    {path: 'role-list', component: RoleListComponent },
    {path: 'role/:id', component: RoleDetailComponent }
    ,
    {path: 'useCase1-list', component: UseCase1ListComponent },
    {path: 'useCase1/:id', component: UseCase1DetailComponent }
    ,
    {path: 'useCase2-list', component: UseCase2ListComponent },
    {path: 'useCase2/:id', component: UseCase2DetailComponent }
    ,
    {path: 'useCase3-list', component: UseCase3ListComponent },
    {path: 'useCase3/:id', component: UseCase3DetailComponent }
    ,
    {path: 'user-list', component: UserListComponent },
    {path: 'user/:id', component: UserDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);