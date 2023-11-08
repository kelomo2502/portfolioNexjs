import {FiMail} from 'react-icons/fi'

export default function Navbar() {
  return (
    // Mobile navbar
    <>
      <nav className="md:hidden flex justify-between bg-nav-black text-white font-roboto font-bold text-lg h-12 items-center px-6 py-3 w-full fixed top-0 z-40">
        <div className="logo "><h2>Kelvin</h2></div>
        <div className="mobile-menu cursor-pointer">&#9776;</div>
      </nav>
      {/* Desktop navbar */}
      <nav className="hidden md:flex fixed top-0 z-40 w-full h-[72px] bg-nav-black text-white py-4 md:px-16 lg:px-36 justify-between items-center">
      <div className="logo font-inter font-bold text-xl "><h2>Kelvin</h2></div>
      <ul className='flex items-center gap-4 font-inter font-semibold text-[15px] '>
        <li>Portoflio</li>
        <li>About</li>
        <li>Contact</li>
        <li><FiMail/></li>
      </ul>
      </nav>
    </>
  );
}
