import styled from "styled-components";
import { darken, transparentize } from "polished";
import theme from "../../global/theme/theme";

export const Container = styled.form`
  h2 {
    color: ${(props) => props.theme.colors.textTitle};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.colors.borderInput};
    background-color: ${(props) => props.theme.colors.inputBackground};
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.textBody};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.shape};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: transparentize(0.9, theme.colors.green),
  red: transparentize(0.9, theme.colors.red),
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid ${(props) => props.theme.colors.borderInput};
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? colors[props.activeColor]
      : props.theme.colors.inputBackground};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, theme.colors.borderInput)};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textTitle};
  }
`;
