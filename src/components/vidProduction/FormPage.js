import React from 'react';
import styled from 'styled-components';
import DetailsBar from '../DetailsBar';
import InputSide from '../InputSide';
import img from '../../assets/img/dark-purple.jpg'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-image: url(${img}); 
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 65%;
  min-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 0px;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  text-align: center;
`;

const TextTwo = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const FormPage = () => {
  return (
    <div id= "FormPage">
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
    </div>
  );
};

export default FormPage;