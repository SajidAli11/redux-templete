import React from 'react'
import ReactDOM from "react-dom";


const Index = () => {
  return ( <>
   <h1>Hello React</h1>
  </> );
}
 
let root=document.getElementById('app')
ReactDOM.render(<Index />,root)