import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Header from './header/Header';

const Main = styled(Container)(() => ({
paddingTop: 138,
}));

function MainLayout({ children }: MainLayoutProps) {

return (
<>
  <Header />
  <Main>{children}</Main>
</>
);
}
export interface MainLayoutProps {
children: ReactNode;
}

export default MainLayout;