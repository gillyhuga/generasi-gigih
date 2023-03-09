import { useEffect, useState } from "react";
import GifComponent from "../../component/Gif";

import './style.css';

function Trending() {
    const [trending, setTrending] = useState<any[]>([])

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const api = await fetch(
            `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
        ).then((response) => response.json());
        setTrending(api.data)
    };


    return (
        <div>
            <h1>Trending</h1>
            <div className="container">
                {trending.length ?
                    trending.filter(e => e.rating === 'g').map(e =>
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

export default Trending;