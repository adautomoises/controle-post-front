import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Toast } from 'src/app/global/toast';
import { tokenExpirado } from 'src/app/global/guard/auth.guard';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, PasswordModule],
})
export class LoginComponent {
  formModel: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toast: Toast,
    private router: Router
  ) {
    this.formModel = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.verificaToken();
  }

  submit() {
    if (this.formModel.valid) {
      this.loginService.login(this.formModel.value).subscribe((response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/supply']);
        this.toast.showToast(
          'success',
          'Usuário autorizado',
          'Acesso liberado!'
        );
      });
    }
  }

  verificaToken() {
    const token = localStorage.getItem('token');

    if (token && !tokenExpirado(token)) {
      this.router.navigate(['/supply']);
    } else {
      localStorage.clear();
    }
  }
}
