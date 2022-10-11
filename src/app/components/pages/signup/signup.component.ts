import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user={

    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''

  };

  ngOnInit(): void {
  }



  formSubmit(){
    console.log(this.user);
    if(this.user.username==''||this.user.username==null){
      // alert("User Name Is Required");
      this.snack.open('User Name Is Required','',{
        duration:3000
       

      })
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        Swal.fire('Sccess','User Is Registered Sccessfully','success');

      },
      (error)=>{
        this.snack.open('something went wrong','',{
          duration:300
         
  
        })

      }
    )
  }

}
