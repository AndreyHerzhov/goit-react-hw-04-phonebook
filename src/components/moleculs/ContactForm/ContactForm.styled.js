import styled from "styled-components";

export const NameInputTitle = styled.label`
    font-size: 24px;
    font-weight: 500;
`

export const ContactFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 400px;
    height: 150px;
    border: 1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    
`

export const ContactFormButton = styled.input`
    margin-top: 10px;
    width: 100px;
    height: 20px;
`
 

export const Input = styled.input`
    margin-top: 10px;
    width: 150px;
   
   &:focus{
    border-color: green ;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`