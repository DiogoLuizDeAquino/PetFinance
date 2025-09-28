import React from 'react';
import logo from '../../assets/logo.png'; // Caminho para a sua logo

const Login = ({ onLogin, onNavigateToRegister }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-roboto text-text">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg border-2 border-primary border-opacity-30">
        <div className="flex flex-col items-center mb-6">
          <img 
            src={logo} 
            alt="Logo PetFinance" 
            className="w-40 h-40 object-contain mb-2" // Ajuste o tamanho conforme a necessidade
          />
          <h1 className="font-syne text-xl font-bold text-text">
            {/* Pet<span className="text-secondary">Finance</span> */}
          </h1>
          <p className="font-roboto text-sm text-gray-500 mt-2">Seu financeiro animal.</p>
        </div>
        <form onSubmit={onLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          >
            Entrar
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <button
              onClick={onNavigateToRegister}
              className="font-medium text-primary hover:text-primary-dark transition-colors focus:outline-none"
            >
              Crie uma agora!
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;