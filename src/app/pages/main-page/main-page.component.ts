import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TextState } from '../../models';
import { setText } from '../../store/actions';

@Component({
    selector: 'app-main-page',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    protected text$: Observable<TextState>;

  @ViewChild('textInput')
    protected textInput: ElementRef<HTMLInputElement>;

  constructor(
    private store: Store<{ text: TextState }>
  ) {
      this.text$ = this.store.select('text');
  }

  protected onSubmit(e: SubmitEvent): void {
      e.stopPropagation();

      const value = this.textInput.nativeElement.value;
      this.store.dispatch(setText({ payload: value }));
      this.textInput.nativeElement.value = '';
  }
}
