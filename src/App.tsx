import { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://www.gannett-cdn.com/presto/2020/01/26/USAT/80802abd-a62b-4420-8e15-ac4bd08c5929-2020-01-25_LeBron1.jpg?crop=2245,1688,x476,y589&width=2560",
      age: 36,
      note: 'Alleferic to staying on the same team'
    },
    {
      name: "Kobe Briant",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/1200px-Kobe_Bryant_2014.jpg",
      age: 36
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
