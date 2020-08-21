import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Header2 = (props) => {
  return (
    <div>
      <h2>{props.header2}</h2>
    </div>
  )
}


const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Average = (props) => {
  const {good, bad, all} = props
  console.log(good, bad, all)
  return (good-bad)/all
}

const Positives = props => {
  const {good, all} = props
  const positive = good / all * 100
  return (
    <div>
      {positive} %
    </div>
  )
}

const StatisticLine = props => {
  const {text, value} = props
  if (text === 'positive') {
    return (
      <tr><td>{text}</td><td>{value}</td></tr>
    )
  }
  return (
      <tr><td>{text}</td><td>{value}</td></tr>
  )
  
} 

const Statistics = props => {
  const {good, neutral, bad, all} = props
  
  if (all !== 0) {
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="average" value={<Average good={good} bad={bad} all={all}/>}/>
            <StatisticLine text="positive" value={<Positives good={good} all={all}/>}/>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)



  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header header={"Give feedback"} />
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <Header2 header2={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)