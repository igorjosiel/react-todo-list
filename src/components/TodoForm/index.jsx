import { use } from "react";
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { DateInput } from "../DateInput";
import { SelectInput } from "../SelectInput";
import TodoContext from '../TodoProvider/TodoContext';
import './todo-form.style.css';

export function TodoForm ({ onSubmit }) {
    const { selectedTodo } = use(TodoContext);

    return (
        <form className="todo-form" action={onSubmit}>
            <TextInput
                id="title"
                name="title"
                label="Título"
                placeholder="Digite um título para o item"
                required
                defaultValue={selectedTodo?.title}
            />

            <TextInput
                id="description"
                name="description"
                label="Descrição"
                placeholder="Digite uma descrição para o item"
                required
                defaultValue={selectedTodo?.description}
            />

            <DateInput
                id="date"
                name="date"
                label="Data"
                required
                defaultValue={selectedTodo?.date}
            />

            <SelectInput
                id="priority"
                label="Prioridade"
                name="priority"
                defaultValue={selectedTodo?.priority}
                options={[
                    {
                        value: "",
                        option: "Prioridade",
                    },
                    {
                        value: "low",
                        option: "Baixa",
                    },
                    {
                        value: "medium",
                        option: "Média",
                    },
                    {
                        value: "high",
                        option: "Alta",
                    },
                ]}
            />
            
            <Button>Salvar Item</Button>
        </form>
    );
}
