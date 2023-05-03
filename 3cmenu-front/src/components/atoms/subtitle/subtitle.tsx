import React from 'react';

import { Props } from './types';

const Subtitle = (props: Props) => {
    return <h2 className={props.className}>{props.children}</h2>
}

export default Subtitle;