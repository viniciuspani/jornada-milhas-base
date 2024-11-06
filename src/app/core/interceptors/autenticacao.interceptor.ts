import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(
    private tokenService : TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.retornarToken();
        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        })
        return next.handle(request);
    }
  }

  // Outra forma de fazer o metodo INTERCEPT
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const token = this.tokenService.getToken();
  //   const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
  //   return next.handle(authReq);
  // }
