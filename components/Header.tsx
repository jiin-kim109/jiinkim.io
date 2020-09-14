import Link from "next/link";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import styled from 'styled-components';

//box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 0 50px;
  background-color: 'white';
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
    font-weight: 700;
  }
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;   
  }
`

const Header = () => (
  <HeaderContainer>

    <HeaderLeft>
      <Avatar>J</Avatar>
      <h3>Jiin Kim</h3>
    </HeaderLeft>

    <HeaderRight>
      <HelpOutlineIcon />
    </HeaderRight>

  </HeaderContainer>
);

export default Header;