import { NextPage } from 'next';
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Conatiner = styled.div`
  .header {
    position: fixed;
    top: 0;
    width: 100%
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 150px;

  .sidebar {
    position: fixed;
    height: 100%;
  }

  .main {
    margin-left: 350px;
    margin-right: 80px;
    width: 100%;
  }
`

const withLayout = (Page: NextPage) => {
  return () => (
    <Conatiner>
      <div className="header">
        <Header/>
      </div>
      <Body>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="main">
          <Page />
        </div>
      </Body>
    </Conatiner>
  )
}
  
export default withLayout