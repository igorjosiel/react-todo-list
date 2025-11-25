import './select-input.style.css';

export function SelectInput (props) {
    return (
        <select {...props} className='select-input'>
            <option value="">Prioridade</option>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
        </select>
    );
}
