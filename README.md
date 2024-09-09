# Project Management System

This is a full-stack **Project Management System** built using **Laravel 11** (backend), **React** (frontend), and **Inertia.js** for seamless SPA-like interactions. It provides a user-friendly interface for managing projects and tasks, complete with features like authentication, email verification, role-based access, and CRUD operations for projects, tasks, and users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

### Authentication
- Login functionality only; no self-registration from the login page.
- Email verification is required for new users upon the first login.
- Secure password management with CRUD functionality for users.

### Dashboard
- Overview of all tasks (Pending, In Progress, Completed) categorized into widgets.
- The "My Tasks" section lists the top 10 active tasks assigned to the logged-in user.
- Quick navigation to detailed project and task views.

### Project Management
- Full CRUD functionality for managing projects.
- Project-specific pages with detailed task management.
- Filters to sort projects by name and status.

### Task Management
- Full task management including creation, updating, and deletion.
- Tasks can be filtered by name and status.

### User Management
- User creation functionality, only accessible from the user management page.
- CRUD operations for users with secure password handling.
- Email verification for new accounts.

### Profile Management
- Users can update their personal information, change passwords, and delete accounts.

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/gananath-oss/Project-Management-App.git
cd Project-Management-App
```

### 2. Install Dependencies

Make sure you have Composer and Node.js installed on your machine.

- Install PHP dependencies:

  ```bash
  composer install
  ```

- Install JavaScript dependencies:

  ```bash
  npm install
  ```

### 3. Set Up Environment

- Rename `.env.example` to `.env`:

  ```bash
  cp .env.example .env
  ```

- Generate the application key:

  ```bash
  php artisan key:generate
  ```

- Update your `.env` file with your database and email configuration.

### 4. Run Migrations

```bash
php artisan migrate --seed
```

### 5. Build Frontend Assets

```bash
npm run dev
```

### 6. Start the Application

```bash
php artisan serve
```

## Usage

### Access the Dashboard

Once logged in, users will be redirected to the dashboard, where they can view their pending, in-progress, and completed tasks. From there, users can manage projects and tasks using the various CRUD functionalities available.

### Project Management

Navigate to the Projects page to manage all existing projects, view details, or create new projects. Each project has tasks associated with it, which can be managed individually.

### Task Management

Tasks can be created, edited, deleted, and filtered by various parameters. Users can track the status of tasks, assign tasks to team members, and view the current task status from the dashboard.

### User Management

Admins can create new users, manage user roles, and update or delete user information. The system ensures secure password handling with email verification for newly created accounts.

## Tech Stack

- **Backend**: Laravel 11
- **Frontend**: React
- **SPA Framework**: Inertia.js
- **Database**: SQLite
- **Authentication**: Laravel Breeze
- **Email Verification**: Laravel's native email verification system.

## API Documentation

The application provides API endpoints for managing projects, tasks, and users. Below are some of the main endpoints:

### Authentication

- **POST** `/login`: Authenticate user.

### Projects

- **GET** `/projects`: Fetch all projects.
- **POST** `/projects`: Create a new project.
- **PUT** `/projects/{id}`: Update an existing project.
- **DELETE** `/projects/{id}`: Delete a project.

### Tasks

- **GET** `/tasks`: Fetch all tasks.
- **POST** `/tasks`: Create a new task.
- **PUT** `/tasks/{id}`: Update an existing task.
- **DELETE** `/tasks/{id}`: Delete a task.

For a full list of API endpoints, see the `/routes/api.php` file.

## Screenshots

**Login Page**  
![Login Page](path-to-screenshot)

**Dashboard**  
![Dashboard](path-to-screenshot)

**Projects Page**  
![Projects Page](path-to-screenshot)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
