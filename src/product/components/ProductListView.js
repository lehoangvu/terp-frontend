import React from 'react'
import { Table, Tag } from 'antd'
import { Link } from 'react-router'
import { currency } from './../../helpers'

class ProductListView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { products } = this.props;
		return <Table 
			dataSource={products} 
			pagination={false}
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
									<Link to={`products/${item.id}`}>{item.name} <span style={{'color': 'red'}}>{currency(item.price)}</span></Link>
								</p>
							})
						}
						</div>
					)
				}
			]} />
	}

}
export default ProductListView
