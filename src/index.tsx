import React from 'react'
import { createRoot } from "react-dom/client"



import Navbar from './component/NavBar/Navbar';

import { Layout } from 'antd';



const Index = () => {
  return ( <>
  <Layout style={{backgroundColor:"white"}}>
    <Navbar />
   </Layout>
  </> );
}
 


const container = document.getElementById("app");

const root = createRoot(container as HTMLElement);

root.render(<Index />);