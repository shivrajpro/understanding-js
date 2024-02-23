// init state

const initialState = { counter: 0 };

// action creators
const increment = () => {
    return { type: 'increment' }
}

const decrement = () => {
    return { type: 'decrement' }
}

// reducer
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    return state;
}

const enhancers = Redux.compose(newState, newDispatch)
const store = Redux.createStore(counterReducer, initialState, enhancers);

renderState();
store.subscribe(renderState);

function renderState() {
    const state = store.getState();

    console.log('state', state);
    document.getElementById('counter').innerHTML = state.counter;
}

document.getElementById('increment').addEventListener('click', function () {
    store.dispatch(increment());
    // renderState();
})
document.getElementById('decrement').addEventListener('click', function () {
    store.dispatch(decrement());
    // renderState();
})


function newDispatch(createStore) {
    return function (reducer, preloadedState, enhancers) {
        let store = createStore(reducer, preloadedState, enhancers);

        function newDispatch(action) {
            const result = store.dispatch(action);
            console.log('Hello world, Perform logging'); //purpose of enhancers
            return result;
        }
        return { ...store, dispatch: newDispatch }
    }
}

function newState(createStore) {
    return function (reducer, preloadedState, enhancers) {

        let store = createStore(reducer, preloadedState, enhancers);

        function newState() {
            const state = store.getState();
            return {
                ...state,
                msg: "hello world"
            }
        }

        return { ...store, getState: newState }
    }
}