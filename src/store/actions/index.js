export const OpenTip = {
    type: 'OpenTip',
    options: {
        text: '',
        show: true
    }
};

export const CloseTip = {
    type: 'CloseTip',
    options: {
        text: '',
        show: false
    }
};


export function SwitchTip(text, timer = 2000) {
    return function (dispatch) {
        dispatch({type: 'OpenTip', options: {text, show: true}});

        setTimeout(() => {
            dispatch({type: 'CloseTip', options: {text, show: false}});
        }, timer)
    }
}


export const ModifyOrder = {
    type: 'ModifyOrder',
    goods: []
};