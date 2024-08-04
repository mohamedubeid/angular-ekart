import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemoHostbinding]'
})
export class DemoHostbindingDirective {

  constructor() { }

  @HostBinding('value') searchTempValue: string = 'Nike';

  @HostListener('focus') logMessege() {
    console.log('Input has been focused!!')
  }

}
