import React from "react";
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {SiTailwindcss} from "react-icons/si"
import {GrReactjs} from "react-icons/gr"
import {TbBrandNextjs} from "react-icons/tb"

function Languages() {
    return (
        <>
        <section className="lg:px-24 px-8 py-8 ">
            <div className="border-t-[8px] rounded-md border-gray-500">
                <article className="gridblock lg:pt-16">
                    <div>
                      <div className="flex place-content-center">
                        <AiFillHtml5 size={200} />
                      </div>
                      <p className="lang text-center">HTML5</p>
                    </div>
                    <div>
                      <div className="flex place-content-center">
                        <FaCss3Alt size={200} />
                      </div>
                      <p className="lang text-center">CSS3</p>
                    </div>
                    <div>
                      <div className="flex place-content-center">
                        <IoLogoJavascript size={200}/> 
                      </div>
                      <p className="lang text-center">Javascript</p>
                    </div>
                    <div>
                      <div className="flex place-content-center">
                       <SiTailwindcss size={200} />
                      </div>
                      <p className="lang text-center">Tailwind CSS</p>
                    </div>
                    <div>
                      <div className="flex place-content-center" >
                        <GrReactjs size={200} />
                      </div>
                      < p className="lang text-center">React</p>
                    </div>  
                    <div>
                      <div className="flex place-content-center">
                        <TbBrandNextjs size={200}/>
                      </div>
                      <p className="lang text-center">NextJs</p>
                    </div>  
                </article> 
            </div>
        </section>

        </>
    )
}

export default Languages