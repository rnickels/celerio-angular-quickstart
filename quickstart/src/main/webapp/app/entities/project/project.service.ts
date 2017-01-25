//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-angular:src/main/webapp/app/entities/entity.service.ts.e.vm
//
import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { LazyLoadEvent } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../service/message.service';
import { PageResponse, PageRequestByExample } from '../../support/paging';
import { Project } from './project';

@Injectable()
export class ProjectService {

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http, private messageService : MessageService) {}

    /**
     * Get a Project by id.
     */
    getProject(id : any) : Observable<Project> {
        return this.http.get('/api/projects/' + id)
            .map(response => <Project> response.json())
            .catch(this.handleError);
    }

    /**
     * Update the passed project.
     */
    update(project : Project) : Observable<Project> {
        let body = JSON.stringify(project);

        return this.http.put('/api/projects/', body, this.options)
            .map(response => <Project> response.json())
            .catch(this.handleError);
    }

    /**
     * Load a page (for paginated datatable) of Project using the passed
     * project as an example for the search by example facility.
     */
    getPage(project : Project, event : LazyLoadEvent) : Observable<PageResponse<Project>> {
        let req = new PageRequestByExample(project, event);
        let body = JSON.stringify(req);

        return this.http.post('/api/projects/page', body, this.options)
            .map(response => {
                let pr = <PageResponse<Project>> response.json();
                return new PageResponse<Project>(pr.totalPages, pr.totalElements, pr.content);
            })
            .catch(this.handleError);
    }

    /**
     * Performs a search by example on 1 attribute (defined on server side) and returns at most 10 results.
     * Used by ProjectCompleteComponent.
     */
    complete(query : string) : Observable<Project[]> {
        let body = JSON.stringify({'query': query, 'maxResults': 10});
        return this.http.post('/api/projects/complete', body, this.options)
            .map(response => <Project[]> response.json())
            .catch(this.handleError);
    }

    /**
     * Delete an Project by id.
     */
    delete(id : any) {
        return this.http.delete('/api/projects/' + id).catch(this.handleError);
    }

    // sample method from angular doc
    private handleError (error: any) {
        // TODO: seems we cannot use messageService from here...
        let errMsg = (error.message) ? error.message :
        error.status ? `Status: ${error.status} - Text: ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
