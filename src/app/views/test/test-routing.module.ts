import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AnotherComponent} from './another/another.component';

const routes: Routes = [
  {
    path: '',
    component: AnotherComponent,
    data: {
      title: 'Dashboard'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
