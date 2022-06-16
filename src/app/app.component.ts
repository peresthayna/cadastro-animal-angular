import { Filo } from './model/filo.model';
import { Classe } from './model/classe.model';
import { AnimalService } from './animal.service';
import { Component } from '@angular/core';
import { Animal } from './model/animal.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public animais: Animal[] = [];
  public animal: Animal;
  public classes: Classe[];
  public filos: Filo[];

  constructor(private animalService: AnimalService)
  {
    this.classes = this.animalService.recuperarClasses();
    this.filos = this.animalService.recuperarFilos();
    this.animal = new Animal();
  }
  
  public limparCampos()
  {
    this.animal.class = '';
    this.animal.group = '';
    this.animal.phylum = new Filo();
  }

  public cadastrarAnimal()
  {
    console.log(this.animal);
  }
}
