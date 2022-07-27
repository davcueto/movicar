import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  randomeFeedback: any;
  arrayOpcionesCar = [
    {
      imgPath: "../../../assets/images/img_8.png",
      marcaAuto: "BMW iX3",
      renta: "Renta mensual de $7,000.00 MXN"
    },
    {
      imgPath: "../../../assets/images/img_9.png",
      marcaAuto: "Mini Eléctrico",
      renta: "Renta mensual de $7,000.00 MXN"
    },
    {
      imgPath: "../../../assets/images/img_10.png",
      marcaAuto: "Jetta Sportline",
      renta: "Renta mensual de $7,000.00 MXN"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.randomeFeedback = 1;//Math.floor(Math.random() * 2) + 1
  }

}
