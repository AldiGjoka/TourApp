import React, {useState} from 'react';
import './index.css';

function Tour({name, info, image, price}){

    const [readMore, setReadMore] = useState(false);

    function handleClick(){
        setReadMore(!readMore);
    }

    return(
        <section className="card">
            <div>
                <img src={image} alt="img" className="image"></img>
            </div>
            <div className="nameInfo">
                <h1>{name}</h1>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="showMore" onClick={handleClick}>
                        {readMore ? 'show less' : 'show more'}
                    </button>
                </p>
            </div>
            <div className="nameInfo">
                <p>Price {price}$</p>
            </div>
        </section>
    );
}

export default Tour;