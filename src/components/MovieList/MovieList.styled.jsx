import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin: 0 auto;
  padding: 24px;
`;

export const MovieListItem = styled.li`
  width: calc((100%-80px) / 6);
  transform: scale(1);
  border-radius: 12px;

  &:hover {
    transform: scale(1.1);
  }

  &:hover > p {
    opacity: 1;
  }

  img {
    border-radius: 12px;
    height: 100%;
    width: 100%;
  }
`;

export const MovieName = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 178, 108, 0.7);
  border-radius: 12px;
  font-size: 16px;
  color: white;
  font-weight: 500;
  padding: 12px;
  height: 30%;
  opacity: 0;

  & > span {
    position: absolute;
    bottom: 0;
    right: 0;
    /* transform: translateY(-50%); */
    width: 50px;
    background-color: rgba(228, 222, 30, 0.8);
    padding: 10px;
    border-radius: 12px;
  }
`;