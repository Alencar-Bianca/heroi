import { HEROIS } from './../mock-herois';
import { Component } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent  {
 herois = HEROIS;
selectedHero?: Hero;

  onSelect(hero : Hero): void{
    this.selectedHero = hero;
}
}
