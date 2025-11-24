import { use } from "react";
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import TodoContext from '../TodoProvider/TodoContext';
import './todo-form.style.css';

export function TodoForm ({ onSubmit }) {
    const { selectedTodo } = use(TodoContext);

    return (
        <form className="todo-form" action={onSubmit}>
            <TextInput
                name="title"
                placeholder="Digite um título para o item"
                required
                defaultValue={selectedTodo?.title}
            />

            <TextInput
                name="description"
                placeholder="Digite uma descrição para o item"
                required
                defaultValue={selectedTodo?.description}
            />
            
            <Button>Salvar Item</Button>
        </form>
    );
}
