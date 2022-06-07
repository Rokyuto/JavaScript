import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie' // To be able to Save User Information in the Browser

// Everything is already Exported so there is no need to type other things
import { ChannelListContainer, ChannelContainer } from './Components' // Everything is already Exported so there is no need to type other things
import './App.css'

const apiKey = '5mengkanhpdy' // Setup the Chat || the Key is from my Stream Profile (https://gstrm.io/js-mastery)

const client = StreamChat.getInstance(apiKey) // Call as Funtion and Pass in the api key

// React Arrow Function with export
const App = () => {
  return (
    <div className="app_wrapper">
        {/* Chat Contains Channel Container and Channel List Container */}
        <Chat client = { client } theme = "team light">
            <ChannelListContainer>

            </ChannelListContainer>

            <ChannelContainer>

            </ChannelContainer>
        </Chat>
    </div>
  )
}

export default App