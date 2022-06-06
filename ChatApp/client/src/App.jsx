import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie' // To be able to Save User Information in the Browser

const apiKey = '' // Setup the Chat || the Key is from my Stream Profile (https://gstrm.io/js-mastery)

const client = StreamChat.getInstance(apiKey) // Call as Funtion and Pass in the api key

// React Arrow Function with export
const App = () => {
  return (
    <div className="app_wrapper">
        {/* Chat Contains Channel Container and Channel List Container */}
        <Chat>
            <ChannellListContainer>

            </ChannellListContainer>

            <ChannelContainer>

            </ChannelContainer>
        </Chat>
    </div>
  )
}

export default App