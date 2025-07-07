export class Cliente {
  id: number ;
  nome: string = '';
  email: string = '';
  telefone: string = '';

  constructor(id?: number, nome?: string, email?: string, telefone?: string) {
    this.id = id ?? 0;
    this.nome = nome ?? '';
    this.email = email ?? '';
    this.telefone = telefone ?? '';
  }
}
