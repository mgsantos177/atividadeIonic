import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PesquisarLivroPageModule } from '../pages/pesquisar-livro/pesquisar-livro.module';
import { CadastrarLivroPageModule } from '../pages/cadastrar-livro/cadastrar-livro.module';
import { ListarLivroPageModule } from '../pages/listar-livro/listar-livro.module';
import { LivrosPage } from '../pages/livros/livros';
import { DetalhesLivroPageModule } from '../pages/detalhes-livro/detalhes-livro.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivrosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PesquisarLivroPageModule,
    CadastrarLivroPageModule,
    ListarLivroPageModule,
    DetalhesLivroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivrosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
