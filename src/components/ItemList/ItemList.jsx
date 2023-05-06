import { 
    Button,
    Card, 
    CardActions, 
    CardContent, 
    CardMedia,
    Typography,

} from "@mui/material";

const ItemList = ( {items} ) => {
    return (
        <div 
        style={{
            display: "flex",
            border:"2px solid pink",    
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
                    <Button variant="contained" size="small">Ver Producto</Button>
                </CardActions>
            </Card>
              );
            })};
            </div>
    );
    };

export default ItemList;