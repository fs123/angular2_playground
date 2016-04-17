import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router'

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
@Component(
    // metadata array
    {
        selector: 'my-heroes',
        templateUrl: 'app/heroes.component.html',
        styleUrls: ['app/heroes.component.css'],
        // below directive is required that Angular recognize the '<my-hero-detail ...'.
        // Otherwise the detail will not be visible (and there will be NO error!!)
        directives: [HeroDetailComponent]
    })


export class HeroesComponent  implements OnInit {
    title = 'Tour of Heroes';
    heroes;
    selectedHero:Hero;

    constructor(private _heroService:HeroService,
        private _router: Router) {
    }

    ngOnInit() {
        this.loadHeroes();
    }

    loadHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}