const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname));
app.use(express.json()); // Parse JSON bodies

app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/lec12/index.html");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
app.post("/submit-data", (req, res) => {
    // const  lastname = req.body.lastname;
    // const  firstname = req.body.firstname;
    // const  email = req.body.email;
    // const  password = req.body.password;
    

    // // תנאי הצלחה
    // if (password === "1234" && email === "yose@gmail.com") {
    //     console.log("גישה מיוחדת ניתנה ליוסף");
    //     return res.send(`
    //         <h2 style="color: green; text-align: center;">✔️ שלום יוסף! גישה אושרה.</h2>
    //         <a href="/">חזור לדף הבית</a>
    //     `);
    // }
    // console.log("גישה נדחתה למשתמש:", username);
    // res.send(`
    //     <h2 style="color: red; text-align: center;">❌ שם משתמש או אימייל שגויים</h2>
    //     <a href="/">נסה שוב</a>
    // `);
    console.log("נתונים שהתקבלו:", req.body);

    const { fname, lname } = req.body;

    // מחזיר אותם (או הפוך אם תרצה)
    res.send({ fname, lname });
});
