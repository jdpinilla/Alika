import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const SearchElement = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 1 : -1)};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const Search_Index = styled.div`
  display: flex;
  position: relative;
  padding: 10px 30px;
  width: 100%;
  height: 70%;
  flex-direction: column;
  background-color: white;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '80px' : '-100%')};
  overflow: scroll;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Search_Form = styled.form`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 8%;
`;

export const Search_Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Search_Bar_Input = styled.input`
  background: 0 0;
  padding-left: 5px;
  width: 100%;
  border: none;
  font-size: 16px;
  vertical-align: middle;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2em;
  text-transform: uppercase serif;
  font-weight: 700;
  font-style: normal;
  color: #979696;
  -webkit-transition: color 0.2s ease-in-out;
  outline: none;
`;

export const Search_Results = styled.div`
  width: 100%;
`;

export const Search_Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search_Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid #efefef;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Search_Products = styled.div`
  width: 90%;
  padding: 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Search_Products_Container = styled.div`
  width: 80%;
  height: 83%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Search_Products_Img = styled.img`
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

export const Search_Product_Link = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: #828282;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 100px;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 0;
  }
`;

export const Search_Product_P = styled.p`
  padding: 5px 20px;
`;

export const Search_Products_Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
`;
