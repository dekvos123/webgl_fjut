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
import { addresses } from './constants';
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
    title: '苍霞湖心岛',
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
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
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
              <Menu.Item key="1">
                <Link to="/">
                  苍霞湖心岛
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/square">
                  青春广场
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/track_ground">
                  田径场
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu title={<span>生活服务场景</span>}>
              <SubMenu title={<span>和园</span>}>
                <Menu.Item key="4">
                  <Link to="/c1c2">
                    和园1、和园2号楼
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/c5c6">
                    和园5、和园6号楼
                  </Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
            <div style={{textAlign: 'right', paddingRight: '10px'}}>
              <span style={{display: 'inline-block', paddingRight: '20px'}}><b>当前位置：</b>京元食堂</span>
              <Button type="primary">
                导航
              </Button>
            </div>
          </Menu>
          <Modal
            popup
            visible={this.state.selectorVisible}
            onClose={this.handleNavClose}
            animationType="slide-up"
          >
            <List renderHeader={() => <div>地点选择</div>} className="popup-list">
              {addresses.map((item, index) => (
                <Link to={item.route} key={index} onClick={() => {this.setState({ title: item.name})}}>
                  <List.Item key={index}>
                    {item.name}
                  </List.Item>
                </Link>
              ))}
            </List>
          </Modal>
          <div style={{backgroundImage: `url(${fjutHeader})`, height: '220px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          </div>
          {/* <div style={{backgroundColor: '#EEF2FB'}}>
            <div style={{backgroundImage: `url(${bgLogo})`, height: '220px', backgroundRepeat: 'no-repeat', backgroundPositionX: 'right', backgroundSize: 'contain'}}>
            </div>
          </div> */}
          {/* <Switch> */}
            <Route exact path="/" component={Home}/>
            <Route path="/c5c6" component={C5c6} />
            <Route path="/c1c2" component={C1c2} />
            <Route path="/a_side" component={Aside} />
            <Route path="/square" component={Square} />
            <Route path="/track_ground" component={TrackGround} />
            <Route path="/daohang" component={Daohang} />
          {/* </Switch> */}
        </div>
      </Router>
    )
  }
}
