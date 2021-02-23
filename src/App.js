import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Amir Khan', 'Salman Khan', 'Shahrukh Khan', 'Newaj Uddin',]
const products =[
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
        </ul>
        <Products product= {products[0]}></Products>
        <Products product= {products[1]}></Products>
        <Person name='Kamal' job='Web Developer'></Person>
        <Person name='Jamal' job='Digital Marketer'></Person>
        <Person name='Khalil' job='Graphics Designer'></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount]= useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>      
      <button onClick={() => setCount(count - 1)}>Decrease</button> 
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} : {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Products(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // const {name, price}= props.product;
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person (props){
  return (
    <div style={{
      border:'2px solid green', 
      margin:'10px', 
      width: '400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
