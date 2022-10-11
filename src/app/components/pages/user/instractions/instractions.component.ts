import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instractions',
  templateUrl: './instractions.component.html',
  styleUrls: ['./instractions.component.css']
})
export class InstractionsComponent implements OnInit {
qid;
quiz;
  constructor(private route:ActivatedRoute,private quizService:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.qid=this.route.snapshot.params.qid;
    alert(this.qid);
    this.quizService.getQuiz(this.qid).subscribe(
      (data:any)=>{
        this.quiz=data;
      },(error)=>{

        console.log(error);
      }
    )
  }

  startQuiz(){

    Swal.fire({
      title: 'Do you want to Start The Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't Start`,
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       
        this.router.navigate(['/start/'+this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

}
