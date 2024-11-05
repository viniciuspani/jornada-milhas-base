import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PessoaUsuaria } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }

  buscarCadastro(token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders( { "Authorization ": `Bearer ${token}`});
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro/perfil`, {headers});
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria, token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders( { "Authorization ": `Bearer ${token}`});
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro/perfil`, pessoaUsuaria, {headers});
  }

}
