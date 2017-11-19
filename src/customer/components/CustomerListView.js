import React from 'react'
import { Table, Tag } from 'antd'
import { Link } from 'react-router'
import { currency } from './../../helpers'
import moment from 'moment'
class CustomerListView extends React.Component {
	constructor(props) {
		super(props)
		this.changePage = this.changePage.bind(this)
	}

	changePage(page, pageSize) {
		const {changePage} = this.props
		changePage(page)
	}

	render() {
		const { customers } = this.props
		const paging = customers.paging || {
			page: 1,
			limit: 0,
			total: 0
		}
		return <Table 
			dataSource={customers.data} 
			pagination={{
				defaultCurrent: paging.page,
				total: paging.total,
				pageSize: paging.limit,
				onChange: this.changePage
			}}
			columns={ [
				{ title: 'ID', dataIndex: 'id', key: 'id', width: '50px', style: {textAlign: 'center'} },
				{ 
					title: 'Thông tin', key: 'summary',
					render: (text, record) => (
						<div>
							<b>{record.fullname}</b>
							<p>{record.phone}</p>
							<p>{record.address}</p>
							<p>{moment(record.create_at * 1000).format('H:m:s A DD/MM/YYYY')}</p>
						</div>
					)
				}
			]} />
	}

}
export default CustomerListView
