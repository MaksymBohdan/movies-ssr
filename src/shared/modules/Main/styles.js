import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleForm = styled.form`
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 5px;
  width: 200px;
  border-radius: 5px;
  margin: 10px;
`;

export const StyledButton = styled.button`
  background-color: blue;
  padding: 10px;
  color: white;
`;
