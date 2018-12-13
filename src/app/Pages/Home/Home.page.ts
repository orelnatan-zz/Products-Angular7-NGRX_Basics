import { Component } from '@angular/core';
import { Service } from '../../Services/Service.service';
import * as _ from 'lodash'; // npm install --save lodash

@Component({
  selector: 'home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
  providers: [ Service, ]
})

export class Home {

  constructor(private service: Service){
      this.service.getSomting().subscribe((resp) => {
        console.log(resp);
      })
  }


}

