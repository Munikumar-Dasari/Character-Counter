import {Component} from 'react'

import {v4} from 'uuid'

import InputItem from '../InputItem'

import './index.css'

class CharacterCounter extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderInputList = () => {
    const {userInputsList} = this.state

    return (
      <ul className="list-container">
        {userInputsList.map(eachList => (
          <InputItem key={eachList.id} inputDetails={eachList} />
        ))}
      </ul>
    )
  }

  renderEmptyImage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
      className="empty-image"
    />
  )

  render() {
    const {userInput, userInputsList} = this.state
    const emptyList = userInputsList.length === 0
    return (
      <div className="bg-container">
        <div className="yellow-container">
          <div className="yellow-head-container">
            <h1 className="yellow-head">
              Count the characters like a <br />
              Boss...
            </h1>
          </div>
          {emptyList ? this.renderEmptyImage() : this.renderInputList()}
        </div>
        <div className="black-container">
          <h1 className="black-head">Character Counter</h1>
          <form className="input-container" onSubmit={this.onAddUserInput}>
            <input
              type="text"
              className="input-text"
              value={userInput}
              onChange={this.onChangeInput}
              placeholder="Enter the Characters here"
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
