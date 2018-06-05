import React from 'react';
import img from '../assets/img/B1楼.jpg';
import web3D from '../components/web3D';

export default class B1 extends React.Component {
  componentDidMount() {
    web3D(img)
  }

  render() {
    return (
      <div id="canvas-frame">
      </div>
    )
  }
}
