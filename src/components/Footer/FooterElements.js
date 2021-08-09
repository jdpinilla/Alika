import styled from 'styled-components';
// import { Link as LinkS } from "react-scroll";
// import { Link as LinkR } from "react-router-dom";

export const FooterP = styled.footer`
  height: 160px;
  background: #d9d9ed;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
export const FooterContent = styled.div`
  padding: 0 24px;
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FooterLeft = styled.div``;

export const Title = styled.h3`
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SocialItem = styled.a`
  padding: 12px 6px;
`;

export const FooterBot = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const FooterBotItem = styled.a`
  padding: 0 16px 0 0;
`;

export const FooterNav = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    width: 85%;
    margin-top: 10px;
    margin-left: 24px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3rem;
    text-transform: uppercase;
    font-style: normal;
    letter-spacing: 1px;
  }
`;
export const FooterNavList = styled.ul`
  margin: 0;
  padding: 0;
  border: none;
  display: block;
  list-style-type: none;
  width: 100%;
`;

export const FooterNavItem = styled.li`
  border: solid 1;
  padding: 0 0 35px 0;
  max-width: 1100px;
  border-top: #eaecee 0.2px solid;
`;

export const FooterBase = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
export const SocialMedia_Responsive = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Title_Responsive = styled.h3``;
