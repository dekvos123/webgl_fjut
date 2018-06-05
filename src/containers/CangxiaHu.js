import React from 'react';
import img from '../assets/img/苍霞湖畔.jpg';
import web3D from '../components/web3D';

export default class CangxiaHu extends React.Component {
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
