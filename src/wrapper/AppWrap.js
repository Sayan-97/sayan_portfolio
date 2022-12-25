import React from 'react'
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className='app__wrapper app__flex'>
                <Component />

                <div className='copyright'>
                    <p className='p-text'>Download my CV:</p>
                    <p className='p-text'><a href="https://drive.google.com/file/d/1qlEXhu7VuxCZxUVYZdc-xaLV5X3PEb1j/view?usp=share_link">Click Here</a></p>
                </div>
            </div>

            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap
