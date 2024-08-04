import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[setBackground]'
})
export class SetBackground implements OnInit {

    // private element: ElementRef;
    // private renderer: Renderer2;

    // @Input('setBackground') backColor: string = '';
    // @Input() textColor: string = '';
    @Input('setBackground') textBackgroundColor: {backColor: string, textColor: string} = {
      backColor: "",
      textColor: ""
    };


    constructor(private element: ElementRef, private renderer: Renderer2) {
      // this.element = element;
      // this.renderer = renderer;
    }

    ngOnInit() {
      // this.element.nativeElement.style.backgroundColor = 'yellow';
      // this.element.nativeElement.style.color = 'orange';
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.textBackgroundColor.backColor);
      this.renderer.setStyle(this.element.nativeElement, 'color', this.textBackgroundColor.textColor);
      this.renderer.setAttribute(this.element.nativeElement, 'title', 'this is an example title');
    }
}