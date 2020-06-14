import React from 'react';
import ReactDOM from 'react-dom';
import ToLower from './components/ToLower'
import Recette from './components/Recette'
import Pendu from './components/Pendu';

const App = () => {

  return (
    <div>
      <ToLower />
      <Recette />
      <Pendu />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
