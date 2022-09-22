import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagensRoutingModule } from './personagens-routing.module';
import { PersonagensComponent } from './personagens.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PersonagensComponent],
  imports: [
    CommonModule,
    PersonagensRoutingModule,
    AppMaterialModule,
    SharedModule,
  ],
})
export class PersonagensModule {}
