import React from "react";
import SearchBar from "../../component/SearchBar";
import ImageComponent from "../../component/Image";

const  Home = () => {
    const data  = {
        title: 'Nintendo Plotting GIF by Gaming GIFs',
        url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
      }

    return (
        <div>
            <SearchBar />
            <ImageComponent
            title={data.title}
            image={data.url}
          />
        </div>
    )
}

export default Home;