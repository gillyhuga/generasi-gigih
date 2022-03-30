import { Component } from "react";
import GifComponent from "../../component/Gif";
import './style.css';

class Search extends Component {
    state = {
        gifs: [],
        text: ""
    }

    handleInput = (e) => this.setState({ text: e.target.value });

    getGifs = async () => {
        const gifs = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
        ).then((response) => response.json());
        this.setState({ gifs: gifs.data });
    };

    render() {
        const { gifs } = this.state;

        console.log(gifs)
        return (
            <div>
                <input onChange={this.handleInput} />
                <button onClick={this.getGifs}>Button</button>
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
}

export default Search;