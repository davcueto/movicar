import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  type: any;

  ObjPathImg: any = {
    1: "../../../assets/images/img_2B.svg",
    2: "../../../assets/images/img_2W.svg",
  }
  pathImg = "../../../assets/images/img_2B.svg";
  typeClass = 1;

  constructor() { }

  ngOnInit(): void {
    this.pathImg = this.type != undefined ? this.ObjPathImg[this.type] : this.pathImg;
    this.typeClass = this.type != undefined ? this.type : this.typeClass;
  }

}
