import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import {inc, dec, rnd} from "./actions";

const initialState = 0;

const store = createStore(reducer)
const {dispatch} = store;

const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd
}, dispatch);

document.getElementById('inc')
    .addEventListener('click', incDispatch);

document.getElementById('dec')
    .addEventListener('click', decDispatch)

document.getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random()*20);
        rndDispatch(payload)
    });

const update = () => {
    document.getElementById('counter')
        .innerHTML = store.getState()
}

store.subscribe(update)
