import React from 'react';
import NavbarInterface from './navbarInterface/NavbarInterface';
import ContentInterfaceImg from './contentInterfaceImg/ContentInterfaceImg';
import ContentSite from './contentsite/ContentSite';
import Earth from './earth/Earth';
import GetStarted from './getstarted/GetStarted';
import Footer from './footer/Footer';

const Interface = ({setMyMode}) => {
  return (
        <>
            <NavbarInterface setMyMode={setMyMode}/>
            <ContentInterfaceImg/>
            <ContentSite/>
            <Earth/>
            <hr style={{ border: 'none', borderTop: '2px solid #7b1fa2', width: '100%'}} />
            <GetStarted/>
            <hr style={{ border: 'none', borderTop: '2px solid #7b1fa2', width: '100%'}} />
            <Footer/>
        </>
  )
}

export default Interface



