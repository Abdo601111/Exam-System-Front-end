import {  LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid;
  questions;
  marksGot=0;
  attempted=0;
  correctAnswer=0;
  isSubmit=false;

  timer:any;
  constructor(private locationStrategy:LocationStrategy,private route:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
    
    this.qid=this.route.snapshot.params.qid;
    alert(this.qid);
    this.preventBackButton();

    this.questionService.getQuestionOfQuizForTest(this.qid).subscribe(
      (data:any)=>{
        this.questions=data;
        this.timer=this.questions.length*2*60;

           this.questions.forEach((q) => {
              q['givenAnswer']='';
           });
           this.startTimer();

      },(error)=>{
        alert(error);
      }
    )
  }

preventBackButton(){
  history.pushState(null,null,location.href);
  this.locationStrategy.onPopState(()=>{
    history.pushState(null,null,location.href);
  })
}


submitQuiz(){

  Swal.fire({
    title: 'Do you want to Submit The Quiz?',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    denyButtonText: `Don't Submit`,
    icon:'info'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.isSubmit=true;
      this.questions.forEach(e => {
        if(e.givenAnswer==e.answer){
          this.correctAnswer++;
          let marksSingle=this.questions[0].quiz.maxMarks/this.questions.length;
          this.marksGot+=marksSingle;

        }
        if(e.givenAnswer.trim()!=''){
          this.attempted++;

        }
        
      });
     
      
    } else if (result.isDenied) {
      Swal.fire('Changes are not Submit', '', 'info')
    }
  })
}

startTimer(){
  let t=window.setInterval(()=>{
    if(this.timer<=0){
      this.submitQuiz();
      clearInterval(t);
    }else{
      this.timer--;
    }
  },1000)
}
getFormatedTime(){
  let mm= Math.floor(this.timer/60);
  let ss= this.timer-mm*60;
  return `${mm} min : ${ss} sec `;
}

}
