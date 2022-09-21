import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personagem } from '../model/personagem';
import { PersonagensService } from './services/personagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss'],
})
export class PersonagensComponent implements OnInit {
  personagens: Observable<Personagem[]>;
  displayedColumns = [
    'id',
    'nome',
    'classe',
    'vidas',
    'ataque',
    'defesa',
    'arma',
  ];

  constructor(private personagensService: PersonagensService) {
    this.personagens = this.personagensService.list();
  }

  ngOnInit(): void {}
}
