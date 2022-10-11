import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qid=0;
  quiz;
  categories;
  constructor(private route:ActivatedRoute,private quizService:QuizService
    ,private categoryService:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.qid=this.route.snapshot.params.qid;
    this.quizService.getQuiz(this.qid).subscribe(
      (data:any)=>{
        this.quiz=data;
      })


      this.categoryService.categories().subscribe(
        (data:any)=>{
          this.categories=data;
        }

      )
  }

  updateQuiz(){
    this.quizService.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('Updated','Quiz Updated Successfully','success').then(
        (e)=>{
          this.router.navigate(['/admin/quizzes']); 
        }       
        );
      },(error)=>{
        Swal.fire('error','Server Error','error');
      }
    )
  }

}
