
function Navbar(){
return(

    <nav className="Navbar bg-[#212121] ">

        <div  className=" h-[15vh] block  inherit flex flex-row justify-between items-center mx-[5rem] relative ">
        <div className="">
        <a href="#"><img src="https://fontmeme.com/permalink/221112/b0711838bf26a4905a999fb831bb9647.png" alt="pixel-fonts" border="0"  className="logo w-44  " /></a>
        </div>
        <div className="text-[#E5E5E5] font-pixel flex flex-row space-x-[1rem] items-center font-medium text-[1.6rem] tracking-wide">
            <a href="" className="abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg duration-[0.5s]  transition-all   ">About</a>
            <a href="" className="abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg duration-[0.5s]transition-all">Projects</a>
            <a href="" className="abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg duration-[0.5s] transition-all">Resume</a>
            <a href="" className="abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg duration-[0.5s] transition-all">Contact</a>
            <a href="" className="abc hover:bg-slate-300/[0.1] py-[0.2rem] px-[1.0rem] rounded-lg  duration-[0.5s]transition-all">switch</a>
        </div>
        </div>
        <img src="https://fontmeme.com/permalink/221113/cd872c597c639e131a03e51490aba934.png" alt="subtitle" className=" w-[8rem] ml-[6.5rem] b-[2rem] absolute  top-[5.2rem] " />
    </nav>


);



}

export default Navbar