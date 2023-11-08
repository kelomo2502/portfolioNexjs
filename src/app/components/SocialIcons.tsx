import {TbBrandGithub} from 'react-icons/tb'
import {RiLinkedinFill} from 'react-icons/ri'
import {FaAngellist, FaMediumM, FaTwitter} from 'react-icons/fa'

interface Color{
  color:string
}
export default function SocialIcons({color}:Color) {
  const iconsStyles = {
    color:color
  }
  return (
    <section className=' text-[30px] gap-3 flex my-2.5  pb-[120px] py-2.5 px-3 ' style = {iconsStyles}>
        <TbBrandGithub />
        <RiLinkedinFill/>
        <FaAngellist/>
        <FaTwitter/>
        <FaMediumM/>
    </section>
  )
}
