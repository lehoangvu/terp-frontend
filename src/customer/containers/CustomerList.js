import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Panel } from 'antd';

import { getList } from './../action'

import { CustomPagination } from './../../common'

import CustomerListView from './../components/CustomerListView';

class CustomerList extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { getList } = this.props.actions;
		getList('', 1, 1);
	}

	changePage(page) {
		const { getList } = this.props.actions;
		getList('', page, 1);
	}

	render() {
		const {customers} = this.props;
		return <div className="customer-list">

			<CustomerListView changePage={this.changePage.bind(this)} customers={customers} />
		</div>;
	}
}

const mapStateToProps = (state) => {
    return {
    	customers: {...state.customer.customers}
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
    	getList
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)
