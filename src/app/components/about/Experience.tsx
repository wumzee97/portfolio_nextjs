
interface IExperience {
    jobTitle: string;
    period: string;
    company: string;
    description: string
}
const experiences: IExperience[] = [
    {
        jobTitle: 'Frontend Developer',
        period: 'Nov 2023 — Present',
        company: 'DreamMesh Ltd',
        description: 'I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.'
    },
    {
        jobTitle: 'Frontend Developer',
        period: 'Nov 2023 — Present',
        company: 'Fundall Company',
        description: 'I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.'
    },
    {
        jobTitle: 'Frontend Developer',
        period: 'Nov 2023 — Present',
        company: 'Fundall Company',
        description: 'I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.'
    }
]
function Experience() {
    return (
        <div className="lg:grid grid-cols-12 gap-5 lg:px-40 px-4 lg:pt-10 pt-6 ">
            <div className="col-span-6">
                <p className='text-white font-bebas text-[43px] lg:text-[76px]'>My Experience</p>
            </div>
            <div className="col-span-6">
                {
                    experiences.map((experience) => (
                        <div className="mb-12 lg:mb-20">
                            <div className="lg:flex justify-between">
                                <p className="text-lg lg:text-2xl font-medium font-manrope text-white">{experience.jobTitle}</p>
                                <p className="font-manrope lg:text-lg text-neutral-offwhite">{experience.period} </p>
                            </div>
                            <p className="text-[#D3E97A] lg:text-lg font-manrope font-semibold">{experience.company}</p>
                            <p className=' font-manrope lg:text-lg text-neutral-offwhite mt-5'>{experience.description}</p>

                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default Experience;