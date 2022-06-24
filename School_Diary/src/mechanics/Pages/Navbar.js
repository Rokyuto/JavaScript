import React from 'react'
import { AiFillAlert } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href="Dashboard">School diary </a>
        <p>НПГ по КТС – гр. Правец</p>
        <ul >
            <li>
                <a className='navtext' href="/Dashboard"><AiFillAlert/>
                <div id='servise'>Servise</div>
                </a>
            </li>
            <li>
                <a className='navtext' href=""><AiFillBell/>
                <div id='servise'>Notification</div>
                </a>
            </li>
            <li>
                <a className='navtext' href="/"><FiExternalLink/>
                <div id='servise'>Exit</div>
                </a>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar