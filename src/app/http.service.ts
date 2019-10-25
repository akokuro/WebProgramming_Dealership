import { HttpClientModule } from '@angular/common/http';

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarModel} from './Classes/CarModel'

@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
     
    CarModelAdd(data: CarModel){
        const body = {title: data.title, prise: data.price};
        return this.http.post('http://localhost:5000/admin/model/add_car/', body); 
    }
}