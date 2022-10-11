import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './components/pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './components/pages/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { QuizzesComponent } from './components/pages/admin/quizzes/quizzes.component';
import { UpdateQuizComponent } from './components/pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './components/pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './components/pages/admin/view-quiz-questions/view-quiz-questions.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { InstractionsComponent } from './components/pages/user/instractions/instractions.component';
import { LoadQuizzesComponent } from './components/pages/user/load-quizzes/load-quizzes.component';
import { StartComponent } from './components/pages/user/start/start.component';
import { UserDashboardComponent } from './components/pages/user/user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';

const routes: Routes = [
 
  {path:'',component: HomeComponent,pathMatch:'full'},
  {path:'signup',component: SignupComponent,pathMatch:'full'},
  {path:'login',component: LoginComponent,pathMatch:'full'},
  {path:'admin',component: AdminDashboardComponent,canActivate:[AdminGuard],
children:[
  {path:'profile',component:ProfileComponent},
  {path:'',component:WelcomeComponent},
  {path:'categories',component:ViewCategoriesComponent},
  {path:'addCategory',component:AddCategoryComponent},
  {path:'quizzes',component:QuizzesComponent},
  {path:'add-quiz',component:AddQuizComponent},
  {path:'quiz/:qid',component:UpdateQuizComponent},
  {path:'view-questions/:qid/:title',component:ViewQuizQuestionsComponent},
  {path:'add-questions/:qid/:title',component:AddQuestionComponent}
]},
  {path:'user-dashboard',component: UserDashboardComponent,canActivate:[NormalGuard],
  children:[
    {path:':cid',component:LoadQuizzesComponent},
    {path:'instructions/:qid',component:InstractionsComponent},
    

  ]
},
{path:'start/:qid',component:StartComponent,canActivate:[NormalGuard]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
