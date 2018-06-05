import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import {
  Modal,
  Menu,
  List,
  Button,
  Layout,
  Header,
  Icon
} from 'antd';
import {
  scenery,
  address
} from './constants';
import AddressPicker from './components/AddressPicker';
import Home from './containers/Home';
import C5c6 from './containers/C5c6';
import C1c2 from './containers/C1c2';
import Aside from './containers/Aside';
import Square from './containers/Square';
import TrackGround from './containers/TrackGround';
import Daohang from './containers/Daohang';
import bgLogo from './assets/img/fjut_logo.jpg';
import fjutHeader from './assets/img/fjut_header.jpg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends Component {
  state = {
    selectorVisible: false,
    navigateVisible: false,
    title: '苍霞湖心岛',
    navigation: 'https://ditu.amap.com/search?id=B024F05NF2&city=350121&geoobj=119.192479%7C26.033787%7C119.198171%7C26.036665&query_type=IDQ&query=%E7%A6%8F%E5%BB%BA%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2(%E6%97%97%E5%B1%B1%E6%A0%A1%E5%8C%BA)&zoom=18',
    current: '1'
  }

  handleNavClick = () => {
    this.setState({
      selectorVisible: true
    })
  }

  handleNavClose = () => {
    this.setState({
      selectorVisible: false
    })
  }

  handleMenuClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  handleLinkClick = (item) => {
    this.setState({
      title: item.name,
      navigation: item.navigation
    })
  }

  handleNavigation = () => {
    this.setState({
      navigateVisible: true
    })
  }

  handleCancelNavigate = () => {
    this.setState({
      navigateVisible: false
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Menu
            onClick={this.handleMenuClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <SubMenu title={<span>校园风景</span>}>
              {
                scenery.map((item) => (
                  <Menu.Item key={item.id}>
                    <Link to={item.route} onClick={() => this.handleLinkClick(item)}>
                      {item.name}
                    </Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>
            <SubMenu title={<span>生活服务场景</span>}>
              {
                address.map((item) => (
                  <SubMenu title={<span>{item.name}</span>} key={item.id}>
                    {
                      item.areas.map((area) => (
                        <Menu.Item key={area.id}>
                          <Link to={area.route} onClick={() => this.handleLinkClick(area)}>
                            {area.name}
                          </Link>
                        </Menu.Item>
                      ))
                    }
                  </SubMenu>
                ))
              }
            </SubMenu>
            <div style={{textAlign: 'right', paddingRight: '10px'}}>
              <span style={{display: 'inline-block', paddingRight: '20px'}}><b>当前位置：</b>{this.state.title}</span>
              <Button type="primary" onClick={this.handleNavigation}>
                {/* <Link to="/daohang"> */}
                  导航
                {/* </Link> */}
              </Button>
            </div>
          </Menu>
          <div style={{backgroundImage: `url(${fjutHeader})`, height: '220px', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          </div>
            <Route exact path="/" component={Home}/>
            <Route path="/c5c6" component={C5c6} />
            <Route path="/c1c2" component={C1c2} />
            <Route path="/a_side" component={Aside} />
            <Route path="/square" component={Square} />
            <Route path="/track_ground" component={TrackGround} />
            <Route path="/daohang" component={Daohang} navigation={this.state.navigation} />
            <Modal
              title="路线导航"
              visible={this.state.navigateVisible}
              onCancel={this.handleCancelNavigate}
              width={1050}
            >
              <iframe src={this.state.navigation} width="1000" height="500" frameborder="0" scrolling="no"></iframe>
            </Modal>
        </div>
      </Router>
    )
  }
}
