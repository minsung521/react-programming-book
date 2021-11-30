import logo from "./logo.svg";
import "./App.css";
import big from "./big.jpg";
import small from "./small.jpg";
import TodoList from "./TodoList";

function App() {
	return (
		<div className="App">
			{/* <img src={big} alt="big"></img>
			<img src={small} alt="small"></img> */}
			<TodoList />
		</div>
	);
}

export default App;
