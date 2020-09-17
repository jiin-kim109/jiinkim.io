import { NextPage } from 'next';
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ParticleEffect from "./ParticleEffect";

const Conatiner = styled.div`

`

const Body = styled.div`
  display: flex;
  flex-direction: row;

  .sidebar {
    position: fixed;
    height: 100%;
    width: 250px;
    background: linear-gradient(0deg, rgba(39,111,191,1) 0%, rgba(10,205,255,1) 32%, rgba(123,211,137,1) 100%);
  }

  .main {
    margin-top: 100px;
    margin-left: 400px;
    width: 100%;
  }
`

const withLayout = (Page: NextPage) => {
  return () => (
    <Conatiner>
      <ParticleEffect />
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