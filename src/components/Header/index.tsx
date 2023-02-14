import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  toggleNewTransactionModal: () => void;
}

export function Header({ toggleNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={toggleNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
