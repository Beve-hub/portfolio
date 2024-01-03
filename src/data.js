import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineBehance} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsMedium} from 'react-icons/bs'
import { MdHomeFilled, MdPropaneTank, MdContacts, MdContactEmergency,  MdAddCall, MdOutlineWhatsapp } from "react-icons/md";





export const links = [
    {
        name: 'Home',
        path: '/'
    },

    {
        name: 'About',
        path: '/About'
    },
    
    {
        name: 'project',
        path: '/project'
    },
    {
        name: 'Contact',
        path: '/Contact'
    }
]

export const float = [
    {
        icon: <MdHomeFilled size='22'/>,
        name: 'Home',
        path: '/',
        dish: "translate-x-0"
    },

    {
        icon:  <MdContactEmergency size='22'/> ,
        name: 'About',
        path: '/About',
        dish: "translate-x-16"
    },
    
    {
        icon:<MdPropaneTank size='22'/>,
        name: 'project',
        path: '/Project',
        dish: "translate-x-32"
    },
    {
        icon: <MdContacts size='22'/>,
        name: 'Contact',
        path: '/Contact',
        dish: "translate-x-48"
    }
    

]


export const link = [
    {id: 1, link: 'https://medium.com/@victorokeke89', icon: <BsMedium/>},
    {id: 2, link: 'https://twitter.com/future007_man', icon: <AiOutlineTwitter/>},
    {id: 3, link: 'https://www.behance.net/victorokeke', icon: <AiOutlineBehance/>},
    {id: 4, link: 'https://github.com/Beve-hub', icon: <AiOutlineGithub/>},
    {id: 5, link: 'https://www.linkedin.com/in/victor-okeke-66a576218', icon: <AiOutlineLinkedin/>}
]


export const lint = [
    {id: 1, link: 'https://wa.me/08184207181?text=', icon: <MdOutlineWhatsapp />},
    {id: 2, link: 'https://twitter.com/future007_man', icon: <AiOutlineTwitter/>},
    {id: 3, link: 'tel:+2348184207181', icon: <MdAddCall /> },
    {id: 4, link: 'https://www.linkedin.com/in/victor-okeke-66a576218', icon: <AiOutlineLinkedin/>}
]

