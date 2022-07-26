import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.scss']
})
export class NuevaCuentaComponent implements OnInit {

  validationForm: FormGroup;
  showpassword = false;

  constructor(
    private router: Router,
  ) {
    this.validationForm = new FormGroup({
      email: new FormControl(null, { validators: Validators.email, updateOn: 'blur' }),
      password: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.validationForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.validationForm.get('password')!;
  }

  get number(): AbstractControl {
    return this.validationForm.get('number')!;
  }

  onSubmit(): void {
    this.validationForm.markAllAsTouched();
    if (this.validationForm.valid) {
      this.router.navigate(['./auth/verificar-numero', this.number.value]);
    } else {
      console.log("manejar error");
    }
  }

  resetEmail() {
    this.email.reset();
  }

  resetNumber() {
    this.number.reset();
  }

  showPassword() {
    this.showpassword = !this.showpassword;
  }

}
