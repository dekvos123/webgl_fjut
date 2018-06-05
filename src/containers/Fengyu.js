import React from 'react';
import img from '../assets/img/风雨篮球场.jpg';
import web3D from '../components/web3D';

export default class Fengyu extends React.Component {
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
