const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
const port = 5000;

// הגדרת קבצים סטטיים מתוך התיקייה הנוכחית
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({ extended: true }));

// דף ראשי - index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// דף הרשמה - signup.html
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// דף הבית לאחר ההרשמה - home.html
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home11.html'));
});

// קבלת הנתונים מהטופס של signup
app.post('/signup', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (username.length < 4 || username.length > 8) {
    return res.send("שגיאה: שם המשתמש חייב להיות בין 4 ל-8 תווים");
  }

  if (!email.includes("@")) {
    return res.send("שגיאה: אימייל חייב להכיל @");
  }

  if (password.length < 5 || password.length > 10 || !password.includes("$")) {
    return res.send("שגיאה: סיסמה חייבת להיות באורך 5-10 תווים ולכלול $");
  }

  if (password !== confirmPassword) {
    return res.send("שגיאה: הסיסמאות לא תואמות");
  }

  // אם הכל תקין – נשלח את המשתמש לדף הבית
  res.redirect(`/home?user=${encodeURIComponent(username)}`);
});

// הפעלת השרת
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
