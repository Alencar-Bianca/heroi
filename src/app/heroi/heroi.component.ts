import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent implements OnInit {
  hero: Hero =  {id: 1, name: 'Spider-Man'}
  constructor() { }

  ngOnInit(): void {
  }

}
