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
      <SideBarLink show render={() => <RssFeedIcon />} linkName='Feed' />
      <SideBarLink show render={() => <ChatIcon />} linkName='Chats' />
      <SideBarLink show render={() => <VideoLibraryIcon />} linkName='Videos' />
      <SideBarLink show render={() => <PeopleIcon />} linkName='Groups' />
      <SideBarLink show render={() => <BookmarkIcon />} linkName='Bookmarks' />
      <SideBarLink show render={() => <HelpIcon />} linkName='Questions' />
      <SideBarLink show render={() => <WorkIcon />} linkName='Jobs' />
      <SideBarLink show render={() => <EventIcon />} linkName='Events' />
      <SideBarLink show render={() => <MenuBookIcon />} linkName='Courses' />
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
