import React, {useState} from 'react'
import Axios from "axios"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"

import { tokenize } from '../../actions/platform'

import Toast from '../../components/Toast/index'
import FieldInput from '../../components/FieldInput/index'
import { LoginHeader } from '../../components/LoginHeader/index'

// import { pull } from "../../utils/fetch"
import data from "./data"
import { login } from "../../routes/backend"


import { useModalContext } from '../../Global/Modal/ModalContext'
import { useTokenContext } from '../../Global/Token/TokenContext'

import { colors } from "../../styles/utils/colors"
import { LoginForm, SignUpLink } from "./style"
import { LoadingButton } from "../../styles/Loading"
import { Redirect, SignPage } from '../SignUp/_signup' //styles
import { useUserContext } from '../../Global/User'


export const Login = ({ tokenize, token }) => {
    const history = useHistory()

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        tag: ""
    })

    const [error, setError] = useState({
        description: "",
        icon: "",
        bg: ""
    })

    const [loading] = useState(false)

    const { setShowModal } = useModalContext()
    const { setToken } = useTokenContext()
    
    const { fetchProfile } = useUserContext() // { user, fetchProfile }
    
    const setLoader = ({ description, icon, bg="" }) => {
        setError({
            description,
            icon,
            bg
        })
        
        setShowModal(true)
    }

    const handleLogin = (event) => {
        setLoginData({
          ...loginData,
          [event.target.name]: event.target.value
        })
    }

    const onLoading = (event) => {
        event.preventDefault()

        try {
            const { email, tag, password } = loginData

            const isComplete = (email && password) || (tag && password)

            if(!isComplete){

                return setLoader({
                    description: "please fill in all fields",
                    icon: "success",
                    bg: "#ff0000"
                })
            }

            return Axios.post(login, {

                ...loginData

            }).then(async response => {
                const { status, data:_data } = response
                console.log({message: " client successfully logged in"})

                if(status === 200){
                    setToken(_data["accessToken"])
                    await fetchProfile(email)

                    // pull({ token: _data["accessToken"] }, setLoader, setToken).then(response => {

                    //     const token = sessionStorage.getItem("tokenizer")
                    //     // tokenize({ token, profile: _data["profile"] })
                    //     // sessionStorage.setItem("tokenizer", null)
                      
                    // })

                    setLoader({
                        description: `${_data.message}`,
                        icon: "error",
                        bg: colors.gold
                    })

                    // history.push("/dashboard")
                    history.push("/register")
                    
                }

            }).catch(error => {
                const { message } = error.response ? error.response.data : error

                setLoader({
                    description: `${message}`,
                    icon: "error",
                    bg: "#ff0000"
                })

            })

        }catch(error){

            setLoader({
                description: `${error.message}`,
                icon: "error",
                bg: "#ff0000"
            })
            
        }
    }   

    return(
        <SignPage>
            <LoginHeader />
            <Toast description={error.description} icon={error.icon} bg={error.bg} />
            <LoginForm>
                {
                    data.map(({ name, icon, type, placeholder }, index) => {
                        return (
                            <FieldInput
                                loginChange={handleLogin}
                                key={index}
                                placeholder={placeholder}
                                icon={icon}
                                type={type}
                                name={name}
                            />
                        )
                    })
                }
                
                <Redirect>
                    <LoadingButton
                        onClick={onLoading}
                        width={"80px"}
                        color={colors.offWhite}
                        text={"Log In"}
                        padding={"4px"}
                        loading={loading}
                    />
                    <div>
                        <SignUpLink to="/register">Register</SignUpLink>
                    </div>
                </Redirect>
            </LoginForm>
        </SignPage>
    )
}

const mapStateToProps = (state) => ({
    ...state.platform
})

const mapDispatchToProps = (dispatch) => ({
    tokenize: (token) => dispatch(tokenize(token)),
    // profiler: (profile) => dispatch(profiler(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)