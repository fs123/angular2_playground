import { Component, OnInit } from 'angular2/core';
import {Router} from 'angular2/router'

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    // We specify the path all the way back to the application root. Angular doesn't support module-relative paths.
    templateUrl: 'app/dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private _heroService: HeroService,
                private _router: Router){}

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.splice(1,5));
    }

}