import styled from "styled-components";
import Logo_lang from "@/public/Logo_lang.svg";

export default function Header () {
    return (
<>
<HeaderContainer>
<BarElement />
<LogoContainer><Logo_lang /></LogoContainer>

<HiddenHeadline>Isabell Urban</HiddenHeadline>
<BurgerMenu>☰</BurgerMenu>
</HeaderContainer>
</>
);
}

const HeaderContainer = styled.div`
display: flex;
position: fixed;
justify-content: space-between;
align-items: center;
top: 0;
width: 100vw;
height: 100px;
`;

const BarElement = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 10px;
background-color: #F2B2AC;
`;

const HiddenHeadline = styled.h1`
  position: fixed;
  color: #fff;
  visibility: hidden;
`;

const LogoContainer = styled.div`
  width: 50%;
  margin-left: 10px;
`;

const BurgerMenu = styled.div`
    font-size: 24px;
    font-weight: bolder;
    margin-right: 20px;
    cursor: pointer;
`;