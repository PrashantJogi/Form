function printError(elemId, hintMsg) {
  
  document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
  
  //For validation
  let regexText = /^[a-zA-Z\s]+$/;
  let emptyRegex = /^(?!\s*$).+/;
  
  //For errors
  let nameErr = true;
  let commentErr = true;
  let addressErr = true;
  let PhoneErr = true;
  let genderErr = true;
  let hobiesErr = true;
  let statusErr = true;
  
  //Empty valiables 
  let name = ""
  let phone = ""
  let gender = ""
  let comment = ""
  let status = ""
  let address = ""
  let hobbies = [];
  

  //Using querySelector for targeting field values
  let inputFields = document.querySelectorAll("input");
  let inputTextAre = document.querySelector("textarea");
  let inputRadioBtton = document.querySelectorAll('input[type="radio"]')
  let inputCheckBox = document.querySelectorAll('input[type="checkbox"]')
  // inputFields.push(document.querySelector("textarea"))
  console.log(inputCheckBox,"inputCheckBox")
  
  inputFields.forEach((field)=>{
   
    //for input type text
    if(field.type==="text")
    {
      //for field name
      if(field.name==="name")
      {
          if (emptyRegex.test(field.value) === false) 
          {
              printError("nameErr", "Please enter your name");
          } 
          else
         {
              var regex = /^[a-zA-Z\s]+$/;
              if (regex.test(field.value) === false) 
              {
                  printError("nameErr", "Please enter a valid name");
              }
               else
             {
                  printError("nameErr", "");
                  nameErr = false;
                  name = field.value
              }
          } 
        //for field address
      }else if(field.name==="address")
      {
          if (emptyRegex.test(field.value) === false) 
          {
            printError("addressErr", "Please enter your address here");
          } 
          else
          {
              var regex = /^[a-zA-Z1-9\s]/;
              if (regex.test(field.value) === false) 
              {
                  printError("addressErr", "Please enter a valid addressErr here");
              } 
              else
               {
                  printError("addressErr", "");
                  addressErr = false;
                  address = field.value
              }
           }
      }
      //for input type number  
    }else if(field.type==="number")
    {
             // Validate phone number
              if (emptyRegex.test(field.value) === false) {
                  printError("PhoneErr", "Please enter your mobile number");
              } else 
              {
                  var regex = /^[1-9]\d{9}$/;
                  if (regex.test(field.value) === false)
                  {
                      printError("PhoneErr", "Please enter a valid 10 digit mobile number");
                  }else
                  {
                      printError("PhoneErr", "");
                      PhoneErr = false;
                      phone =  field.value
                  }
              }
    }
    

    if (emptyRegex.test(inputTextAre.value) === false) {
      printError("commentErr", "Please enter your Comment here");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(inputTextAre.value) === false) {
        printError("commentErr", "Please enter a Comment Between 20 words here");
      } else {
        printError("commentErr", "");
        commentErr = false;
        comment = inputTextAre.value
      }
    }
    // Prevent the form from being submitted if there are any errors
    
  })
 
  let Gen_btn  = []
  let Status_btn  = []
  
  //for getting radio buttons

  for(let i=0;i<inputRadioBtton.length;i++){
        if(inputRadioBtton[i].name==="gender" && inputRadioBtton[i].checked===true){
          Gen_btn = inputRadioBtton[i].id
          gender = inputRadioBtton[i].value
        }
        if(inputRadioBtton[i].name==="status" && inputRadioBtton[i].checked===true){
          Status_btn = inputRadioBtton[i].id
          status = inputRadioBtton[i].value
        }
        
  }

  //checking buttons validation

  if(Gen_btn.length===0){
    printError("genderErr", "Please select your gender");
  }else{
    printError("genderErr", "");
    genderErr = false;
    // gender = Gen_btn_value
  }
  if(Status_btn.length===0){
    printError("statusErr", "Please select your status");
  }else{
    printError("statusErr", "");
    statusErr = false;
    // status = Status_btn_value
  }
  
 
  //for getting checkbox

  let CheckBox = []
    inputCheckBox.forEach((input_chkbx)=>{
    if(input_chkbx.name==="hobbies" && input_chkbx.checked===true){
      CheckBox = input_chkbx.id
      hobbies.push (input_chkbx.value)
    }
    
    // console.log(gender_btn)
  })
 
  //checking checkbox validation
  if(CheckBox.length===0){
    printError("hobiesErr", "Please select your status");
  }else{
    printError("hobiesErr", "");
    hobiesErr = false;
    // hobbies = CheckBox_value
    // hobbies.push(CheckBox_value)
  }

  // Prevent the form from being submitted if there are any errors
  if (
    (nameErr ||
      commentErr ||
      PhoneErr ||
      genderErr ||
      addressErr ||
      statusErr || hobiesErr) == true
  ) {
    
    return false;
  } else {
    // Creating a string from input data for preview
    var dataPreview =
      "You've entered the following details: \n\n" +
      "Full Name: " +
      name +
      "\n" +
      "Mobile Number: " +
      phone +
      "\n" +
      "Address: " +
      address +
      "\n" +
      "Comment: " +
      comment +
      "\n" +
      "Gender: " +
      gender +
      "\n" +
      "Status: " +
      status +
      "\n";
    if (hobbies.length) {
      dataPreview += "Hobbies: " + hobbies.join(", ");
    }
    // Display input data in a dialog box before submitting the form
    alert(dataPreview);
    // console.log("Error place")
  }
}

