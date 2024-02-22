/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            boxShadow: {
                'custom': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            }
        },
    },
    plugins: [],
}