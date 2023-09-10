import { useState } from 'react'
import './Style.css'

export default function App() {
  const [newItem , setNewItem] = useState("");
  const [todos , setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
      <label htmlFor="item"> new item </label>
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
      </div>
      <button className='btn'> add item</button>
    </form>
    <h1 className='header'>Todo list</h1>

    <ul className='list'>
      <li>
        <label>
          <input type="checkbox" />
          listItem
          <button className='btn btn-danger'>delete</button>
        </label>
      </li>
    </ul>
    </>
  )
}

