import {configure} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import {createStore} from "redux";
import rootReducer from "./rootReducer";
import CarModel from "../model/carModel";

configure({ adapter: new Adapter() });

describe('Root reducer', () => {

    let store = createStore(rootReducer);

    it('Should contains headerReducer', () => {
        expect(store.getState().headerReducer).toEqual({
            bodyList: [{bodyId: '', bodyName: 'Loading...'}],
            modelList: [{modelId: '', modelName: 'Loading...'}],
            bodyNotLoaded: true,
            loading: false,
            error: null,
            modelConfiguration: new CarModel(),
            configurationLoaded: false,
            modelNotLoaded: true,
            picturesUrl: undefined
        });
    });

    it('Should contains sliderReducer', () => {
        expect(store.getState().sliderReducer).toEqual({
            exterior: true,
            imagesArray: [],
            modal: false
        });
    });
});