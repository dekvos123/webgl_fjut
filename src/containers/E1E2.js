import React from 'react';
import img from '../assets/img/礼园D区门口 知园E1E2.jpg';
import web3D from '../components/web3D';

export default class E1E2 extends React.Component {
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
