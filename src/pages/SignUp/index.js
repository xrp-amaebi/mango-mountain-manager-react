import React, { useRef, useState } from "react"
import validator from "email-validator"
import Axios from 'axios'

import Toast  from "../../components/Toast/index"
import NameField from "../../components/FieldInput/index"


import { useRegistrationContext } from "../../Global/Registration/RegistrationContext"
import { useModalContext } from "../../Global/Modal/ModalContext"

import { signup } from "../../routes/backend"
import{ input, phoneStyle } from './input'
import { LoadingButton } from "../../styles/Loading"

import { 
    SignUpLink, PhoneField,
    ErrorMessage
} from "./style"


import { 
    SignContainer, SignPage, Languages, 
    FieldContainer, CreateAccount, Logo, 
    Wrapper2, Wrapper1, Figure, Redirect
} from "./_signup"

import { colors } from "../../styles/utils/colors"


export const SignUp = () => {
    //contextual dependencies
    const { signUpData, setSignUpData } = useRegistrationContext()
    const { setShowModal } = useModalContext()

    // error handling
    const [error, setError] = useState({ icon: "", description: "", bg: "" })
    const errorReference = useRef("")

    //modals / loading
    const [loading ] = useState(false)
    const [disabled ] = useState(false)

    // checkboxes
    // const [setChecked] = useState(false)

    // field handlers

    //check field
    // const checkedInput = ({ target }) => setChecked(target.checked)

    //phone field
    const onPhoneChange = phone => setSignUpData({
        ...signUpData,
        phone
    })

    //other fields
    const onChangeHandler = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        })
    }

    //onClick loading
    const setLoader = ({ description, icon, bg="" }) => {
        setError({
            description,
            icon,
            bg
        })

        setShowModal(true)
        errorReference.current.textContext = description
    }

    const onLoading = event => {

        event.preventDefault()
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        
        const {
            firstName, lastName, tag, middleName,
            email, phone, password, confirmPassword
        } = signUpData

        const isEmail = validator.validate(email)
        const passwordLen = password ? password.length >= 6 : undefined

        const isCompleted = !!firstName && !!lastName && !!email && !!phone && !!password && !!confirmPassword && !!tag

        if(!isCompleted) {

            setLoader({ 
                description: "please fill all input fields",
                icon: "error"
            })

        } else if(!isEmail) {
            setLoader({
                description: "email format is invalid",
                icon: "error"
            })
        } else if (password !== confirmPassword) {
            setLoader({
                description: "passwords do not match",
                icon: "error"
            })
        } else if (passwordLen === false) {
            setLoader({
                description: "password should be greater than or equal to six characters",
                icon: "error"
            })
        } else if(isEmail && isCompleted) {

            // setLoading(true)

            Axios.post(signup, {
                firstName, middleName, lastName,
                email, phone, tag, password,
            }).then(response => {

                console.log(response)
                const { status, data } = response

                if(status === 201){
                    setLoader({
                        description: data.message,
                        icon: "success",
                        bg: colors.gold
                    })
                }
                
            }).catch(error => {
                try{
                    console.log(error.response)

                    const { status, data } = error.response

                    if(status === 400){
                        setLoader({
                            description: data.message,
                            icon: "error"
                        })
                    }

                } catch(error){
                    setLoader({
                        description: "server-error, network down",
                        icon: "error"
                    })
                    console.log(error)
                }
            })
        }

    }

    return( 
        <SignPage>
            <Toast description={error.description} icon={error.icon} bg={error.bg} />
            <SignContainer>
                <Wrapper1>
                    <Logo>MANGO | MOUNTAIN</Logo>
                    <CreateAccount>
                        <span>Create your User Account</span>
                    </CreateAccount>
                    <FieldContainer>
                        {
                            input.map(({ name, type, placeholder, icon }, index) => 
                                (name !== 'phone') ? 
                                    (
                                        <NameField
                                            key={index}
                                            type={type}
                                            name={name}
                                            placeholder={placeholder}
                                            icon={icon}
                                            onChangeHandler={onChangeHandler}
                                        />
                                    )
                                :
                                    (
                                        <PhoneField
                                            key={index}
                                            country={"ng"}
                                            onChange={phone => `+${onPhoneChange(phone)}`}
                                            inputStyle={phoneStyle}
                                        />
                                    )
                                
                            )
                        }
                        <div>You can use letters, numbers and periods.</div>
                        
                        <div>
                            <button className="next-input">Try some brackets anonymously.</button>
                        </div>
                        
                        <div>Use 8 or more characters with a mix of letters, numbers & symbol.</div>
                        
                    </ FieldContainer>
                    
                    <Redirect>
                        <div>
                            <SignUpLink to="/login">Log In instead</SignUpLink>
                        </div>
                        
                        <LoadingButton
                            onClick={onLoading}
                            width={"80px"}
                            color={colors.offWhite}
                            text={"Next"}
                            padding={"10px"}
                            loading={loading}
                        />
                    </ Redirect>
                    <ErrorMessage
                        ref={errorReference}
                        color={disabled === false ? "red" : "green"}
                    >
                    </ErrorMessage>
                </Wrapper1>
                <Wrapper2>
                    <Figure>
                        <img src="img/account.svg" alt="accounts" width="244" height="244"/>
                        <figcaption>
                            One Account to manage all your Tournaments
                        </figcaption>
                    </Figure>
                </Wrapper2>
            </SignContainer>
            
            <Languages>
                <div className='privacy'>
                    <form action="submit">
                        <select className='language-form'>
                            <option value="default">English (United States)</option>
                            <option value="german">German</option>
                            <option value="french">French</option>
                            <option value="french">Korean</option>
                        </select>
                    </form>

                    <div id="privacy">
                        <span><a href="/">Help</a></span>
                        <span><a href="/">Privacy</a></span>
                        <span><a href="/">Terms</a></span>
                    </div>
                </div>
            </Languages>
        </ SignPage>
    )
}