import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-year-input',
  templateUrl: './year-input.component.html',
  styleUrls: ['./year-input.component.css']
})
export class YearInputComponent {

  @Input() value: Date = new Date();
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  year: number = 0;

  @Output() valueEvent = new EventEmitter<number>();

  controlValue: FormControl = new FormControl<number>(this.year);

  ngOnChanges(changes: SimpleChanges): void {
    this.controlValue.setValue(this.value);
    this.validateState();
  }

  validateState() {
    if (this.disabled) {
      this.controlValue.disable();
    } else {
      this.controlValue.enable();
    }
  }

  sendValue() {
    this.year = this.controlValue.value.getFullYear() ?? 0;
    this.valueEvent.emit(this.year);
  }

}
