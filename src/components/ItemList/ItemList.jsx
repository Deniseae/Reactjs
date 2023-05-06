const ItemList = ( {items} ) => {

    return(
        <div style={{display: "flex", border:"2px solid pink"}}>
            {items.map((elemento)=> {
                    return (
                    <div 
                    style={{
                    border:"2px solid grey", 
                    width: "200px", 
                    height:"250px"
                     }}
                     >
                    <img src={elemento.img} alt="" style={{width:"40%"}}/>
                    <h3>{elemento.title}</h3>
                    <h4>{elemento.price}</h4>
                </div>
                 );
                })}
        </div>
        );
};

export default ItemList;