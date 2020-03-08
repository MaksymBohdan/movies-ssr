import React from 'react';
import {
  StyledContainer,
  StyleForm,
  StyledInput,
  StyledButton,
} from './styles';

const MainView = ({ onSubmit, onChange, value }) => (
  <StyledContainer>
    <StyleForm onSubmit={onSubmit}>
      <StyledInput
        type="input"
        onChange={onChange}
        value={value}
        placeholder="Movie name..."
      />
      <StyledButton type="submit">SEARCH</StyledButton>
    </StyleForm>
  </StyledContainer>
);

export default MainView;
