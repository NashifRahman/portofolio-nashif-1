import VerticalTimeline from "./misc/VerticalTimeline"
import Gambar from "./misc/Gambar"
import GitnMore from "./misc/GitnMore"

function About(){
    return(
        <section id="About" className="bg-slate-900 px-6 py-16">
            <div className="text-center  md:text-left max-w-4xl mx-auto flex flex-col md:flex-row">
                <Gambar/>
                <VerticalTimeline/>
                <div>
                    <h3 className="text-2xl font-semibold mb-5">Tentang Saya</h3>
                    <p className="mb-8 text-justify">Selamat datang di portofolio online saya! Saya adalah seorang pengembang web yang berdedikasi dalam membangun aplikasi berkualitas tinggi. Dengan fokus pada pengalaman pengguna dan kode yang bersih, saya selalu berusaha memberikan solusi terbaik untuk setiap proyek.</p>
                    <GitnMore/>
                </div>
            </div>

        </section>
    )
}

export default About