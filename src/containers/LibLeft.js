import React from 'react';
import img from '../assets/img/图书馆侧门-左.jpg';
import web3D from '../components/web3D';

export default class LibLeft extends React.Component {
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
