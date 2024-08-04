import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';

  @HostListener('mouseenter') 
  OnMouseEnter() {
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseout') 
  OnMouseOut() {
    this.backgroundColor = 'white';
  }

}
