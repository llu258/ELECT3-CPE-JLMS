function validate(){
    if(document.myForm.StudentID.value=="" || isNaN(
        document.myForm.StudentID.value) || 
        document.myForm.StudentID.value.length != 6){

        document.getElementById("idErr").innerHTML="<b>Student ID must be 6 digit numeric only";
        document.myForm.StudentID.focus();
        return false;
    }

    if(document.myForm.Name.value==""){
        document.getElementById("nameErr").innerHTML="<b>Please enter your legal full name";
        document.myForm.Name.focus();
        return false;
    }

    if(document.myForm.gender.value==""){
        document.getElementById("genderErr").innerHTML="<b>Please select your gender";
        document.myForm.Name.focus();
        return false;
    }
    
    if(document.myForm.Address.value == ""){
        document.getElementById("addErr").innerHTML="<b>Please enter your home address details";
        document.myForm.Address.focus();
        return false;
    }

    if( document.myForm.Zip.value == "" || isNaN(
        document.myForm.Zip.value ) ||
         document.myForm.Zip.value.length != 4 ) {
         
         alert("Invalid Zip Code, must be 4 digits." );
         document.myForm.Zip.focus() ;
         return false;
         }        

    if(document.myForm.Email.value==""){
        document.getElementById("emailErr").innerHTML="<b>Please enter your E-mail";
        document.myForm.Email.focus();
        return false;
    }

    else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.Email.value) == false){
            alert("Please enter proper format for the email address Ex:macariosakay@gmail.com");
            document.myForm.Email.focus();
            return false;
        }
    }

    if(document.myForm.SchoolYr.value==""){
        document.getElementById("syErr").innerHTML="<b>Please enter your school year";
        document.myForm.SchoolYr.focus();
        return false;
    }

    if(document.myForm.Semester.value==""){
        document.getElementById("semErr").innerHTML="<b>Please enter the semester";
        document.myForm.Semester.focus();
        return false;
    }

    if(document.myForm.course.value=="-1"){
        document.getElementById("courseErr").innerHTML="<b>Please provide your course";
        document.myForm.Course.focus();
        return false;
    }

    if(document.myForm.YrLevel.value=="-1"){
        document.getElementById("yrlvlErr").innerHTML="<b>Please provide your Year Level ";
        document.myForm.YrLevel.focus();
        return false;
    }

    if(document.myForm.section.value ==""){
        document.getElementById("secErr").innerHTML="<b>Please provide the year section";
        document.myForm.YrLevel.focus();
        return false;
    }

    if(document.myForm.Units.value==""){
        document.getElementById("unitsErr").innerHTML="<b>Please provide the total units ";
        document.myForm.Units.focus();
        return false;
    }
    else{
        var regex = /^[0-9]+$/;
        if(regex.test(document.myForm.Units.value) == false){
            alert("Please enter a numeric value only");
            document.myForm.Units.focus();
            return false;
        }
    }
}