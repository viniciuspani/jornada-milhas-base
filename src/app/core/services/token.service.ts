import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

   salvarToken(token: string){
    return localStorage.setItem(KEY, token);
   }

   renoveToken(){
    localStorage.removeItem(KEY);
   }

   retornarToken(){
    return localStorage.getItem(KEY) ?? "";
   }

   possuiToken(){
    return !! this.retornarToken();
   }

  //  salvarToken(token: string): Método responsável por armazenar o token no localStorage. Ele recebe o token como parâmetro e utiliza o método localStorage.setItem para salvá-lo.

  //  excluirToken(): Método que remove o token do localStorage, utilizando o método localStorage.removeItem.

  //  retornarToken(): Método para obter o token armazenado no localStorage. Ele utiliza localStorage.getItem para retornar o token ou uma string vazia caso não exista um token armazenado.

  //  possuiToken(): Método que verifica se existe um token no localStorage utilizando this.retornarToken(). Retorna true caso exista um token e false caso contrário.

}
