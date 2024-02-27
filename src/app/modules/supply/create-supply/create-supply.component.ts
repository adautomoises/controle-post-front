import { Frentista, Tanque } from './../interfaces/supply';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupplyService } from '../services/supply.service';
import { Toast } from 'src/app/global/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-supply',
  templateUrl: './create-supply.component.html',
  styleUrls: ['./create-supply.component.scss'],
})
export class CreateSupplyComponent implements OnInit {
  formModel: FormGroup;
  tanques: Tanque[] = [];
  bombas: number[] = [];
  frentistas: Frentista[] = [];
  valorMax: number[] = [];
  tanqueSelecionado = 0;

  data: any;
  options: any;

  constructor(
    private formBuilder: FormBuilder,
    private supplyService: SupplyService,
    private toast: Toast,
    private router: Router
  ) {
    this.formModel = this.formBuilder.group({
      frentista: [null, Validators.required],
      tanque: [null, Validators.required],
      bomba_id: [null, Validators.required],
      valor: [null, Validators.required],
      data: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.tanques = [
      {
        id: 1,
        combustivel: {
          tipo: 'Gasolina',
          valor: 5.5,
        },
        capacidade: 1000,
      },
      {
        id: 2,
        combustivel: {
          tipo: 'Diesel',
          valor: 2.5,
        },
        capacidade: 2000,
      },
    ];

    this.frentistas = [
      { name: 'Adauto', codigo: 1 },
      { name: 'Agatha', codigo: 2 },
      { name: 'Guilherme', codigo: 3 },
      { name: 'Rafael', codigo: 4 },
      { name: 'Daniel', codigo: 5 },
      { name: 'Cláudio', codigo: 6 },
    ];

    this.valorMax = this.tanques.map(
      (tanque) => tanque.capacidade * tanque.combustivel.valor
    );

    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['Gasolina', 'Diesel'],
      datasets: [
        {
          data: [this.tanques[0].capacidade, this.tanques[1].capacidade],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: '#000',
          },
        },
      },
    };
  }

  toggleTanque() {
    this.formModel.get('bomba')?.reset();
    this.formModel.get('valor')?.reset();
    switch (this.formModel.value.tanque) {
      case 1:
        this.tanqueSelecionado = 0;
        return (this.bombas = [1, 2]);
      case 2:
        this.tanqueSelecionado = 1;
        return (this.bombas = [3, 4]);
      default:
        return (this.bombas = []);
    }
  }

  submit() {
    if (this.formModel.valid) {
      this.formModel.get('frentista')?.disable();
      this.formModel.get('tanque')?.disable();
      this.supplyService.postSupply(this.formModel.value).subscribe({
        next: () => {
          this.router.navigate(['/list']);
          this.toast.showToast(
            'success',
            'Abastecimento',
            'Um abastecimento foi realizado'
          );
        },
      });
    }
  }
}
