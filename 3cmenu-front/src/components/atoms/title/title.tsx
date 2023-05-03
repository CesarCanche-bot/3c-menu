import React from 'react'

import { Props } from './types';

const Title = (props: Props) => {
    return <h1 className={props.className}>{props.children}</h1>
}

export default Title;