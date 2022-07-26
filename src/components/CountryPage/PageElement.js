import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    padding: 50px;
`
export const Wrapper = styled.div`

`
export const BackContainer = styled.div`
    background-color: ${({theme})=>theme.background};
    border: 1px solid;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BackLink = styled(Link)`
    text-decoration: none;
    color:${({theme})=>theme.text};
    height: 100%;
    width: 100%;
    padding: 10px 30px;

`

export const CountryContainer = styled.div`
    display: flex;
    margin: 50px 0;

    @media (max-width: 800px){
        flex-direction: column;
    }
`

export const FlagContainer = styled.div`
    flex: 1;
    width: 100%;
    align-items: start;

    @media (max-width: 800px){
        margin-bottom: 50px;
    }
`
export const FlagImage = styled.img`
    width: 85%;

    @media (max-width: 800px){
        width: 100%;
    }
`

export const AboutContainer = styled.div`
    flex: 1;
`

export const NameContainer = styled.div``
export const Name = styled.h1``

export const DescContainer = styled.div``
export const DescWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
`
export const NameDesc = styled.h4``
export const Desc = styled.div``
export const BorderContainer = styled.div``