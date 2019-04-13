import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarLivroPage } from './listar-livro';

@NgModule({
  declarations: [
    ListarLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarLivroPage),
  ],
})
export class ListarLivroPageModule {}
