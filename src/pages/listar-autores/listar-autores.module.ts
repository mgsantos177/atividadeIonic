import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarAutoresPage } from './listar-autores';

@NgModule({
  declarations: [
    ListarAutoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarAutoresPage),
  ],
})
export class ListarAutoresPageModule {}
