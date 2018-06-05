import React from 'react';
import img from '../assets/img/信息学院-至真楼1.jpg';
import web3D from '../components/web3D';

export default class Zhizhen extends React.Component {
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
