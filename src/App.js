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
import bgLogo from './assets/img/fjut_logo.jpg';
import fjutHeader from './assets/img/fjut_header.jpg';
import Home from './containers/Home';
import C5c6 from './containers/C5c6';
import C1c2 from './containers/C1c2';
import Aside from './containers/Aside';
import Square from './containers/Square';
import TrackGround from './containers/TrackGround';
import Daohang from './containers/Daohang';
import CangxiaHu from './containers/CangxiaHu';
import Fengyu from './containers/Fengyu';
import D4D5 from './containers/D4D5';
import E1E2 from './containers/E1E2';
import Lib from './containers/Lib';
import LibLeft from './containers/LibLeft';
import LibRight from './containers/LibRight';
import Zhizhen from './containers/Zhizhen';
import E2E3 from './containers/E2E3';
import F2 from './containers/F2';
import Czheng from './containers/Czheng';
import Azheng from './containers/Azheng';
import Ezheng from './containers/Ezheng';
import Fzheng from './containers/Fzheng';
import B1 from './containers/B1';
import B2 from './containers/B2';

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
            <Route path="/cangxia_hu" component={CangxiaHu} />
            <Route path="/fengyu" component={Fengyu} />
            <Route path="/e1e2" component={E1E2} />
            <Route path="/d4d5" component={D4D5} />
            <Route path="/lib" component={Lib} />
            <Route path="/lib_left" component={LibLeft} />
            <Route path="/lib_right" component={LibRight} />
            <Route path="/zhizhen" component={Zhizhen} />
            <Route path="/e2e3" component={E2E3} />
            <Route path="/f2" component={F2} />
            <Route path="/he_zheng" component={Czheng} />
            <Route path="/a_zheng" component={Azheng} />
            <Route path="/zhi_zheng" component={Ezheng} />
            <Route path="/ren_zheng" component={Fzheng} />
            <Route path="/jing_1" component={B1} />
            <Route path="/jing_2" component={B2} />
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
