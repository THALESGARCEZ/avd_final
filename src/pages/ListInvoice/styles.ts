import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: var(--blue);

  border: 2px solid var(--blue);
  background-color: var(--text-body);
`;

export const LabelStyle = styled.label`
  width: 100%;
  padding: 0 1.5rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const Table = styled.table`
  margin-top: 1rem;
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--blue);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: '000';
    border-radius: 0.25rem;
  }
`;

export const ButtonIcon = styled.button`
  padding: 0 0.5rem;
  height: 3rem;
  background: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    filter: brightness(0.9);
  }
`;
