import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user=null;
  constructor(private service:LoginService) { }

  ngOnInit(): void {
   // this.user=this.service.getUser();
    this.service.getCurrentUser().subscribe(
      (data)=>{
        this.user=data;
      }
    )
  }

}
