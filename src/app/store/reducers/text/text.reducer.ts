import { TextState } from '../../../models';
import { createReducer, on } from '@ngrx/store';
import { setText } from '../../actions';

export const initialState: TextState = {
    text: 'This is the default text :)'
};

export const textReducer = createReducer(
    initialState,
    on(setText, (state, { payload }) => ({ ...state, text: payload }))
);
