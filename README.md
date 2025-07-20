# Student Form Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-5.4-blue)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![Formik](https://img.shields.io/badge/Formik-2.4-orange)](https://formik.org/)
[![Yup](https://img.shields.io/badge/Yup-1.4-green)](https://github.com/jquense/yup)

A responsive web application built with Vite, React, Formik, Yup, and Tailwind CSS for creating and validating a student registration form. The form includes fields for full name, email, profession selection, and more, with robust form validation and a clean, modern UI.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Form Validation](#form-validation)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 📝 **Dynamic Form**: Collects user input for full name, email, profession, and additional fields.
- ✅ **Form Validation**: Powered by Yup for client-side validation with clear error messages.
- 🎨 **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive UI.
- ⚡️ **Fast Development**: Utilizes Vite for a blazing-fast development experience.
- 🛠️ **State Management**: Managed efficiently with Formik for seamless form handling.

---

## Screenshots

![Mobile View](./src/assets/Comment%20&%20Review.png)
- Explanation Video: https://drive.google.com/file/d/1-EufAn4a2opgVRNaOwi46zeVDnoKBHfW/view?usp=sharing
---

## Tech Stack

| Technology   | Version | Purpose                     |
| ------------ | ------- | --------------------------- |
| Vite         | 5.4     | Build tool & dev server     |
| React        | 18.3    | Front-end framework         |
| Formik       | 2.4     | Form state management       |
| Yup          | 1.4     | Form validation             |
| Tailwind CSS | 3.4     | Styling & responsive design |

---

## Folder Structure

```bash
comment-and-review/
├── public/                   # Static assets
│   └── favicon.ico
├── src/                      # Source code
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable React components
│   │   └── StudentForm.jsx   # Main form component
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles (Tailwind)
├── .gitignore                # Git ignore file
├── index.html                # Vite entry HTML
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/student-form-app.git
   cd student-form-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

---

## Usage

The application renders a form with the following fields:

- **Full Name**: Text input for the user's full name.
- **Email**: Text input for the user's email address.
- **Profession**: Select dropdown with options such as Student, Developer, Designer, and more.
- **Additional Fields**: Optional inputs like phone number, address, etc.

Submit the form to trigger validation or view the submitted data in the console. The UI is fully responsive, adapting seamlessly to mobile, tablet, and desktop screens.

---

## Form Validation

The form uses **Formik** for state management and **Yup** for validation. Below are the validation rules:

| Field        | Validation Rules                            |
| ------------ | ------------------------------------------- |
| Full Name    | Required, min 5 characters                  |
| Email        | Required, valid email format                |
| Profession   | Required, must select an option             |
| Other Fields | Optional or specific rules (e.g., password) |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the [MIT License](LICENSE).
