import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListarLivroPage } from '../listar-livro/listar-livro';
import { CadastrarLivroPage } from '../cadastrar-livro/cadastrar-livro';
import { PesquisarLivroPage } from '../pesquisar-livro/pesquisar-livro';

/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {

  opcoes = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.opcoes = [
      {
        'title':'Listar Livros',
        'page': 'listar'
      },
      {
        'title': 'Pesquisar Livro',
        'page': 'pesquisar'
      },
      {
        'title': 'Cadastrar Livro',
        'page': 'cadastrar'
      }
    ]
  }

    irPara(page:any){
      if (page == 'listar'){
        this.navCtrl.push(ListarLivroPage)
      }else if(page== 'pesquisar'){
        this.navCtrl.push(PesquisarLivroPage)
      }else if(page == 'cadastrar'){
        this.navCtrl.push(CadastrarLivroPage)
      }
      }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosPage');
  }

}
