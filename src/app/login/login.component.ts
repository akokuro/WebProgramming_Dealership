import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [HttpClient]
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  show_warning(message:string){
    document.getElementById("warning").innerText = message;
    document.getElementById("warning").style.visibility = "visible";
    // setTimeout(()=>document.getElementById("warning").style.visibility = "hidden", 5000);
  }

  login(email:string, password:string){
    if (email == undefined || email == "") {
      this.show_warning("Поля заполнены не корректно");
    }else{
      const body = {email, password};
      this.http.post('http://dev.localhost:5000/login/', body, {
        withCredentials: true
      }).subscribe((data:string)=>{
        console.log("--------------")
        if(data == 'ok'){
          console.log("--------------")
          this.router.navigate(['start']);
          console.log("--------------")
          console.log(this.getCookie("token"))
        }
        this.show_warning(data);
        console.log(data);
      });
      console.log("отправлено");
    }
  }
  getCookie(name: string) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
}
