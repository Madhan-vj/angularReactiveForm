import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { FormlistComponent } from "./formlist/formlist.component";

const routes: Routes = [
   {
    path:'list',
    component : FormlistComponent,
  }, {
    path:'',
    component : FormComponent,
  },
  {
    path: "edit/:id",
    component: FormComponent,
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
