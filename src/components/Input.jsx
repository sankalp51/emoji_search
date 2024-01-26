import './input.css';
const Input = ({ innerText, getItem, value }) => {

    return (
        <input
            type="text"
            placeholder={innerText}
            value={value}
            onChange={e => getItem(e.target.value)}
        />
    )
}

export default Input;