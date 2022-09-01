import './Whatsapp.css'
import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'

const Whatsapp = () => {
  return (
    <div>
        <a rel='noreferrer' href="https://wa.me/6287817700087?text=Halo%20Admin" class="float" target="_blank">          
            <RiWhatsappLine color='#ffffff' class="my-float" size={40} />
        </a>     
    </div>
  )
}

export default Whatsapp