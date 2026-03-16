# 📱 TodoApp -- React Native To‑Do Application

A simple **mobile To‑Do application built with React Native and
TypeScript** that allows users to register, log in, and manage tasks.\
The app demonstrates core mobile development concepts such as
authentication flow, local data persistence, and CRUD operations.

------------------------------------------------------------------------

## 🚀 Features

### 🔐 User Authentication

-   User registration with email and password
-   Login with stored credentials
-   Basic input validation
-   Session persistence using local storage

### ✅ Task Management

Users can:

-   Add tasks with:
    -   Title
    -   Description
    -   Deadline
    -   Priority (Low / Medium / High)
-   View a list of tasks
-   Mark tasks as completed
-   Delete tasks
-   Store tasks locally using AsyncStorage

------------------------------------------------------------------------

## 🛠 Tech Stack

-   **React Native CLI**
-   **TypeScript**
-   **React Navigation**
-   **AsyncStorage**
-   **UUID** (for generating unique task IDs)

------------------------------------------------------------------------

## 📂 Project Structure

    TodoApp/
    ├── android/
    ├── ios/
    ├── src/
    │   ├── screens/
    │   │   ├── LoginScreen.tsx
    │   │   ├── RegisterScreen.tsx
    │   │   ├── HomeScreen.tsx
    │   │   └── AddTaskScreen.tsx
    │   │
    │   ├── components/
    │   │   └── TaskItem.tsx
    │   │
    │   ├── navigation/
    │   │   └── AppNavigator.tsx
    │   │
    │   ├── context/
    │   │   └── AuthContext.tsx
    │   │
    │   └── utils/
    │       └── storage.ts
    │
    ├── App.tsx
    ├── package.json
    └── tsconfig.json

------------------------------------------------------------------------

## 📦 Installation

Clone the repository:

    git clone https://github.com/YOUR_USERNAME/TodoApp.git
    cd TodoApp

Install dependencies:

    npm install

------------------------------------------------------------------------

## ▶️ Running the App

Start the Metro bundler:

    npx react-native start

Run the Android app:

    npx react-native run-android

Make sure an **Android Emulator** or physical Android device is running.

------------------------------------------------------------------------

## 📸 App Screenshots

### Login Screen
<img width="1920" height="1080" alt="Screenshot (201)" src="https://github.com/user-attachments/assets/53bd985a-787b-433a-98ca-567addf8ea87" />

### Register Screen
<img width="1920" height="1080" alt="Screenshot (202)" src="https://github.com/user-attachments/assets/fcbf2556-d3a2-432f-9abb-5546b2c3b38f" />

### Home Screen
<img width="1920" height="1080" alt="Screenshot (200)" src="https://github.com/user-attachments/assets/77974ca0-8fde-48d5-97fc-0a63fb7c2fb7" />

------------------------------------------------------------------------

## 💾 Data Persistence

The app uses **AsyncStorage** to store:

-   User login credentials
-   Task data

This allows the app to retain data even after closing and reopening.

------------------------------------------------------------------------

## 🧠 Challenges Faced

During development, the app initially showed a **blank screen with a
Metro server error (500)** due to a Node.js version incompatibility.\
This was resolved by switching to a stable **Node.js LTS version (Node
20)** and resetting the Metro cache.

Another issue involved tasks not appearing immediately after saving.
This was fixed by reloading tasks from AsyncStorage when returning to
the Home screen.

------------------------------------------------------------------------

## 🔮 Future Improvements

Potential enhancements:

-   Backend integration (Node.js + MongoDB / Firebase)
-   Task sorting and filtering
-   Push notifications for deadlines
-   UI improvements and animations
-   Multi-device synchronization
-   Improved validation and error handling

------------------------------------------------------------------------

## 📱 Tested On

-   Android Emulator (Pixel Device)
-   Android API Level 33+

------------------------------------------------------------------------

## 📜 License

This project was created for **learning and assignment purposes**.
