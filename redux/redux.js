function createStore(reducer, preloadedState) {
    let state = preloadedState;
    const listeners = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action); // updating the state

        //execute the listeners
        listeners.forEach((listener)=>{
            listener();
        })
    }

    function subscribe(listener) {
        listeners.push(listener) //maintain listeners in a list to be executed after dispatch
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}