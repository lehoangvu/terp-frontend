import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Panel } from 'antd'

import { getCustomerByPhone } from './../action'
import * as productActions from './../../product/action'
import * as customerActions from './../../customer/action'

import OrderGenerateView from './../components/OrderGenerateView'

class OrderCreate extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { getProductList } = this.props.actions
		getProductList()
	}

	render() {
		const {products} = this.props
		return <div className="order-create">
			<OrderGenerateView {...this.props} />
		</div>
	}
}

const mapStateToProps = (state) => {
    return {
    	products: state.product.products,
    	customerSearching: state.order.customer_searching,
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
	    actions: bindActionCreators({
	    	getCustomerByPhone,
	    	getProductList: productActions.getList
	    }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreate)
