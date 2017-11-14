import React from 'react'
import { Link } from 'react-router'

import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

class SelectCustomer extends React.Component {
	constructor(props) {
		super(props)
	}

	onChangeField({ target }) {
		const { changeCustomer, customer } = this.props
		changeCustomer({
			...customer,
			[target.name]: [target.value]
		})
	}

	onChangePhone() {

	}

	onSelectCustomer() {

	}

	render() {
		const { products, onAddProduct, selected } = this.props
		return <div>
			<h2>Thông tin khách hàng</h2>
			<Form onSubmit={() => {return false}}>
				<FormItem label="Số điện thoại">
					<Input name="phone" placeholder="Nhập số điện thoại" />
				</FormItem>
			</Form>
		</div>
	}

}
export default SelectCustomer
