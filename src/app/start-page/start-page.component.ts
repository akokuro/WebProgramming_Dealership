import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

 @Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})
export class StartPageComponent implements OnInit {

   constructor() { }

   ngOnInit() {
  }

  logout(){
    Cookie.delete('token');
    location.reload();
  }
 }