import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { TransactionInput, useTransactions } from "../../hooks/useTransactions";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const { control, handleSubmit, setValue, watch, reset } =
    useForm<TransactionInput>();
  const data = watch();

  const handleCreateNewTransaction = async (data: TransactionInput) => {
    await createTransaction({
      ...data,
      amount: Number(data.amount),
    });

    reset();

    onRequestClose();
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
        />

        <Controller
          control={control}
          name="amount"
          render={({ field }) => (
            <input {...field} placeholder="Valor" type="number" />
          )}
        />

        <Controller
          control={control}
          name="category"
          render={({ field }) => <input {...field} placeholder="Categoria" />}
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
          />
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
