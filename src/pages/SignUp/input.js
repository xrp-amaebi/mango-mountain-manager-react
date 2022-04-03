import Name from '../../assets/icons/nameIcon.svg'
import Email from '../../assets/icons/emailIcon.svg'
import Phone from '../../assets/icons/phoneIcon.svg'
import Password from '../../assets/icons/passwordIcon.svg'

export const input = [
    {
        icon: Name,
        placeholder:'First Name',
        type: 'text',
        name: 'firstName'
    },
    {
        icon: Name,
        placeholder:'Middle Name',
        type: 'text',
        name: 'middleName'
    },
    {
        icon: Name,
        placeholder:'Last Name',
        type: 'text',
        name: 'lastName'
    },
    {
        icon: Name,
        placeholder:'Gamer Tag',
        type: 'text',
        name: 'tag'
    },
    {
        icon: Email,
        placeholder:'Email',
        type: 'email',
        name: 'email'
    },
    {
        icon: Phone,
        placeholder:'Phone Number',
        type: 'text',
        name: 'phone'
    },
    {
        icon: Password,
        placeholder:'Password',
        type: 'password',
        name: 'password'
    },
    {
        icon: Password,
        placeholder:'Confirm Password',
        type: 'password',
        name: 'confirmPassword'
    }
]

export const phoneStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    border: "1px solid #C4C4C4",
    borderRadius: "5px",
    margin: "20px 0",
    color: "#c4c4c4",
}