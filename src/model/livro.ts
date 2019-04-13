import { Autor } from "./autor";
import { Editora } from "./editora";

export interface Livro {
    titulo:String;
    subtitulo:String;
    capa:String;
    editora:Editora;
    autor:Autor;
    isbn:String;
    publicacao:String;
    paginas:number;
}