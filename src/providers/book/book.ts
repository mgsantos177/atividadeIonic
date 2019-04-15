import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  private baseApiPath = 'https://openlibrary.org/'

  constructor(public http: Http) {
    console.log('Hello BookProvider Provider');
  }

  getBooks(){
    return this.http.get(this.baseApiPath +'api/books?&bibkeys=OLID:OL17727771M,OL10492629M,OL16742155M,OL17575324M&format=json&details=true');
  }
  getAuthor(){
    return this.http.get(this.baseApiPath + 'authors/OL272947A.json')
  }
}
