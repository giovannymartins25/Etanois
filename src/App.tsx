import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

const Input = styled.input`
  margin:  10px;
  padding: 10px;
  width:   200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;

const Result = styled.h2`
  margin-top: 20px;
`;

export default () => {

const [gasolina, setGasolina] =  useState("");
const [etanol,   setEtanol]   =  useState("");
const [calculo,  setCalculo]  =  useState("");
const [resp,     setResp]     =  useState("");

const handleCalculate = () => {
  setCalculo(etanol / gasolina )
}

useEffect( () => {
  if (calculo <= 0.7) {
    setResp('Etanol');
  } else {
    setResp('Gasolina');
  }

},[calculo] );
 
return (
  <Container>
     <Input type="number"
           placeholder="Informe o valor da Gasolina"
           onChange={t => setGasolina(t.target.value)}
     />
           
 <Input type="number"
           placeholder="Informe o valor da Etanol"
           onChange={t => setEtanol(t.target.value)}
  />
  
   <Button onClick={handleCalculate}>Calcular</Button>
   <Result>Valor obtido {calculo}%</Result>
   <Result>Abasteça com {resp}</Result>
  </Container>
  )
}