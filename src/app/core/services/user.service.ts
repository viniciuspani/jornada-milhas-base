import { PessoaUsuaria } from './../types/type';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';

import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSbject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
   }

   decodificarJWT(){
    const token = this.tokenService.retornarToken();
    const user = jwtDecode(token) as PessoaUsuaria;
    this.userSbject.next(user);
  }

  retonarUser(){
    return this.userSbject.asObservable();
  }

  salvarToken(token: string){
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout(){
    this.tokenService.renoveToken();
    this.userSbject.next(null);
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

  // private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);: Declaração de uma instância de BehaviorSubject que armazenará as informações do usuário logado ou null caso não haja usuário logado. Um BehaviorSubject é um tipo de Subject que emite o último valor emitido e os novos valores assim que um novo observador se inscreve.

  // constructor(private tokenService: TokenService) { ... }: O construtor do UserService recebe uma instância do TokenService. Caso exista um token no localStorage, chama o método decodificarJWT() para decodificar o token e atualizar o userSubject.

  // private decodificarJWT() { ... }: Método privado que decodifica o token JWT utilizando a biblioteca jwt-decode. A informação do usuário é extraída do token e armazenada no userSubject usando o método next().

  // retornarUser() { ... }: Método que retorna um Observable do tipo PessoaUsuaria ou null, permitindo que outros componentes possam se inscrever e receber atualizações quando o usuário é logado ou deslogado.

  // salvarToken(token: string) { ... }: Método responsável por salvar o token no localStorage utilizando o método salvarToken() do TokenService e decodificar o token através do método decodificarJWT().

  // logout() { ... }: Método que realiza o logout do usuário. Exclui o token do localStorage usando o método excluirToken() do TokenService e emite um valor null no userSubject, indicando que não há usuário logado.

  // estaLogado() { ... }: Método que verifica se o usuário está logado. Ele utiliza o método possuiToken() do TokenService para verificar se existe um token no localStorage. Retorna true se o usuário estiver logado, caso contrário, retorna false.


}
