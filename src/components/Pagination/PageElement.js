import styled from "styled-components";


export const Container = styled.div`
    margin: 40px 0;
`
export const NumberPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 800px){
        flex-direction: column;
    }
`
export const Page = styled.li`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin: 0 10px;
    @media (max-width: 800px){
        gap: 10px;
    }
`
export const Number = styled.a`
    cursor: pointer;
    color: ${(props)=> props.active ? "red" : ""};
    border-bottom: ${(props)=> props.active ? "1px solid" : ""} ;
`
export const TextNumber = styled.a`
    cursor: pointer;
    color: ${(props)=> props.active ? "red" : ""};
    border-bottom: ${(props)=> props.active ? "1px solid" : ""} ;
    margin: 0px 10px;

    @media (max-width: 800px){
        margin: 20px 0;
    }
`
