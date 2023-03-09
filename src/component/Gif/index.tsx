import './style.css';
import { Image} from '@chakra-ui/react'

const GifComponent = ({ title, image, rating }:any) => {
    return (
        <div className='card'>
                <Image src={image}  alt="gif" />
            <h3 className="card-text">{title}</h3>
        </div>
    )
}

export default GifComponent;