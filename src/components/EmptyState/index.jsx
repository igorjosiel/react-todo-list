import "./empty-state.styles.css";

export default function EmptyState({ ...rest }) {
  return (
    <section className="empty-state" {...rest}>
      <p>Ainda não há tarefas cadastradas, adicione para começar!</p>

      <img src="./empty.png" alt="Ícone de documento vazio" />
    </section>
  );
}
