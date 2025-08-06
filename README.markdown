# RITAGE - College Portal System

RITAGE is a web-based college portal developed for Rajarambapu Institute of Technology to streamline student-related processes and academic interactions. Each student is assigned a unique PRN and password, enabling secure access to a variety of academic and administrative services.

> ⚠️ **Note**: This project is under active development. Some features are partially implemented or still in progress.

## 🚀 Project Features

- 🔐 **User Authentication & Authorization**  
  Secure login system using PRN and password with validation.

- 🏫 **Admission Details**  
  View admission-related information.

- 📊 **Attendance Tracking**  
  Monitor attendance records.

- 🧑‍🎓 **Profile Management**  
  Edit and manage student profiles (currently static, with dynamic profiles in development).

- 💬 **Feedback System**  
  Submit feedback on academic experiences, including SLI and institutional feedback.

- ⭐ **Faculty Rating**  
  Rate faculty members via the Faculty Performance Index.

- 📚 **Elective Choices Submission**  
  Choose elective subjects.

- 📖 **Study Materials Access**  
  Access and upload study materials (feature to be expanded).

- 📝 **Exam Results**  
  View exam performance and grades.

- 📋 **Surveys & Polls**  
  Participate in academic or administrative surveys.

- 💸 **Online Fees Payments**  
  Manage and pay fees online.

- 🎓 **Training & Placement**  
  Access training programs and placement opportunities.

- 📚 **Library Resources**  
  Access Web OPAC for library catalog searches.

- 🧑‍🏫 **Learning Management**  
  Link to Moodle for course materials.

## 🛠️ Tech Stack

| Component         | Technology                              |
|-------------------|-----------------------------------------|
| **Frontend**      | React (using Vite)                     |
| **Backend**       | Node.js, Express.js                    |
| **Database**      | MongoDB                                |
| **Authentication** | JWT-based                              |
| **API**           | RESTful APIs                           |

## ⚙️ Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps
1. **Clone the repository**  
   ```bash
   git clone https://github.com/Pranav-Nanegaonkar/RITAGE.git
   cd RITAGE
   ```

2. **Install backend dependencies**  
   Assuming the backend is in a `backend` folder (adjust if different):  
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**  
   Assuming the frontend is in a `frontend` folder (adjust if different):  
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment**  
   Create a `.env` file in the backend directory with the following:  
   ```
   MONGODB_URI=your_mongo_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```
   Replace `your_mongo_connection_string` with your MongoDB connection string and `your_jwt_secret` with a secure secret key.

5. **Run the backend**  
   ```bash
   cd backend
   npm start
   ```
   The backend should run on `http://localhost:5000` (or the port specified in `.env`).

6. **Run the frontend**  
   ```bash
   cd frontend
   npm run dev
   ```
   Access the application at `http://localhost:5173` (or the port shown in the terminal).

## 📸 Screenshots

![Login Page](screenshots/login.png)  
*Caption: The login page where students enter their PRN and password to access the portal.*

![Student Dashboard](screenshots/dashboard.png)  
*Caption: The student dashboard displaying various features like Profile, Attendance, and Online Fees Payments.*

*Instructions*: Save your screenshots in a `screenshots` folder in the repository with names `login.png` and `dashboard.png`. Update the file paths above if different.

## 📌 Project Status

| Feature                     | Status                     |
|-----------------------------|----------------------------|
| Basic Authentication        | ✅ Completed               |
| Static Profiles             | ✅ In progress (to be dynamic) |
| Feedback System             | 🚧 Partially implemented   |
| Faculty Rating              | 🚧 Partially implemented   |
| Elective Choices            | 🚧 Partially implemented   |
| Admin/Faculty Portal        | ❌ Not yet implemented     |

This is a work-in-progress project. Future updates will include dynamic profiles, an admin dashboard, and enhanced features.

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project’s coding standards and includes relevant documentation.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

**Pranav Nanegaonkar**  
[GitHub Profile](https://github.com/Pranav-Nanegaonkar)

## 📬 Contact

For questions or issues, please open an issue on the [GitHub repository](https://github.com/Pranav-Nanegaonkar/RITAGE/issues).