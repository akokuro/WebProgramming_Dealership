import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpService} from './http.service'
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ModelsComponent } from './models/models.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path: 'models', component: ModelsComponent
  },
  {
    path: 'start', component: StartPageComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/start', pathMatch: 'full' 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StartPageComponent,
    ModelsComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
