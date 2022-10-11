import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-load-quizzes',
  templateUrl: './load-quizzes.component.html',
  styleUrls: ['./load-quizzes.component.css']
})
export class LoadQuizzesComponent implements OnInit {

  cid;
  quizzes=[];
  constructor(private route:ActivatedRoute,private quiuzService:QuizService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (para)=>{
        this.cid=para.cid;


        this.cid=this.route.snapshot.params.cid;
    
    if(this.cid==0){
      // load all the quiz
      this.quiuzService.getQuizzes().subscribe(
        (data:any)=>{
          this.quizzes=data;

        },(error)=>{

        }
      )
    }else{
      //load specific quiz 
      this.quiuzService.getQuizOfCategory(this.cid).subscribe(
        (data:any)=>{
          this.quizzes=data;
        },(error)=>{
          
        }
      )
    }
      } )
    
  }

}
