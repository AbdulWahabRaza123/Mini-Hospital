const generateBoxes = document.getElementById('generate-boxes');
$.ajax({
                    url: '/getCount',
                    type: 'GET',
                    success: function(count){
                        console.log("I am inside javascript file and count is ", count);
                                $.ajax({
                    url: '/getDoctersFromDb',
                    type: 'GET',
                                    success: function (data) {
                                        data = JSON.parse(data);
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
                                     console.log("Here we are ",data)
                                     console.log("Data is ", data[i]);
                                     details.innerHTML = `<center>${data[i].username}<br/><br/>${data[i].specialization}</center>`
                                     details.style.cssText = 'color:#fff;margin-top:30%;font-size:25px;';
                                button1.className = 'Button1';
                                button1.style.cssText = 'text-decoration: none;color:#fff;background:black;margin-left:37%;margin-top:25%;border:none;border-radius:5px;font-size:20px;';
                                     button1.value = data[i]._id;
                                     console.log(button1.value);
                                     button1.innerText = "Delete";
                                       button1.onclick = function() {
    fetch('/delDocByAdmin', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer abcdxyz',
                    'Content-Type': 'application/json',
                },
        body: JSON.stringify({ 'button':button1.value  }
        ),
    })
        .then((data) => {
            alert("refresh page docter is removed");
            
                })
                .catch((err) => console.log("Here is errer ",err));
  };
                  

                        
                            
                            generateBoxes.appendChild(row1);
                            row1.appendChild(c1);
                            c1.appendChild(details);
                            c1.appendChild(button1);
                                

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



const getPatientBoxes = document.getElementById('generate-boxes-patients');
getPatientBoxes.style.cssText='display:flex;flex-direction:row;'
$.ajax({
                    url: '/getPCount',
                    type: 'GET',
                    success: function(count){ 
                        console.log("I am inside javascript file and count is ", count);
                        $.ajax({
                    url: '/getPatientsData',
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
                            c1.style.cssText = 'overflow:auto;background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);width:300px;height:400px;margin-left:80px;border-radius:15px;margin-bottom:10px;';
                            const button1 = document.createElement('button');
                            const details = document.createElement('div');
                            details.className = "details";
                             
                                    //  data = JSON.parse(data);
                                     console.log("Data is ", data[i].username);
                                     details.innerHTML = `<center>${data[i].username}<br/><br/></center>`
                                     details.style.cssText = 'color:#fff;margin-top:30%;font-size:25px;';
                                button1.className = 'Button1';
                                button1.style.cssText = 'text-decoration: none;color:#fff;background:black;margin-left:39%;margin-top:25%;border:none;border-radius:5px;font-size:20px;';
                                     button1.value = data[i]._id;
                                     console.log(button1.value);
                                     button1.innerText = "Delete"; 
                                       button1.onclick = function() { 
    fetch('/delPatByAdmin', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer abcdxyz',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'button':button1.value}),})
        .then((data) => {
            console.log("Data is ", data);
            alert("Patient Deleted Reload Page");

                })
                .catch((err) => console.log(err));
  };
 

                                         
                            
                            getPatientBoxes.appendChild(row1);
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
generateBoxesPrescription.style.cssText='display:flex;flex-direction:row;'
$.ajax({
                    url: '/getPrceptionCount',
                    type: 'GET',
                    success: function(count){ 
                        console.log("I am inside javascript file and count is ", count);
                        $.ajax({
                    url: '/getPreceptionData',
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
                            c1.style.cssText = 'overflow:auto;background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);width:300px;height:400px;margin-left:80px;border-radius:15px;margin-bottom:10px;';
                            const button1 = document.createElement('button');
                            const details = document.createElement('div');
                            details.className = "details";
                             
                                    //  data = JSON.parse(data);
                                     console.log("Data is ", data[i].username);
                                     details.innerHTML = `<center><h3>${data[i].docName}</h1><br/><br/>${data[i].pName}<br/><br/><p style="font-size:15px;">${data[i].prescription}</p></center>`
                                     details.style.cssText = 'color:#fff;margin-top:20%;font-size:25px;';
                                button1.className = 'Button1';
                                button1.style.cssText = 'text-decoration: none;color:#fff;background:black;margin-left:39%;margin-top:20%;border:none;border-radius:5px;font-size:20px;';
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
            console.log("Data is ", data);
            alert("Perception Deleted Reload Page");

                })
                .catch((err) => console.log(err));
  };
 

                                         
                            
                            generateBoxesPrescription.appendChild(row1);
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
                








const generateBoxesPending = document.getElementById('generate-boxes-pending');
generateBoxesPending.style.cssText='display:flex;flex-direction:row;'
$.ajax({
                    url: '/getPendingCount',
                    type: 'GET',
                    success: function(count){ 
                        console.log("I am inside javascript file and count is ", count);
                        $.ajax({
                    url: '/getPendingnData',
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
                            c1.style.cssText = 'overflow:auto;background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);width:300px;height:400px;margin-left:80px;border-radius:15px;margin-bottom:10px;';
                            const button1 = document.createElement('button');
                            const details = document.createElement('div');
                            details.className = "details";
                             
                                    //  data = JSON.parse(data);
                                     console.log("Data is ", data[i].username);
                                     details.innerHTML = `<center><h3>${data[i].docName}</h1><br/><br/>${data[i].pName}<br/><br/><p style="font-size:15px;">${data[i].illness}</p></center>`
                                     details.style.cssText = 'color:#fff;margin-top:20%;font-size:25px;';
                                button1.className = 'Button1';
                                button1.style.cssText = 'text-decoration: none;color:#fff;background:black;margin-left:39%;margin-top:20%;border:none;border-radius:5px;font-size:20px;';
                                     button1.value = data[i]._id;
                                     console.log(button1.value);
                                     button1.innerText = "Delete"; 
                                       button1.onclick = function() { 
    fetch('/delPendingByAdmin', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer abcdxyz',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'button':button1.value}),})
        .then((data) => {
            console.log("Data is ", data);
            alert("Perception Deleted Reload Page");

                })
                .catch((err) => console.log(err));
  };
 

                                         
                            
                            generateBoxesPending.appendChild(row1);
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

