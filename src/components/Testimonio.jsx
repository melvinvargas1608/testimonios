import './Testimonio.css'

const Testimonio = (props) => {
    return (
        <article className='container-testimonio'>
            <div className='container-img-testimonio'>
                <img className='img-testimonio' src={`/testimonio-${props.img}.jpg`} alt={`foto de ${props.name}`} />
            </div>
            <div className='container-text-testimonio'>
                <p className='name-testimonio'><strong>{props.name}</strong> en {props.country}</p>
                <p className='cargo-testimonio'>{props.position} en <strong>{props.company}</strong></p>
                <p className='text-testimonio'>{props.testimony}</p>
            </div>
        </article>
    );
}

export default Testimonio