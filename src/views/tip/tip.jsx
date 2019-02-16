import React, { Component} from 'react';

import style from './tip.scss';

export default class Tip extends Component {
    constructor() {
        super();
        const data = store.getState();
        this.state = data.handleTip;
        store.subscribe(() => {
            const data = store.getState();
            this.setState(data.handleTip);
        });
    }

    render() {
        return (
            <div style={{display: this.state.show ? 'block' : 'none'}} className={style.content}>
                {this.state.text}
            </div>
        )
    }
}