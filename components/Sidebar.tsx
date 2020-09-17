import styled from "styled-components";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { StringFilter } from "@prisma/client";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 80px;

    > hr {
        margin: -10px 10px -10px 0;
        border: 0.5px solid gray;      
    }
`

const SidebarOption = styled.div`
    text-align: center;
    font-size: 14px;
    cursor: pointer;

    :hover {
        background-color: rgba(0,0,0,0.1);
        transition: 0.5s;
    }
`

const ShortcutIcons = styled.div`
    text-align: center;
    margin-top: 40px;

    .MuiSvgIcon-root {
        font-size: 25px;
        margin-right: 10px;
        cursor: pointer;
    }
`

const Sidebar = () => {
    const onClickOption = (elementId: string) => {
        // element which needs to be scrolled to
        var element = document.getElementById(elementId);
        // scroll to element
        if(element){
            if(elementId === "#section-0")
                element.scrollIntoView({ behavior: 'smooth', block: 'end'});
            else
            element.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    }

    return(
        <Container>
            <SidebarOption onClick={() => onClickOption("#section-0")}>
                <h2>About</h2>
            </SidebarOption>

            <SidebarOption onClick={() => onClickOption("#section-1")}>
                <h2>Projects</h2>
            </SidebarOption>

            <SidebarOption onClick={() => onClickOption("#section-2")}>
                <h2>Blog</h2>
            </SidebarOption>

            <SidebarOption onClick={() => onClickOption("#section-3")}>
                <h2>Tech News</h2>
            </SidebarOption>

            <ShortcutIcons>
              <GitHubIcon onClick={() => window.open('https://github.com/jiin-kim109', '_blank')} />
              <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jiin-kim-34581a183/', '_blank')}/>
              <MailOutlineIcon onClick={() => window.location.href="mailto:jiin.kim109@gmail.com"}></MailOutlineIcon>
            </ShortcutIcons>
        </Container>
    );
}


export default Sidebar;