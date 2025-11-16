import { Button } from '../Button';
import { TextInput } from '../TextInput';
import './todo-form.style.css';

export function TodoForm ({ onSubmit }) {
    return (
        <form className="todo-form" action={onSubmit}>
            <TextInput
                placeholder="Digite o item que deseja adicionar"
                required
            />
            
            <Button>Salvar Item</Button>
        </form>
    );
}
