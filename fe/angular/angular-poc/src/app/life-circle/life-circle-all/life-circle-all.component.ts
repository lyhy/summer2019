import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-circle-all',
  templateUrl: './life-circle-all.component.html',
  styleUrls: ['./life-circle-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCircleAllComponent implements OnInit{
  value = 'abc';
  other = '';
  hasChild = true;
  count = 0
  constructor(
    private cdr: ChangeDetectorRef

  ) {
    setTimeout(() => {
      this.count = 5;
      this.cdr.detectChanges();
    }, 0);
   }

  ngOnInit(): void {
  }

}
