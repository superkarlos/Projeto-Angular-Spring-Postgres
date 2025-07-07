package com.projetoangular.aplication.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoangular.aplication.model.Cliente;
import com.projetoangular.aplication.services.ServicesCliente;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/cliente")
public class ControllerCliente {

    // Aqui você pode adicionar métodos para manipular os dados do cliente
    // Exemplo: @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
   @Autowired
   private ServicesCliente services;


    @GetMapping("/listar")
    public List<Cliente> getMethhall() {
        return services.buscarTodos();
    }

    @PostMapping("/cadastrar")
    public Cliente cadastrar(@RequestBody Cliente cliente) {
        // Aqui você pode chamar o serviço para cadastrar o cliente
        // Exemplo: services.cadastrar(new Cliente(nome, email, telefone));
       
       
     try {
        return services.cadastrar(cliente); 
     } catch (Exception e) {
       e.printStackTrace();
        return null;
     }
    }
    
    @PutMapping("/atualizar")
    public Cliente putcliente(@RequestBody Cliente data){
        return services.atualizar(data);
    }
    
    @DeleteMapping("/deletar/{id}")
    public void dell(@PathVariable Long id){
           try {
            services.deletar(id);
           } catch (Exception e) {
            e.printStackTrace();
           }
          
    }
    
}
