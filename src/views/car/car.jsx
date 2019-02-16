import React , { Component } from 'react';


export  default  class Car extends Component {
    constructor() {
        super();
        this.state = {
            orderList: store.getState().order || []
        }
    }
    
    componentDidMount() {
        this.setState({
            orderList: store.getState().order || []
        })
    }

    render() {
        let totalPrice = 0;
        const list = this.state.orderList.map(item => {
            totalPrice += item.price*item.weight;
            return (
                <div key={item.id} className="m-t-10">
                    <p>{item.name}</p>
                    <p>单价：{item.price}</p>
                    <p>重量：{item.weight}</p>
                    <p>总计：{item.price*item.weight}</p>
                </div>
            )
        })
        return (
            <div>
                <h3 className="f-s-20">orderList:</h3>
                {list}

                <h3 className="f-s-20 m-t-10">总计：{totalPrice}</h3>
            </div>
        )
    }
}