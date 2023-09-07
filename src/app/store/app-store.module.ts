import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { textReducer } from './reducers';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({
            text: textReducer
        })
    ]
})
export class AppStoreModule { }
