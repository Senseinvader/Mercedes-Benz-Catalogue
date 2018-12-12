
// import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store';
import * as headerActions from './header-actions';
import fetchMock from'fetch-mock';
import thunk from 'redux-thunk';
import {getBodiesQuery} from './apiQueries';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const syncStore = mockStore();

describe('Header actions', () => {
   beforeEach(() => {
       fetchMock.restore();
   });
   it('dispatches the dummy action', () => {
      const expectedActions = [
          {
              type: 'TEST_ACTION',
              bodyId: 1,
              bodyName: 'limousine'
          }
      ];
       syncStore.dispatch(headerActions.testAction());
      expect(syncStore.getActions()).toEqual(expectedActions);
   });
});