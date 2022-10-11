import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterCeptorProviter } from './service/auth.interceptor';
import { UserDashboardComponent } from './components/pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './components/pages/admin/sidebar/sidebar.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ViewCategoriesComponent } from './components/pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './components/pages/admin/add-category/add-category.component';
import { QuizzesComponent } from './components/pages/admin/quizzes/quizzes.component';
import { AddQuizComponent } from './components/pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './components/pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './components/pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './components/pages/admin/add-question/add-question.component';
import { UserSidebarComponent } from './components/pages/user/user-sidebar/user-sidebar.component';
import { LoadQuizzesComponent } from './components/pages/user/load-quizzes/load-quizzes.component';
import { InstractionsComponent } from './components/pages/user/instractions/instractions.component';
import { StartComponent } from './components/pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    AdminDashboardComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    QuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UserSidebarComponent,
    LoadQuizzesComponent,
    InstractionsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [authInterCeptorProviter],
  bootstrap: [AppComponent]
})
export class AppModule { }
 { }
