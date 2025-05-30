# Natural Language Task Manager

A modern, AI-powered web app to manage tasks entered in natural language! 🚀

##  Features
Add tasks using natural language like:  
```

Finish landing page Aman by 11pm 20th June

````

 Automatically extracts:
- **Task Name**
- **Assignee** (first proper noun after the first word)
- **Due Date & Time** (using natural language parsing)
- **Priority** (defaults to P3 unless specified as P1, P2, or P4)
 Display tasks in a **beautiful, modern UI task board** with:
- Colorful priority badges  
- Smooth hover animations  
- Edit functionality

 **Local storage persistence** – your tasks stay even after refreshing!

---

##  Built With
- **React.js** (Create React App)  
- **chrono-node** for natural language date parsing  
- **CSS Grid & Flexbox** for a responsive, card-based UI

---

##  Getting Started

1️⃣ **Clone the repository**:
```bash
git clone https://github.com/your-username/natural-language-task-manager.git
cd natural-language-task-manager
````

2️⃣ **Install dependencies**:

```bash
npm install
```

3️⃣ **Start the development server**:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to use the app!

---

##  Project Structure

```
src/
 ├── components/
 │    ├── InputForm.jsx       // Input form for new tasks
 │    ├── TaskBoard.jsx       // Beautiful task board UI
 │    ├── TaskBoard.css       // Enhanced styling
 ├── App.js                   // Main application logic
 ├── App.css                  // Global styles
 └── index.js                 // Entry point
```

---

##  Deployment

To create a production-ready build:

```
npm run build
```

You can then deploy the `build/` folder to platforms like **Netlify**, **Vercel**, or **GitHub Pages**!

---

##  Future Enhancements

* Task **deletion & marking as done**
* **Sorting & filtering** (by date, priority, assignee)
* Integration with a **database** for multi-device syncing
* **User authentication** for personalized task boards

---

## Screenshots

![Task Manager Screenshot](./screenshot.png)

---

## License

This project is licensed under the MIT License.

---

## Author

**Bavishya Sankaranarayanan**
[LinkedIn](https://www.linkedin.com/in/bavishya-sankaranarayanan/) | [GitHub](https://github.com/your-username)

---

###  Contributions are welcome! Let’s make task management smarter, simpler, and more beautiful together. 

