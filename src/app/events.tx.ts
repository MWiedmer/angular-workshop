import './polyfills';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Observable} from 'rxjs';
import {of, from, interval, fromEvent} from 'rxjs';
import {map, observeOn, delay, take} from 'rxjs/operators';
import {filter} from 'rxjs/operators';
import axios from 'axios';

import {AppModule} from './app/app.module';

console.clear();

const btn = document.getElementById('btn');

of({a: 42})
  .subscribe(console.log);

from([1, 2, 3, 4, 5])
  .subscribe(console.log);

fromEvent(btn, 'click')
  .subscribe(console.log);

from(axios.get('https://swapi.co/api/people?search=lu').then((res) => console.log(res)))
  .subscribe(console.log);

interval(2000).pipe(filter(num => num % 2 === 0)).pipe(take(2)).subscribe(console.log);


const o = Observable.create((subscriber) => {
  subscriber.next(9);
  //subscriber.complete(2);
  subscriber.error(new Error('ERRROOOORRR'));
  subscriber.next(10);
});

o.subscribe(
  (n) => {
    console.log('next:', n);
  },
  (e) => {
    console.log('error', e);
  },
  (c) => {
    console.log('complete', c);
  }
)
