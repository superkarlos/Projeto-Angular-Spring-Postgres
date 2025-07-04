package com.projetoangular.aplication.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetoangular.aplication.model.Cliente;
import com.projetoangular.aplication.repository.RepositoyCliiente;

@Service
public class ServicesCliente {
    @Autowired private RepositoyCliiente repository;

    public Cliente cadastrar( Cliente data){
        return repository.save(data);
    }
    public Cliente atualizar(Cliente data){
        return repository.save(data);
    }
    public void deletar(Long id) throws Exception{
        Optional<Cliente> data = repository.findById(id);
        if (data.isEmpty()) {
            throw new Exception("Cleinte não encontrado");
        }
        repository.deleteById(id);
    }
    public Cliente buscarPorId(Long id){
        return repository.findById(id).orElse(null);    
    }
    public List<Cliente> buscarTodos(){
        return repository.findAll();
    }
}
