import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDemoHostbinding]'
})
export class DemoHostbindingDirective {

  constructor() { }

  @HostBinding('value') searchTempValue: string = 'Nike';

}
