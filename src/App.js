import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      {/* <p>{users.length}</p> */}
      {
        users.map(user=><Users name={user.name} email={user.email} un={user.username}></Users>)    
      }
    </div>
  )
}

function Users(props){
  return (
    <div style={{border: '2px solid gray', backgroundColor:'orange', margin: '1rem', borderRadius: '1rem'}}>
      <h2>name:{props.name}</h2>
      <p>email:{props.email}</p>
      <p>UserName:{props.un}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount]= useState(33);
  const countIncrease= ()=>{
    setCount(count +1);
  }
  const countDecrease= ()=>{
    setCount(count -1);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={countIncrease}>Increase</button>
      <button onClick={countDecrease}>Increase</button>
    </div>
  )
}

/* const products = [
  {Name: 'laptop', price: 45000},
  {Name: 'phone', price: 25000},
  {Name: 'watch', price: 2000},
  {Name: 'tablet', price: 17000}
]
{
  products.map(product=> <Product name={product.Name} price={product.price}></Product>)
}
<Product name="laptop" price="30000"></Product>
<Product name="watch" price="3500"></Product>
<Product name="phone" price="15000"></Product> */

function Product(props){
  return (
    <div className='product'>
      <h3> Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
