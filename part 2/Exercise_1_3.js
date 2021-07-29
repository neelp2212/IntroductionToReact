import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const title = 'Superadvanced web phonebook app'
  const name1 = 'John Doe'
  const phone1 = '358401234567'
  const name2 = 'Jane Doe'
  const phone2 = '44551234567'
  const name3 = 'Foo bar'
  const phone3 = '000'

  return (
    <div>
      <h1>{title}</h1>
      <p>{name1} {phone1}</p>
      <p>{name2} {phone2}</p>
      <p>{name3} {phone3}</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)