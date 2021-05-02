import React, {useState} from 'react';

function Button(props){

    const [clicked, setClicked] = useState(false);
    const [tour, setTour] = useState(
        {
            name: "",
            info: "",
            image: "",
            price: ""
        }
    )
    const [newTour, setNewTour] = useState("");
    

    function handleClick(){
        setClicked(!clicked);
    }

    function handleChange(e){
        var value = e.target.value;
        var emri = e.target.name;
       setTour(prevValue => {
           return {...prevValue, [emri]: value}
       })
    }

    function fillForm(){
        return(
            <section className="card">
                <div className="fillForm">
                    <label htmlFor="image">Image Url</label>
                    <input type="Url" placeholder="enter image link" name="image" 
                        onChange={handleChange} value={tour.image}/>
                    <label htmlFor="name">Name</label>
                    <input required type="text" placeholder="Enter Name" name="name" 
                        onChange={handleChange} value={tour.name}/>
                    <label htmlFor="info">Description</label>
                    <textarea name="info" id="" cols="30" rows="10" 
                    onChange={handleChange} value={tour.info}></textarea>
                    <label htmlFor="price">Price</label>
                    <input type="number" placeholder="Enter Price" name="price" 
                    onChange={handleChange} value={tour.price}/>
                    <button type="Submit" className="addBtn" 
                        onClick={() => {
                            props.onAdd(tour);
                            setClicked(!clicked);
                            setTour(
                                {
                                    name: "",
                                    info: "",
                                    image: "",
                                    price: ""
                                }
                            )
                            }}>Add</button>
                </div>
            </section>
        )
    }

    return(
        <section>
            <div>
                
                {clicked ? fillForm() : 
                    <button className="addBtn" type="button" onClick={handleClick}>Add Tour</button>}
                
            </div>
        </section>
    )
}

export default Button;