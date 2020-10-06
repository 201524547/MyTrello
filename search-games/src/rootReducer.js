import appReducer from './app.reducer'

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    appReducer,
});

export default rootReducer;