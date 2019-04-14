import {} from 'rxjs';
import {switchMapTo, takeUntil} from 'rxjs/operators';
import {fromEvent} from 'rxjs';

const box1 = document.getElementById('box1');
box1.style.position = 'absolute';
box1.style.top = '100px';
box1.style.left = '100px';

// IMPORTANT!!! Use the rea browser console to log stuff (f12 -> console)
// DON'T use the stackblitz console for it!!!!!


// observables for:
// 'mousedown' auf btn
// 'mousemove' => auf document
// 'mouseup' =>auf document
// starte with mousedown on box
// then listen to mousemove
// on every mousemove rendern box position
// until mouseup happens


const startMove$ = fromEvent(box1, 'mousedown');

const moveIt$ = fromEvent(document, 'mousemove');

const stopMove$ = fromEvent(document, 'mouseup');

startMove$
  .pipe(
    switchMapTo(moveIt$.pipe(takeUntil(stopMove$))
    )
  )
  .subscribe(
    (e: MouseEvent) => (
      box1.style.top = e.clientY - 50 + 'paax',
        box1.style.left = e.clientX - 50 + 'px'
    )
  );
