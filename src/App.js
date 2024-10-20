import './App.css'
import {useState} from 'react'

const App = () => {
  const [value, setValue] = useState(false)
  const [text, textValue] = useState('')
  const onClickButton = () => {
    setValue(!value)
  }

  const onChangeText = event => {
    textValue(event.target.value)
  }

  return (
    <div>
      <h1>Editable Text Input</h1>
      {value ? (
        <div>
          <p>{text}</p>
        </div>
      ) : (
        <div>
          <input type="text" value={text} onChange={onChangeText} />
        </div>
      )}
      <button type="button" onClick={onClickButton}>
        {value ? 'Edit' : 'Save'}
      </button>
    </div>
  )
}

export default App
