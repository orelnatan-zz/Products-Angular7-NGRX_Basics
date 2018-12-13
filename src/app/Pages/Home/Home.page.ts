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

  professions = _.times(5, (index) => ({
    id      : Math.floor(Math.random() * 100) + 999,
    label   :'profession' + index,
  }));

  show;

  initialValues = {
    fullName: 'Orel Natan',
    email: '',
    phone: '',
    gender: null,
    religion: null,
    profession: this.professions[3].id,
    terms: null,
    policy: null,
    date: new Date(),
  }

  constructor(private service: Service){
      this.service.getSomting().subscribe((resp) => {
        console.log(this.professions);
      })
  }


  handleSubmit(initialValues){

    console.log('initialValues: ', initialValues);
  }

}

