import React from 'react'
import { Link } from 'react-router'
import { currency } from './../../helpers'

import { Table, Tag, InputNumber } from 'antd'
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
		return <div>
			<Table 
			dataSource={products} 
			pagination={false}
			rowKey="id" 
			showHeader={false} 
			columns={ [
				{ title: 'ID', dataIndex: 'id', key: 'id', width: '90px' },
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
								let value = 0
								if(typeof selected[item.id] !== 'undefined') {
									value = selected[item.id]
								}
								return <p>
									<label>{item.name} <span style={{'color': 'red'}}>{currency(item.price)}</span></label>
									<InputNumber min={0} defaultValue={value} onChange={(value) => onAddProduct(item.id, value)} />
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
