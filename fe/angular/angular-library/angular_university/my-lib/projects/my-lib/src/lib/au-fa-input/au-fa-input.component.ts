import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'lib-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input()
  icon = '';

  @ContentChild(InputRefDirective, {static: false})
  input!: InputRefDirective;
 
  constructor() { }
  ngAfterContentInit(): void {
    console.log('input', this.input)
    if(!this.input) {
      console.error('input is missing')
    }
  }
  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  ngOnInit(): void {
  }

}
