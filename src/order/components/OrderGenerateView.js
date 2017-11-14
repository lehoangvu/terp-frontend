import React from 'react'
import { currency } from './../../helpers'

import { Steps, Icon } from 'antd'
const Step = Steps.Step

import SelectProductView from './SelectProductView'

class OrderGenerateView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			step: 0, //0, 1, 2, 3, 4
			selected_products: []
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

	render() {
		const { step, selected_products } = this.state
		const { products } = this.props
		return <div>
			<Steps>
				<Step status={step == 1 ? 'finish' : 'process'} title="Chọn sản phẩm" icon={<Icon type="appstore-o" />} />
				<Step status={step == 2 ? 'finish' : 'process'} title="Nhập khách hàng" icon={<Icon type="user" />} />
				<Step status={step == 3 ? 'finish' : 'process'} title="Ghi chú đơn hàng" icon={<Icon type="file-text" />} />
				<Step status={step == 4 ? 'finish' : 'process'} title="Hoàn thành" icon={<Icon type="check-circle-o" />} />
			</Steps>
			<div style={{paddingTop: '50px'}}>
				{step == 0 && <SelectProductView products={products} selected={selected_products} onAddProduct={this.addProduct.bind(this)} />}
			</div>
		</div>
	}

}
export default OrderGenerateView
