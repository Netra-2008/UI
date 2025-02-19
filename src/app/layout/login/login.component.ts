import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any ={
    EmailId:'',
    Password:''
  };
  
  router = inject(Router);

  http = inject(HttpClient);

  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Success");
        localStorage.setItem('loginuser',JSON.stringify(res.data));
        
        this.router.navigateByUrl('home');
      } else{
         alert(res.message);
        }
    })
  }


}
