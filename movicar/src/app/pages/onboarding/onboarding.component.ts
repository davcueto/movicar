import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  ineFront: any = "";
  progressIneFront: any = false;
  ineFrontDetail: any = false;

  ineBack: any = "";
  progressIneBack: any = false;
  ineBackDetail: any = false;

  picture: any = "";
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
        }, 1000);
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
          this.ineBack = event.target.result;
          this.progressIneBack = false;
          this.ineBackDetail = true;
          this.validPhotos();
        }, 1000);
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
          this.picture = event.target.result;
          this.progressPicture = false;
          this.pictureDetail = true;
          this.validPhotos();
        }, 1000);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  validPhotos() {
    if(this.ineFrontDetail && this.ineBackDetail && this.pictureDetail){
      this.disabledBtn = false;
    }else{
      this.disabledBtn = true;
    }
  }

  btnCrear() {

  }

}
