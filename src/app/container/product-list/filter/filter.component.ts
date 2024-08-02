import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inSotck: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedFilterRadioButtonChnaged: EventEmitter<string> = new EventEmitter<string>();


  onSelectedFilterRadioButtonChnaged(event: any) {
    this.selectedFilterRadioButtonChnaged.emit(event.target.value);
  }
}
