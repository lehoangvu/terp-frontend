import React from 'react'
import { Link } from 'react-router'
import { currency } from './../../helpers'

import { Table, Tag, InputNumber } from 'antd'
import { Checkbox, Input } from 'antd'


class SelectProductView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			q: ''
		}
		this.onSearching = this.onSearching.bind(this)
	}

	onSearching(e) {
		this.setState({
			q: e.target.value
		})
	}

	render() {
		const { products, onAddProduct, selected } = this.props
		const { q } = this.state
		return <div>
			<div>
				<h2>Sản phẩm</h2>
				<Input onChange={this.onSearching} value={this.state.q} />
			</div>
			<Table 
				dataSource={(()=>{
					let sources = []
					if(q === '') {
						sources = products
					} else {
						products.map(product => {
							if(encodeURI(product.name.toLowerCase()).search(encodeURI(q.toLowerCase())) !== -1) {
								sources.push(product);
							}
						})
					}
					return sources;
					})()} 
				pagination={false}
				rowKey="id" 
				showHeader={false} 
				columns={ [
					{ 
						title: '',
						key: 'image',
						width: '50px',
						render: (text, record) => (
							<img src={record.image} width="40"	/>
						)
					},
					{ 
						title: 'Sản phẩm', key: 'name',
						render: (text, record) => (
							<div>
								<label style={{fontSize: '14px'}}>{record.name}</label>
							{
								record.config.map((item) => {
									let value = 0
									if(typeof selected[item.id] !== 'undefined') {
										value = selected[item.id]
									}
									return <p style={{marginBottom: '10px'}}>
										<label>
											<b>{item.name}</b> <span style={{'color': 'red'}}>{currency(item.price)}</span>  x <InputNumber style={{width: '50px'}} min={0} value={value} onChange={(value) => onAddProduct(item.id, value)} />
										</label>
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
