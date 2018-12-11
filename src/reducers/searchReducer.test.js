import searchReducer from "./searchReducer";

describe('tests of search reducer', () => {

    it('should return the initial state', () => {
        expect(searchReducer(undefined, {})).toEqual({
                bodyList: [],
                modelList: []
            });
    });

    it('should handle FETCH_BODY_LIST', () => {
        expect(
            searchReducer([], {
                type: 'FETCH_BODY_LIST',
                bodyList: ['body-1', 'body-2']
            })
        ).toEqual({
            bodyList: ['body-1', "body-2"]
        })
    })

    it('should handle FETCH_MODEL_LIST', () => {
        expect(
            searchReducer([], {
                type: 'FETCH_MODEL_LIST',
                modelList: ['model-1', 'model-2']
            })
        ).toEqual({
            modelList: ['model-1', "model-2"]
        })
    })
});