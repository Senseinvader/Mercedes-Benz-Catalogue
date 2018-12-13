import configureStore from 'redux-mock-store';
import * as sliderActions from './sliderActions';

const mockStore = configureStore();
const store = mockStore();

describe('Slider actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('dispatches the right type', () => {
       const expectedActions = [{
           type: 'IMAGE_CHANGED'
       }];
       store.dispatch(sliderActions.changeImage())
       expect(store.getActions()).toEqual(expectedActions);
    });
});