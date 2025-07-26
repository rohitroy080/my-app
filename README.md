---

### Overview

This project is a simple **full‑stack web application** with:

*  **React frontend** for UI (Login & CRUD on items)
*  **Node.js / Express backend** for API (authentication & item management)
*  **Automated tests** for both UI (Selenium) and API (Jest + Supertest)

---

### Dependencies

**Frontend (React):**

* Node.js (v18+ recommended)
* npm
* React, React‑DOM, React‑Scripts (installed via `npm install`)

**Backend (Node.js):**

* express
* cors
* jest (dev)
* supertest (dev)

**UI Tests:**

* Python 3.x
* selenium (`pip install selenium`)
* Chrome browser and ChromeDriver

---

### Installation & Setup

#### Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd my-app
```

#### Install backend dependencies

```bash
cd backend
npm install
```

#### Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

### Running the App

#### Start backend API

```bash
cd backend
node server.js
```

> Runs on **[http://localhost:4000](http://localhost:4000)**

#### Start frontend

Open a new terminal:

```bash
cd frontend
npm start
```

> Opens React app on **[http://localhost:3000](http://localhost:3000)**

---

### Running Tests

#### API Tests (Jest + Supertest)

In `backend` folder:

```bash
npm test
```

#### UI Tests (Selenium)

In project root or test folder:

```bash
python login_test.py
python crud_test.py
```

---

### Notes

* Backend uses **in‑memory storage** (data resets when server restarts).
* Selenium scripts assume Chrome is installed and running on default ports.

---
