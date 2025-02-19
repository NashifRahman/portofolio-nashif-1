import ProfilePic from "../../img/fotojas-copy.jpg"

export default function Gambar(){
    return(
        <div className="flex justify-center items-center md:mr-8 mb-5">
            <img src={ProfilePic}
            alt="profile" 
            className="w-60 md:w-[768px] rounded-full object-cover border-4 border-gray-700"/>
        </div>
    )
}