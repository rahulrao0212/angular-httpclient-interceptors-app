import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Repo } from '../model/repo.model';
import { Filter } from '../model/filter.model';

@Injectable()
export class GitHubService {

    constructor(private http: HttpClient) {
    }

    getRepos(filter: Filter): Observable<any> {

        const reFilter = new HttpParams()
            .set('page', filter.pageNo)
            .set('sort', filter.sortOn);

        return this.http.get<Repo[]>('users/' + filter.userName + '/repos', { params: reFilter });
    }

}