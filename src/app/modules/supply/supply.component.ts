import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Toast } from 'src/app/global/toast';

interface Menu {
  categoria: string;
  items: Item[];
}

interface Item {
  rota: string[];
  nome: string;
  icone: string;
}

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss'],
})
export class SupplyComponent {
  menuItems: Menu[] = [
    {
      categoria: 'Abastecimentos',
      items: [
        {
          rota: ['list'],
          nome: 'Resumo',
          icone: 'data_table',
        },
        {
          rota: ['create'],
          nome: 'Abastecer',
          icone: 'local_gas_station',
        },
      ],
    },
    {
      categoria: 'Gestão',
      items: [
        {
          rota: ['/management'],
          nome: 'Funcionários',
          icone: 'badge',
        },
      ],
    },
  ];

  constructor(private router: Router, private toast: Toast) {}

  lougout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toast.showToast('info', 'Desconectado');
  }
}
