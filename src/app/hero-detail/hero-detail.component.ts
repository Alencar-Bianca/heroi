import { Component, Input } from '@angular/core';
import { Hero } from '../heroi/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent{

  constructor() { }
  @Input()
   hero?: Hero;

}
