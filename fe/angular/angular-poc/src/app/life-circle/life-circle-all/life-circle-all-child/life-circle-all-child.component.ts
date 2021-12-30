import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-circle-all-child',
  templateUrl: './life-circle-all-child.component.html',
  styleUrls: ['./life-circle-all-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCircleAllChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value = 'default';

  constructor() {
    console.log('constructor')
    console.log('value:', this.value)
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
    console.log('previousValue:', changes['value'].previousValue)
    console.log('currentValue', changes['value'].currentValue);

  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

}
