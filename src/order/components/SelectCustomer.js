import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import { Form, Input, Button } from 'antd'

import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"


const DirectionMap = withGoogleMap((props) => {
	let distance = 0
	if(props.directions) {
		props.directions.routes.map(route => {
			route.legs.map(leg => {
				distance += leg.distance.value
			})
		})
	}
  	return <div>
	  	<span style={{position: 'absolute', zIndex: 9999, top: '10px', right: '10px'}}>{distance}</span>
		<GoogleMap
			defaultZoom={16}>
			<DirectionsRenderer directions={props.directions} />
		</GoogleMap>
	  <div>
})

const FormItem = Form.Item

const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };

class SelectCustomer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			phoneFocus: false,
			directions: null
		}
		this.changeInput = this.changeInput.bind(this)
		this.ggTimeout = false
		this.lastAddr = ''
		this.calcDirection = this.calcDirection.bind(this)
	}

	componentDidMount() {
		
	}

	componentWillReceiveProps(nextProps) {
		const newAddr = nextProps.customer.address
		if(newAddr !== this.lastAddr) {
			const _this = this
			if(this.ggTimeout) clearTimeout(this.ggTimeout)
			this.ggTimeout = setTimeout(() => {
				_this.calcDirection('28/40A Hoàng Bật Đạt, Phường 15, Tân Bình, Thành Phố Hồ Chí Minh', newAddr);
			}, 500)
		}
	}

	calcDirection(origin, destination) {
		this.lastAddr = destination
		const DirectionsService = new google.maps.DirectionsService();
		DirectionsService.route({
			origin,
			destination,
			travelMode: google.maps.TravelMode.DRIVING,
		}, (result, status) => {
			if (status === google.maps.DirectionsStatus.OK) {
				console.log(result);
			  this.setState({
			  	directions: result
			  })
			} else {
			  console.error(`error fetching directions ${result}`);
			}
		});
	}

	changeInput(e) {
		const { name, value } = e.target
		if(name === 'phone') {
			this.props.searchCustomerByPhone(value)
			let {customer} = this.props
			customer['phone'] = value
			customer['address'] = ''
			customer['fullname'] = ''
			customer['created'] = false
			this.props.changeCustomer(customer);
		} else {

			let {customer} = this.props
			customer[name] = value
			this.props.changeCustomer(customer);
		}
	}

	onSelectCustomer(item) {
		this.props.changeCustomer(item);
	}

	getCustomerSearch() {
		const { customerSearching } = this.props
		const { phoneFocus } = this.state

		if(customerSearching.results.length > 0 && phoneFocus) {
			return <div className="customer-recommend-list-wrap">
						<div className="customer-recommend-list">
							{
								customerSearching.results.map(item => {
									return <p className="item" onClick={() => this.onSelectCustomer(item)}>
										<span>{item.phone} - {item.address}</span><br/>
										<em>{item.fullname}</em>
									</p>
								})
							}
						</div>
					</div>
		}
	}
	render() {
		const { customer } = this.props
		return <div>
			<h2 style={{marginBottom: '20px'}}>Thông tin khách hàng</h2>
			<Form onSubmit={() => {return false}} >
				<FormItem label="Số điện thoại" {...formItemLayout} >
					<Input name="phone" value={customer.phone} placeholder="Nhập số điện thoại" onChange={this.changeInput} autoComplete="off" onBlur={ () => {setTimeout(() => {this.setState({phoneFocus: false})}, 300)} } onFocus={ () => {this.setState({phoneFocus: true})} } />
					{this.getCustomerSearch()}
				</FormItem>

				<FormItem label="Tên khách hàng" {...formItemLayout} >
					<Input disabled={customer.created} name="fullname" placeholder="Nhập tên khách hàng" value={customer.fullname} onChange={this.changeInput} />
				</FormItem>

				<FormItem label="Địa chỉ" {...formItemLayout} >
					<Input disabled={customer.created} name="address" placeholder="Nhập địa chỉ" value={customer.address} onChange={this.changeInput} />
				</FormItem>
			</Form>

			<DirectionMap directions={this.state.directions} containerElement={<div style={{ height: `0px`, paddingTop: '100%', position: 'relative'}} />} mapElement={<div style={{ position: 'absolute', height: `100%`, width: '100%', top: 0, left: 0 }} /> }/>
		</div>
	}

}
export default SelectCustomer
