import React from 'react';
import img from '../assets/img/礼园D4D5.jpg';
import web3D from '../components/web3D';

export default class D4D5 extends React.Component {
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
