import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CarModel} from './../Classes/CarModel'

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.less'],
  providers: [HttpClient]
})
export class ModelsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  cars: Array<CarModel> = [];
  ngOnInit() {
    this.get_list();
  }
  get_list(){
    this.http.get('http://localhost:5000/get_cars/').subscribe((response: any) => {
      console.log("response", response);
      this.cars = [];
      response.forEach(element => {
        this.cars.push(element);
      });
    });
    console.log(this.cars);
  }
}
