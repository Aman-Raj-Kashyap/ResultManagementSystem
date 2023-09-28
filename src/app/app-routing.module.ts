import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { ManageresultComponent } from './manageresult/manageresult.component';
import { AddresultComponent } from './addresult/addresult.component';
import { UpdateresultComponent } from './updateresult/updateresult.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'searchResult', component:StudentComponent},
  {path:'showResult/:id', component:ShowresultComponent},
  {path:'manageResult', component:ManageresultComponent},
  {path:'addResult', component:AddresultComponent},
  {path:'updateResult/:id', component:UpdateresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
