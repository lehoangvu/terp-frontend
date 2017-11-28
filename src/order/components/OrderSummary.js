import React from 'react'
import { currency } from './../../helpers'

import { Table, Button, Input, Form } from 'antd'
const FormItem = Form.Item

const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
class OrderSummary extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let total = 0
		const { products, selected, customer, note, shipping_fee, additional_fee, changeOrderSummary } = this.props
		let orderItems = []
		products.map(product => {
			product.config.map(config => {
				if(typeof selected[config.id] !== 'undefined') {
					orderItems.push({
						id: config.id,
						name: product.name + ' - ' + config.name,
						qty: selected[config.id],
						price: config.price
					})
					total += config.price * selected[config.id]
				}
			})
		})
		if(orderItems.length <= 0) {
			return <h2>Chọn sản phẩm!</h2>
		}

		total += 1 * shipping_fee + 1 * additional_fee

		return <div>
			<h2>Chi tiết đơn hàng</h2>
			<Table 
				style={{marginBottom: '20px'}}
				dataSource={orderItems}
				rowKey="id"
				pagination={false}
				columns={ [
					{ 
						title: 'Đơn giá',
						key: 'name',
						render: (text, record) => {
							return <div>
									<span>{record.name}</span><br/>
									<span style={{'color': 'red'}}>{currency(record.price)}</span>
								</div>
						}
						
					}, { 
						title: 'Sl',
						key: 'qty',
						dataIndex: 'qty',
						width: '60px',
						style: {textAlign: 'center'}
					}, { 
						title: 'Thành tiền',
						key: 'price',
						width: '100px',
						style: {textAlign: 'center'},
						render: (text, record) => {
							return <span style={{'color': 'red'}}>{currency(record.price * record.qty)}</span>
						}
					}
				]} />

			<FormItem label="Phí vận chuyển" {...formItemLayout} >
				<Input name="shipping_fee" placeholder="5.000 đ/5km" value={shipping_fee} onChange={(e) => changeOrderSummary('shipping_fee', e.target.value)}/>
			</FormItem>

			<FormItem label="Phụ thu" {...formItemLayout} >
				<Input name="additional_fee" placeholder="Nến, chữ, hộp ..." value={additional_fee} onChange={(e) => changeOrderSummary('additional_fee', e.target.value)}/>
			</FormItem>

			<FormItem label="Ghi chú" {...formItemLayout} >
				<Input.TextArea placeholder="Ghi chú về đơn hàng này" autosize={{ minRows: 2, maxRows: 6 }} value={note} onChange={(e) => changeOrderSummary('note', e.target.value)} />
			</FormItem>

			<FormItem label="Tổng chi phí" {...formItemLayout} >
				<Input disabled={true} name="total" value={total} />
			</FormItem>

			<p style={{textAlign: 'center'}}>
				<Button type="primary" style={{margin: 'auto'}} size="large">Tạo đơn hàng</Button>
			</p>
		</div>
	}

}
export default OrderSummary
