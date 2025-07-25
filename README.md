## 📁 Project Structure:

## 
```plaintext

e-learning-website/
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── README.md
├── .env
├── .gitignore
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── course-thumbnails/
│   │   ├── videos/
│   │   │   └── intro-video.mp4
│   │   └── fonts/
│   │       └── Inter-Regular.ttf
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── CourseCard/
│   │   │   ├── CourseCard.jsx
│   │   │   └── CourseCard.module.css
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.module.css
│   │   ├── CoursesPage/
│   │   │   ├── CoursesPage.jsx
│   │   │   └── CoursesPage.module.css
│   │   ├── CourseDetailPage/
│   │   │   ├── CourseDetailPage.jsx
│   │   │   └── CourseDetailPage.module.css
│   │   ├── LessonPage/
│   │   │   ├── LessonPage.jsx
│   │   │   └── LessonPage.module.css
│   │   ├── ProfilePage/
│   │   │   ├── ProfilePage.jsx
│   │   │   └── ProfilePage.module.css
│   │   ├── Auth/
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   └── ...
│   ├── api/
│   │   ├── auth.js
│   │   ├── courses.js
│   │   ├── users.js
│   │   └── index.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useCourseData.js
│   │   └── ...
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── ...
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   ├── constants.js
│   │   └── ...
│   ├── styles/
│   │   ├── index.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   └── base.css
│   └── router/
│       └── index.jsx
├── tests/
│   ├── components/
│   ├── pages/
│   └── api/
```