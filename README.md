# desacork-vue
Desacork.com Website made with Vue.js and Vuetify

Project started with 'npm create vuetify@latest' with Default preset for several reasons:
1. Installs and configures both Vue.JS and Vuetify in one go.
2. Adds support for ESLint and SASS Variables.
3. Automatically configures Routing through the "pages" folder, thanks to the file "typed-router.d.ts"
4. Removes the necessity to import components manually thanks to the file "components.d.ts"

I manually created the "/api" folder with the file contact.js. This is the backend node.js logic that allows the contact form to send e-mails. This is due to Vercel being configured to aknowledge any code in a folder called /api as backend node.js code, thus making the whole process a lot more simple and automated, and requiring less manual configuration

Work in progress
