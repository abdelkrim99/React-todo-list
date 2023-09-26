import { useState } from "react";

export function NewTodoForm ({onSubmit}) {

  const [newItem , setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newItem ==="") return

        onSubmit(newItem);

        setNewItem("");

      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
      <label htmlFor="item"> new item </label>
      <input 
      type="text" 
      value={newItem}
      onChange={e => setNewItem(e.target.value)} 
      id="item"/>
      </div>
      <button className='btn'> add item</button>
    </form>

    )

}