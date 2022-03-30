import { useEffect, useState } from "react";
import GifComponent from "../../component/Gif";
import './style.css';

function Search() {

    const [gifs, setGifs] = useState([])
    const [text, setText] = useState("")

    const handleInput = (e) => setText(e.target.value);

    useEffect(() => {
        getGifs()
    },[]);

    const getGifs = async () => {
        const gifs = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
        ).then((response) => response.json());
        setGifs(gifs.data)
    };

    return (
        <div>
            <input onChange={handleInput} />
            <button onClick={getGifs}>Button</button>
            <div className="container">
                {gifs.length ?
                    gifs.filter(e => e.rating === 'g').map(e =>
                        <GifComponent
                            key={e.id}
                            title={e.title}
                            image={e.images.fixed_width.url}
                            rating={e.rating}
                        />
                    )
                    :
                    null
                }
            </div>
        </div>

    );
}

export default Search;