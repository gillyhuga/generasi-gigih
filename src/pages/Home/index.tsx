import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../component/SearchBar";
import GifComponent from "../../component/Gif";
import { searchAction } from "../../redux/searchReducer";
import { SimpleGrid, Box } from '@chakra-ui/react'
import './style.css';

function Search() {
    const [gifs, setGifs] = useState<any[]>([])
    const text = useSelector((state: any) => state.search.query);
    const dispatch = useDispatch();

    const handleInput = (e:any) => dispatch(searchAction(e.target.value));

    useEffect(() => {
        getGifs()
    });

    const getGifs = async () => {
        const gifs = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
        ).then((response) => response.json());
        setGifs(gifs.data)
    };

    return (
        <div>
            <h1>Search</h1>
            <SearchBar
                onChange={handleInput}
                onClick={getGifs}
            />

            <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                {gifs.length ?
                    gifs.filter(e => e.rating === 'g').map(e =>
                        <Box height='500px'>
                            <GifComponent
                                key={e.id}
                                title={e.title}
                                image={e.images.fixed_width.url} rating={undefined}                        
                            />
                        </Box>

                    )
                    :
                    null
                }
            </SimpleGrid>
        </div>

    );
}

export default Search;