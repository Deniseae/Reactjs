import { 
    Button,
    Card, 
    CardActions, 
    CardContent, 
    CardMedia,
    Typography,

} from "@mui/material";
import { pink } from "@mui/material/colors";

const ItemList = ( {items, deleteProduct, updateProduct} ) => {
    return (
        <div 
        style={{
            display: "flex",
            border:"2px solid pink",  
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            minHeight:"90vh",
            padding:"40px"
            }}>
            {items.map((item)=> {
            return(
            <Card sx={{ width: 345, height: 450 }}>
                <CardMedia
                    sx={{ height: 230 }}
                    image={item.img}
                    title="Productos"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.description}
                    </Typography>
                </CardContent>
                <CardActions style={{height:30, justifyContent:"space-evenly"}}>
                    <Button style={{backgroundColor: "pink"}} variant="contained" size="small">
                        Ver Producto
                        </Button>
                    <Button style={{backgroundColor: "pink"}} variant="contained" size="small" onClick={()=>deleteProduct(item.id)}>
                        Borrar
                        </Button>
                    <Button style={{backgroundColor: "pink"}} variant="contained" size="small"onClick={()=>updateProduct(item.id,{description:"modificacion"})}>
                        Editar
                        </Button>
                </CardActions>
            </Card>
              );
            })};
            </div>
    );
    };

export default ItemList;