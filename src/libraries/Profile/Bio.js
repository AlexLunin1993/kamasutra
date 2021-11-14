import './Bio.css';

const Bio = (props) => {
    debugger
    return (
        <div className='Bio'>
            <p><b>Имя:</b> {props.name} </p> 
            <p><b>Статус:</b> {props.status} </p> 
        </div>);
}

export default Bio;