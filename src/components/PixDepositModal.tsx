"use client";

import React, { useState } from 'react';

interface PixDepositModalProps {
  onDeposit: (amount: number) => void;
  onClose: () => void;
}

const PixDepositModal: React.FC<PixDepositModalProps> = ({ onDeposit, onClose }) => {
  const [amount, setAmount] = useState<number>(0);

  const handleDeposit = () => {
    if (amount > 0) {
      onDeposit(amount);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center font-roboto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border-2 border-primary border-opacity-30">
        <h2 className="text-xl font-bold text-text mb-4">Depositar via PIX</h2>
        <p className="text-sm text-gray-600 mb-4">Simulação de depósito. O valor será adicionado à sua caixinha de economias.</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary mb-4"
          placeholder="R$"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleDeposit}
            className="px-4 py-2 rounded-md bg-secondary text-white font-bold hover:bg-opacity-80 transition-colors"
          >
            Confirmar Depósito
          </button>
        </div>
      </div>
    </div>
  );
};

export default PixDepositModal;