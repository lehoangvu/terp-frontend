import React from 'react';
import { Collapse, Input } from 'antd';
const Panel = Collapse.Panel;
const Search = Input.Search;
export class ProductListCol extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {

	}

	render() {
		const {products} = this.props;
		return <div className="layout-column">
			<Search placeholder="Nhập tên sản phẩm" />
			<h3>Danh sách sản phẩm</h3>
			<Collapse>
			    <Panel header="This is panel header 1" key="1">

			    </Panel>
		  	</Collapse>
	  	</div>
	}
}