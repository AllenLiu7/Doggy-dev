import SideBarLink from './sideBarLink';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleIcon from '@material-ui/icons/People';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HelpIcon from '@material-ui/icons/Help';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

export default function SideBarLinkList({ show }: { show: boolean }) {
  return (
    <>
      <SideBarLink render={() => <RssFeedIcon />} linkName='Feed' />
      <SideBarLink render={() => <ChatIcon />} linkName='Chats' />
      <SideBarLink render={() => <VideoLibraryIcon />} linkName='Videos' />
      <SideBarLink render={() => <PeopleIcon />} linkName='Groups' />
      <SideBarLink render={() => <BookmarkIcon />} linkName='Bookmarks' />
      <SideBarLink render={() => <HelpIcon />} linkName='Questions' />
      <SideBarLink render={() => <WorkIcon />} linkName='Jobs' />
      <SideBarLink render={() => <EventIcon />} linkName='Events' />
      <SideBarLink render={() => <MenuBookIcon />} linkName='Courses' />
      <SideBarLink
        show={show}
        render={() => <WbSunnyIcon />}
        linkName='Weather'
      />
      <SideBarLink
        show={show}
        render={() => <InvertColorsIcon />}
        linkName='Blood Donation'
      />
    </>
  );
}
