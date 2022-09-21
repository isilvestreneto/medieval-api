import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { Personagem } from '../model/personagem';
import { PersonagensService } from './services/personagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss'],
})
export class PersonagensComponent implements AfterViewInit, OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

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
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
