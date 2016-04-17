import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from "./hero.service";

// Example Usage (binding of selectedHero property of the AppComponent to the HeroDetailComponent)
// <my-hero-detail [hero]="selectedHero"></my-hero-detail>

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
})

// Angular insists that we declare a target property to be an input property.
// If we don't, Angular rejects the binding and throws an error.
// More here: https://angular.io/docs/ts/latest/guide/attribute-directives.html#!#input
export class HeroDetailComponent implements OnInit {
    @Input()
    hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}