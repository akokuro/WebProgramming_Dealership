import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CarModel} from './../Classes/CarModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [HttpClient]
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient){}

  cars: Array<CarModel> = [];

  ngOnInit() {
    this.get_list();
  }
  add(title: string, price: number){
    const body = {title: title, prise: price};
    this.http.post('http://dev.localhost:5000/admin/model/add_car/', body, {withCredentials: true}).subscribe((data)=>this.get_list());
  }
  update(title: string, price: number){
    const body = {title: title, prise: price};
    this.http.post('http://dev.localhost:5000/admin/model/update_car/', body, {withCredentials: true}).subscribe((data)=>this.get_list());
  }
  remove(title: string, price: number){
    const body = {title: title, prise: price};
    this.http.post('http://dev.localhost:5000/admin/model/remove_car/', body, {withCredentials: true}).subscribe((data)=>this.get_list());
  }
  get_list(){
    this.http.get('http://dev.localhost:5000/get_cars/', {withCredentials: true}).subscribe((response: any) => {
      console.log("response", response);
      this.cars = [];
      response.forEach(element => {
        this.cars.push(element);
      });
    });
    console.log(this.cars);
  }
}
