import headerReducer from "./headerReducer";
import CarModel from "../model/carModel";

describe('tests of search reducer', () => {

    it('should return the initial state', () => {
        expect(headerReducer(undefined, {})).toEqual({
                bodyList: [{bodyId: '', bodyName: 'Loading...'}],
                bodyNotLoaded: true,
                modelList: [{modelId: '', modelName: 'Loading...'}],
                modelNotLoaded: true,
                picturesURL: undefined,
                loading: false,
                error: null,
                modelConfiguration: new CarModel(),
                configurationLoaded: false
            });
    });

    it('should handle FETCH_BODIES_REQUEST', () => {
        expect(
            headerReducer([], {
                type: 'FETCH_BODIES_REQUEST'
            })
        ).toEqual({
            bodyNotLoaded: true,
            loading: true,
            modelConfiguration: new CarModel()
        });
    });

    it('should handle FETCH_BODIES_SUCCESS', () => {
        const bodyList = [{bodyId: "13", bodyName: "Sports Tourer"},
                          {bodyId: "15", bodyName: "Shooting Brake"}];

        expect(
            headerReducer([], {
                type: 'FETCH_BODIES_SUCCESS',
                bodyList: bodyList
            })

        ).toEqual({
                bodyList: bodyList,
                loading:false,
            bodyNotLoaded: false
        });
    });

    it('should handle FETCH_BODIES_FAILURE', () => {
       const error = 'error!';

       expect(
           headerReducer([], {
               type: 'FETCH_BODIES_FAILURE',
               error
           })
       ).toEqual({
               error,
           loading: false
           })
    });

    it('should handle FETCH_MODELS_REQUEST', () => {
       expect(
           headerReducer([], {
               type: 'FETCH_MODELS_REQUEST'
        })
       ).toEqual({
            loading: true,
            modelNotLoaded: true
        })
    });

    it('should handle FETCH_MODELS_SUCCESS', () => {
        const modelList = [{modelId: "13", modelName: "Sports Tourer"},
                           {modelId: "15", modelName: "Shooting Brake"}];
        expect(
            headerReducer([], {
                type: 'FETCH_MODELS_SUCCESS',
                modelList: modelList
            })
        ).toEqual({
            modelList,
            loading: false,
            modelNotLoaded: false
        })
    });

    it('should handle FETCH_MODELS_FAILURE', () => {
        const error = 'error!';

        expect(
            headerReducer([], {
                type: 'FETCH_MODELS_FAILURE',
                error: error
            })
        ).toEqual({
            error,
            loading: false
            }
        )
    })
});