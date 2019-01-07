import {configure} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import {createStore} from "redux";
import rootReducer from "./rootReducer";

configure({ adapter: new Adapter() });

describe('Root reducer', () => {

    let store = createStore(rootReducer);

    it('Should contains headerReducer', () => {
        expect(store.getState().headerReducer).toEqual({
            bodyList: [{bodyId: '', bodyName: 'Empty'}],
            modelList: [{modelId: '', modelName: 'Empty'}],
            loading: false,
            error: null
        });
        console.log(store.getState().headerReducer)
    });

    it('Should contains sliderReducer', () => {
        expect(store.getState().sliderReducer).toEqual({
            exterior: true,
            imagesArray: []
        });
    });
});