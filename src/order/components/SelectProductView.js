import React from 'react'
import { Link } from 'react-router'
import { currency } from './../../helpers'

import { Table, Tag } from 'antd'
import { Checkbox } from 'antd'

class SelectProductView extends React.Component {
	constructor(props) {
		super(props)
	}

	getTotalPrice() {
		const { products, selected } = this.props
		let total = 0
		products.map(item => {
			item.config.map(config => {
				if(selected.indexOf(config.id) != -1) {
					total += config.price
				}
			})
		})
		return currency(total)
	}

	render() {
		const { products, onAddProduct, selected } = this.props
		return <div style={{
			margin: 'auto',
			width: '500px'
		}}>
			<h3>{selected.length} SP được chọn, <span style={{color: '#f00'}}>{this.getTotalPrice()}</span></h3>
			<span className="ant-divider" />
			<Table 
			dataSource={products} 
			pagination={false}
			rowKey="id" 
			showHeader={false} 
			columns={ [
				{ title: 'ID', dataIndex: 'id', key: 'id', width: '80px' },
				{ 
					title: '',
					key: 'image',
					width: '86px',
					render: (text, record) => (
						<img src={record.image} width="80"	/>
					)
				},
				{ 
					title: 'Sản phẩm', key: 'name',
					render: (text, record) => (
						<div>
							<label>{record.name}</label>
						{
							record.config.map((item) => {
								return <p>
									<Checkbox 
							            checked={selected.indexOf(item.id) != -1}
							            onChange={() => {onAddProduct(item.id)}}>
										<label>{item.name} <span style={{'color': 'red'}}>{currency(item.price)}</span></label>
									</Checkbox>
								</p>
							})
						}
						</div>
					)
				}
			]} />
		</div>
	}

}
export default SelectProductView
