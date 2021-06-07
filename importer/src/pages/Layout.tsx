import React, { FC } from 'react';

import { LayoutContainerStyled } from './styles';

export const Layout: FC = ({ children }) => (
    <LayoutContainerStyled>
        {children}
    </LayoutContainerStyled>
);