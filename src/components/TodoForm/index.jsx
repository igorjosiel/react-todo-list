import { use } from "react";
import Button from '../Button';
import { TextInput } from '../TextInput';
import { DateInput } from "../DateInput";
import { SelectInput } from "../SelectInput";
import TodoContext from '../TodoProvider/TodoContext';
import { LabelInput } from "../LabelInput";
import './todo-form.style.css';

const TITLE_INPUT       = "title";
const DESCRIPTION_INPUT = "description";
const DATE_INPUT        = "date";
const PRIORITY_INPUT    = "priority";

export function TodoForm ({ onSubmit }) {
    const { selectedTodo } = use(TodoContext);

    return (
        <form className="todo-form" action={onSubmit}>
            <LabelInput htmlFor={TITLE_INPUT}>Título</LabelInput>
            <TextInput
                id={TITLE_INPUT}
                name={TITLE_INPUT}
                placeholder="Digite um título para o item"
                defaultValue={selectedTodo?.[TITLE_INPUT]}
                required
            />

            <LabelInput htmlFor={DESCRIPTION_INPUT}>Descrição</LabelInput>
            <TextInput
                id={DESCRIPTION_INPUT}
                name={DESCRIPTION_INPUT}
                placeholder="Digite uma descrição para o item"
                defaultValue={selectedTodo?.[DESCRIPTION_INPUT]}
                required
            />

            <LabelInput htmlFor={DATE_INPUT}>Data</LabelInput>
            <DateInput
                id={DATE_INPUT}
                name={DATE_INPUT}
                defaultValue={selectedTodo?.[DATE_INPUT]}
                required
            />

            <LabelInput htmlFor={PRIORITY_INPUT}>Prioridade</LabelInput>
            <SelectInput
                id={PRIORITY_INPUT}
                name={PRIORITY_INPUT}
                defaultValue={selectedTodo?.[PRIORITY_INPUT]}
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
