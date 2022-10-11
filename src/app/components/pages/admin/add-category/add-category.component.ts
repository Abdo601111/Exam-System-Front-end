import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category={
    title:'',
    description:''
  }
  constructor(private categoryService:CategoryService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  addCategory(){

    if(this.category.title.trim()=='' && this.category.title==null){
      this.snak.open('Title Is Required','',{
        duration:3000
      })
      return;
    }
    this.categoryService.addCategory(this.category).subscribe(
      (data)=>{
        this.category.title='';
        this.category.description='';
      Swal.fire('Success !!','Categoey Added Sccessfully','success');
       
      },(error)=>{
        Swal.fire('ERORR !!','Server Error','error');
      }
    )
  }

}
