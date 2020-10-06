const { createReducer, createAction } = require("@reduxjs/toolkit")

export const createListStart = createAction('board/createListStart', (id, title)=>{
    return {payload: {title, id}};
})
export const initializeBoardSuccess = createAction("board/initializeBoardSuccess", (ids, entities)=>{
    return {payload:{ids, entities}}
})
export const initializeBoardStart = createAction("board/initializeBoardStart", ()=>{
    return {payload:null}
})

const initialState = {
    ids: [],
    entities: {},
}

const reducer = createReducer(initialState,{

    [initializeBoardSuccess.type]: (state, action)=>{
        const {ids, entities} = action.payload;
        state.ids = ids;
        state.entities = entities;
    },
    [createListStart.type]: (state, action)=>{
        const {id, title} = action.payload;
        const newList = {
            id,
            title,
            cardIds: [],
            cardEntitis:{},
        };
        state.ids.push(id);
        state.entities[id] = newList;      
    }

});

export default reducer;

export const selectBoardIds = state => state.boardReducer.ids;
export const selectBoard = state => state.boardReducer.entities;