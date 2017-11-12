import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import Sidebar from './components/Sidebar';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
		};
		this.toggle = this.toggle.bind(this);
	}

  	toggle() {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	}

	render() {
		return <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Sidebar />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 20px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>

            {this.props.children}

          </Content>
        </Layout>
      </Layout>
	}
}

const mapStateToProps = (state) => {
    return {
		
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({

    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
