import { SupplyService } from './../services/supply.service';
import { Component, OnInit } from '@angular/core';
import { SupplyResponse, TipoCombustivel } from '../interfaces/supply';
import { PaginatorState } from 'primeng/paginator';
import { formatDateToPTBR } from 'src/app/global/utils/format-date';
import { Toast } from 'src/app/global/toast';
import { ReportService } from '../services/report.service';

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

  constructor(
    private SupplyService: SupplyService,
    private toast: Toast,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.getSupplies();
  }

  getSupplies() {
    this.SupplyService.getSupplies().subscribe((response) => {
      response.map((supply) => {
        supply.data = formatDateToPTBR(supply.data);
        return supply;
      });

      this.supplies = response;
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first!;
    this.rows = event.rows!;
    // this.SupplyService.getSupplies(event).subscribe(
    //   (response) => (this.supplies = response)
    // );
  }

  export() {
    this.reportService.exportReport().subscribe({
      next: () => {
        this.toast.showToast(
          'success',
          'Relatório',
          'O relatório foi exportado'
        );
      },
    });
  }
}
