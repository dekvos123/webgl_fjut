import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Modal,
  List
} from 'antd';

const addresses = [
  {
    name: "和园3、和园4号楼",
    route: "/c3c4"
  },
  {
    name: "和园1、和园2号楼",
    route: "/"
  }
]

export default class AddressPicker extends Component {
  handleClose = () => {
    this.props.handleClose()
  }

  render() {
    const {
      visible
    } = this.props

    return (
      <Modal
        popup
        visible={visible}
        onClose={this.handleClose}
        animationType="slide-up"
      >
        <List renderHeader={() => <div>地点选择</div>} className="popup-list">
          {addresses.map((item, index) => (
            <Link to={item.route} key={index}>
              <List.Item >{item.name}</List.Item>
            </Link>
          ))}
        </List>
      </Modal>
    )
  }
}
