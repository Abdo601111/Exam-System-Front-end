import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
qid;
title;
question={
  quiz:{

  },
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:''
}
  constructor(private route:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
  this.qid=this.route.snapshot.params.qid;
  this.question.quiz['qid']=this.qid;
  this.title=this.route.snapshot.params.title;
  }

  addQuestion(){

if(this.question.content.trim()==''&&this.question.content==null){
  return;
}
if(this.question.option1.trim()==''&&this.question.option1==null){
  return;
}
if(this.question.option2.trim()==''&&this.question.option2==null){
  return;
}
if(this.question.answer.trim()==''&&this.question.answer==null){
  return;
}



    this.questionService.addQuestion(this.question).subscribe
    (
      (data:any)=>{
        Swal.fire('Success','Question Added Successfully','success');
        this.question.content='';
        this.question.option1='';
        this.question.option2='';
        this.question.option3='';
        this.question.option4='';
        this.question.answer='';
      },(error)=>{
        Swal.fire('error','Server Error','error');
      }
    )

  }

}
