import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListarAutoresPage } from '../listar-autores/listar-autores';

/**
 * Generated class for the AutoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autores',
  templateUrl: 'autores.html',
})
export class AutoresPage {


  opcoes = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.opcoes = [
      {
        'title': 'Listar Autores',
        'page': 'listar'
      },
      {
        'title': 'Listar Livros',
        'page': 'listar'
      }]
  }

  irPara(page: any) {
    if (page == "listar") {
      this.navCtrl.push(ListarAutoresPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoresPage');
  }
}
