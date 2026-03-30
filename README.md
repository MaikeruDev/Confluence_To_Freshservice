<div align="center">

# 🚀 Confluence to Freshservice Migrator (KBify)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A lightweight, web-based utility designed to streamline the migration of Knowledge Base (KB) articles from Atlassian Confluence directly into Freshservice.

</div>

---

## 📖 About The Project

Migrating knowledge bases between platforms can be a tedious, formatting-heavy task. **Confluence to Freshservice (KBify)** automates this process. By combining a clean, intuitive user interface (`kbify-ui`) with a powerful backend API script, this tool handles the heavy lifting of extracting Confluence pages and publishing them as Freshservice solutions. 

Whether you are migrating a single space or an entire organizational wiki, KBify acts as the perfect bridge between the two platforms.

## ✨ Key Features

- **Intuitive Web UI:** A simple HTML frontend (`public/index.html`) that allows users to easily configure and trigger migrations.
- **Automated API Bridge:** A dedicated backend service (`api/kbify.js`) that handles the API communication between Atlassian and Freshservice.
- **Modern JavaScript:** Built using ES Modules (`"type": "module"`) for clean, maintainable, and modern JavaScript code.
- **Lightweight:** Minimal overhead with a straightforward project structure.

## 🧰 Technologies Used

- **Frontend:** HTML5, Vanilla JavaScript
- **Backend:** Node.js (ES Modules)
- **APIs:** Confluence REST API, Freshservice API

## 🚀 Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

* [Node.js](https://nodejs.org/) installed (v14.0.0 or higher recommended)
* API credentials for your Confluence instance
* API credentials for your Freshservice instance

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MaikeruDev/Confluence_To_Freshservice.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd Confluence_To_Freshservice
   ```

3. **Install NPM packages** (if any additional dependencies are added later):
   ```bash
   npm install
   ```

4. **Environment Configuration:**
   You will likely need to configure your environment variables to authenticate with both platforms. Create a `.env` file in the root directory (ensure `.env` is in your `.gitignore`) and add your keys:
   ```env
   CONFLUENCE_DOMAIN=your-domain.atlassian.net
   CONFLUENCE_API_TOKEN=your_confluence_token
   CONFLUENCE_EMAIL=your_email@example.com
   FRESHSERVICE_DOMAIN=your-domain.freshservice.com
   FRESHSERVICE_API_KEY=your_freshservice_key
   ```
   *(Note: Check `api/kbify.js` for exact environment variable names required by the logic).*

## 💻 Usage

1. **Start the local server:**
   Depending on your setup (e.g., using Vercel, Express, or a simple HTTP server), launch the application. If you have a standard local server like `http-server` or `serve`:
   ```bash
   npx serve public
   ```
   *(If the `api` directory is designed for serverless functions, you can run it locally using `vercel dev` or your preferred framework CLI).*

2. **Open the UI:**
   Navigate to `http://localhost:3000` (or your configured port) to access the `index.html` interface.

3. **Migrate Articles:**
   Input the necessary Confluence Space/Page IDs and the target Freshservice Category/Folder IDs via the UI and click migrate to execute the `kbify.js` script.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information. *(Assuming MIT as default for open-source; please verify or update if a different license is intended).*

---
<div align="center">
  <i>Built with ❤️ by <a href="https://github.com/MaikeruDev">MaikeruDev</a></i>
</div>
