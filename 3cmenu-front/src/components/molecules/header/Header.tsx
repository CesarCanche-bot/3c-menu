import React from 'react';
import Title from '../../atoms/title/title';
import Subtitle from '../../atoms/subtitle/subtitle';

import {Props} from './types';

const Header = (props : Props) => {
    return <div className={props.clasName}>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
    </div>
}

export default Header;
