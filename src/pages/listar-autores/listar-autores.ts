import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Autor } from '../../model/autor';
import { BookProvider } from '../../providers/book/book';

/**
 * Generated class for the ListarAutoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-autores',
  templateUrl: 'listar-autores.html',
})
export class ListarAutoresPage {

  autores: Autor[];
  public lista_autores= new Array<any>();

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookProvider: BookProvider) {
  }

  ionViewDidLoad() {
    this.bookProvider.getAuthor().subscribe(
      data=> {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_autores.push(objeto_retorno)
      console.log(objeto_retorno)
        
      }
      , error => {
        console.log(error);
      }
    )
    console.log('ionViewDidLoad ListarLivroPage');
  }

}
 