import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ IMPORTANTE
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule,FormsModule], // ⬅️ NECESSÁRIO para usar *ngIf
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  btnCadastro: boolean = false;
  //obejto de cliente
  cliente = new Cliente(); // funciona!

  //json de clientes
  clientes : Cliente[] =[];

  tabela:boolean = true; //variável para exibir a tabela de clientes

  //método para exibir o botão de cadastro
  constructor(private service: ClienteService) {
    
  }
  selecionarTodos():void {
    this.service.selecionarTodos()
    .subscribe(
      retorno =>this.clientes = retorno
    );
  }

  cadastrar():void {
    this.service.cadastrar(this.cliente).subscribe(
      retorno =>{ this.clientes.push(retorno);
        this.cliente = new Cliente(); // Limpa o formulário após o cadastro
        this.btnCadastro = false; // Volta para o modo de cadastro
         this.tabela = true;
        alert("Cliente cadastrado com sucesso!");
      }
    )
  }

   aleterar():void {
    this.service.alterar(this.cliente).subscribe(
      retorno =>{ 
        let index = this.clientes.findIndex(c => c.id === retorno.id);
         this.clientes[index] = retorno; // Limpa o formulário após o cadastro
         this.btnCadastro = false; // Volta para o modo de cadastro
         this.tabela = true;
        alert("Cliente alterado com sucesso!");
      }
       // Limpa o formulário após a alteração
    )
    this.cliente = new Cliente();
  }
  
  selecionarCliente (id:number):void{
     // Atribui o cliente selecionado ao objeto cliente
     this.cliente = this.clientes[id];
     this.btnCadastro = true; // Muda para o modo de edição
     this.tabela = false; // Esconde a tabela
  }
  deletar():void {
    this.service.deletar(this.cliente.id).subscribe(
      retorno => {
        // Remove o cliente da lista
        this.clientes = this.clientes.filter(c => c.id !== this.cliente.id);
        this.cliente = new Cliente(); // Limpa o formulário após a exclusão
        this.btnCadastro = false; // Volta para o modo de cadastro
        this.tabela = true; // Exibe a tabela novamente
        alert("Cliente excluído com sucesso!");
      }
    )

   // cancelar
  }
   cancancelar():void {
    this.cliente = new Cliente(); // Limpa o formulário
    this.btnCadastro = false; // Volta para o modo de cadastro
    this.tabela = true; // Exibe a tabela novamente
   }
  ngOnInit(): void {  
    this.selecionarTodos();
  }
}
