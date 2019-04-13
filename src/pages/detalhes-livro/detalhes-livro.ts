import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';

/**
 * Generated class for the DetalhesLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-livro',
  templateUrl: 'detalhes-livro.html',
})
export class DetalhesLivroPage {

  public livro: Livro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.livro= this.navParams.get("livroSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesLivroPage');
  }

}
