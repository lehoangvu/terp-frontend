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
	            id: 0
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

	changeCustomer(customer) {
		this.setState({
			customer
		})
	}

	render() {
		const { products } = this.props
		const selectedProducts = this.state.products
		console.log(selectedProducts);
		return <div>
			{selectedProducts.length};
			<Row gutter="60">
				<Col span="8">
					<SelectProductView products={products} selected={selectedProducts} onAddProduct={this.addProduct.bind(this)} />
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