Redux 
It is an opensource js library for managing the
state of an application in predictable way
Commonly used with libraries like React for
building user interfaces

redux toolkit:
makes the redux easy to work with
official opinionated toolset for efficient redux 
development

How redux works:
Intially you have the hierarchy of components as
follows:
        App 
       /   \
    Header  card
    /           \
    Nav         user
                /   \
              Data  Time

Suppose we have all the components in react aligned in above
hierarchy and if we have some data that needs to be sent
to the Data component at the bottom in general case we use
prop : data to send from top App component to bottom component
also we can use context Api but we will be repetatively sending that data
on each component or using conetxt api countless times
if we have so many components

This is where redux can help
we create a seperate store component outside the hierarchy 
and store our data that needs to be sent so that it can reused
in as many components as possible

libraries from redux
1. react-redux : official react binding for redux
2. redux-toolkit : for efficient readux development

Store:
It is a central place where the state of our application is stored and it can be created using the configureStore function and it holds the entire state tree of our application

now create a folder redux
inside that create a store.js and give this code
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{},
});

to provide the redux store to react
for this need to import newly created store and also provider from "react-redux" in main.jsx
now wrap the entire app component inside the Provider component
<Provider store={store}>
      <App />
 </Provider>
The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. 

Slice?
In the context of redux toolkit a slice is like smaller part of your applications overall state and the instructions on how to change or update that specific part

initial : initial data of our state
give a value for the usestate property here

Reducers:
like instructions on what to do with each slice
define how info in particular slice can be changed or updated
Actions:
they are like requests or commands you give to change a 
specific slice
export the reducers

follow the code to create a slice
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    },
});
export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;

now add slice to the main store
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
export const store = configureStore({
    reducer:{
        //give any name to intial key
        counter: counterSlice,
    },
})
now inorder to use this store in react component
we need to use the redux toolkit
we need to use the useSelector and useDispatch hook
and also the actions from the counter Slice

useSelector  -> allows us to read data from the redux store
useSelector((state)=>state.counter.value)
//here the counter is from the key mentioned in reducer in store.js and value is from property mentioned in intialstate of the counterSlice 

useDisptach -> used to send the actions to the store,
triggering the update to the application store
lets you change the state in your redux store from within the react component
const dispatch = useDispatch();
based on the actions we are going to change the state of value

now create a new folder component outside this redux folder and create a file Counter.jsx and give the following code
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../redux/features/counter/counterSlice";

const Counter =()=>{
    //read data from store
    const count = useSelector((state)=>state.counter.value);
    //changing the data by sending actions to store
    const dispatch = useDispatch();

    return (<div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        </div>);
}
export default Counter;

now at the we need to make sure that our App.jsx is using this Counter.jsx
import Counter from './component/Counter';
const App =()=>{
  return <div>
  <Counter/>
  </div>
};
export default App;
update code on App.jsx

Summary:
initially create a store that will contain all your reducers
then createslice for each of your reducer
now to include this reducer in react component use the useSelector and useDispatch hooks in your react component
Finally make sure your react component is being called from the main sub component(App)
makw sure you wrap your App component with Provider followed by store in your main.jsx component



REDUX TOOLKIT QUERY(RTK):
this is specifically designed to simplify data fetching,caching, and state management for API calls in react and redux application

create a new folder under redux folder by name service
and create a file dummyData.js
initially create a store that will contain all your reducers
Finally make sure your react component is being called from the main sub component(App)
make sure you wrap your App component with Provider followed by store in your main.jsx component

In dummyData.js we are going to provide all logic regarding the API like how are you going to get the data, update the data create the data through api

import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath:"products",
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    endpoints: (builder)=>({
        getAllProducts: builder.query({
            query:()=>'/products',
        }),
    }),
});
export const {useGetAllProductsQuery} = productsApi;

//first we need to import createapi and fetchbasequey
then give reducerPath any name 
then inside the fetchBasequery , baseurl give the default url and then in endpoints we are going to send requests to specific url query: '/products'.
remember that when we need to get the data from api make sure to use query that is only read the data
but when we want to create the data and push into api and update the data through api we need to use mutation
while exporting, the redux itself will create the hooks defaultly based on the endpoints name
it creates as useEndPointNameQuery
based on url endpoints it will create that hook

now we need to include this api in our store
for that use the following code
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./service/dummyData";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>       //inbuilt
        getDefaultMiddleware().concat(productsApi.middleware),

});
setupListeners(store.dispatch); //inbuilt

create a component folder and create a react file
AllProducts.jsx and give your code
import { useGetAllProductsQuery } from "../redux/service/dummyData";

const AllProducts =()=>{
   const {data,isError,isLoading} = useGetAllProductsQuery();
    console.log(data)
    return (<div>
        {data?.products.map((product)=>(
            <h1 key={product.id}>{product.title}</h1>
        ))}
        </div>);
}
export default AllProducts;v

Now register this component inside your app component
import AllProducts from './component/AllProducts';
const App =()=>{
  return <div>
  <AllProducts/>
  </div>
};
export default App;


for other apis:
update endpoints in dummydata.js 
getProductById,addNewProduct,updateProduct,deleteProduct

write specific react component for each of those endpoit methods in component folder

now update your app.jsx with these react components
for sending id send them in builder as parameter

AddNewProduct api:
we need to use builder.mutation as we are not just reading the data we are add new data writing to it
in dummyData.js add this
addNewProduct: builder.mutation({
            query: (newProduct) => ({
              url: `/products/add`,
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: newProduct,
            }),
          }),

Then add the following code in AddNewProduct.jsx
import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description:
          "This is one of the best and amazing t-shirt in the market",
      };

      await addNewProduct(newProductData);
    } catch (err) {
      console.error("Error adding new product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};
export default AddNewProduct;
Update your App.jsx with AddNewProduct.jsx 

Follow the same method for creating apis for all the 
http methods

