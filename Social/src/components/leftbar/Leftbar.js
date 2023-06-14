import React from 'react'
import './leftbar.css'
import { RssFeed as RssFeedIcon, PlayCircle as PlayCircleIcon, Chat as ChatIcon, Group  as GroupIcon, Bookmark as BookmarkIcon, HelpOutline as HelpOutlineIcon, WorkOutline as WorkOutlineIcon, Event as EventIcon, School as SchoolIcon } from '@mui/icons-material';

export default function Leftbar() {
  return (
    <div className="leftbar">
    <div className="leftbarWrapper">
      <ul className="leftbarList">
        <li className="leftbarListItem">
          <RssFeedIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Feed</span>
        </li>
        <li className="leftbarListItem">
          <ChatIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Chats</span>
        </li>
        <li className="leftbarListItem">
          <PlayCircleIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Videos</span>
        </li>
        <li className="leftbarListItem">
          <GroupIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Groups</span>
        </li>
        <li className="leftbarListItem">
          <BookmarkIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Bookmarks</span>
        </li>
        <li className="leftbarListItem">
          <HelpOutlineIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Questions</span>
        </li>
        <li className="leftbarListItem">
          <WorkOutlineIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Jobs</span>
        </li>
        <li className="leftbarListItem">
          <EventIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Events</span>
        </li>
        <li className="leftbarListItem">
          <SchoolIcon className="leftbarIcon" />
          <span className="leftbarListItemText">Courses</span>
        </li>
      </ul>
      <button className="leftbarButton">Show More</button>
      <hr className="leftbarHr" />
      {/* <ul className="sidebarFriendList">
        {Users.map((u) => (
          <CloseFriend key={u.id} user={u} />
        ))}
      </ul> */}
    </div>
  </div>
  )
}
