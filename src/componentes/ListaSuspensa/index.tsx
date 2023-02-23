import './ListaSuspensa.css'

interface listaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string 
    itens: string[]
}

const ListaSuspensa = (props: listaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento =>
                props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa