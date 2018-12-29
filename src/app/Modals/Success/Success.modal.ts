import { Component, ViewChild, } from '@angular/core';
import { Modal } from '../../Core/Modal';

@Component({
  selector: 'success',
  templateUrl: './Success.modal.html',
  styleUrls: ['./Success.modal.scss']
})

export class Success {
	@ViewChild('modalRef') modalRef: Modal;

	public showSuccess(): void {
		  this.modalRef.openModal();
	}
  
	public hideSuccess(): void {
		this.modalRef.closeModal();
	}

}
