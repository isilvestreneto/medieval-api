import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Personagem } from 'src/app/model/personagem';

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  // private readonly API = '/api/personagens';

  private readonly API = '../../../assets/personagens.json'; // MOCK

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Personagem[]>(this.API).pipe(
      first(),
      delay(500),
      tap((personagens) => console.log(personagens))
    );
  }
}
