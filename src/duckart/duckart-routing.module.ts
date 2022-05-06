import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuckartComponent } from './duckart/duckart.component';

const routes: Routes = [
	{
        path: '',
        component: DuckartComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuckartRoutingModule { }
