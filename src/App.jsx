import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Fashion from './components/Fashion'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "egen",
    password : "Friday@132"
  }

  let myArr = [1, 2, 3, 4];

  var myMap = new Map();

// setting the values
myMap.set("1", 'value1');
myMap.set("2", 'value2');
myMap.set("3", 'value3');
myMap.set("1", "value repeated")

console.log(`Map size: ${myMap.size}`); // 3
console.log(`Key: "1", Value: ${myMap.get("1")}`);    // "value associated with "value1"

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1
console.log(map1.keys.length);



  return (
    <>
      <h1 className='bg-green-400 text-white rounded-xl p-4'>Tailwind Test</h1>
      <Card jang="chaiaurcode" userObject= {myObj} someArr = {myArr} someMap = {{myMap}}
        anotherMap = {map1} />
      <Fashion />
    </>
  )
}

export default App
