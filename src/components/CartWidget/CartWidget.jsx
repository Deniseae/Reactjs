import{HiShoppingCart} from "react-icons/hi"

const CartWidget =() => {
    return (
        <div> 
            <HiShoppingCart size={40} color="white"/>
            <span>0</span>
        </div>
    )
}
export default CartWidget