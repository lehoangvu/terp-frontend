import React from 'react'
import { currency } from './../../helpers'

import { Row, Col, Affix } from 'antd'

import SelectProductView from './SelectProductView'
import SelectCustomer from './SelectCustomer'
import OrderSummary from './OrderSummary'

class OrderGenerateView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
	        products: {},
	        customer: {
	        	created: false,
	            id: null,
	            address: ''
	        },
	        note: '',
	        shipping_fee: 0,
	        additional_fee: 0
		}
	}

	addProduct(id, value) {
		const { products } = this.state
		if(value > 0) {
			products[id] = value
		} else {
			delete products[id]
		}

		this.setState({
			...this.state,
			products
		})
	}

	searchCustomerByPhone(value) {
		const { getCustomerByPhone } = this.props.actions;
		getCustomerByPhone(value);
	}

	changeCustomer(customer) {
		console.log(customer);
		const created = customer.id !== null
		this.setState({
			customer: {
				...this.state.customer,
				created,
				...customer
			}
		})
	}

	changeOrderSummary(name, value) {
		let change = {}
		change[name] = value
		this.setState(
			change
		)
	}

	render() {
		const { products } = this.props
		const selectedProducts = this.state.products
		const { customer, note, shipping_fee, additional_fee } = this.state;
		return <div>
			{JSON.stringify(selectedProducts.length)}
			<Row gutter="60">
				<Col span="8" style={{borderRight: '1px solid #ddd'}}>
					<SelectProductView products={products} selected={selectedProducts} onAddProduct={this.addProduct.bind(this)} />
				</Col>
				<Col span="8">
					<Affix offsetTop={30}>
						<SelectCustomer
							customer={customer}
							customerSearching={this.props.customerSearching}
							searchCustomerByPhone={this.searchCustomerByPhone.bind(this)}
							changeCustomer={this.changeCustomer.bind(this)}
						/>
					</Affix>
				</Col>
				<Col span="8" style={{borderRight: '1px solid #ddd'}}>
					<Affix offsetTop={30}>
						<OrderSummary
							changeOrderSummary={this.changeOrderSummary.bind(this)}
							products={products}
							selected={selectedProducts}
							customer={customer}
							note={note}
							shipping_fee={shipping_fee}
							additional_fee={additional_fee}
						/>
					</Affix>
				</Col>
			</Row>
		</div>
	}

}
export default OrderGenerateView
