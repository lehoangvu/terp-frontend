import React from 'react'
import { Pagination } from 'antd'

export class CustomPagination extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		const {page, limit, total} = this.props

		return <div style={{
			'text-align': 'right',
			'padding-top': '20px'
		}}>
				<Pagination defaultCurrent={page} total={total} pageSize={limit} />
			</div>
	}
}
