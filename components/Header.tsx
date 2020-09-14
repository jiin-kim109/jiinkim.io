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
  padding: 10px 0;
  background-color: var(--primary-color);
  color: white;
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;   
  }
`

const HeaderSearch = styled.div`
  flex: 0.4;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;
  border-radius: 6px;

  input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 35vw;   
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
      <Avatar className="avatar" alt={"ref"} src={""} />
      <AccessTimeIcon />
    </HeaderLeft>

    <HeaderSearch>
      <SearchIcon />
      <input placeholder="Search Anything" />
    </HeaderSearch>

    <HeaderRight>
      <HelpOutlineIcon />
    </HeaderRight>

  </HeaderContainer>
);

export default Header;