import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import style from './main.scss';
import Shop from '../shop/shop';
import Car from '../car/car';
import Order from '../order/order';
import My from '../my/my';


export default class Main extends Component {
    constructor({match, history}) {
        super();

        this.menus = {
            shop: {
                index: 0,
                name: '淘宝',
                url: `/main/shop`
            },
            car: {
                index: 1,
                name: '购物车',
                url: `/main/car`
            },
            order: {
                index: 2,
                name: '订单',
                url: `/main/order`
            },
            my: {
                index: 3,
                name: '我的',
                url: `/main/my`
            },
        };

        this.match = match;
        this.history = history;
    }

    jump = (url) => {
        this.history.push(url);
    };

    render() {
        const menuList = Object.values(this.menus).map(item => {
            return (
                <li
                    className={ item.url === this.props.location.pathname ? style.nav_active : style.nav}
                    key={item.url}
                    onClick={() => this.jump(item.url)}
                >{item.name}</li>
            )
        })

        return (
            <div className={style.box}>
                <div className={style.left}>
                    <nav>
                        <ul>
                            {menuList}
                        </ul>
                    </nav>
                </div>
                <div className={style.right}>
                    <Route path={`${this.match.url}/shop`} component={Shop} />
                    <Route path={`${this.match.url}/car`} component={Car} />
                    <Route path={`${this.match.url}/order`} component={Order} />
                    <Route path={`${this.match.url}/my`} component={My} />
                </div>
            </div>
        )
    }
}