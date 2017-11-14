import React from 'react'
import {Menu, Icon } from 'antd';
import { Link } from 'react-router';


export default class Sidebar extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="/products">
              <Link to={`/products`}>
                <Icon type="appstore-o" />
                <span>Sản phẩm</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/order">
              <Link to={`/orders`}>
                <Icon type="appstore-o" />
                <span>Đơn hàng</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/customer">
              <Link to={`/customer`}>
                <Icon type="appstore-o" />
                <span>Khách hàng</span>
              </Link>
            </Menu.Item>
          </Menu>
	}
}