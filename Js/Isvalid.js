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
    
    //Isvalid boolean
    let  IsvalidGender = false
    let  IsvalidStatus = false
    let IsvalidCheck_Box = false
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
      else if(field.type==="radio"){
        if(field.name==="gender" && field.checked===true){
            IsvalidGender = true
            gender = field.value
          }
          if(field.name==="status" && field.checked===true){
            IsvalidStatus = true
            status = field.value
          }
        if( IsvalidGender == false){
            printError("genderErr", "Please select your gender");
          }else{
            printError("genderErr", "");
            genderErr = false;
          //   gender = Gen_btn_value
          }
          if(IsvalidStatus == false){
            printError("statusErr", "Please select your status");
          }else{
            printError("statusErr", "");
            statusErr = false;
            // status = Status_btn_value
          }
      }else if(field.type==="checkbox"){
        if(field.name==="hobbies" && field.checked===true){
            IsvalidCheck_Box = true
            hobbies.push (field.value)
          }
          if(IsvalidCheck_Box==false){
            printError("hobiesErr", "Please select your status");
          }else{
            printError("hobiesErr", "");
            hobiesErr = false;
            // hobbies = CheckBox_value
            // hobbies.push(CheckBox_value)
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
  
  