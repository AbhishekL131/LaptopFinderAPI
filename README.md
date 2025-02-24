📌 LaptopFinderAPI - Find Your Perfect Laptop!

🚀 A **FastAPI-powered laptop recommendation system** using **LangChain & Groq AI**. Users can search for laptops by **brand & budget** and get recommendations with detailed specifications and **pricing from Amazon & Flipkart**.

🔍 **Key Features:**
✅ Get **laptop suggestions** based on company & budget
✅ Fetch **detailed specs** (RAM, Processor, Storage, etc.)
✅ Compare **prices on Amazon & Flipkart**
✅ Built using **FastAPI + LangChain + Groq AI**
✅ Clean and modern **UI with search functionality**

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/LaptopFinderAPI.git
cd LaptopFinderAPI
```

### 2️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Run FastAPI Server
```bash
uvicorn main:app --reload
```
🚀 The API will be live at **http://127.0.0.1:8000/**

---

## 🛠 API Usage

### 🔹 Search Laptops by Brand & Budget
```http
GET /search?Processor=Intel&budget=50000&storage=512GB
```

**Response Example:**
```json
{
  "results": [
    {
      "name": "Lenovo Ideapad S145",
      "processor": "Intel Core i3-1005G1",
      "ram": "8GB DDR4",
      "storage": "1TB HDD + 256GB SSD",
      "display": "15.6\" Full HD",
      "price": {
        "Amazon": "₹54,990",
        "Flipkart": "₹56,490"
      }
    }
  ]
}
```

---

## 🌟 Tech Stack
- **Backend:** 🐍 FastAPI, LangChain, Groq API
- **Frontend:** 🎨 HTML, CSS, JavaScript
- **Database (optional):** 🗄️ Firebase / PostgreSQL (if needed)

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork, raise issues, and submit PRs.

---

## 📜 License
MIT License © 2025 [Abhishek Londhe](https://github.com/AbhishekL131)

