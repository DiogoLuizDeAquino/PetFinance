import React, { useState } from 'react';

const Register = ({ onNavigateToLogin }) => {
    const [pets, setPets] = useState([{ name: '', species: '', classe: '', age: '', weight: '', photo: null }]);

    const addPet = () => {
        setPets([...pets, { name: '', species: '', classe: '', age: '', weight: '', photo: null }]);
    };

    const handlePetChange = (index, event) => {
        const newPets = [...pets];
        if (event.target.name === "photo") {
            newPets[index].photo = event.target.files[0];
        } else {
            newPets[index][event.target.name] = event.target.value;
        }
        setPets(newPets);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar os dados para o backend
        console.log('Dados do Tutor:', event.target.tutorName.value, event.target.tutorEmail.value);
        console.log('Dados dos Pets:', pets);
        alert('Cadastro simulado com sucesso!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-roboto text-text py-12">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg border-2 border-primary border-opacity-30">
                <h1 className="text-center font-syne text-3xl font-bold text-text mb-6">
                    Cadastre-se no PetFinance
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dados do Tutor */}
                    <div className="p-4 border border-gray-200 rounded-md">
                        <h2 className="text-xl font-syne font-semibold mb-4">Dados do Tutor</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="tutorName">Nome Completo</label>
                                <input type="text" id="tutorName" name="tutorName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="tutorEmail">Email</label>
                                    <input type="email" id="tutorEmail" name="tutorEmail" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="tutorPhone">Telefone</label>
                                    <input type="tel" id="tutorPhone" name="tutorPhone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="tutorPassword">Senha</label>
                                <input type="password" id="tutorPassword" name="tutorPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                            </div>
                        </div>
                    </div>

                    {/* Dados dos Pets */}
                    {pets.map((pet, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-md">
                            <h2 className="text-xl font-syne font-semibold mb-4">Dados do Pet {pets.length > 1 ? index + 1 : ''}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`petName-${index}`}>Nome</label>
                                    <input type="text" id={`petName-${index}`} name="name" value={pet.name} onChange={(e) => handlePetChange(index, e)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`petSpecies-${index}`}>Espécie</label>
                                    <input type="text" id={`petSpecies-${index}`} name="species" value={pet.species} onChange={(e) => handlePetChange(index, e)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`petClasse-${index}`}>Classe (Cachorro ou Gato)</label>
                                    <input type="text" id={`petClasse-${index}`} name="classe" value={pet.classe} onChange={(e) => handlePetChange(index, e)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`petAge-${index}`}>Idade (em anos)</label>
                                    <input type="number" id={`petAge-${index}`} name="age" value={pet.age} onChange={(e) => handlePetChange(index, e)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`petWeight-${index}`}>Peso (kg)</label>
                                    <input type="number" step="0.1" id={`petWeight-${index}`} name="weight" value={pet.weight} onChange={(e) => handlePetChange(index, e)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`petPhoto-${index}`}>Foto</label>
                                    <input type="file" id={`petPhoto-${index}`} name="photo" onChange={(e) => handlePetChange(index, e)} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-opacity-80 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Botões de Ação */}
                    <div className="flex justify-between space-x-4 mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-secondary rounded-md shadow-sm text-sm font-medium text-secondary hover:bg-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                        >
                            Concluir Cadastro
                        </button>
                        <button
                            type="button"
                            onClick={addPet}
                            className="w-full py-2 px-4 border border-secondary rounded-md shadow-sm text-sm font-medium text-secondary hover:bg-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                        >
                            Adicionar outro pet
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Já tem uma conta?{' '}
                        <button
                            onClick={onNavigateToLogin}
                            className="font-medium text-primary hover:text-primary-dark transition-colors focus:outline-none"
                        >
                            Faça login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;