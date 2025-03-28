import React from 'react'

const skills = [
    'html', 'css', 'javascript', 'jquery', 'php', 'Node Js', 'Vue Js', 'React', 'Next Js', 'Vuetify', 'Tailwind CSS', 'MySql', 'Postgres', 'Express Js', 'Nuxt', 'Flutter', 'React Native', 'Laravel'
]

function Capabilities() {
    return (
        <div className="lg:grid grid-cols-12 gap-5 lg:px-40 px-4 lg:pt-24 pt-16 ">
            <div className="col-span-6">
                <p className='text-white font-bebas text-[43px] lg:text-[76px]'>My capabilities</p>
            </div>
            <div className="col-span-6">
                <p className=' font-manrope text-lg text-neutral-offwhite'>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
                <div className="flex flex-wrap gap-3 lg:gap-5 mt-16">

                    {
                        skills.map((skill) => (
                            <div className='border uppercase border-[#484848] h-[46px] lg:h-14 rounded-full font-manrope font-bold flex items-center justify-center px-4 lg:px-8 text-white'>
                                {skill}
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Capabilities