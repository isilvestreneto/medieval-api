import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { Personagem } from 'src/app/model/personagem';

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  private readonly API = '/assets/personagens.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Personagem[]>(this.API)
      .pipe(tap((personagens) => console.log(personagens)));
  }
}
