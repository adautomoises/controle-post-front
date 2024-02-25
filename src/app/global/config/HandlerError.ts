import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Toast } from '../toast';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Injectable()
export class HandlerError implements ErrorHandler {
  constructor(private toast: Toast, private ngZone: NgZone) {}

  handleError(HttpErrorResponse: HttpErrorResponse): void {
    const error = HttpErrorResponse.error;
    switch (error.status) {
      case HttpStatusCode.BadRequest:
        this.ngZone.run(() => {
          this.toast.showToast('error', error.message);
        });
        break;
    }
  }
}
