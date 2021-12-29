"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://codeburst.io/rxjs-high-order-observables-58e49dd4d28a
const rxjs_1 = require("rxjs");
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
const firstObservable = (0, rxjs_1.of)(1, 2, 3);
const secondObservable = new rxjs_1.Observable((subscriber) => {
    subscriber.next(4);
    setTimeout(() => {
        subscriber.next(5);
        setTimeout(() => {
            subscriber.next(6);
            subscriber.complete();
        }, 1000);
    }, 1000);
});
const thirdObservable = new rxjs_1.Observable((subscriber) => {
    subscriber.next(7);
    setTimeout(() => {
        subscriber.next(8);
        subscriber.next(9);
        subscriber.complete();
    }, 1000);
});
const fouthObservable = (0, rxjs_1.of)(10, 11, 12);
const ob = new rxjs_1.Observable((subscriber) => {
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
ob.pipe((0, rxjs_1.exhaust)())
    .subscribe(x => console.log(x));
//3 end
