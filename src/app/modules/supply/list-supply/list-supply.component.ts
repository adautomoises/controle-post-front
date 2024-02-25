import { SupplyService } from './../services/supply.service';
import { Component, OnInit } from '@angular/core';
import { SupplyResponse, TipoCombustivel } from '../interfaces/supply';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-list-supply',
  templateUrl: './list-supply.component.html',
  styleUrls: ['./list-supply.component.scss'],
})
export class ListSupplyComponent implements OnInit {
  public supplies: Array<SupplyResponse> = [];

  first: number = 0;
  rows: number = 0;
  total: number = 0;

  constructor(private SupplyService: SupplyService) {}

  ngOnInit(): void {
    this.getSupplies();
  }

  getSupplies() {
    // this.SupplyService.getSupplies().subscribe(
    //   (response) => (this.supplies = response)
    // );

    this.supplies = [
      {
        id: 1,
        tanque: {
          id: 1,
          combustivel: {
            id: 1,
            tipo: TipoCombustivel.GASOLINA,
            valor: 5.5,
          },
          bomba: 1,
        },
        litros: 18.0,
        valor: 100,
        data: '2024-02-22',
      },
      {
        id: 2,
        tanque: {
          id: 2,
          combustivel: {
            id: 2,
            tipo: TipoCombustivel.DIESEL,
            valor: 2.6,
          },
          bomba: 3,
        },
        litros: 9.0,
        valor: 50,
        data: '2024-02-22',
      },
    ];
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first!;
    this.rows = event.rows!;
    // this.SupplyService.getSupplies(event).subscribe(
    //   (response) => (this.supplies = response)
    // );
  }
}
