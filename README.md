# Desacork.com Website made with Vue.js and Vuetify

## https://www.desacork.com/

Project started with 'npm create vuetify@latest' and the  **Default Preset** for several key reasons:
* **Setup:** Installs and configures both Vue.js and Vuetify in one go, providing a solid foundation and opinionated structure.
* **Quality of Life (QoL) / Tooling:**
    * **Auto-Import:** Removes the necessity to import components manually thanks to **unplugin-vue-components**, which generates the file "components.d.ts".
    * **Auto-Routing:** Automatically configures File-Based Routing via the "pages" folder, thanks to **unplugin-vue-router**, which generates the file "typed-router.d.ts".
* **Styling:** Adds support for ESLint and **SCSS** variables. **SFCs** use the **<style scoped lang="scss">** convention for isolated and flexible styling.
* **Architecture & Deployment:**
    * The **"/api"** folder (with contact.js) is used for the Node.js backend logic (e.g., Nodemailer). This uses Vercel's **built-in convention** to deploy the folder contents as **Serverless Functions**, requiring minimal manual configuration.

Work in progress
