import MainVideo from "./components/MainVideo/MainVideo";
import SuggestionList from "./components/SuggestionList/SuggestionsList";
import CommentList from "./components/CommentList/CommentList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainVideo />
      <SuggestionList />
      <CommentList />
    </div>
  );
}

export default App;
