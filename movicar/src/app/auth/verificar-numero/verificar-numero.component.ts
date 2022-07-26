import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verificar-numero',
  templateUrl: './verificar-numero.component.html',
  styleUrls: ['./verificar-numero.component.scss']
})
export class VerificarNumeroComponent implements OnInit, OnDestroy {

  numberInParam: any;
  subscription: any;
  arraynumberverify: any = [];
  disabledBtn = true;
  showprogress = false;

  constructor(
    private _Activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.numberInParam = params.get('number')
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  valuechange(event: any, index: any) {
    this.arraynumberverify[index] = event.target.value;
    this.validArray();
  }

  validArray() {
    if (this.arraynumberverify.length < 4) {
      this.disabledBtn = true;
      return
    }
    for (let i = 0; i < this.arraynumberverify.length; i++) {
      if (this.arraynumberverify[i] === "") {
        this.disabledBtn = true;
        break;
      } else {
        this.disabledBtn = false;
      }
    }
  }

  btnCrear() {
    this.showprogress = true;
    this.disabledBtn = true;
    setTimeout(() => {
      this.showprogress = false;
    }, 4000);
  }

}
