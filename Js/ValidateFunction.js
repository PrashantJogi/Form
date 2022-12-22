function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

let allFields;
let valid_fields = [];
let Invalid_fields = [];
let error = [];

let isInvalid = false;

const validationSchema = {
    name: [{
        rule: "required",
        errorMessage: "Name is required"
    }]
}

//   let nameField = document.querySelector('#name')
//   console.log(nameField,"nameField");
//   nameField.addEventListener('keypress',event=>{
//     let value = element.value + `${event.key}`

//     console.log(value,"values");
// })
let regexText = /^[a-zA-Z\s]+$/;
let emptyRegex = /^(?!\s*$).+/;

console.log(typeof regexText,"regexText");
function change(id) {
  let nameField = document.getElementById(id);

  validate(nameField);
}

function setValue(data) {}

function validate(field) {
  if (field.dataset.validation) {
    const validationRules = field.dataset.validation.split("|");
    validationRules.map((validation) => {
      if (!isInvalid) {
        if (validation === "required") {
          const isValidMessage = validateRequired(field.value, field.name);
          if (isValidMessage) {
            document.getElementById(`${field.name}Err`).innerHTML =
              isValidMessage;
            isInvalid = true;
          } else {
            document.getElementById(`${field.name}Err`).innerHTML = "";
          }
        } else if (validation.includes("min:")) {
          const isValidMessage = validateMin(
            field.value,
            validation,
            field.name
          );
          if (isValidMessage) {
            document.getElementById(`${field.name}Err`).innerHTML =
              isValidMessage;
            isInvalid = true;
          } else {
            document.getElementById(`${field.name}Err`).innerHTML = "";
          }
        } else if (validation.includes("max:")) {
            const isValidMessage = validateMax(
              field.value,
              validation,
              field.name
            );
            if (isValidMessage) {
              document.getElementById(`${field.name}Err`).innerHTML =
                isValidMessage;
              isInvalid = true;
            } else {
              document.getElementById(`${field.name}Err`).innerHTML = "";
            }
          // logic for max validation
        } else if (validation.includes("regex:")) {
          // logic for regex validation
          const isValidMessage = validateRegex(
            field.value,
            validation,
            field.name
          );
          if (isValidMessage) {
            document.getElementById(`${field.name}Err`).innerHTML =
              isValidMessage;
            isInvalid = true;
          } else {
            document.getElementById(`${field.name}Err`).innerHTML = "";
          }
        }
      }
    });
  }

  //   let fieldsIsValid = false;
  //   if (emptyRegex.test(field.value) === false) {
  //     console.log(field.name, "field.name");
  //     printError(`${field.name}Err`, `Please enter your ${field.name}`);
  //     Invalid_fields.push(field.name);
  //     fieldsIsValid = false;
  //   } else {
  //     let regex = /^[a-zA-Z\s]+$/;
  //     if (field.name == "address") {
  //       regex = /^[a-zA-Z1-9\s]/;
  //     }
  //     if (field.name == "phone") {
  //       regex = /^[1-9]\d{9}$/;
  //     }
  //     if (regex.test(field.value) === false) {
  //       printError(`${field.name}Err`, `Please enter a valid  ${field.name}`);
  //       // Invalid_fields.push(field.name)
  //       fieldsIsValid = false;
  //       // console.log(fieldsIsValid,"fieldsIsValid");
  //     } else {
  //       printError(`${field.name}Err`, "");
  //       console.log(field, "field");
  //       // valid_fields.push(field)
  //       fieldsIsValid = true;
  //       // nameErr = false;
  //       // name = field.value
  //     }
  //   }
  //   if (fieldsIsValid) {
  //     valid_fields.push(field);
  //   } else {
  //     Invalid_fields.push(field.name);
  //   }
}
function validate_selection(nameField) {
  // let nameField = document.getElementsByName(name)
  let name;
  let fieldsIsValid = false;
  let Isvalid = false;
  for (let i = 0; i < nameField.length; i++) {
    if (nameField[i].checked === true) {
      Isvalid = true;
      name = nameField[i].name;
    } else {
      name = nameField[i].name;
    }
  }
  if (Isvalid == false) {
    printError(`${name}Err`, `Please select your ${name}`);
    console.log(`${name}Err`, "nameField[i].name");
    Invalid_fields.push(name);
  } else {
    printError(`${name}Err`, "");
    console.log(`${name}Err`, "nameField[i].name");
    fieldsIsValid = true;
    // genderErr = false;
    //   gender = Gen_btn_value
  }
  //   if(fieldsIsValid){
  //     valid_fields.push(field)
  // }else{
  // //  Invalid_fields.push(field.name)
  // }
}

function validate_checkBox(nameField) {
  console.log(nameField, "nameField");
  let Arr = [...nameField];
  // let nameField = document.getElementsByName(name)
  let name;
  let fieldsIsValid = false;
  let Isvalid = false;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i].checked === true) {
      Isvalid = true;
      console.log(Arr[i].name, "Arr");
      name = Arr[i].name;
    } else {
      name = Arr[i].name;
    }
  }
  if (Isvalid == false) {
    console.log(name, "name");
    printError(`${name}Err`, `Please select your ${name}`);
    Invalid_fields.push(name);
  } else {
    printError(`${name}Err`, "");
    fieldsIsValid = true;
    // genderErr = false;
    //   gender = Gen_btn_value
  }
  //   if(fieldsIsValid){
  //     valid_fields.push(field)
  // }else{
  //  Invalid_fields.push(field.name)
  // }
}

function validateForm() {
   
  // allFields = document.querySelectorAll("input");
  // let temp = []
  // temp = [...allFields]
  allFields = document.querySelectorAll('input[type="text"]');
  numberFields = document.querySelector('input[type="number"]');
  checkBox = document.querySelectorAll('input[type="checkbox"]');
  let radioBtn = document.querySelectorAll('input[type="radio"]');
  let error = [];
  error = [...document.getElementsByClassName("error")];
  // for (let i=0 ; i<error.length ; i++){

  //     if(error.innerHTML!==""){
  //         return false

  //     }
  // }
  //    console.log(checkBox,"checkBox");

  allFields.forEach((in_field) => {
    validate(in_field);
  });
  validate(numberFields);
  validate_selection(radioBtn);
  validate_checkBox(checkBox);

  //   let show = "You've entered the following details: \n\n";
  //   valid_fields.forEach((vfl) => {
  //     if (!show.includes(`${vfl.name.toUpperCase()} : ${vfl.value}\n`)) {
  //       show += `${vfl.name.toUpperCase()} : ${vfl.value}\n`;
  //     }
  //   });
  //   alert(show);
}


function validateRequired(value, fieldName) {
  if (!value || value === "" || value.trim() === "") {
    return `${fieldName} is required.`;
  }
  return undefined;
}

function validateMin(value, validationRule, fieldName) {
  const [rule, param] = validationRule.split(":");
  console.log(rule," : rule",param," : param");
  if (!value || parseInt(value.length) < parseInt(param)) {
    return `${fieldName} must contain at least ${param} characters.`;
  }
  return undefined;
}

function validateMax(value, validationRule, fieldName) {
  const [rule, param] = validationRule.split(":");
  if (!value || parseInt(value.length) > parseInt(param)) {
    return `${fieldName} must now contain more than ${param} characters.`;
  }
  return undefined;
}

function validateRegex(value, validationRule, fieldName){
  const [rule, param] = validationRule.split(":");
  const regex = new RegExp(param)
  if (regex.test(value) === false) {
    return `Please enter a valid ${fieldName} `;
  }
  return undefined;
}