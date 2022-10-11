import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes=[
    {
      qid:22,
      title:'java Quiz',
      description:'java is java',
      maxMarks:10,
      numberOfQuestion:10,
      active:'',
      category:{
        title:"Programming"
      }

    }
  ]

  constructor(private qizService:QuizService) { }

  ngOnInit(): void {
    this.qizService.getQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data
      }
    )
  }


  deleteQuiz(qid){
   Swal.fire({
     icon:'info',
     title:'Are You Sure ! You Want To Delete This Quiz',
     confirmButtonText:'Delete',
     showCancelButton: true
   }).then((result)=>{
     if(result.isConfirmed){

     //Delete Quiz 

     this.qizService.deleteQuiz(qid).subscribe(
      (data)=>{
         Swal.fire('Success','Quiz Deleted Successfully','success');
         this.quizzes=this.quizzes.filter((q)=>q.qid!=qid);
      },(error)=>{
        Swal.fire('Error','error in deleting quiz','error');

      }
    )


     }
   })

  }

}
