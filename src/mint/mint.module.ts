import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MintComponent } from './mint.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	  {
        path: '',
        component: MintComponent
    }
];

@NgModule({
    declarations: [
        MintComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ]
})
export class MintModule { }
