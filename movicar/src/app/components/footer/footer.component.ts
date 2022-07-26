import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  type: any;
  typeClass = 1;

  constructor() { }

  ngOnInit(): void {
    this.typeClass = this.type != undefined ? this.type : this.typeClass;
  }

}
