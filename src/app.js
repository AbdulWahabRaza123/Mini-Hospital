const express = require('express');
const path = require("path");
const hbs = require("hbs");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const app = express();
require('./db/conn');
const authD = require("./middlewares/authDoc.js");
const authP = require("./middlewares/authPat");
const authA = require("./middlewares/authAdmin");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const Patients = require('./models/Patients');
const Docters = require('./models/docters');
const Admins = require('./models/admins');
const Appointments = require('./models/appointments');
const Prescription = require('./models/prescription');
const images = require('./models/images');
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(cookieParser());
hbs.registerPartials(partialsPath);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
        
    },
    filename: function (req, file, cb) {
        cb(null, "temp.jpg");
    }
});
let upload = multer({ storage: storage });

app.get('/', (req,res) => {
    res.render("index");
})
app.get('/index', (req, res) => {
    res.render("index");
})
app.get('/Admin', (req, res) => {
    res.render("loginA");
})
app.get('/admin', (req, res) => {
    res.render("loginA");
})
app.get('/Docter', (req, res) => {
    res.render("loginD");
})
app.get('/HomeD', (req, res) => {
    res.render("HomeD");
})
app.get('/HomeP', (req, res) => {
    res.render("HomeP");
})
app.get('HomeA', (req, res) => {
    res.render("admin");
})
app.get('/Patient', (req, res) => {
    res.render("loginP");
})
app.get('/loginP', (req, res) => {
    res.render("loginP");
})
app.get('/loginD', (req, res) => {
    res.render("loginD");
})
app.get('/getCount', async(req, res) => {
    let count = await Docters.find().countDocuments();
    count = JSON.stringify(count);
    res.status(200).send(count);
})
app.get('/getPCount', async (req, res) => {
    let count = await Patients.find().countDocuments();
    count = JSON.stringify(count);
    res.status(200).send(count);
})
app.get('/getPrceptionCount', async (req, res) => {
    let count = await Prescription.find().countDocuments();
    count = JSON.stringify(count);
    res.status(200).send(count);
})
app.get('/getPendingCount', async (req, res) => {
    let count = await Appointments.find().countDocuments();
    count = JSON.stringify(count);
    res.status(200).send(count);
})
app.get('/getDocterData', async (req, res) => {
    try {
        let data = await Docters.find({ });
        data = JSON.stringify(data);
        // cloneCount++;
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
    }
})
app.get('/getPatientsData', async (req, res) => {
    try {
        let data = await Patients.find({ });
        data = JSON.stringify(data);
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
    }
})
app.get('/getPreceptionData', async (req, res) => {
    try {
        let data = await Prescription.find({ });
        data = JSON.stringify(data);
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
    }
})
app.get('/getPendingnData', async (req, res) => {
    try {
        let data = await Appointments.find({ });
        data = JSON.stringify(data);
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
    }
})
app.get('/getReportCount', async (req, res) => {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, "mynameisabdulwahabraza");
        let data1 = await Prescription.find({ pId: verifyUser.id }).countDocuments();
    let count = JSON.stringify(data1);
    res.status(200).send(count);
})
app.get('/getReportData', async(req, res) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, "mynameisabdulwahabraza");
        let data1 = await Prescription.find({ pId: verifyUser.id });
        let data = JSON.stringify(data1);
        res.send(data);
