import React from 'react';
import img from '../assets/img/苍霞湖心岛.jpg';
import web3D from '../components/web3D';

export default class Home extends React.Component {
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
