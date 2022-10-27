import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private tokenServ: TokenService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenServ.getToken();
    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    } else (">:(")
    return next.handle(intReq);
  }

}

export const interceptProvider = [{
  provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
}];
