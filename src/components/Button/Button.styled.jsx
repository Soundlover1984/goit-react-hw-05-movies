import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 12px 8px 4px #cab1b14d;
  cursor: pointer;

  border: ${props =>
    props.status === 'search'
      ? 'none'
      : props.status === 'load'
      ? '1px solid rgba(127, 187, 9, 0.7)'
      : 'grey'};

  background-color: ${props =>
    props.status === 'search'
      ? 'rgba(127, 187, 9, 0.7)'
      : props.status === 'load'
      ? 'transparent'
      : 'grey'};

  color: ${props =>
    props.status === 'search'
      ? 'hsla(0, 0%, 100%, 1)'
      : props.status === 'load'
      ? 'black'
      : 'grey'};

  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: white;
    background-color: rgba(154, 205, 50, 1);
    border: none;
    box-shadow: 0px 12px 8px 4px #0b78474d;
  }

  & > svg {
    margin-right: 8px;
  }
`;