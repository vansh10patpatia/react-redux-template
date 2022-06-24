import * as Yup from "yup";

export const contactFormValidators =  
        Yup.object({
            name : Yup.string().required('Please enter your name.').min(2, 'Invalid Name'),
            email: Yup.string().email("Invalid email address!").required("Please enter an email address."),
            body : Yup.string().required('This is a required field.'),
        });

export const loginValidators = 
        Yup.object({
            email:Yup.string().required("Please enter email!").email("Please enter a valid email"),
            password:Yup.string().required("Please enter password!"),  
        })
    
export const registerValidators =
        Yup.object({
            name:Yup.string().required("Please enter name!").min(2, "Invalid Name"),
            email:Yup.string().required("Please enter email!").email("Please enter a valid email"),
            password:Yup.string().required("Please enter password!"),
            confirmPassword:Yup.string().required("Please enter confirm password!").oneOf([Yup.ref('password'), null], "Passwords must match"),
        })