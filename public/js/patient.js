const generateBoxes = document.getElementById('generate-boxes');
console.log("I am here");
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
                                     details.style.cssText = 'color:#fff;margin-top:30%;font-size:25px;';
                                button1.className = 'Button1';
                                button1.style.cssText = 'text-decoration: none;color:#fff;background:black;margin-left:25%;margin-top:25%;border:none;border-radius:5px;font-size:20px;';
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