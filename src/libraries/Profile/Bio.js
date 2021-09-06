import './Bio.css';

const Bio = (props) => {
    return (
        <div className='Bio'>
            <p><b>Имя:</b> {props.name}</p>
            <p><b>Возраст:</b> {props.age}</p>
            <p><b>Порода:</b> {props.race}</p>
        </div>);
}

export default Bio;