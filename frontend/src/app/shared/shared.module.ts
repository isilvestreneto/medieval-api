import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ClassePipe } from './pipes/classe.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, ClassePipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, ClassePipe],
})
export class SharedModule {}
