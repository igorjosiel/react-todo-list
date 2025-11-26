import "./empty-state.styles.css";

export function EmptyState () {
    return (
        <section className="empty-state">
            <p>
                Ainda não há tarefas cadastradas, adicione para começar!
            </p>
            
            <img src="./empty.png" alt="Ícone de documento vazio" />
        </section>
    );
}
