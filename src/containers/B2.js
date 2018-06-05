import React from 'react';
import img from '../assets/img/B2楼.jpg';
import web3D from '../components/web3D';

export default class B2 extends React.Component {
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
