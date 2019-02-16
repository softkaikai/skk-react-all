import React, { Component } from 'react';

import style from './login.scss';

import { SwitchTip } from '../../store/actions';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            account: '',
            phone: ''
        }
    }

    handleChange = (type, e) => {
        event.preventDefault();
        this.setState({
            [type]: e.target.value
        })
    };

    login = () => {
        store.dispatch(SwitchTip('this is test'));
        this.props.history.push('/main/shop');
    };

    render() {
        return (
            <div className={style.login}>
                <div className={style.box}>
                    <div>
                        <span>用户账号：</span>
                        <input
                            type="text"
                            value={this.state.account}
                            onChange={(e) => this.handleChange('account', e)}
                        />
                    </div>
                    <div className="m-t-10 m-b-10">
                        <span>用户密码：</span>
                        <input
                            type="password"
                            value={this.state.phone}
                            onChange={(e) => this.handleChange('phone', e)}
                        />
                    </div>
                    <button type="button" onClick={this.login}>登录</button>
                </div>
            </div>
        )
    }
}