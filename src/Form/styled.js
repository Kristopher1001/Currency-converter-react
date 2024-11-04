import styled from "styled-components";

export const Formstyled = styled.form`
  text-align: center;
  font-size: 20px;
  background-color: floralwhite;
  margin: 100px auto;
  padding: 30px;
  width: 700px;
  height: 750px;
  border: double 5px;
  border-radius: 30px;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  background-color: rgb(61, 195, 240);
  width: 600px;
  border: 3px solid black;
  font-weight: 700;
  font-size: 30px;
  height: 50px;
  border-radius: 10px;

  &:hover {
    background-color: rgb(77, 186, 222);
  }

  &:active {
    background-color: rgb(131, 222, 252);
  }
`;

export const Input = styled.input`
  height: 40px;
`;

export const Loading = styled.p`
  color: rgb(9, 54, 36);
  font-size: 30px;
`;

export const Failure = styled.p`
  color: red;
  font-size: 30px;
`;

export const Choice = styled.select`
  border: 3px solid black;
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 30px;
  border-radius: 10px;
`;

export const Info = styled.footer`
  font-family: monospace;
  font-size: 20px;
`;