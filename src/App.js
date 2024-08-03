import logo from './logo.svg';
//import './App.css';
import PersistentDrawerRight from './components/Drawer';
import background from './components/bgm.jpg' 
import PositionedSnackbar from './components/Snkbar';

function App() {
  return (
    <div 
    
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100vh", // Set to viewport height
      overflow: "hidden", // Prevent scrolling
    }}
    
    >
      <PersistentDrawerRight />
      <PositionedSnackbar />
    </div>
  );
}

export default App;
