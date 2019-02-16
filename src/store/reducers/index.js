import * as actions from '../actions/index';


export function handleTip(state = {text: '', show: false}, action) {
    if (action.type === 'OpenTip') {
        return action.options;
    } else if (action.type === 'CloseTip') {
        return action.options;
    }

    return state;
}


export function order(state = [], action) {
    if (action.type === actions.ModifyOrder.type) {
        return [...action.goods];
    }
    return state;
}
