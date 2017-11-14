import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Panel } from 'antd'

import * as productActions from './../../product/action'

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
			<OrderGenerateView order={this.props.order} products={this.props.products} />
		</div>
	}
}

const mapStateToProps = (state) => {
    return {
    	products: state.product.products,
    	order: state.order.order
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
	    actions: bindActionCreators({
	    	getProductList: productActions.getList
	    }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreate)
