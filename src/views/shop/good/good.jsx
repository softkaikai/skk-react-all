import React, { Component } from 'react';

import style from './good.scss';


export default class Good extends Component {
    constructor(props) {
        super(props);
    }

    add = () => {
        if (this.props.weight + 1 <= this.props.inventory) {
            this.props.modifyGood(this.props.index, this.props.weight + 1);
        }
    };
    delete = () => {
        if (this.props.weight - 1 >= 0) {
            this.props.modifyGood(this.props.index, this.props.weight - 1);
        }
    };
    changeWeight = (e) => {
        let newVal = e.target.value;
        const reg = /^[+]{0,1}(\d+)$/;
        if (reg.test(newVal)) {
            newVal = Number(newVal);
            if (newVal <= this.props.inventory) {
                this.props.modifyGood(this.props.index, newVal);
            } else {
                this.props.modifyGood(this.props.index, this.props.inventory);
            }
        } else {
            this.props.modifyGood(this.props.index, 0);
        }
    };

    render() {

        return (
            <div className={style.item}>
                <div className={style.item_img}>
                    <img className="full" src="//img.alicdn.com/bao/uploaded/i2/2549841410/O1CN01lca5fJ1MHow0BkqBI_!!2549841410.jpg" alt=""/>
                </div>
                <div>
                    <p className="m-t-5">{this.props.name}</p>
                    <p className="m-t-5">单价：{this.props.price} 元</p>
                    <p className="m-t-5">重量：{this.props.weight} 斤</p>
                    <p className="m-t-5">总计：{this.props.price * this.props.weight} 元</p>
                    <div className="m-t-5">
                        <div className={joinName(style.cal_btn, 'm-r-5')}
                             onClick={this.delete}
                        >-</div>
                        <input type="text"
                               value={this.props.weight}
                               onChange={(e) => this.changeWeight(e)}
                               className={joinName(style.cal_input, 'm-r-5')}/>
                        <div className={style.cal_btn}
                             onClick={this.add}
                        >+</div>
                    </div>
                </div>
            </div>
        )
    }
}