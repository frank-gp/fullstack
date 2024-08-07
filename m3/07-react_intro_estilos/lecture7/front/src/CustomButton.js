import styled from "styled-components";
console.log(styled);
export const CustomButton = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    color: palevioletred;
    background-color: white;
  }
`;
