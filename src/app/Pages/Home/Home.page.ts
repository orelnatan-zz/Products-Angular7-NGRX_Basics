import { Component } from '@angular/core';
import { Service } from '../../Services/Service.service';

@Component({
  selector: 'home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
  providers: [ Service, ]
})

export class Home {

  show;

  constructor(private service: Service){
      this.service.getSomting().subscribe((resp) => {
        console.log(resp)
      })
  }

}

