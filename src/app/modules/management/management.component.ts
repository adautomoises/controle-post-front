import { AuthService } from './../supply/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/global/toast';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent {
  formModel: FormGroup;
  public roles = [
    {
      name: 'Gerente',
      value: 'MANAGER',
    },
    {
      name: 'Frentista',
      value: 'ATTENDANT',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toast: Toast,
    private router: Router
  ) {
    this.formModel = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  submit() {
    if (this.formModel.valid) {
      this.authService.register(this.formModel.value).subscribe({
        next: () => {
          this.router.navigate(['/list']);
          this.toast.showToast(
            'success',
            'Usuário cadastrado',
            'Acesso autorizado ao sistema'
          );
        },
      });
    }
  }
}
