// src/components/Dashboard.jsx
import React, { useState } from 'react';

// Importe os componentes da mesma pasta (src/components) usando './'
import Navbar from './Navbar';
import PetSavingsBox from './PetSavingsBox';
import PixDepositModal from './PixDepositModal';
import BarChart from './BarChart';

// Dados fictícios de despesas para o gráfico
const DUMMY_EXPENSES = [
  { date: '05/09/2025', category: 'Saúde', value: 120.00, description: 'Vacina' },
  { date: '10/09/2025', category: 'Alimentação', value: 180.00, description: 'Ração Premium' },
  { date: '12/09/2025', category: 'Brinquedos', value: 90.00, description: 'Arranhador' },
  { date: '15/09/2025', category: 'Higiene', value: 60.00, description: 'Areia Sanitária' },
];

const getMonthlyTotals = (expenses) => {
  const totals = {};
  expenses.forEach(exp => {
    totals[exp.category] = (totals[exp.category] || 0) + exp.value;
  });
  return totals;
};

const Dashboard = () => {
  const [savings, setSavings] = useState(250.00);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const monthlyTotals = getMonthlyTotals(DUMMY_EXPENSES);
  const totalSpent = Object.values(monthlyTotals).reduce((sum, value) => sum + value, 0);

  const chartData = {
    labels: Object.keys(monthlyTotals),
    datasets: [
      {
        label: 'Valor (R$)',
        data: Object.values(monthlyTotals),
        backgroundColor: [
          'rgba(236, 145, 127, 0.8)',
          'rgba(165, 190, 182, 0.8)',
          'rgba(236, 145, 127, 0.6)',
          'rgba(165, 190, 182, 0.6)',
        ],
      },
    ],
  };

  const handleDeposit = (amount) => {
    setSavings(prev => prev + amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-roboto text-text">
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold font-syne mb-6 text-center">Dashboard de Gastos de Luna</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary border-opacity-30">
            <h3 className="text-xl font-syne font-semibold mb-2">Informações do Pet</h3>
            <p><strong>Nome:</strong> Luna</p>
            <p><strong>Espécie:</strong> Gata SRD</p>
            <p><strong>Idade:</strong> 3 anos</p>
          </div>

          <PetSavingsBox
            initialSavings={savings}
            onDeposit={() => setIsModalOpen(true)}
          />

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary border-opacity-30">
            <h3 className="text-xl font-syne font-semibold mb-2">Resumo do Mês</h3>
            <p className="text-2xl font-bold text-secondary">{DUMMY_EXPENSES.length} <span className="text-sm font-normal text-gray-500">despesas este mês</span></p>
            <p className="mt-2 text-2xl font-bold text-text">R$ {totalSpent.toFixed(2).replace('.', ',')}</p>
            <p className="text-sm text-gray-500">Total gasto</p>
          </div>
          
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary border-opacity-30">
                <h3 className="text-xl font-syne font-semibold mb-4">Gastos por Categoria</h3>
                <BarChart data={chartData} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary border-opacity-30">
                <h3 className="text-xl font-syne font-semibold mb-4">Detalhes das Despesas</h3>
                <ul className="space-y-3">
                    {DUMMY_EXPENSES.map((expense, index) => (
                        <li key={index} className="flex justify-between items-center border-b pb-2 last:border-b-0 last:pb-0">
                            <div className="flex-1">
                                <p className="font-semibold">{expense.description}</p>
                                <p className="text-sm text-gray-600">
                                    {expense.category} - {expense.date}
                                </p>
                            </div>
                            <span className="font-bold text-primary text-lg">R$ {expense.value.toFixed(2).replace('.', ',')}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </main>

      {isModalOpen && (
        <PixDepositModal
          onDeposit={handleDeposit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;