import { createAction, props } from '@ngrx/store';

export enum TextActions {
  SET_TEXT = '[Text] Set Text'
}

export const setText = createAction(TextActions.SET_TEXT, props<{ payload: string }>());
