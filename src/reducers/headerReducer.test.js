import headerReducer from "./headerReducer";

describe('tests of search reducer', () => {

    it('should return the initial state', () => {
        expect(headerReducer(undefined, {})).toEqual({
                bodyList: [],
                modelList: []
            });
    });

    it('should handle FETCH_BODIES_SUCCESS', () => {
        expect(
            headerReducer([], {
                type: 'FETCH_BODIES_SUCCESS',
                bodyList: [{bodyId: 'body-1', bodyName: 'body-1-name'}, {bodyId: 'body-2', bodyName: 'body-3-name'}],
            })
        ).toEqual({
            bodyList: [{bodyId: 'body-1', bodyName: 'body-1-name'}, {bodyId: 'body-2', bodyName: 'body-3-name'}],
            loading: false
        })
    });

    it('should handle FETCH_MODEL_LIST', () => {
        expect(
            headerReducer([], {
                type: 'FETCH_MODEL_LIST',
                modelList: [{modelId: 'body-1', modelName: 'body-1-name'}, {modelId: 'body-2', modelName: 'body-3-name'}]
            })
        ).toEqual({
            modelList: [{modelId: 'body-1', modelName: 'body-1-name'}, {modelId: 'body-2', modelName: 'body-3-name'}],
            loading: false
        })
    })
});