import "./empty-state.styles.css";

export default function EmptyState({ message, ...rest }) {
  return (
    <section className="empty-state" {...rest}>
      <p>{message}</p>

      <img src="./empty.png" alt="Ícone de documento vazio" />
    </section>
  );
}
