import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: './personagens/personagens.module.ts',
  },
  {
    path: 'personagens',
    loadChildren: () =>
      import('./personagens/personagens.module').then(
        (m) => m.PersonagensModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
