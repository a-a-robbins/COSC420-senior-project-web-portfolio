import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AniTestComponent} from "./ani-test/ani-test.component";

const routes: Routes = [
  {path: 'ani-test', component: AniTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
