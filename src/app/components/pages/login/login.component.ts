import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack: MatSnackBar,private service:LoginService,private router: Router) { }

  public loginData={

    username:'',
    password:'',
   
  };


  ngOnInit(): void {
  }

  login(){

    if(this.loginData.username.trim()==''||this.loginData.username==null){
      // alert("User Name Is Required");
      this.snack.open('User Name Is Required','',{
        duration:3000
       

      })
      return;
    }

    if(this.loginData.password.trim()==''||this.loginData.password==null){
      // alert("User Name Is Required");
      this.snack.open('Password Is Required','',{
        duration:3000
       

      })
      return;
    }

    this.service.generateToken(this.loginData).subscribe(
      (data:any)=>{
        alert("Sccess");

        // login 
        this.service.loginUser(data.token);
        this.service.getCurrentUser().subscribe(
          (user:any)=>{
            this.service.setUser(user);
            console.log(user);

            if(this.service.getUserRoles()=='ADMIN'){
              //window.location.href='/admin';
              this.router.navigate(['admin']);
              this.service.loginStatusSubect.next(true);

            }else if(this.service.getUserRoles()=='NORMAL'){
              //window.location.href='/user-dashboard';
              this.router.navigate(['user-dashboard/0']);
              this.service.loginStatusSubect.next(true);


            }else{
              this.service.logout();
         
            }
          }
        )

      },
      (error)=>{
        alert("error");
        this.snack.open('Invalid Details','',{
          duration:3000
         
  
        })

      }
    )

    
  }

}
