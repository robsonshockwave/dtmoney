import { FormEvent } from "react";
import { useForm, Controller } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { control, handleSubmit, setValue, watch } = useForm();
  const data = watch();

  const handleCreateNewTransaction = (data: FieldValues) => {
    console.log(data);

    api.post("/transactions", data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <h2>Cadastrar transação</h2>

        <Controller
          control={control}
          name="title"
          render={({ field }) => <input {...field} placeholder="Título" />}
          defaultValue=""
        />

        <Controller
          control={control}
          name="value"
          render={({ field }) => (
            <input {...field} placeholder="Valor" type="number" />
          )}
          defaultValue=""
        />

        <Controller
          control={control}
          name="category"
          render={({ field }) => <input {...field} placeholder="Categoria" />}
          defaultValue=""
        />

        <TransactionTypeContainer>
          <Controller
            control={control}
            name="type"
            render={() => (
              <RadioBox
                type="button"
                onClick={() => {
                  setValue("type", "deposit");
                }}
                isActive={data?.type === "deposit"}
                activeColor="green"
              >
                <img src={icomeImg} alt="Entrada" />
                <span>Entrada</span>
              </RadioBox>
            )}
            defaultValue=""
          />

          <Controller
            control={control}
            name="type"
            render={() => (
              <RadioBox
                type="button"
                onClick={() => {
                  setValue("type", "withdraw");
                }}
                isActive={data?.type === "withdraw"}
                activeColor="red"
              >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
              </RadioBox>
            )}
            defaultValue=""
          />
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
