import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers: [HttpClient]
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  show_warning(message:string){
    document.getElementById("warning").style.visibility = "visible";
    document.getElementById("warning").innerText = message;
    setTimeout(()=>document.getElementById("warning").style.visibility = "hidden", 5000);
  }

  register(name: string, email:string, password:string, password2: string){
    if (name == undefined || name == "" || email == undefined || email == "" || password != password2) {
      this.show_warning("Поля заполнены не корректно");
    }else{
      const body = {name, email, password};
      this.http.post('http://localhost:5000/register/', body).subscribe((data:string)=>{
        this.show_warning(data);
        console.log(data);
      });
      console.log("отправлено");
    }
  }
}
