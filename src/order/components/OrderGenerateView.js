import React from 'react'
import { currency } from './../../helpers'

import { Row, Col } from 'antd'

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
	        note: ''
		}
	}

	addProduct(id, value) {
		const { products } = this.state
		products[id] = value
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

	render() {
		const { products } = this.props
		const selectedProducts = this.state.products
		const { customer } = this.state;
		return <div>
			{JSON.stringify(selectedProducts.length)}
			<Row gutter="60">
				<Col span="8" style={{borderRight: '1px solid #ddd'}}>
					<SelectProductView products={products} selected={selectedProducts} onAddProduct={this.addProduct.bind(this)} />
				</Col>
				<Col span="8">
					<SelectCustomer
						customer={customer}
						customerSearching={this.props.customerSearching}
						searchCustomerByPhone={this.searchCustomerByPhone.bind(this)}
						changeCustomer={this.changeCustomer.bind(this)}
					/>
				</Col>
			</Row>
		</div>
	}

}
export default OrderGenerateView


				// <Col span="8">
				// 	<SelectCustomer
				// 		createData={this.props.createData}
				// 		changeCustomer={this.changeCustomer.bind(this)}
				// 	/>
				// </Col>
				// <Col span="8">
				// 	<OrderSummary
				// 		createData={this.props.createData}
				// 		selected_products={selected_products}
				// 	/>
				// </Col>