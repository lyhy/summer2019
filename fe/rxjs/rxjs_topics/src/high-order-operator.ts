
//https://codeburst.io/rxjs-high-order-observables-58e49dd4d28a
import { concatAll, exhaust, exhaustAll, mergeAll, Observable, of, switchAll} from 'rxjs';
//1
// const ob = new Observable((subscriber) => {
//   subscriber.next(2);
//   subscriber.next(5);
//   setTimeout(() => {
//     subscriber.next(9);
//     subscriber.complete();
//   }, 1000);
// });

// ob.subscribe(x => console.log(x));
// 1 end

//2. return observable in observable

// const ob = new Observable((subscriber) => {
//   subscriber.next(of(1,2,3));
//   subscriber.next(of(4,5));
//   setTimeout(() => {
//     subscriber.next(of(6));
//     subscriber.complete();
//   }, 1000);
// });

// // ob.subscribe(x => console.log(x));
// ob.subscribe((x:Observable<number>) => x.subscribe(y=>console.log(y)));
// 2 end

//3


const firstObservable = of(1, 2, 3);

const secondObservable = new Observable((subscriber) => {
  subscriber.next(4);
  setTimeout(() => { //waits a second
    subscriber.next(5);
    setTimeout(() => { //waits a second
      subscriber.next(6);
      subscriber.complete();
    }, 1000);
  }, 1000);
});

const thirdObservable = new Observable((subscriber) => {
  subscriber.next(7);
  setTimeout(() => { //waits a second
    subscriber.next(8);
    subscriber.next(9);
    subscriber.complete();
  }, 1000);
});

const fouthObservable = of(10, 11, 12);

const ob = new Observable((subscriber) => {
  subscriber.next(firstObservable);
  subscriber.next(secondObservable);
  subscriber.next(thirdObservable);
  setTimeout(() => {
    subscriber.next(fouthObservable);
    subscriber.complete();
  }, 500);
});

//3.1 contactAll
// ob.pipe(concatAll())
//   .subscribe(x => console.log(x));

//3.2
// ob.pipe(mergeAll())
//   .subscribe(x => console.log(x));

  // ob.pipe(switchAll())
  // .subscribe(x => console.log(x));

  ob.pipe(exhaust())
  .subscribe(x => console.log(x));
//3 end