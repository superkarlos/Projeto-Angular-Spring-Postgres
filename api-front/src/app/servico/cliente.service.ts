import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  //metodo para listar todos os clientes
  selecionarTodos(): Observable<Cliente[]> { 
    return this.http.get<Cliente[]>('http://localhost:8080/api/cliente/listar') }
  cadastrar(data: Cliente): Observable<Cliente> {
     return this.http.post<Cliente>('http://localhost:8080/api/cliente/cadastrar', data) }
  alterar( cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>('http://localhost:8080/api/cliente/atualizar', cliente);
  }
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/cliente/deletar/${id}`);
  }
}