import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    this.navCtrl.push(DetalhesLivroPage,{});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisarLivroPage');
  }

}
