import React from 'react';
import Title from '../../atoms/title/title';
import Subtitle from '../../atoms/subtitle/subtitle';

import backgroundImage from "./Chichen.jpg"

import './header.css'

import {Props} from './types';

const style = {backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',}

const Header = (props : Props) => {
    return <div className={props.clasName} style={style}>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
    </div>
}

export default Header;
