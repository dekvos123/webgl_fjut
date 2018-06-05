import React from 'react';

export default class Daohang extends React.Component {
  render () {
    console.log(this.props)
    return (
      <iframe src="https://ditu.amap.com/search?id=B0FFHO769W&city=350121&geoobj=119.190617%7C26.032853%7C119.201936%7C26.038579&query_type=IDQ&query=%E7%A6%8F%E5%BB%BA%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2%E8%87%B3%E7%9C%9F%E6%A5%BC2&zoom=17" width="380" height="500" frameborder="0" scrolling="no"></iframe>
    )
  }
}
