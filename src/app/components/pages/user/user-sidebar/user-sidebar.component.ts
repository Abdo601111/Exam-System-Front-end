import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  categories=[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {


    
    this.categoryService.categories().subscribe(
      (data:any)=>{
        this.categories=data;

      },(error)=>{
        Swal.fire('error','Server Error','error');
      }
    )
  }

}
