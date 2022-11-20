import { useState, useEffect } from 'react';
import styles from './styles.css';

function Fetch_json_data_from_a_url_in_React() {

  const [showPosts, setShowPosts] = useState()

  const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

  let displayData

  // Option 1
  // function pullJson() {
  //   fetch(apiUrl)
  //   .then(response => response.json())
  //   .then(responseData => {
  //     displayData = responseData.map(function(todo) {
  //       return(
  //         <p key={todo.id}>{todo.id} - {todo.title}</p>
  //       )
  //     })
  //     console.log(responseData)
  //     setShowPosts(displayData)
  //   })
  // }

  // Option 2
  async function pullJson() {
    const response = await fetch(apiUrl)  // fetching the json and awaiting the conversion
    const responseData = await response.json()
    console.log(responseData)
    displayData = responseData.map(function (todo) {
      return (
        <p key={todo.id}>{todo.id} - {todo.title}</p>
      )
    })
    console.log(responseData)
    setShowPosts(displayData)
  }

  useEffect(() => {
    pullJson()
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Posts from API</h1>
        {showPosts}
      </main>
    </div>
  );
}

export default Fetch_json_data_from_a_url_in_React;

// [REF] https://www.youtube.com/watch?v=D-U0OkP5kwg&t=23s&ab_channel=TheDigitalCEO