import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarLivroPage } from './cadastrar-livro';

@NgModule({
  declarations: [
    CadastrarLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarLivroPage),
  ],
})
export class CadastrarLivroPageModule {}
