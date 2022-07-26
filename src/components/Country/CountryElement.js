import styled from "styled-components";
import {Link} from 'react-router-dom'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    width: 1080px;
    margin: 30px;
    color: ${({theme})=>theme.text};
`
export const TabContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 540px){
        flex-direction: column;
        align-items: flex-start;
    }
`
export const SeachContainer = styled.div`
    height: 50px;
    width: 300px;
    display: flex;
    align-items: center;
    background-color: ${({theme})=>theme.background};
    border-radius: 5px;
    border: 1px solid black;
    padding-left: 10px;
    overflow: hidden;

    @media (max-width: 540px){
        width: 100%;
        margin-bottom: 20px;
    }
`
export const InputSeach = styled.input`
    height: 100%;
    width: 100%;
    background-color: ${({theme})=>theme.background};
    border: none;
    margin-left: 10px;
    color: ${({theme})=>theme.text};
    font-size: 18px;
    outline: none;
    
    ::placeholder{
        color: ${({theme})=>theme.text};
    }
`
export const FilterContainer = styled.div`
    height: 50px;
    width: 150px;
    border-radius: 5px;
    border: 1px solid black;
    overflow: hidden;
    
`
export const FilterSelect = styled.select`
    height: 100%;
    width: 100%;
    background-color: ${({theme})=>theme.background};
    color: ${({theme})=>theme.text};
    padding: 10px;
    outline: none;
    border: none;
`
export const FilterOption = styled.option``

export const CountryContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 30px;
    grid-template-rows: repeat(2,1fr);
    grid-row-gap: 50px;
    
    @media (max-width: 1080px){
        grid-column-gap: 30px;
    }

    @media (max-width: 800px){
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 30px;
    }

    @media (max-width: 480px){
        grid-template-columns: repeat(1,1fr);
    }
`
export const CountryBox = styled.div`
    width: 100%;
    background-color: ${({theme})=>theme.background};
    border-radius: 5px;
    overflow: hidden;
    padding-bottom: 50px;
    box-shadow: ${({theme})=>theme.name ==='light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'no'};
    cursor: pointer;
`
export const LinkName = styled(Link)`
    outline: none;
    border: none;
    text-decoration: none;
    color: ${({theme})=>theme.text};
`
export const ImageCountry = styled.img`
    width: 100%;
    height: 130px;
    object-fit: cover;
`
export const HeadText = styled.h3`
    padding: 10px 20px;
    
`
export const DescContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 5px;
`
export const SubText = styled.h5`
    margin-right: 5px;
    font-weight: 800;
`
export const DescText = styled.p`
    font-size: 12px;
    font-weight: 300;
`
