import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarWrapper,
  SidebarRoute,
  SidebarMenu,
} from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="shop">Tienda</SidebarLink>
          <SidebarLink to="about">Conocenos</SidebarLink>
          <SidebarLink to="signup">Inicia Sesion</SidebarLink>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Registrate</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
