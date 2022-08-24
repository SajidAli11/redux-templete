
import React from 'react'
import ReactDOM from "react-dom";

import Navbar from './component/NavBar/Navbar';

import { Layout } from 'antd';



const Index = () => {
  return ( <>
  <Layout style={{backgroundColor:"white"}}>
    <Navbar />
   </Layout>
  </> );
}
 
let root=document.getElementById('app')
ReactDOM.render(<Index />,root)