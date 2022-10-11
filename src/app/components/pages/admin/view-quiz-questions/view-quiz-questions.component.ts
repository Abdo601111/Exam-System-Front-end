import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
qid;
title;
questions=[];
  constructor(private route:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.qid=this.route.snapshot.params.qid;
    this.title=this.route.snapshot.params.title;
    this.questionService.getQuestionOfQuiz(this.qid).subscribe(
      (data:any)=>{
        this.questions=data;
      },(error)=>{
        Swal.fire('Error','Server Error ','error');
      }
    )
  }

  deleteQuestion(quesId){
    Swal.fire({
      icon:'info',
      title:'Are You Sure ! You Want To Delete This Question',
      confirmButtonText:'Delete',
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed){
 
      //Delete Quiz 
 
      this.questionService.deleteQuestionOfQuiz(quesId).subscribe(
       (data)=>{
          Swal.fire('Success','Quiz Deleted Successfully','success');
          this.questions=this.questions.filter((q)=>q.quesId!=quesId);
       },(error)=>{
         Swal.fire('Error','error in deleting quiz','error');
 
       }
     )
 
 
      }
    })
  }

}
