import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1120px;
  margin: -10rem auto 0;

  div {
    background: ${({ theme }) => theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.textTitle};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.shape};
    }
  }
`;
