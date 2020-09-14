import styled from "styled-components";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Container = styled.div`
    display: flex
    justify-items: end;

    > hr {
        margin: -10px 10px -10px 0;
        border: 0.5px solid gray;      
    }
`

const SidebarOption = styled.div`
    margin: 25px 0px 25px 80px;
`

const ShortcutIcons = styled.div`
    margin-top: 40px;
    margin-left: 80px;

    .MuiSvgIcon-root {
        font-size: 25px;
        margin-right: 10px;
        cursor: pointer;
    }
`

const Sidebar = () => (
    <Container>
        <SidebarOption>
            <h2>About</h2>
        </SidebarOption>

        <hr />

        <SidebarOption>
            <h2>Projects</h2>
        </SidebarOption>

        <SidebarOption>
            <h2>Post</h2>
        </SidebarOption>

        <SidebarOption>
            <h2>News</h2>
        </SidebarOption>

        <ShortcutIcons>
          <GitHubIcon onClick={() => window.open('https://github.com/jiin-kim109', '_blank')} />
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jiin-kim-34581a183/', '_blank')}/>
          <MailOutlineIcon />
        </ShortcutIcons>
    </Container>
)


export default Sidebar;