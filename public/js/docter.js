
const generateBoxes = document.getElementById('generate-boxes');
generateBoxes.style.cssText = 'display:flex;flex-direction:row;flex-wrap:wrap;';
let lebalName, labelId, confidance, cnic;
let pName, dName,age,address;
console.log("I am here");
$.ajax({
                    url: '/getPatientCounts',
                    type: 'GET',
                    success: function(count){
                        console.log("I am inside javascript file and count is ", count);
                      $.ajax({
                        url: '/getPatientDetails',
                        type: 'GET',
                        success: function (data) {
                          //    data=JSON.parse(data);
                          for (var i = 0; i < count; i++) {
                            const row1 = document.createElement('div');
                            row1.className = 'Row';
                            row1.style.cssText = 'margin-top:40px;';
                            const c1 = document.createElement('div');
                            c1.className = 'C1';
                            c1.style.cssText = 'overflow:auto;background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);width:300px;height:400px;margin-left:80px;border-radius:15px;margin-bottom:10px;';
                            const button1 = document.createElement('button');
                            const button2 = document.createElement('button');
                            const button3 = document.createElement('button');
                            const details = document.createElement('div');
                            details.className = "details";
                            console.log("Here we are ", data)
                            console.log("Data is ", data[i]);
                            details.innerHTML = `<center>${data[i].pName}<br/><br/></center>`
                            details.style.cssText = 'color:#fff;font-weight: bold;margin-top:30%;font-size:25px;';
                            button1.className = 'Button1';
                            button1.style.cssText = 'text-decoration: none;color:green;background:#fff;font-weight: bold;margin-left:37%;margin-top:5%;border:none;border-radius:5px;font-size:20px;';
                            button1.value = data[i]._id;
                            labelId = data[i].labelId;
                            lebalName = data[i].lebalName;
                            confidance = data[i].confidance;
                            pName = data[i].pName;
                            dName = data[i].docName;
                            cnic = data[i].getcnic;
                            age = data[i].age;
                            address = data[i].address;
                            button3.innerText = "Reject";
                            button3.className = "Button2";
                            button1.innerText = "Accept";
                            button2.className = 'Button1';
                            button2.value = data[i]._id;
                            button3.value = data[i]._id;
                            button3.style.cssText = "text-decoration: none;color:red;background:#fff;font-weight: bolder;margin-left:37%;margin-top:6%;border:none;border-radius:5px;font-size:20px;";
                            button2.innerText = "Image";
                           
                            button2.style.cssText = 'text-decoration: none;color:green;background:#fff;font-weight: bold;margin-left:37%;margin-top:15%;border:none;border-radius:5px;font-size:20px;';
                            
                            button2.onclick = function () {
                                   var myWindow = window.open("", "", "width=600,height=450");
            
            myWindow.document.write(`<form action="/getImage" method="post"><input id="presId" type="text" name="cnic" value="${cnic}" style="width:60%;height:10%;"><input id="presId" type="hidden" name="id" value="${button1.value}" style="width:60%;height:10%;"><br><input type="submit" value="Show Image"></form><br/>`);
                            }
                                       button1.onclick = function() {
                                           fetch('/postAccept', {
                                               method: 'POST',
                                               headers: {
                                                   Authorization: 'Bearer abcdxyz',
                                                   'Content-Type': 'application/json',
                                               },
                                               body: JSON.stringify({ 'button': button1.value }
                                               ),
                                           })
                                               .then((data1) => {
                                                //    data = JSON.parse(data);
                                                //    data1 = JSON.parse(data1);
                                                   console.log("YOYO Data is ", data1);
                                                   console.log(button1.value);
    var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                                                   
                     var myWindow2 = window.open("", "", "width=900,height=650");
                                                //    myWindow2.document.write(`<form action="/postInputPrescription" method="post"><input id="presId" type="text" name="cnic" value="${cnic}" style="width:60%;height:10%;"><input id="presId" type="text" name="id" value="${button1.value}" style="width:60%;height:10%;"><input id="presId" type="text" name="prescription" placeholder="PRESCRIPTION" required="" style="width:60%;height:10%;"><br><br><input type="submit" value="prescribe"></form><input id="dataName" type="text" name="id" value="${lebalName}"><input id="dataId" type="text" name="id" value="${labelId}"><input id="dataC" type="text" name="id" value="${confidance}">`);
                            
                                                   myWindow2.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/report.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="report-content">
      <div class="report-header">
        <div id="header-report">
          <img id="report-logo" src="images/report icon.png" alt="logo" />
          <center>
            <h1>NextGen Lab</h1>
          </center>
        </div>
      </div>
      <div class="patient-details">
        <hr />
        <table border="0">
          <tr>
            <h2>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <b>Docter Name:</b
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${dName}
            </h2>
          </tr>
        </table>
        <hr />
      </div>
      <div id="p-Details">
        <b> Patient Name is:</b
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${pName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /><br /><br /><b
          >Patient Age is:</b
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${age}<br /><br /><br /><b
          >Patient Address is:</b
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${address}<br /><br /><br /><b
          >Date is:</b
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${date}<br /><br /><br />
        <b>CNIC is:</b
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cnic}<br /><br /><br />
        <b>Prescription is:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /><br /><br />
        <b>Becteria Is:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div class="report-body">
        <form action="/postInputPrescription" method="post">
          <input
            id="presId"
            type="text"
            name="prescription"
            placeholder="PRESCRIPTION"
            required=""
            style="height: 50px"
          /><br />
          <input
            id="dataName"
            type="text"
            name="label"
            value="${lebalName}"
          /><br />
          <input
            id="presId"
            type="hidden"
            name="id"
            value="${button1.value}"
          /><br />
          <br /><input
            type="submit"
            onclick="display()"
            value="Prescribe"
          /><br />
        </form>
      </div>
      <div class="report-sign">
        <div class="lab-doctor-sign">
          <img
            src="https://labsmart-healthcare-trial.s3.us-west-2.amazonaws.com/diagnostic_lab_524/sample_pathologist_sign.jpg"
          />
          <figcaption>${dName}</figcaption>
        </div>
      </div>

      <div class="report-footer"></div>
    </div>
    <script>
      function display() {
        window.print();
      }
    </script>
  </body>
</html>`);

     window.location.reload();    
            
            
                })
                .catch((err) => console.log("Here is errer ",err));
  };
                  
button3.onclick = function () {
                              fetch('/delPerceptionByDoc', {
                                method: 'POST',
                                headers: {
                                  Authorization: 'Bearer abcdxyz',
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ 'button': button1.value }),
                              })
                                .then((data) => {
                                  // console.log("Data is ", data);
                                  // alert("Perception Deleted Reload Page");
                                  window.location.reload();

                                })
                                .catch((err) => console.log(err));
                            };
                        
                            
                            generateBoxes.appendChild(row1);
                            row1.appendChild(c1);
                            c1.appendChild(details);
                            c1.appendChild(button2);
                          c1.appendChild(button1);
                          c1.appendChild(button3);
                                

                        }
                        
                            
                    },
                    error: function(data) {
                        alert(' second woops!'); //or whatever
                    }
                                },
                                    false);
                                            },
                    error: function(data) {
                        alert(' second woops!');
                    }
                }, false);

