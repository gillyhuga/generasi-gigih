import './style.css';
const GifComponent = ({ title, image, rating }) => {
    return (
            <div className='card'>
                <div className="card-image"><img src={image} alt="gif"/></div>
                <h3 className="card-text">{title}</h3>
                <p>Rating : {rating}</p>
            </div>
    )
}

export default GifComponent;