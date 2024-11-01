import styled from "styled-components";

export const Formstyled = styled.form`
  text-align: center;
  font-size: 20px;
  background-color: floralwhite;
  margin: 150px 500px 200px 500px;
  padding: 30px;
  width: 600px;
  border: double 5px;
  border-radius: 30px;


@media (max-width: 767px) {
  width: 100%;
  margin: 0 auto;
}`

export const Button = styled.button`
  background-color: rgb(61, 195, 240);
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
color: green;
`;

export const Failure = styled.p`
color: red;
`;

