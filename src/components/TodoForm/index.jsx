import { Button } from '../Button';
import { TextInput } from '../TextInput';
import './todo-form.style.css';

export function TodoForm ({ onSubmit, defaultValue }) {
    return (
        <form className="todo-form" action={onSubmit}>
            <TextInput
                name="description"
                placeholder="Digite o item que deseja adicionar"
                required
                defaultValue={defaultValue}
            />
            
            <Button>Salvar Item</Button>
        </form>
    );
}
