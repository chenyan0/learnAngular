import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService }    from './hero.service';




@Component({
  selector: 'my-heroes',
  templateUrl:'app/heroes.component.html',

  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent  { 
  title = 'Tour of Heroes';

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }  //构造函数
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

