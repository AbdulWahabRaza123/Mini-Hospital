const generateBoxes = document.getElementById('generate-boxes');
generateBoxes.style.cssText = 'display:flex;flex-direction:row;flex-wrap:wrap;';
$.ajax({
                    url: '/getCount',
                    type: 'GET',
                    success: function(count){ 
                        console.log("I am inside javascript file and count is ", count);
                        $.ajax({
                    url: '/getDocterData',
                    type: 'GET',
                            success: function (data) { 
                                data = JSON.parse(data);
                                console.log(data);
                        for (var i = 0; i < count; i++)
                        {
                                const row1 = document.createElement('div');
                                row1.className = 'Row';
                                row1.style.cssText = 'margin-top:40px;';
                                const c1 = document.createElement('div');
                                c1.className = 'C1';
                            c1.style.cssText = 'overflow:auto;background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);width:300px;height:400px;margin-left:80px;border-radius:15px;margin-bottom:10px;';
                            const button1 = document.createElement('button');
                            const details = document.createElement('div');
                            details.className = "details";
                             
                                    //  data = JSON.parse(data);
                                     console.log("Data is ", data[i].username);
                                     details.innerHTML = `<center>${data[i].username}<br/><br/>${data[i].specialization}</center>`
                                     details.style.cssText = 'color:#fff;text-shadow: 1px #fff;font-weight:bold;margin-top:30%;font-size:25px;';
                                button1.className = 'Button1';
                                button1.style.cssText = 'text-decoration: none;color:green;background:#fff;font-weight: bold;margin-left:25%;margin-top:25%;border:none;border-radius:5px;font-size:20px;';
                                     button1.value = data[i]._id;
                                     console.log(button1.value);
                                     button1.innerText = "Fix Appointment"; 
                            button1.onclick = function () { 
            //                                var myWindow = window.open("","","width=600,height=450");
            // myWindow.document.write();
            //                     let prescribe = myWindow.document.getElementById('pId');
            //                     alert("Appointment is pending");
    fetch('/newData', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer abcdxyz',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'button':button1.value}),})
        .then((data) => {
            window.location.href = "/newData";
                })
                .catch((err) => console.log(err));
  };
 

                                         
                            
                            generateBoxes.appendChild(row1);
                            row1.appendChild(c1);
                            c1.appendChild(details);
                            c1.appendChild(button1);
                                

                        }
                     
                            
                            },
                                       error: function(data) {
                        alert(' second woops!'); 
                    }
                }, false);
                                                    },
                 
                    error: function(data) {
                        alert(' second woops!'); //or whatever
                    }
}, false);
                


const generateBoxesPrescription = document.getElementById('generate-boxes-prescription');
generateBoxesPrescription.style.cssText = 'display:flex;flex-direction:row;flex-wrap:wrap;';
let labelId, labelName, confidance, pName, dName, cnic,prescribe,age,address;
$.ajax({
                    url: '/getReportCount',
                    type: 'GET',
                    success: function(count){ 
                        console.log("I am inside javascript file and count is ", count);
                        $.ajax({
                    url: '/getReportData',
                    type: 'GET',
                            success: function (data) { 
                                data = JSON.parse(data);
                                console.log("Here we have ",data);
                        for (var i = 0; i < count; i++)
                        {
                                const row1 = document.createElement('div');
                                row1.className = 'Row';
                                row1.style.cssText = 'margin-top:40px;';
                                const c1 = document.createElement('div');
                                c1.className = 'C1';
                            c1.style.cssText = 'overflow:auto;font-weight: bold;background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);width:300px;height:400px;margin-left:80px;border-radius:15px;margin-bottom:10px;';
                            const button1 = document.createElement('button');
                            const button2 = document.createElement('button');
                            button2.className = 'Button1';
                            button2.innerText = 'Report';
                            button2.style.cssText = 'text-decoration: none;color:green;background:#fff;font-weight: bold;margin-left:37%;margin-top:5%;border:none;border-radius:5px;font-size:20px;';
                            const details = document.createElement('div');
                            details.className = "details";
                             labelId = data[i].labelId;
                            lebalName = data[i].lebalName;
                            confidance = data[i].confidance;
                            pName = data[i].pName;
                            dName = data[i].docName;
                          cnic = data[i].getcnic;
                          age = data[i].age;
                          address = data[i].address;
                            prescribe = data[i].prescription;
                                    //  data = JSON.parse(data);
                                     console.log("Data is ", data[i].username);
                                     details.innerHTML = `<center>${data[i].docName}<br/><br/>${data[i].pName}<br/><br/><p style="font-size:15px;color:red;">${data[i].prescription}</p></center>`
                                     details.style.cssText = 'color:#fff;margin-top:20%;font-size:25px;';
                                button1.className = 'Button2';
                                button1.style.cssText = 'text-decoration: none;color:red;background:#fff;font-weight: bolder;margin-left:36%;margin-top:20%;border:none;border-radius:5px;font-size:20px;';
                                     button1.value = data[i]._id;
                                     console.log(button1.value);
                                     button1.innerText = "Delete"; 
                                       button1.onclick = function() { 
    fetch('/delPerceptionByAdmin', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer abcdxyz',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'button':button1.value}),})
        .then((data) => {
            // console.log("Data is ", data);
            // alert("Perception Deleted Reload Page");
            window.location.reload();

                })
                .catch((err) => console.log(err));
  };
                            button2.onclick = function () {
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
        <form>
          <input
            id="presId"
            type="text"
            name="prescription"
            value="${prescribe}"
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
            type="button"
            onclick="display()"
            value="Print"
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
</html>


`);
                                
                            };

                                         
                            
                            generateBoxesPrescription.appendChild(row1);
                            row1.appendChild(c1);
                            c1.appendChild(details);
                            c1.appendChild(button2);
                            c1.appendChild(button1);
                                

                        }
                     
                            
                            },
                                       error: function(data) {
                        alert(' second woops!'); 
                    }
                }, false);
                                                    },
                 
                    error: function(data) {
                        alert(' second woops!'); //or whatever
                    }
}, false);