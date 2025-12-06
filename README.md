# desacork-vue
Desacork.com Website made with Vue.js and Vuetify

Project started with 'npm create vuetify@latest' with Default preset for several reasons:
1. Installs and configures both Vue.JS and Vuetify in one go.
2. Adds support for ESLint and SASS Variables.
3. Automatically configures Routing through the "pages" folder, thanks to unplugin-vue-router which generates the file "typed-router.d.ts".
4. Removes the necessity to import components manually thanks to unplugin-vue-components which generates the file "components.d.ts".

I manually created the "/api" folder with the file contact.js. This is the backend node.js logic that allows the contact form to send e-mails. This is due to Vercel being configured to aknowledge any code in a folder called /api as backend node.js code, thus making the whole process a lot more simple and automated, and requiring less manual configuration

Work in progress

---

## Desacork.com Website made with Vue.js and Vuetify

Project started with 'npm create vuetify@latest' with **Default preset** for several key reasons:

* **Setup:** Installs and configures both Vue.js and Vuetify in one go, providing a solid foundation and opinionated structure.
* **Quality of Life (QoL) / Tooling:**
    * **Auto-Import:** Removes the necessity to import components manually thanks to **unplugin-vue-components**, which generates the "components.d.ts" file.
    * **Auto-Routing:** Automatically configures File-Based Routing via the "pages" folder, thanks to **unplugin-vue-router**.
* **Styling:** Adds support for ESLint and **SCSS** variables. **SFCs** use the **<style scoped lang="scss">** convention for isolated and flexible styling.
* **Architecture & Deployment:**
    * The **"/api"** folder (with contact.js) is used for the Node.js backend logic (e.g., Nodemailer). This uses Vercel's **built-in convention** to deploy the folder contents as **Serverless Functions**, requiring minimal manual configuration.
    * The **"/server"** folder is reserved for non-Node.js backends (e.g., Flask/Python), requiring specific configuration in **vercel.json**.

Work in progress
