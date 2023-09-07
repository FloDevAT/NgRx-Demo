import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent, SecondPageComponent } from './pages';

const routes: Routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', loadComponent: () => MainPageComponent },
    { path: 'second-page', loadComponent: () => SecondPageComponent }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
