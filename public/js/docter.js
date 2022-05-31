
const generateBoxes = document.getElementById('generate-boxes');
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
                   
                        for (var i = 0; i < count; i++)
                        {
                                const row1 = document.createElement('div');
                                row1.className = 'Row';
                                row1.style.cssText = 'margin-top:40px;';
                                const c1 = document.createElement('div');
                                c1.className = 'C1';
                            c1.style.cssText = 'overflow:auto;background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);width:300px;height:400px;margin-left:80px;border-radius:15px;margin-bottom:10px;';
                            const button1 = document.createElement('button');
                            const button2 = document.createElement('button');
                            const details = document.createElement('div');
                            details.className = "details";
                                     console.log("Here we are ",data)
                                     console.log("Data is ", data[i]);
                                     details.innerHTML = `<center>${data[i].pName}<br/><br/></center>`
                                     details.style.cssText = 'color:#fff;margin-top:30%;font-size:25px;';
                                button1.className = 'Button1';
                                button1.style.cssText = 'text-decoration: none;color:#fff;background:black;margin-left:37%;margin-top:5%;border:none;border-radius:5px;font-size:20px;';
                                     button1.value = data[i]._id;
                            button1.innerText = "Accept";
                            button2.className = 'Button1';
                            button2.value = data[i]._id;
                            button2.innerText = "Image";
                            button2.style.cssText = 'text-decoration: none;color:#fff;background:black;margin-left:37%;margin-top:15%;border:none;border-radius:5px;font-size:20px;';
                            button2.onclick = function () {
                                   var myWindow = window.open("", "", "width=600,height=450");
            
            myWindow.document.write(`<form action="/getImage" method="post"><input id="presId" type="text" name="id" value="${button1.value}" style="width:60%;height:10%;"><input type="submit" value="Show Image"></form><br/>`);
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
                                               .then((data) => {
                                                   console.log("Data is ", data);
                                                   console.log(button1.value);
                                                    
                     var myWindow2 = window.open("", "", "width=700,height=550");
                    myWindow2.document.write(`<form action="/postInputPrescription" method="post"><input id="presId" type="text" name="id" value="${button1.value}" style="width:60%;height:10%;"><input id="presId" type="text" name="prescription" placeholder="PRESCRIPTION" style="width:60%;height:10%;"><input type="submit" value="prescribe"></form>`);
                                                 

            
            alert("Please Refresh page if you add prescription");
            
                })
                .catch((err) => console.log("Here is errer ",err));
  };
                  

                        
                            
                            generateBoxes.appendChild(row1);
                            row1.appendChild(c1);
                            c1.appendChild(details);
                            c1.appendChild(button2);
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

