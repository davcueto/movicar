import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exito-verificar',
  templateUrl: './exito-verificar.component.html',
  styleUrls: ['./exito-verificar.component.scss']
})
export class ExitoVerificarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  btnCrearCuenta() {
    this.router.navigate(['./pages/onboarding']);
  }

}
