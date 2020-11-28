import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { EMPTY, Observable } from 'rxjs';
import { config } from '../configuration/config';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {
    }

    NotLoggedIn: boolean = false;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("http-request: ", req);

        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });

        console.log("http-request updated: ", req);

        //--------------------------------------

        // req = req.clone({ headers: req.headers.delete('Content-Type','application/json') });

        //---------------------------------------

        // const token: string = authService.Token; 
        // if (token) {
        //     req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        // }

        //---------------------------------------

        // const started = Date.now();

        // return next.handle(req)
        //     .do(event => {
        //         console.log(event);
        //         const elapsed = Date.now() - started;
        //         console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        //         if (event instanceof HttpResponse) {
        //             console.log(`Response Received`);
        //         };
        //     });

        //---------------------------------------

        // return next.handle(req)
        // .map(resp => {

        //     const myBody = [{ 'id': '1',
        //                       'name': 'TekTutorialsHub',
        //                       'html_url': 'www.tektutorialshub.com',
        //                       'description': 'description' 
        //                     }];

        //     // on Response
        //     if (resp instanceof HttpResponse) {
        //         console.log(resp);
        //         console.log(resp.body);
        //         resp = resp.clone<any>({ body: myBody});
        //         return resp;
        //     }
        // });

        //---------------------------------------

        // const token: string = 'invald token';
        // req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });

        // return next.handle(req)
        //     .map(resp => {
        //         // on Response
        //         if (resp instanceof HttpResponse) {
        //             // Do whatever you want with the response.
        //             return resp;
        //         }
        //     }).catch(err => {
        //         // onError
        //         console.log(err);
        //         if (err instanceof HttpErrorResponse) {
        //             console.log(err.status);
        //             console.log(err.statusText);
        //             if (err.status === 401) {
        //                 // redirect the user to login page
        //                 // 401 unauthorised user
        //             }
        //         }
        //         return Observable.of(err);
        //     });

        //---------------------------------------

        // if (this.NotLoggedIn) {
        //     return EMPTY;
        //   }

        //---------------------------------------

        const newReq = req.clone({
            url: config.baseUrl + req.url
        });
        console.log("http-request updated again: ", newReq);
        return next.handle(newReq);

        // return next.handle(req);
    }
}