import React from 'react'
import { currency } from './../../helpers'

import { Row, Col } from 'antd'

import SelectProductView from './SelectProductView'
import SelectCustomer from './SelectCustomer'

class OrderGenerateView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected_products: [],
			customer: {
				id: null
			},
		}
	}

	addProduct(id) {
		let selected = this.state.selected_products
		if(selected.indexOf(id) === -1) {
			selected.push(id)
		} else {
			selected.splice(selected.indexOf(id), 1)
		}
		this.setState({
			...this.state,
			selected_products: selected
		})
	}

	changeCustomer(customer) {
		this.setState({
			customer
		})
	}

	render() {
		const { selected_products, customer } = this.state
		const { products } = this.props
		return <div>
			<Row gutter="60">
				<Col span="8">
					<SelectProductView products={products} selected={selected_products} onAddProduct={this.addProduct.bind(this)} />
				</Col>
				<Col span="8">
					<SelectCustomer
						customer={customer}
						changeCustomer={this.changeCustomer.bind(this)}
					/>
				</Col>
			</Row>
		</div>
	}

}
export default OrderGenerateView
