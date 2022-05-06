import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuckartComponent } from './duckart/duckart.component';
import { DuckartRoutingModule } from './duckart-routing.module';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		DuckartComponent,
  		HeaderComponent
	],
	imports: [
		CommonModule,
		DuckartRoutingModule,
		MatMenuModule,
		ReactiveFormsModule,
	]
})
export class DuckartModule { }
