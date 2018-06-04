import React from 'react';
import c5c6 from '../assets/img/c5c6.jpg';
import web3D from '../components/web3D';

export default class C5c6 extends React.Component {
  componentDidMount() {
    web3D(c5c6)
  }

  render() {
    return (
      <div id="canvas-frame">
      </div>
    )
  }
}
