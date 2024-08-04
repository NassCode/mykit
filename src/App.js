import logo from './logo.svg';
import './App.css';
import PersistentDrawerRight from './components/Drawer';
import background from './components/bgm.jpg' 
import PositionedSnackbar from './components/Snkbar';

import { useState } from 'react';

function App() {

  const [appState, setAppState] = useState({categories: 
    [{rep: 'مشاريب', items: ["عصير برتقال", "سحلب", "كوكتيل"]}, 
    {rep: "ارزاز", items: ["برياني", "ابيض", "احمر"]}
  ]})

  function addCategory(category) {
    const categories = [ ...appState]
    categories.categories.push(category)
    setAppState(categories)
    console.log(appState)
  }

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
      <PersistentDrawerRight addCategory={addCategory} categories={appState.categories} />
      <PositionedSnackbar />
    </div>
  );
}

export default App;
