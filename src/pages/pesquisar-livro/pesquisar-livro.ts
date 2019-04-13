import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Autor } from '../../model/autor';
import { Livro } from '../../model/livro';
import { Editora } from '../../model/editora';
import { DetalhesLivroPage } from '../detalhes-livro/detalhes-livro';

/**
 * Generated class for the PesquisarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisar-livro',
  templateUrl: 'pesquisar-livro.html',
})
export class PesquisarLivroPage {

  public livros: Livro[]; 
  autor: Autor = {
    nome: 'Isaac Asimov', nascimento: 1902, descricao: 'Autor Britanico'
  }
  editora: Editora = {
    nome: 'ALEPH', descricao: 'A Editora Aleph é uma editora brasileira fundada em 1984, com sede em São Paulo.'
  }
  
  livro1: Livro = {
    titulo: 'Fundação',
    subtitulo: 'Clássicos de Isaac Asimov ',
    capa: '../../assets/imgs/fundacao.jpg',
    editora: this.editora,
    autor: this.autor,
    isbn: '9788576570660',
    publicacao: '1972',
    paginas: 240
  
    };
    livro2: Livro = {
      titulo: 'Fundação 2',
      subtitulo: 'Clássicos de Isaac Asimov ',
      capa: '../../assets/imgs/fundacao.jpg',
      editora: this.editora,
      autor: this.autor,
      isbn: '9788576570660',
      publicacao: '1972',
      paginas: 240

    };
    livro3: Livro = {
      titulo: 'Fundação 3',
      subtitulo: 'Clássicos de Isaac Asimov ',
      capa: '../../assets/imgs/fundacao.jpg',
      editora: this.editora,
      autor: this.autor,
      isbn: '9788576570660',
      publicacao: '1972',
      paginas: 240
    }
    searchQuery: string = '';
    items: String[];
    
    initializeItems() {
      this.items = [
        'Fundacao 1',
        'Fundacao 2',
        'Funcadao 3'
      ];
    }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  irParaDetalhes(item:any){
    this.navCtrl.push(DetalhesLivroPage,{livroSelecionado: this.livro1});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisarLivroPage');
  }

}
