import React from 'react';
import img from '../assets/img/c1c2.jpg';
import web3D from '../components/web3D';

export default class C1c2 extends React.Component {
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
