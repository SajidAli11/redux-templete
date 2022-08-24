import React, {useState} from 'react'
import "antd/dist/antd.min.css";
import { AlertOutlined ,DownOutlined, LoginOutlined,AppstoreTwoTone} from '@ant-design/icons';
import { Layout,Menu,Dropdown, Space, Typography,} from 'antd';
import { LogoIcon,NavbarSlider,Icon,IconDiv, Language,SignUp,SignUpText,} from './Header.styled';
import styled from 'styled-components';


const {Header}=Layout;

 const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['3']}
    items={[
      {
        key: '1',
        label: 'English',
      },
      {
        key: '2',
        label: 'Chinese',
      },
      {
        key: '3',
        label: 'Spanish',
      },
      {
        key: '4',
        label: 'German',
      },
    ]}
  />
);



const Navbar = () => {
  const [size, setSize] = useState(2);
  return (
    
<>


    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' ,lineHeight:'normal' , }}>
      
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{height: '100%', alignItems: 'center'}} >
          
          <LogoIcon><AppstoreTwoTone /></LogoIcon>
          
             
            {/* styled component for logo */}
          
          <NavbarSlider>
          
          {/* <SearchDiv>
          {searchstate&&<SearchInput placeholder="Searching . . ." />}
          <Icon onClick={handleState}><SearchOutlined /></Icon>
          </SearchDiv> */}
          {/* styled component for search input type */}
          
          <IconDiv>
          <Icon><AlertOutlined  /></Icon>
          
          <Language>
          <Dropdown overlay={menu} >
            <Typography.Link style={{color:"white"}}>
             <Space size={size}>
              LN
              <DownOutlined/>
             </Space>
          </Typography.Link>
         </Dropdown>
        
          </Language>
          <SignUp>
          <Icon><LoginOutlined /></Icon>
          
          <SignUpText>SIGN UP</SignUpText>
          </SignUp>
          
          </IconDiv>
          {/* styled component for icons */}

            </NavbarSlider>
      </Menu>


       
        
        
    </Header>
   
  

</>
  )

      }
export default Navbar 