// let hobies = document.getElementById("hobies").value
  // let comment = document.getElementById("comment").value;
  // let status = document.getElementById("status1").checked
  //   ? document.getElementById("status1").value
  //   : document.getElementById("status2").checked
  //   ? document.getElementById("status2").value
  //   : "";
  // let address = document.getElementById("address").value;
  // let hobbies = ""
  // let checkboxes = document.getElementsByName("hobbies");
  // for (var i = 0; i < checkboxes.length; i++) {
  //   if (checkboxes[i].checked) {
  //     // Populate hobbies array with selected values
  //     hobbies.push(checkboxes[i].value);
  //   }
  // }
   // Retrieving the values of form elements
  // let name = document.getElementById("name").value;
  
  // Defining error variables with a default value
  
  // Validate name
  
  // if (emptyRegex.test(name) === false) {
  //   printError("nameErr", "Please enter your name");
  // } else {
  //   var regex = /^[a-zA-Z\s]+$/;
  //   if (regex.test(name) === false) {
  //     printError("nameErr", "Please enter a valid name");
  //   } else {
  //     printError("nameErr", "");
  //     nameErr = false;
  //   }
  // }

  // Validate comment
 
  //  if(field.type==="radio")
  // {
  //         // Validate gender
          
  //         if(field.name == "gender")
  //         {
            
  //             // if (field.checked == false && field.id==="gender1") 
  //             // {
  //             //     console.log(field.value," value ",field.checked,"")
  //             //     printError("genderErr", "Please select your gender");
  //             // } else if (field.checked == false && field.id==="gender2") 
  //             // {
  //             //     console.log(field.value," value ",field.checked,"")
  //             //     printError("genderErr", "Please select your gender");
  //             // }
  //             // else if(field.checked == true)
  //             // { 
  //             //     printError("genderErr", "");
  //             //     genderErr = false;
                  
  //             //     if(field.checked)
  //             //     {
  //             //       console.log(field.value,"field value");
  //             //        gender = field.value 
  //             //     }
  //             // }
  //           if (field.checked == false ) {
  //               printError("genderErr", "Please select your gender");
  //           } 
  //           else
  //           {
  //               printError("genderErr", "");
  //               genderErr = false;
  //               if(field.checked)
  //               {
  //                 gender = field.value 
  //               }
  //           }
  //         }
  //          if(field.name == "status")
  //         {
  //             if (field.checked == false) {
  //                 printError("statusErr", "Please choose your status here");
  //             } 
  //             else
  //             {
  //                 console.log(field.checked,"status checked");
  //                 printError("statusErr", "");
  //                 statusErr = false;
  //                 if(field.checked)
  //                 {
  //                   status = field.value 
  //                 }
  //             }
  //        }
  // }else if(field.type==="checkbox")
  // {
  //        // Validate hobbies
  //        console.log(field.checked,"checkbox");
  //       if (field.checked == false) {
  //           printError("hobiesErr", "Please select your hobies here");
  //       } else 
  //       {
  //           printError("hobiesErr", "");
  //           hobiesErr = false;
  //               if(field.checked)
  //               {
  //                   hobbies.push(field.value)
  //               }
            
  //       }
  // }
 

  // Validate address


   // inputRadioBtton.forEach((Radio_btns)=>{
   
  //   let Gen_btn = []
  //   let Status_btn = [] 
   
  //   for(let i=0;i<inputRadioBtton.length;i++){
  //     if(inputRadioBtton[i].name==="gender" && inputRadioBtton[i].checked===true){
  //       Gen_btn1.push(inputRadioBtton[i].id)
  //       console.log(Gen_btn1,"Gen_btn1");
  //     }
  //     if(inputRadioBtton.name==="gender")
  
  //       if(Gen_btn1.includes("gender1") || Gen_btn1.includes("gender2")){
  //           printError("genderErr", "");
  //            genderErr = false;
  //           gender = inputRadioBtton[i].value 
  //           console.log(gender,"gender");
  //     }else{
  //           printError("genderErr", "Please select your gender");
        
  //     }
  //   }
  
  //   if(Radio_btns.name==="status"){
  //     if(Radio_btns.checked){
  //       Status_btn.push(Radio_btns.id)
  //     }
  //   }
  //   if(Radio_btns.name==="status"){
  //     if(Status_btn.length!==0){
  //       printError("statusErr", "");
  //                       statusErr = false;
                        
  //                       if(Radio_btns.checked)
  //                       {
                          
  //                          gender = Radio_btns.value 
  //                       }
  //     }else{
  //       printError("statusErr", "Please select your gender");

  //     }
  //   }
  //   // console.log(gender_btn)
  // })