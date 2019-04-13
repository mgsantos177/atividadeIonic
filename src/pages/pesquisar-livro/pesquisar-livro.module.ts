import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisarLivroPage } from './pesquisar-livro';

@NgModule({
  declarations: [
    PesquisarLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisarLivroPage),
  ],
})
export class PesquisarLivroPageModule {}
