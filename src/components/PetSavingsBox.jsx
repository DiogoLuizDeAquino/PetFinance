import React, { useState } from 'react';

const PetSavingsBox = ({ initialSavings, onDeposit }) => {
  const [goal, setGoal] = useState(500.00); // Meta inicial de R$ 500,00
  const progress = (initialSavings / goal) * 100;
  const progressColor = progress >= 100 ? 'bg-secondary' : 'bg-primary';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary border-opacity-30 font-roboto text-text">
      <h3 className="text-xl font-syne font-semibold mb-2">Caixinha Pet (Fundo de Emergência)</h3>
      <div className="flex justify-between items-center my-4">
        <div>
          <p className="text-2xl font-bold">R$ {initialSavings.toFixed(2).replace('.', ',')}</p>
          <p className="text-sm text-gray-500">Saldo atual guardado</p>
        </div>
        <button
          onClick={onDeposit}
          className="px-4 py-2 rounded-md bg-secondary text-white font-bold hover:bg-opacity-80 transition-colors"
        >
          Depositar via PIX
        </button>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-700">Meta: R$ {goal.toFixed(2).replace('.', ',')}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${progressColor}`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="goalInput">
          Definir nova meta
        </label>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">R$</span>
          <input
            type="number"
            id="goalInput"
            value={goal}
            onChange={(e) => setGoal(parseFloat(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default PetSavingsBox;