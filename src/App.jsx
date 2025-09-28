import React, { useState } from 'react';
import SelectionScreen from './components/SelectionScreen';
import MagazineScreen from './components/MagazineScreen';
import { MAGAZINES_DATA } from './data/magazines';

function App() {
  const [selectedMagazineId, setSelectedMagazineId] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const selectedMagazine = selectedMagazineId ? MAGAZINES_DATA[selectedMagazineId] : null;

  // FUNÇÃO PARA FORÇAR TELA CHEIA
  const enterFullScreen = () => {
    const element = document.documentElement; // Pega o elemento raiz da página
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
      element.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  return (
    <div className="w-full h-full">
      {/* Mostra o botão de tela cheia apenas na tela de seleção */}
      {!selectedMagazineId && !isFullScreen && (
        <button
          onClick={enterFullScreen}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition-colors"
        >
          Entrar em Modo Exibição
        </button>
      )}

      <SelectionScreen onSelectMagazine={setSelectedMagazineId} />

      {selectedMagazine && (
        <MagazineScreen 
          magazine={selectedMagazine} 
          onClose={() => setSelectedMagazineId(null)}
        />
      )}
    </div>
  );
}

export default App;