import React from 'react'
import {ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './' // Custom Components
import ChatApp from '../Assets/ChatApp.png' // My ChatApp Icon

const Sidebar = () => {
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={ChatApp} alt="ChatApp" width="30" />
      </div>
    </div>



  </div>
}

const ChannelListContainer = () => {
  return (
    <> {/* div */}
      <Sidebar /> {/* Render Sidebar */}
    </>
  )
}

export default ChannelListContainer