import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class HttpInspectorService implements HttpInterceptor {

    constructor( @Inject(PLATFORM_ID) public platformId) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token='ADD_YOUR_YELP_TOKEN'; 
        if (token) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                  'Authorization': 'Bearer ' + token,
                //   'Access-Control-Allow-Credentials': 'true',
                //   'Access-Control-Allow-Origin':'https://api.yelp.com',
                })
              });

            // send the newly created request
            return next.handle(authReq) as any;
           
        } else {

            // send the newly created request
            return next.handle(req) as any;
        }
    }

}
