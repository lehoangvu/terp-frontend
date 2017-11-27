import React from 'react'
import { currency } from './../../helpers'

import { Table } from 'antd'

class OrderSummary extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { selected_products } = this.props
		return <div>
			<h2>Chi tiết đơn hàng</h2>
			<Table 
				dataSource={selected_products}
				rowKey="id"
				columns={ [
					{ 
						title: 'Đơn giá',
						key: 'qty',
						width: '150px',
						render: (text, record) => {
							return <div>
									<span>{record.name}</span><br/>
									<span style={{'color': 'red'}}>{currency(record.price)}</span>
								</div>
						}
						
					}
				]} />
		</div>
	}

}
export default OrderSummary
