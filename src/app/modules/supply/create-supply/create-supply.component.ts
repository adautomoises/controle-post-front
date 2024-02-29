import { UserService } from './../services/user.service';
import { PumpService } from './../services/pump.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupplyService } from '../services/supply.service';
import { Toast } from 'src/app/global/toast';
import { Router } from '@angular/router';
import { TankResponse } from '../interfaces/tank';
import { TankService } from '../services/tank.service';
import { PumpResponse } from '../interfaces/pump';
import { UserResponse } from '../interfaces/user';

@Component({
  selector: 'app-create-supply',
  templateUrl: './create-supply.component.html',
  styleUrls: ['./create-supply.component.scss'],
})
export class CreateSupplyComponent implements OnInit {
  formModel: FormGroup;
  public tanques: TankResponse[] = [];
  public bombas: PumpResponse[] = [];
  public bombasOptions: number[] = [];
  public frentistas: UserResponse[] = [];
  public valorMax: number[] = [];
  public tanqueSelecionado = 0;

  public data: any;
  public options: any;

  constructor(
    private formBuilder: FormBuilder,
    private supplyService: SupplyService,
    private toast: Toast,
    private router: Router,
    private tankService: TankService,
    private pumpService: PumpService,
    private userService: UserService
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
    this.listarTanques();
    this.listarBombas();
    this.listarFrentistas();
  }

  toggleTanque() {
    this.formModel.get('bomba_id')?.reset();
    this.formModel.get('valor')?.reset();

    this.bombasOptions = this.bombas
      .filter((bomba) => bomba.tanque.id === this.formModel.value.tanque)
      .map((bomba) => bomba.id);
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

  listarFrentistas() {
    this.userService
      .listarFrentistas()
      .subscribe((response) => (this.frentistas = response));
  }

  listarTanques() {
    this.tankService.getTanks().subscribe((response) => {
      this.tanques = response;
      this.valorMax = this.tanques.map(
        (tanque) => tanque.capacidade * tanque.combustivel.valor
      );
      const documentStyle = getComputedStyle(document.documentElement);

      this.data = {
        labels: this.tanques.map((tank) => {
          return tank.combustivel.tipo;
        }),
        datasets: [
          {
            data: this.tanques.map((tank) => tank.capacidade),
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
    });
  }

  listarBombas() {
    this.pumpService.getPumps().subscribe((response) => {
      this.bombas = response;
    });
  }
}
