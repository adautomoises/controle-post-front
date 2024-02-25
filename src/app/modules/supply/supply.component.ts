import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Toast } from 'src/app/global/toast';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss'],
})
export class SupplyComponent {
  constructor(private router: Router, private toast: Toast) {}

  lougout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toast.showToast('info', 'Desconectado');
  }
}
