
            validate = () =>{
                let isValid = true;
                let errorMsgs = [];// empty array
                //Identifying the element and getting the value
                const user_fname = document.getElementById("u_fname").value;
                const user_lname = document.getElementById("u_lname").value;
                const user_email = document.getElementById("u_email").value;
                const user_pwd = document.getElementById("u_pwd").value;
                const error_msg = document.getElementById("errorMsg");
                //error message 
                error_msg.innerHTML="";
                error_msg.style.backgroundColor="yellow";
                error_msg.style.color="red";

                //name validation
                //trim()- predefined function - it has to include()
                if(user_fname.trim() === ''){
                    isValid = false;
                    errorMsgs.push("First name is required!"); // created a error message in array
                    
                }
                if(user_lname.trim() === ''){
                    isValid = false;
                    errorMsgs.push("Last name is required!");
                }

                //email regEX pattern
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


                if(!emailPattern.test(user_email)){
                    isValid = false;
                    errorMsgs.push("Enter a valid email!"); 
                }

                // Password length validation
                if (user_pwd.length < 8) {
                           isValid = false;
                           errorMsgs.push('Password must be at least 8 characters long.');
                  }

                  // Uppercase letter validation
                 const upperCasePattern = /[A-Z]/;// creating pattern using RegEx and comparing with created element related variable
                 if (!upperCasePattern.test(user_pwd)) {
                           isValid = false;
                           errorMsgs.push('Password must contain at least one uppercase letter.');
                 } 

                  // Lowercase letter validation
                  const lowerCasePattern = /[a-z]/;
                  if (!lowerCasePattern.test(user_pwd)) {
                      isValid = false;
                      errorMsgs.push('Password must contain at least one lowercase letter.');
                  }

                  // Digit validation
                  const digitPattern = /[0-9]/;
                  if (!digitPattern.test(user_pwd)) {
                      isValid = false;
                      errorMsgs.push('Password must contain at least one number.');
                  }

                  // Special character validation
                  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
                  if (!specialCharPattern.test(user_pwd)) {
                      isValid = false;
                      errorMsgs.push('Password must contain at least one special character.');
                  }

                //pass the error message to dedicated error message element
                if(!isValid){
                    error_msg.innerHTML = errorMsgs.join('<br>');
                }


            return isValid;
            }
    
   