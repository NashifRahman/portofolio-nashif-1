import SkillsImg from "./misc/SkillsImg"

function Skills(){
    return(
        <section id="Skills" className="px-6 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Skills and Technologies</h2>
                <p className="mb-10 font-semibold">Bahasa dan Frameworks yang saya gunakan untuk project dan kuliah</p>
                <SkillsImg/>
            </div>
        </section>
    )
}

export default Skills