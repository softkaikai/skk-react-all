import React , { Component } from 'react';
import Good from './good/good';

import style from './shop.scss';

const goodList = [
    {
        name: '好吃的巧克力',
        id: 'chocolate',
        price: 20,
        weight: 0,
        inventory: 100
    },
    {
        name: '好吃的肉肉',
        id: 'meat',
        price: 15,
        weight: 0,
        inventory: 50
    },
    {
        name: '好吃的水果',
        id: 'fruit',
        price: 6,
        weight: 0,
        inventory: 110
    }
];


export  default  class Shop extends Component {
    constructor() {
        super();

        this.orderList = store.getState().order || [];
        this.listComponent = [];

        this.first = true;
        this.state = {
            goodList: goodList.map((data, index) => {
                data.modifyGood = this.modifyGood;
                data.index = index;
                for (const order of this.orderList) {
                    if (order.id === data.id) {
                        return {...data, ...order};
                    }
                }
                return data;
            })
        };
    }

    modifyGood = (index, weight) => {
        const good = this.state.goodList[index];
        good.weight = weight;
        this.setState({
            goodList: [...this.state.goodList]
        })
    };

    componentWillUnmount() {
        store.dispatch({
            type: 'ModifyOrder',
            goods: JSON.parse(JSON.stringify(this.state.goodList))
        })
    }

    render() {
        this.listComponent = [];
        this.state.goodList.forEach((data, index) => {
            return this.listComponent.push(<Good key={data.id} {...data} />);
        });
        this.first = false;
        return (
            <div style={{overflow: 'hidden'}}>
                {this.listComponent}
            </div>
        )
    }
}