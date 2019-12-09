import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../Classes/user_info';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less'],
  providers: [HttpClient]
})
export class NavBarComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router){
    router.events.subscribe((x: object)=>{
      if(x instanceof NavigationEnd){
        this.http.post('http://dev.localhost:5000/ping/', null, {
          withCredentials: true
        }).subscribe(
          (data:string) => {
            this.SEE(data, true);
            User.Info.Name = data.split(' ')[0];
            User.Info.Role = data.split(' ')[1];
          }, 
          (error: any) => {
            this.SEE("", false);
          });
      }
    })
  }

  ngOnInit() {  }

  SEE(name:string, visible:boolean) {
    if(visible){
      document.getElementById("UserInfo").innerText = name;
      document.getElementById("UserInfo").style.visibility = "visible";
    } else{
      document.getElementById("UserInfo").style.visibility = "hidden";
    }
  }
}