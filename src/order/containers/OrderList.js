import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Panel } from 'antd';

import { getList } from './../action'

// import ProductListView from './../components/ProductListView';

class ProductList extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { getList } = this.props.actions;
		getList();
	}

	render() {
		const {products} = this.props;
		return <div className="product-list">

		</div>;
	}
}

const mapStateToProps = (state) => {
    return {
    	...state.product
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
    	getList
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
