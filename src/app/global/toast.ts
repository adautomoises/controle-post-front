import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable()
export class Toast {
  constructor(private messageService: MessageService) {}

  showToast(severity: string = 'info', summary: string, detail?: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  clearToast() {
    this.messageService.clear();
  }
}
