import {TbBrandGithub} from 'react-icons/tb'
import {RiLinkedinFill} from 'react-icons/ri'
import {FaAngellist, FaMediumM} from 'react-icons/fa'

export default function SocialIcons() {
  return (
    <section className='text-white text-[30px] gap-3 flex my-2.5  pb-[120px] py-2.5 px-3'>
        <TbBrandGithub />
        <RiLinkedinFill/>
        <FaAngellist/>
        <FaMediumM/>
    </section>
  )
}
