import styled from 'styled-components'
import {Field} from 'formik'

export const ContainerPage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const InsideContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 50px 0;;
    background-color: #f1f1f1;
    border-radius: 5px;

    @media screen and (max-width: 760px) {
        display: block;
        padding: 20px;
    }
`;

export const InputForm = styled.div`
background-color: #fff;
margin: 10px 0;
display: block;
width: 40%;
border-radius: 5px;

@media screen and (max-width: 760px) {
    width: 100%;
    }
`;

export const FormContent = styled.div`
    padding: 10px;

h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-left: 20px;
    position: relative;
    top: 10px;
    color: #DBB95A;
}

div {
    margin-left: 20px;
}

button {
    margin: 50px 0px 10px 20px;
    background-color: black;
    border: none;
    color: white;
    width: 40%;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
}

button:hover {
    background-color: #292929;
}
`;

export const FieldText = styled(Field)`
border: none;
border-bottom: 1px solid #ccc;
width: 95%;
height: 25px;
font-family: 'Montserrat', sans-serif;
color: #3E4042;
font-size: 14px;
font-weight: bold;

`;

export const ErrorLabel = styled.div `
position: relative;
right: 20px;

p{
    color: red;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
}
`;

export const Results = styled.div `
background-color: #fff;
height: 406px;
margin: 10px 0;
width: 40%;
border-radius: 5px;

@media screen and (max-width: 760px) {
    width: 100%;
    margin-top: 20px;
    }`;

export const Title = styled.h1 `
    font-family: 'Montserrat', sans-seriff;
    text-align: center;
    font-size: 14px;
    color: black;
    
`;

export const ContentResults = styled.div`
    padding: 10px;

h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-left: 20px;
    position: relative;
    top: 10px;
    color: #DBB95A;
}

div {
    margin-left: 20px;
}

p {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    width: 95%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

`;