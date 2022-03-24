import './style.css';
const ImageComponent = ({ title, image }) => {
    return (
        <div>
            <img src={image} alt="pic" />
            <h3>{title}</h3>
        </div>
    )
}

export default ImageComponent;