import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widget from './components/Widgets/Widget';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      <Widget/>
    </div>
  );
}

export default App;