//         

    } catch (e)
    {
        res.send('Error');
    }
})
app.get('/getPatientCounts', async(req, res) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, "mynameisabdulwahabraza");
        console.log(verifyUser);
        let data = await Appointments.find({ docId: verifyUser.id }).countDocuments();
        data = JSON.stringify(data);
        res.status(200).send(data);
    } catch (e) {
        res.send('something went wrong');
    }
})
app.get('/getDoctersFromDb', async(req, res) => {
    try {
        let data = await Docters.find({});
        data = JSON.stringify(data);
        res.send(data);
    } catch (e) {
        console.log(e);
    }
})
app.get('/HomeD', (req, res) => {
    res.render("HomeD");
})
app.get('/prescribeD', (req, res) => {
    res.render("prescribeD");
})
app.get('/getPatientDetails', async(req, res) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, "mynameisabdulwahabraza");
        console.log(verifyUser);
        let data = await Docters.findOne({ _id: verifyUser.id });
        let data1 = await Appointments.find({ docName: data.username });
        data = JSON.stringify(data1);
        res.status(200).send(data1);
    } catch (e) {
        
    }
})
app.post('/delDocByAdmin', async(req, res) => {
    try {
        const data = req.body.button;
        const result = await Docters.findByIdAndDelete({ _id:data });
        res.send("Docter Deleted");
    } catch (e) {
        console.log(e);
    }
})
app.post('/delPatByAdmin', async(req, res) => {
    try {
        const data = req.body.button;
        const result = await Patients.findByIdAndDelete({ _id:data });
        res.send("Docter Deleted");
    } catch (e) {
        console.log(e);
    }
})
app.post('/delPerceptionByAdmin', async(req, res) => {
    try {
        const data = req.body.button;
        const result = await Prescription.findByIdAndDelete({ _id: data });
        res.send("Preception Deleted");
    } catch (e) {
        console.log(e);
        res.send(`<script>alert("Something went wrong")</script>`)
    }
})
app.post('/delPerceptionByDoc', async(req, res) => {
    try {
        const data = req.body.button;
        const result = await Appointments.findByIdAndDelete({ _id: data });
        res.send("Appointment Deleted");
    } catch (e) {
        console.log(e);
        res.send(`<script>alert("Something went wrong")</script>`)
    }
})
app.post('/delPendingByAdmin', async(req, res) => {
    try {
        const data = req.body.button;
        const result = await Appointments.findByIdAndDelete({ _id:data });
        res.send("Pending Request Deleted");
    } catch (e) {
        console.log(e);
    }
})
app.post('/getImage', async (req, res) => {
    try {
        const id = req.body.id;
        const get = await Appointments.findOne({ _id: id });
        const imageData = get.Image.data;
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(imageData);
    } catch (e) {
        console.log(e);
    }
})
app.post('/getImage1', async (req, res) => {
    try {
        const id = req.body.button;
        const get = await Appointments.findOne({ _id: id });
        let imageData = get.Image.data;
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        // imageData=JSON.stringify(imageData);
        res.end(imageData);
    } catch (e) {
        console.log(e);
    }
})
app.post('/postInputPrescription', async(req, res) => {
    try {
        const data = req.body.prescription;
        console.log(data);
        const id = req.body.id;
        console.log(id);
        const get = await Appointments.findOne({ _id: id });
        console.log(get.getcnic);
         const prescribe = new Prescription({
                docId: get.docId,
                docName: get.docName,
                pId:get.pId,
                pName: get.pName,
             prescription: data,
                 Image: {
                    data: get.Image.data,
                    contentType:get.Image.contentType
             },
             getcnic: get.getcnic,
             address: get.address,
                age:get.age,
                lebalName: get.lebalName,
                labelId: get.labelId,
                confidance:get.confidance
            })
            const registered = await  prescribe.save();
        const result = await Appointments.findByIdAndDelete({ _id:id });
        res.send(`<script>window.print();window.close();window.location.reload();</script>`);
    } catch (e) {
        console.log(e);
         res.send("Something went wrong");
    }
})
app.post('/postAccept', async(req, res) => {
    try {
        let data = await req.body.button;
        let get = await Appointments.findOne({ _id: data });
        
        get = [get.lebalName, get.labelId, get.confidance];
        console.log("HUM hain ", get);
        // get = JSON.stringify(get);
        res.status(200).send(get);
        // res.render("HomeD");
    } catch (e) {
        
    }
})
app.post('/postA',upload.single('Image'), async (req, res) => {
    try {
        let data = await Docters.findOne({ _id: req.body.button });
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, "mynameisabdulwahabraza");
        const user = await Patients.findOne({ _id: verifyUser.id });
        const chk2 = await Appointments.findOne({ docId: data._id, pId: user._id });
        
        if (chk2 == null) {
            const appointment = new Appointments({
                docId: data.id,
                docName: data.username,
                pId: user.id,
                pName: user.username,
                docStatus: "pending",
                Image: {
                    data: fs.readFileSync('uploads/temp.jpg'),
                    contentType:'image/jpeg'
                },
                getcnic:user.getcnic
            })
            const registered = await appointment.save();
             
        }
        else {
        }
        res.send("Appointment is pending");
    } catch (e) {
        
    }
})
let pCount = 0;
app.post('/signupPatient',async(req, res) => {
    try {
        const patient = new Patients({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            getcnic:req.body.cnic
        })
        const token = await patient.generateAuthToken();
        const registered = await patient.save();
        pCount++;
        // res.render("loginP");
        res.send(`<script>alert("Successfully Register!!!");window.location.href = "/loginP";</script>`);
        
    } catch (e) {
        console.log("Error while registering patient");
        res.send("Patient cannot register try another email");
    }
})
app.post('/loginPatient', async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const getemail = await Patients.findOne({ email: email });
        if (getemail.password === password) {
            const token = await getemail.generateAuthToken();
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 1000000000),
                httpOnly: true,
                // secure:true
            })
            res.render("HomeP");
        }
        else {
            res.send(`<script>alert("Enter right login details");window.location.href = "/loginP";</script>`);
        }
    } catch (e) {
        res.send(`<script>alert("Enter right login details");window.location.href = "/loginP";</script>`);
    }
})
app.post('/signupDocter',async(req, res) => {
    try {
        
        const docter = new Docters({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            specialization:req.body.specialization
        })
        console.log("Hi I am docter");
        const token = await docter.generateAuthToken();
        const registered = await docter.save();

        // res.render("loginD");
        res.send(`<script>alert("Successfully Register!");window.location.href = "/loginD";</script>`);
        
    } catch (e) {
        console.log("Error while registering Docter");
        res.send(`<script>alert("Docter cannot register try another email");window.location.href = "/loginD";</script>`);
    }
})
app.post('/loginDocter', async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const getemail = await Docters.findOne({ email: email });
        if (getemail.password === password) {
            const token = await getemail.generateAuthToken();
            res.cookie("jwt", token, {
            expires: new Date(Date.now() + 1000000000),
            httpOnly: true,
            // secure:true
        })
            res.render("HomeD");
        }
        else {
             res.send(`<script>alert("Enter right login details");window.location.href = "/loginD";</script>`);
        }
    } catch (e) {
        res.send(`<script>alert("Enter right login details");window.location.href = "/loginD";</script>`);
        // res.render('wrongDP');
    }
})
let aCount = 0;
app.post('/signupAdmin',async(req, res) => {
    try {
        const admin = new Admins({
            // username: req.body.username,
            // email: req.body.email,
            // password:req.body.password
            username: "Abdul Wahab Raza",
            email: "abdulwahabraza@gmail.com",
            password:"12345"
        })
        const token = await admin.generateAuthToken();
        const registered = await admin.save();
        res.send("Admin is registered");
        
    } catch (e) {
        console.log("Error while registering Admin");
        res.send(`<script>alert("Enter right signup details");window.location.href = "/loginA";</script>`);
    }
})
app.post('/loginAdmin', async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const getemail = await Admins.findOne({ email: email });
        if (getemail.password === password) {
            const token = await getemail.generateAuthToken();
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 1000000000),
                httpOnly: true,
                // secure:true
            })
            res.render("admin");
        }
        else {
            res.send(`<script>alert("Enter right login details");window.location.href = "/admin";</script>`);
        }
    } catch (e) {
        res.send("Invalid login Detail");
    }
})
app.get('/logoutD',authD, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((currentElement) => {
                return currentElement.tokens != req.user.tokens;
            })
        res.clearCookie("jwt");
        
        req.user.save();
        res.render("index");
    } catch (e) {
        console.log(e);
        res.render("index");
    }
})
app.get('/logoutP',authP, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((currentElement) => {
                return currentElement.tokens != req.user.tokens;
            })
        res.clearCookie("jwt");
        
        req.user.save();
        res.render("index");
    } catch (e) {
        console.log(e);
        res.render("index");
    }
})
app.get('/logoutA',authA, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((currentElement) => {
                return currentElement.tokens != req.user.tokens;
            })
        res.clearCookie("jwt");
        
        req.user.save();
        res.render("index");
    } catch (e) {
        console.log(e);
        res.render("index");
    }
})
app.get('/getImage', async (req, res) => {
    try {
        const getData = await images.findOne({ name: "Abdul Wahab Raza" });
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(getData.Image.data);
    } catch (e) {
        res.send(e);
    }
})
app.get('/newData', (req, res) => {
    res.render("newData");
})
app.post('/newData', async (req, res) => {
    fs.writeFile(path.join(__dirname,'../src/text.txt'), req.body.button, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
         
        }
    });
    console.log("YOYO ", req.body.button);
   
    res.render("newData", {
        data:req.body.button,
    })
})
app.post('/postDataHere', async (req, res) => {
    try {
        console.log("I am listning...");
        let data = req.body.button;
        data = JSON.parse(data);
        const data2 = fs.readFileSync(path.join(__dirname, '../src/text.txt'), "utf8");
        let getDocData = await Docters.findOne({ _id: data2 });
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, "mynameisabdulwahabraza");
        const user = await Patients.findOne({ _id: verifyUser.id });
        const chk2 = await Appointments.findOne({ docId: getDocData._id, pId: user._id });
              if (!chk2) {
            const appointment = new Appointments({
                docId: getDocData.id,
                docName: getDocData.username,
                pId: user.id,
                pName: user.username,
                docStatus: "pending",
                Image: {
                    data: null,
                    contentType: 'image/jpeg'
                },
                getcnic:user.getcnic,
                lebalName: data.labelName,
                labelId: data.labelId,
                confidance:data.confidence

            })
            const registered = await appointment.save();
             
        }
        else {
        }
        console.log(data.labelName);
        res.send("Request is Done");
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
    
})

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
app.post('/postAppointment', upload.single('Img'), async (req, res) => {
    
    try {
        let add = req.body.address;
        let ag = req.body.age;
        await sleep(10000);
        const data2 = fs.readFileSync(path.join(__dirname, '../src/text.txt'), "utf8");
        let data = await Docters.findOne({ _id: data2 });
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, "mynameisabdulwahabraza");
        const user = await Patients.findOne({ _id: verifyUser.id });
        const chk2 = await Appointments.findOne({ docId: data._id, pId: user._id });
        if (chk2.Image.data == null) {
            const result = await Appointments.findByIdAndUpdate({ _id: chk2._id },
                {

                    Image: {
                        data: fs.readFileSync('uploads/temp.jpg'),
                        contentType: 'image/jpeg'
                    },
                    address: add,
                    age:ag
                    
                },
                {
                    new: false
                });
        }
            res.render("HomeP");
            
    }
        catch (e) {
            console.log(e);
        }
            
})
app.listen(port, () => {
    console.log(`listning to port ${port}`);
})