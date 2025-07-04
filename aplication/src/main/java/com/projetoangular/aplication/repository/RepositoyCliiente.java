package com.projetoangular.aplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetoangular.aplication.model.Cliente;

@Repository
public interface RepositoyCliiente extends JpaRepository<Cliente, Long>{

    
} 
