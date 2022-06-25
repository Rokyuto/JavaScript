import React from 'react'
import { AiFillHome } from "react-icons/ai";
import {BiRocket} from "react-icons/bi";
import {FaGooglePlay} from "react-icons/fa"

const HomeDashboard = () => {
  return (
    <div className='homeShortcuts'>
       <div id="Home">
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Начало</span>
      </a>
      </div>
      <div id="dnevik" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE' }}>
      <a href=''>
        <AiFillHome/>
        <span className='Start' >Дневник</span>
      </a>
      </div>
      <div id="zadachi" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Задачи</span>
      </a>
      </div>
      <div id="spravki" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Справки</span> 
      </a>
      </div>
      <div id="statistiki" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Сатистики</span>
      </a>
      </div>
      <div id="izvun-deinosti" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Извънкласни дейности</span>
      </a>
      </div>
      <div id="uchebni-materiali" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Учебни материали</span>
      </a>
      </div>
      <div id="tests" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Тестове</span>
      </a>
      </div>
      <div id="subitiq" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Събития</span>
      </a>
      </div>
      <div id="sustezaniq" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Състезания</span>
      </a>
      </div>
      <div id="delovodstvo" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Деловодство</span>
      </a>
      </div>
      <div id="administracia" className='dash-home-shortcuts' style={{backgroundColor: '#497FAE'}}>
      <a href=''>
        <AiFillHome/>
        <span className='Start'>Администрация</span>
      </a>
      </div>
      <div className='mobil-apps'>
        <BiRocket/>
        <span className='mobile-apps-text'>Мобилно приложение</span>
        {/* <div id='info-icons'>
        <FaGooglePlay/>
        </div> */}
      </div>
      
    </div>
  )
}

export default HomeDashboard;