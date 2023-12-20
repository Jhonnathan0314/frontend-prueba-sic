import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [ ConfirmationService ]
})
export class ButtonComponent {

  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() confirmClick: boolean = false;

  @Output() clickEvent = new EventEmitter();

  constructor(private confirmationService: ConfirmationService) { }

  /**
   * The sendValue function emits a click event.
   */
  sendValue(event: Event) {
    if (this.confirmClick) {
      this.confirmClickAction(event);
    } else {
      this.clickEvent.emit();
    }
  }

  /**
   * The function `confirmClickAction` displays a confirmation dialog and emits a click event if the
   * user accepts the confirmation.
   * @param {Event} event - The event parameter is of type Event and represents the event that
   * triggered the click action. It is used to get the target element of the event.
   */
  confirmClickAction(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Estas seguro de continuar?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clickEvent.emit();
      },
      reject: () => {}
    });
  }

}
