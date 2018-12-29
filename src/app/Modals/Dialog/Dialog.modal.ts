import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Modal } from '../../Core/Modal';

@Component({
  selector: 'dialog',
  templateUrl: './Dialog.modal.html',
  styleUrls: ['./Dialog.modal.scss']
})

export class Dialog {
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onApprove: EventEmitter<any> = new EventEmitter();
  
  @ViewChild('modalRef') modalRef: Modal;

  public showDialog(): void {
  	  this.modalRef.openModal();
  }

  public hideDialog(): void {
      this.modalRef.closeModal();
  }

}
