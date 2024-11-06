import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return window.confirm('Você é um administrador?');
  }
}

// Aqui está um exemplo simples de como pode parecer uma guarda de rota criada através da abordagem de criação de classes
