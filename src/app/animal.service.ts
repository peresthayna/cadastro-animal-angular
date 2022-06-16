import { Animal } from './model/animal.model';
import { Filo } from './model/filo.model';
import { Classe } from './model/classe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService 
{
  constructor() { }

  public recuperarClasses(): Classe[]
  {
    let animaisVertebrados: Classe[] = 
    [
      { nome: 'Anfíbio' },
      { nome: 'Ave' },
      { nome: 'Mamífero' },
      { nome: 'Peixe' },
      { nome: 'Réptil' }
    ]
    return animaisVertebrados;
  }
  
  public recuperarFilos(): Filo[]
  {
    let animaisInertebrados: Filo[] = 
    [
      { nome: 'Anelídeo', grupos: [] },
      { nome: 'Artrópodes',  grupos: ['Aracnídeos','Crustáceos','Insetos','Miriápodes']},
      { nome: 'Cnidário', grupos: [] },
      { nome: 'Equinodermo', grupos: [] },
      { nome: 'Molusco', grupos: [] }
    ]
    return animaisInertebrados;
  }

}
