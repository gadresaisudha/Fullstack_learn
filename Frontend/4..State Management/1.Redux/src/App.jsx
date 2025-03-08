import AllProducts from './component/AllProducts';
import SpecificProduct from './component/SpecificProduct';
import Counter from './component/Counter';
import AddNewProduct from './component/AddNewProduct';
const App =()=>{
  return <div>
  <Counter/>
  <AllProducts/>
 <SpecificProduct />
  <AddNewProduct />
 {/* <UpdateProduct productId={4} /> 
      <DeleteProduct productId={2} />*/}
  </div>
};
export default App;
