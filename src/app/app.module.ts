import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login',      component: LoginComponent },
  { path: 'Profile',      component: LoginComponent },
  
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  
   

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
