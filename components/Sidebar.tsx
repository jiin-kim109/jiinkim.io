import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

const Container = styled.div`
    color: white;
    background-color: var(--primary-color);
    border-top: 1px solid #49274b;
    max-width: 260px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;      
    }

    .header {
        display: flex;
        border-bottom: 1px solid #49274b;
        padding-bottom: 10px;
        padding: 13px;       
    }

    .createIcon {
        padding: 8px;
        color: #49274b;
        font-size: 35px;
        background-color: white;
        border-radius: 999px;
    }
`
const Icon = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 400;       
    }
    .fiberManualRecordIcon {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;       
    }
`

type SidebarProps = {
    channels: Array<{
        id: string,
        name: string
    }>
  }

const Sidebar = ({ channels }: SidebarProps) => (
    <Container>
        <div className="header">
            <Icon>
                <h2>My Portfolio</h2>
                <h3 className="user">
                    <FiberManualRecordIcon className="fiberManualRecordIcon" />
                    Jiin Kim
                </h3>
            </Icon>
            <CreateIcon className="createIcon" />
        </div>

        <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={InboxIcon} title="Youtube"/>
        <SidebarOption Icon={DraftsIcon} title="Draft"/>
        <SidebarOption Icon={InsertCommentIcon} title="Channel"/>
        <SidebarOption Icon={InsertCommentIcon} title="General"/>
        <SidebarOption Icon={DraftsIcon} title="Threads"/>
        <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={InboxIcon} title="Inbox"/>
        <hr />
        <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={ExpandMoreIcon} title="Expand More"/>
        <hr />
        <SidebarOption Icon={AddIcon} title="Add"/>

        {/* Connect to dB and list */}
        {/* <SidebarOption ... /> */}
        {channels.map(channel => {
            <SidebarOption Icon={ExpandMoreIcon} title={channel.name}/>
        })}
    </Container>
)


export default Sidebar;