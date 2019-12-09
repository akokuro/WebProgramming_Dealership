import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

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
      // setTimeout(()=>this.SEE(false), 1000);
      document.getElementById("UserInfo").innerText = name;
      document.getElementById("UserInfo").style.visibility = "visible";
    } else{
      // setTimeout(()=>this.SEE(true), 1000);
      document.getElementById("UserInfo").style.visibility = "hidden";
    }
  }
}