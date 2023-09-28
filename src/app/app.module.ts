import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { AddresultComponent } from './addresult/addresult.component';
import { ManageresultComponent } from './manageresult/manageresult.component';

import { HttpClientModule } from '@angular/common/http';
import { UpdateresultComponent } from './updateresult/updateresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    ShowresultComponent,
    AddresultComponent,
    ManageresultComponent,
    UpdateresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
