import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
    box-shadow: ${({theme})=>theme.boxshadow};
    background-color: ${({theme})=>theme.background};
`
export const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`
export const LogoContainer = styled.div`
    margin-left: 30px;

    @media (max-width: 480px){
        margin-left: 0px;
    }
`
export const LogoText = styled.h2`
    @media (max-width: 480px){
        font-size: 20px;
    }
`
export const ThemeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;

    @media (max-width: 480px){
        margin-right: 0px;
    }
`
export const ThemeMode = styled.div`
    margin-left: 15px;
    @media (max-width: 480px){
        font-size: 12px;
        margin-left: 5px;
    }
`