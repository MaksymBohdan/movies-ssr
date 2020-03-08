import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 10px;
  list-style: none;
`;

export const StyledItem = styled.li`
  width: 300px;
  padding: 5px;
  margin: 5px 10px;
  border: 1px solid black;
  text-align: center;
`;

export const StyledGenres = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
