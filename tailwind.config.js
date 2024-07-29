/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ou 'media' se preferir
  theme: {
    extend: {
      colors: {
        // Cores padrão
        'fundo': '#F6F1ED',
        'branco': '#ffffff',
        'preto': '#000000',
        'cinza': '#verde',
        'vermelho': '#881212',
        'verde1': '#1B1E18',
        'verde2': '#121410',
        'creme1': '#d7d1cb',
        'creme2': '#b9b3ac',

        // Cores para o modo escuro
        'fundo-dark': '#121410',
        'branco-dark': '#F6F1ED',
        'preto-dark': '#ffffff',
        'cinza-dark': '#a0a0a0',
        'vermelho-dark': '#730f0f',
        'verde1-dark': '#f9f9f9',
        'verde2-dark': '#1B1E18',
        'creme1-dark': '#b9b3ac',
        'creme2-dark': '#d7d1cb',
      },
      fontFamily: {
        sans: ['Karma', 'sans-serif'],
        serif: ['Older Dictator', 'serif'],
      },
    },
  },
  plugins: [],
}
