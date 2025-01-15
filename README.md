# **Cloud Based Task Manager**

## **Overview**
The **Cloud-Based Task Manager** is a web application built with the MERN stack (**MongoDB**, **Express.js**, **React**, and **Node.js**). It provides a streamlined platform for team task management, offering a user-friendly interface for efficient task assignment, tracking, and collaboration. The app includes features tailored for administrators and regular users, enhancing productivity and organization.

---

## **Problem Statement**
In today's dynamic work environment, traditional task management methods (e.g., spreadsheets or manual systems) are cumbersome and prone to errors. The **Cloud-Based Task Manager** solves this by offering a centralized platform for task management, enabling seamless collaboration and improving workflow efficiency.

---

## **Background**
With the rise of remote work and distributed teams, effective tools for communication and task coordination are essential. This project leverages modern web technologies to provide a scalable, intuitive, and responsive task management solution. 

Key technologies include:
- **MERN Stack** for scalability.
- **Redux Toolkit**, **Headless UI**, and **Tailwind CSS** for a superior user experience and performance.

---

## **Features**

### **Admin Features**
1. **User Management**
   - Create admin accounts.
   - Add and manage team members.

2. **Task Assignment**
   - Assign tasks to individuals or multiple users.
   - Update task details and statuses.

3. **Task Properties**
   - Categorize tasks: *To Do*, *In Progress*, *Completed*.
   - Assign priority levels: *High*, *Medium*, *Normal*, *Low*.
   - Add and manage sub-tasks.

4. **Asset Management**
   - Upload and manage task assets (e.g., images).

5. **User Account Control**
   - Activate or deactivate user accounts.
   - Permanently delete or trash tasks.

---

### **User Features**
1. **Task Interaction**
   - Update task statuses (*In Progress*, *Completed*).
   - View detailed task information.

2. **Communication**
   - Add comments or chat about tasks.

---

### **General Features**
1. **Authentication and Authorization**
   - Secure login.
   - Role-based access control.

2. **Profile Management**
   - Update user profiles.
   - Change passwords securely.

3. **Dashboard**
   - Summarize user activities.
   - Filter tasks by status (*To Do*, *In Progress*, *Completed*).

---

## **Technologies Used**

### **Frontend**
- **React (Vite)**
- **Redux Toolkit** (State Management)
- **Headless UI**
- **Tailwind CSS**

### **Backend**
- **Node.js** (with **Express.js**)

### **Database**
- **MongoDB**

---

## **Setup Instructions**

### **Server Setup**

#### **Environment Variables**
1. Create a `.env` file in the `server` folder.
2. Add the following variables:
   ```env
   MONGODB_URI=<your-mongodb-url>
   JWT_SECRET=<your-jwt-secret>
   PORT=8800
   NODE_ENV=development
   ```

#### **Set Up MongoDB**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Log in or create an account.
3. Create a new cluster:
   - Choose a cloud provider and region.
   - Configure cluster settings.
4. Create a database user.
5. Set up an IP whitelist.
6. Connect your application to the cluster.
7. Test the connection.

#### **Run the Server**
1. Open the project in your editor.
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. If successful, you’ll see:
   ```
   Server running on PORT <your-port-number>
   Database Connected
   ```

---

### **Client Setup**

#### **Environment Variables**
1. Create a `.env` file in the `client` folder.
2. Add the following variables:
   ```env
   VITE_APP_BASE_URL=http://localhost:8800
   VITE_APP_FIREBASE_API_KEY=<your-firebase-api-key>
   ```

#### **Run the Client**
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## **Conclusion**
The **Cloud-Based Task Manager** enhances team productivity by providing an intuitive task management solution powered by modern web technologies. Its comprehensive features make it a valuable tool for organizations aiming to streamline task coordination and collaboration.
