import React from "react"
import { AiFillGithub } from "react-icons/ai"
import {AiFillLinkedin } from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import headerImage from "./headerImage.gif";

function Intro() {
    return (
     <>
      <section className="lg:px-24 px-8 py-8 lg:py-16">
        <img src={headerImage} alt="headerImage" className="absolute top-32 h-auto w-4/5 lg:w-2/5 lg:h-[38rem] lg:top-0 lg:right-12 -z-10"/>
        <header className="lg:flex text-center content-between lg:place-content-between">
            <h1 className="text-2xl text-gray-700 font-extrabold">joyokebugwu</h1>
            <div>
                <ul className="flex z-20 py-2 lg:py-0">
                    <li className="w-8 lg:w-12 h-12"><AiFillGithub size={32}/></li>
                    <li className="w-8 lg:w-12 h-12"><AiFillLinkedin size={32}/></li>
                    <li className="w-8 lg:w-12 h-12"><AiFillTwitterCircle size={32}/></li>
                </ul>   
            </div>
        </header>
        <article className="pt-64 pb-12 lg:pt-16 ">
            <h1 className="text-center lg:text-left text-3xl lg:text-6xl font-bold text-gray-900">Nice to meet you!<br/>
            I am <span className="border-b-[8px] rounded-md border-gray-500"> Joy Okebugwu.</span></h1>
            <p className="text-gray-900 py-16 text-2xl text-center lg:text-left lg:w-2/5">
                I am a front-end developer passionate about building accessible web apps that users love
            </p>
            <p className="py-8 font-semibold text-gray-900 text-2xl">
               <span className="border-b-[5px] rounded-md border-gray-500">CONTACT ME</span> 
            </p>
        </article>
      </section>
     </>
    )
}

export default Intro