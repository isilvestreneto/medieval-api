import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagensRoutingModule } from './personagens-routing.module';
import { PersonagensComponent } from './personagens.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [PersonagensComponent],
  imports: [CommonModule, PersonagensRoutingModule, AppMaterialModule],
})
export class PersonagensModule {}
