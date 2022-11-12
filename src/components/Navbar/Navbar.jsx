
function Navbar(){
return(

    <nav className="Navbar bg-blackgrey">

        <div  className=" h-[15vh] block  inherit flex flex-row justify-between items-center mx-[5rem]  ">
        <div className="">
        <a href="https://fontmeme.com/pixel-fonts/"><img src="https://fontmeme.com/permalink/221112/b0711838bf26a4905a999fb831bb9647.png" alt="pixel-fonts" border="0"  className="logo w-44  " /></a>
        </div>
        <div className="text-[#E5E5E5] font-oswald flex flex-row space-x-[2.5rem] items-center font-bold text-[1.2rem]">
            <a href="" className="abc">About</a>
            <a href="" className="abc">Projects</a>
            <a href="" className="abc">Resume</a>
            <a href="" className="abc">Contact</a>
            <a href="" className="abc">switch</a>
        </div>

        </div>


    </nav>


);



}

export default Navbar