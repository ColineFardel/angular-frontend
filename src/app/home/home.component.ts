import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  machines: Array<any>;

  constructor() {
    this.machines = [
      {
        name: "BA 1008",
        reference: "180128",
        image: "../../assets/img/machine1.png"
      },
      {
        name: "CT 20",
        reference: "180177",
        image: "../../assets/img/machine2.png"
      },
      {
        name: "DECO 20S",
        reference: "180255",
        image: "../../assets/img/machine3.png"
      },
    ]
  }

  ngOnInit(): void {

  }

}
