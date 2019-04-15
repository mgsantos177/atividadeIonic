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
import { BookProvider } from '../providers/book/book';
import { HttpModule } from '@angular/http';
import { AutoresPage } from '../pages/autores/autores';
import { ListarAutoresPageModule } from '../pages/listar-autores/listar-autores.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivrosPage,
    AutoresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PesquisarLivroPageModule,
    CadastrarLivroPageModule,
    ListarLivroPageModule,
    DetalhesLivroPageModule,
    HttpModule,
    ListarAutoresPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivrosPage,
    AutoresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookProvider
  ]
})
export class AppModule {}
