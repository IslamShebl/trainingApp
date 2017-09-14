import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>> {

        console.log("Interceptor Intercept method///;",req);
        const changeReq=req.clone({headers:req.headers.set('Authorization','token')})
        console.log(changeReq);
        return next.handle(changeReq);
        /*.do(evt=>{
            if(evt instanceof HttpResponse){
                console.log('--------->status',evt.status);
                console.log('--------->filter',req.params.get('filter'));
            }
        });*/
    }
}