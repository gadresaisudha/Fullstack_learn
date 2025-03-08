
import { useGetAllProductsQuery } from "../redux/service/dummyData";

const AllProducts =()=>{
   const {data,isError,isLoading} = useGetAllProductsQuery();
    console.log(data)
    return (<div>
        {data?.products.map((product)=>(
            <p key={product.id}>{product.title}</p>
        ))}
        </div>);
}
export default AllProducts;