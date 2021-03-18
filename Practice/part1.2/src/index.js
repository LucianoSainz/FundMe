import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <div>
      the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
    button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {

  const [left, setLeft] = useState(0)
  const [rigth, setRigth] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRigthClick = () => {
    setAll(allClicks.concat('R'))
    setRigth(rigth + 1)
  }

  return (
    <>
      {left}
      <Button onClick={handleLeftClick} text='left'/>

      <Button onClick={handleRigthClick} text='rigth' />
      {rigth}
      <History allClicks={allClicks} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root')
)
