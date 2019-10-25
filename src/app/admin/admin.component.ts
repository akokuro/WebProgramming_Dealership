import { Component, OnInit } from '@angular/core';
import {CarModel} from './../Classes/CarModel'
import {HttpService} from './../http.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  constructor(private httpService: HttpService){}

  receivedData: CarModel;
  done: boolean = false;

  ngOnInit() {
  }
  submit(data: CarModel){
        this.httpService.CarModelAdd(data)
                .subscribe(
                    (data: CarModel) => {this.receivedData=data; this.done=true;},
                    error => console.log(error)
                );
    }
}
