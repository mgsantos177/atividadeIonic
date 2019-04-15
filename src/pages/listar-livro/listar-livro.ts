import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Autor } from '../../model/autor';
import { Livro } from '../../model/livro';
import { Editora } from '../../model/editora';
import { DetalhesLivroPage } from '../detalhes-livro/detalhes-livro';
import { BookProvider } from '../../providers/book/book';



/**
 * Generated class for the ListarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-livro',
  templateUrl: 'listar-livro.html',
})
export class ListarLivroPage {
  
  public lista_livros = new Array<any>();
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
  bookProvider: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private booksProvider: BookProvider) {
   this.livros = [this.livro1, this.livro2, this.livro3];

  }

  irParaDetalhes(livro: Livro){
    this.navCtrl.push(DetalhesLivroPage,{"livroSelecionado": livro});
    
  }

  ionViewDidLoad() {
      this.booksProvider.getBooks().subscribe(
      data=> {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        
        for (var val in objeto_retorno){
          console.log(val);
          this.lista_livros.push(objeto_retorno[val]);
        }
        
      }, error => {
        console.log(error);
      }
    )
    console.log('ionViewDidLoad ListarLivroPage');
  }

}
