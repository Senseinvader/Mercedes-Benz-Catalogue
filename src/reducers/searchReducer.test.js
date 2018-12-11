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
});