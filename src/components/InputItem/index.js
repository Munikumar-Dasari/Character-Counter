import './index.css'

const InputItem = props => {
  const {inputDetails} = props
  const {userEnteredText, textLength} = inputDetails

  return (
    <li>
      <p className="input-item">
        {userEnteredText} : {textLength}
      </p>
    </li>
  )
}

export default InputItem
