import sliderReducer from './sliderReducer';
import {changeImage} from '../actions/sliderActions';

describe('select reducer', () => {
    describe('Initial state', () =>{
       it('is correct', () => {
           const action = {type: 'dummy_action'};
           const initialState = {exterior: true, imagesArray: [], modal: false};
           expect(sliderReducer(undefined, action)).toEqual(initialState);
       });
    });
    describe('CHANGE_IMAGE', () => {
       it('returns the correct state', () => {
          const action = {type: 'IMAGE_CHANGED'};
          const expectedState = {exterior: false};
          expect(sliderReducer({exterior: true}, action)).toEqual(expectedState);
       });
    });
})