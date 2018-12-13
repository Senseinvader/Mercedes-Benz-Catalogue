import headerReducer from "./headerReducer";

describe('tests of search reducer', () => {

    it('should return the initial state', () => {
        expect(headerReducer(undefined, {})
        ).toEqual({
                bodyList: [],
                modelList: []
            });
    });

    it('should handle FETCH_BODIES_REQUEST', () => {
        expect(
            headerReducer([], {
                type: 'FETCH_BODIES_REQUEST'
            })
        ).toEqual({

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
                bodyList: bodyList
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
               error
           })
    });

    it('should handle FETCH_MODEL_REQUEST', () => {
       expect(
           headerReducer([], {
               type: 'FETCH_MODEL_REQUEST'
        })
       ).toEqual({

        })
    });

    it('should handle FETCH_MODEL_SUCCESS', () => {
        const modelList = [{modelId: "13", modelName: "Sports Tourer"},
                           {modelId: "15", modelName: "Shooting Brake"}];
        expect(
            headerReducer([], {
                type: 'FETCH_MODEL_SUCCESS',
                modelList: modelList
            })
        ).toEqual({
            modelList
        })
    });

    it('should handle FETCH_MODEL_FAILURE', () => {
        const error = 'error!';

        expect(
            headerReducer([], {
                type: 'FETCH_MODEL_FAILURE',
                error: error
            })
        ).toEqual({
            error
            }
        )
    })
});