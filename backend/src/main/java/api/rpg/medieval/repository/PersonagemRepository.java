package api.rpg.medieval.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import api.rpg.medieval.model.Personagem;

public interface PersonagemRepository extends JpaRepository<Personagem, Integer> {

}
