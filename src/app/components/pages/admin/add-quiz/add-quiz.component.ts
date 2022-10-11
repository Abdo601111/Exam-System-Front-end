import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[ // {cid:99,title:'pp'}   
];
  quiz={
    
      
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestion:'',
      active: true,
      category:{
        cid:''
      }
    }

  constructor(private categoryService:CategoryService,private quizService: QuizService) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data:any)=>{
        this.categories=data
      })


  }

  addQuiz(){
    if(this.quiz.title.trim()=='' &&this.quiz.title==null){
      Swal.fire('ERORR','Server Error','error');
      
      return;
    }

    this.quizService.addQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('Success','Ques Added Successfully','success');
        this.quiz.title='';
        this.quiz.description='';
        this.quiz.maxMarks='';
        this.quiz.numberOfQuestion='';
        this.quiz.active=true;
      },(error)=>{
        Swal.fire('ERORR','Server Error','error');
      }
    )

    

  }

}
