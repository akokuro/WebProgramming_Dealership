import { Component, OnInit } from '@angular/core';
import {CarModel} from './../Classes/CarModel'
import {HttpService} from './../http.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [HttpService]
})
export class AdminComponent implements OnInit {

  constructor(private httpService: HttpService){}

  receivedData: CarModel;
  done: boolean = false;
  carModel: CarModel;
  ngOnInit() {
  }
  submit(title: string, price: number){
    this.carModel = new CarModel(title, price)
    this.httpService.CarModelAdd(this.carModel)
            .subscribe(
                (data: CarModel) => {this.receivedData=data; this.done=true;},
                error => console.log(error)
            );
  }
}
