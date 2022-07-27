import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  ineFront: any;
  progressIneFront: any = false;
  ineFrontDetail: any = false;

  ineBack: any;
  progressIneBack: any = false;
  ineBackDetail: any = false;

  picture: any;
  progressPicture: any = false;
  pictureDetail: any = false;

  disabledBtn: any = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleUploadIneFront(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.progressIneFront = true;
        setTimeout(() => {
          this.ineFront = event.target.result;
          this.progressIneFront = false;
          this.ineFrontDetail = true;
          this.validPhotos();
        }, 4000);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleUploadIneBack(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.progressIneBack = true;
        setTimeout(() => {
          this.ineFront = event.target.result;
          this.progressIneBack = false;
          this.ineBackDetail = true;
          this.validPhotos();
        }, 4000);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleUploadPicture(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.progressPicture = true;
        setTimeout(() => {
          this.ineFront = event.target.result;
          this.progressPicture = false;
          this.pictureDetail = true;
          this.validPhotos();
        }, 4000);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  validPhotos() {
    console.log("aqui")
    console.log(this.ineFront,this.ineBack,this.picture)
    if(this.ineFront != undefined && this.ineBack != undefined && this.picture != undefined){
      console.log("dentro")
      this.disabledBtn = false;
    }
  }

  btnCrear() {

  }

}
