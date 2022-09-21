package api.rpg.medieval.controller.personagem;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.rpg.medieval.model.personagem.Personagem;
import api.rpg.medieval.repository.PersonagemRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api")
@Api(value = "Medieval API Rest")
@CrossOrigin(origins = "*")
public class PersonagemController {

	@Autowired
	PersonagemRepository personagemRepository;

	@GetMapping("/personagens")
	@ApiOperation(value = "Retorna lista de personagens")
	public List<Personagem> listar() {
		return personagemRepository.findAll();

	}

	@ApiOperation(value = "Retorna personagem por ID")
	@GetMapping("/personagens/{id}")
	public Optional<Personagem> listaUmPersonagem(@PathVariable int id) {

		return personagemRepository.findById(id);

	}

	@ApiOperation(value = "Cria um personagem")
	@PostMapping("/personagens")
	public Personagem adicionar(@RequestBody Personagem personagem) {

		return personagemRepository.save(personagem);

	}

	@ApiOperation(value = "Deleta personagem")
	@DeleteMapping("/personagens")
	public void deletarPersonagem(@RequestBody Personagem personagem) {
		personagemRepository.delete(personagem);
	}

	@ApiOperation(value = "Atualiza personagem")
	@PutMapping("/personagens")
	public Personagem atualizarPersonagem(@RequestBody Personagem personagem) {
		return personagemRepository.save(personagem);
	}
}
