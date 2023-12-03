
import './App.css'

function App() {
  const title = 'Welcome to the new website';
  const likes = 50;
  // const person = { name: 'yoshi', age:'30'}
  const link = "http://www.google.com";

  return (
    <div className='App'>
      <div className='content'>
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/*<p>{ person }</p>*/}

        <p>{ 10 }</p>
        <p>{ "hello, ninjas"}</p>
        <p>{ [1,2,3,4,5] }</p> {/*Outputs all elements together as a string*/}
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Sites</a>
      </div>
    </div>
  )
}

export default App
