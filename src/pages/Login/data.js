import Name from '../../assets/icons/nameIcon.svg'
import Email from '../../assets/icons/emailIcon.svg'
import Password from '../../assets/icons/passwordIcon.svg'

const loginData = [
    {
        icon: Email,
        placeholder:'Email',
        type: 'email',
        name: 'email'
    },
    {
        icon: Name,
        placeholder:'Gamer Tag',
        type: 'name',
        name: 'tag'
    },
    {
        icon: Password,
        placeholder:'Password',
        type: 'password',
        name: 'password'
    }

]

// const loginTag = [
//     {
//         icon: Name,
//         placeholder:'Gamer Tag',
//         type: 'name',
//         name: 'name'
//     },
//     {
//         icon: Password,
//         placeholder:'Password',
//         type: 'password',
//         name: 'password'
//     }

// ]

export default loginData