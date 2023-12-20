import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrimeNGObject } from 'src/app/core/models/primeng.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges {

  controlValue: FormControl = new FormControl();

  @Input() options: PrimeNGObject[] = [];
  @Input() selectedOption: string = '';
  @Input() label: string = '';
  @Input() showClear: boolean = false;
  @Input() filter: boolean = false;
  @Input() disabled: boolean = false;

  @Output() valueEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.controlValue.setValue(this.selectedOption);
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
    this.valueEvent.emit(this.controlValue.value);
  }

}
