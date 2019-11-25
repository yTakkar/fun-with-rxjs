import React, {useEffect } from 'react';
import { fromEvent, Observable, of, interval, range, concat, timer, from, Subject } from 'rxjs';
import { mapTo, scan, throttleTime, map, take, filter, mergeMap, throttle, delay } from 'rxjs/operators'

// OPERATORS
const t = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(t, sequence);
result.subscribe(x => console.log(x));

// Operations without .pipe
map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
of(1, 2, 3).pipe(map(x => x * x)).subscribe(v => console.log(v))

// observable
const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  setTimeout(() => {
    subscriber.next(4)
    subscriber.complete()
  }, 1000)
})

// observer
observable.subscribe({
  next(x) {
    console.log(x)
  },
  complete() {
    console.log('done')
  }
})

const observer = timer(3000, 1000)
observer.subscribe(console.log)

const observer2 = of(
  10, 20, 30
).pipe(
  filter((val, index) => val === 10)
)
observer2.subscribe(console.log)

const promise = new Promise((res, rej) => setTimeout(() => res('hello'), 2000))
promise.then(console.log)
from(promise).subscribe(console.log)

const subject = new Subject(0)

subject.subscribe(console.log)
subject.subscribe(console.log)

subject.next(1)
subject.next(2)

const letters = of('a', 'b', 'c');
letters.pipe(
  mergeMap(obs1 => interval(1000).pipe(
    map(obs2 => obs1 + obs2),
    // throttleTime(1000),
    // throttle(ev => interval(1000))
  ))
).subscribe(console.log)

function App() {
  const button = document.getElementById('button')
  const cb = x => console.log(x)

  useEffect(() => {
    document.getElementById('button').addEventListener('click', e => {
      console.log('clicked')
    })
    
    fromEvent(document, 'click').pipe(mapTo('hi')).subscribe(cb)

    fromEvent(document, 'click')
      .pipe(mapTo(1))
      .pipe(
        scan((acc, val) => acc + val, 0)
      )
      .subscribe(console.log)

  }, []) // eslint-disable-line

  return (
    <div className="App">
      <button id='button'>click me!</button>
    </div>
  );
}

export default App;
