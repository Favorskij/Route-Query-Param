import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";

const routes: Routes = [

  {path:'', children: [

      // Страница /one
      {path: 'one', component: PageOneComponent},

    ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
