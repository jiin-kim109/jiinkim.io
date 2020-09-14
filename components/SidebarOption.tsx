import { SvgIconProps } from '@material-ui/core';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    aligin-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;       
    }

    > h3 {
        font-weight: 500;
    }

    .MuiSvgIcon-root {
        padding: 10px;
        color: white;
        font-size: 20px;
    }
`

const Content = styled.div`
    padding: 10px 0;    

    .hash {

    }
`

type SidebarOptionProps = {
    Icon?: (props: SvgIconProps) => JSX.Element;
    title: string
}

const SidebarOption = ({Icon, title}: SidebarOptionProps) => {
    return (
        <Container>
            {Icon && <Icon/>}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <Content>
                    <span className="hash">{title}</span>
                </Content>
            )}
        </Container>
    )
}

export default SidebarOption;