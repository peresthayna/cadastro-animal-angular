import { Filo } from './filo.model';
export class Animal 
{
  public id: number;
  public isVertebrate: boolean;
  public class: string;
  public phylum: Filo;
  public group: string;
  public species: string;
  public color: string;

  constructor()
  {
    this.id = 0;
    this.isVertebrate = true;
    this.class = '';
    this.phylum = new Filo();
    this.group = '';
    this.species = '';
    this.color = '';
  }
}