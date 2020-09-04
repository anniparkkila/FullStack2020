import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  // create an array "points" with the length of array anecdotes and fill with zeros
  const [points, setPoints] = useState(()=> Array(props.anecdotes.length).fill(0))
  console.log("current points", points)
  // create an array copy of points for updating the points
  const copy = [...points]
  console.log("current points", copy)
  // create variable for the most index with most votes
  const [most, setMost] = useState(0)
 
  const randomAnecdote = () => {
    // selecting a random anecdote by using the length of anecdote to choose random index
    // then set it to variable "selected"
    setSelected(Math.floor(Math.random()*anecdotes.length))

  }

  const voteAnecdote = () => {   
    // Adding 1 vote to the selected index in copy array
    copy[selected] += 1
    // Set updated points to array "points" as they are now in the copy array
    setPoints(copy)
    //console.log("selected index to add 1 = ", copy[selected]);
    //console.log("Math.max(copy)=",Math.max(...copy))
    //console.log("Max index=",copy.indexOf(Math.max(...copy)))

    // Find the index with maximum number of votes and set it to variable "most"
    setMost(copy.indexOf(Math.max(...copy)))
  }


  return (
    <div>
      <Header header={"Anecdote of the date"} />
      <div>{props.anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button onClick={voteAnecdote} text='vote'/>
      <Button onClick={randomAnecdote} text='next anecdote'/>
      <Header header={"Anecdote with most votes"} />
      <div>{props.anecdotes[most]}</div>
      <div>has {points[most]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)