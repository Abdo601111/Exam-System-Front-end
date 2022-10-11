import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isloggedin=false;
  user=null;

  constructor(public login:LoginService) { }

  ngOnInit(): void {
   this.isloggedin= this.login.islogin();
   this.user=this.login.getUser();
   this.login.loginStatusSubect.asObservable().subscribe(
     (data)=>{
      this.isloggedin= this.login.islogin();
      this.user=this.login.getUser();

     }
   )
  }

  logout(){
    this.login.logout();
    
     window.location.reload();
    //this.login.loginStatusSubect.next(false);
  }

}
