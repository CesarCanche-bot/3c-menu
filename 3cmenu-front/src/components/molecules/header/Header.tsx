import React from 'react';
import Title from '../../atoms/title/title';
import Subtitle from '../../atoms/subtitle/subtitle';

import backgroundImage from "./Chichen.jpg"

import './header.css'

import {Props} from './types';

const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',}

const Header = (props : Props) => {
    return <div className={props.clasName} style={style}>
        <div>
            <Title className='main-title block'>{props.title}</Title>
            <Subtitle className='main-subtitle block'>{props.subtitle}</Subtitle>
        </div>
        
    </div>
}

export default Header;
