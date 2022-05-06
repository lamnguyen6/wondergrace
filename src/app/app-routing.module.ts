import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('../duckart/duckart.module').then(m => m.DuckartModule)
	},
	{
		path: 'mint',
		loadChildren: () => import('../mint/mint.module').then(m => m.MintModule)
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
