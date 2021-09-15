import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatIcon from '@material-ui/icons/Chat';
import EventIcon from '@material-ui/icons/Event';
import HelpIcon from '@material-ui/icons/Help';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WorkIcon from '@material-ui/icons/Work';

import SideBarLink from './sideBarLink';

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
