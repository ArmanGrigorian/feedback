import Link from "next/link";

const NavBar = () => {
	return (
      <nav className="h-10 flex justify-center items-center gap-8 bg-neutral-800">
         
			<Link className=" text-white/90 hover:text-white font-semibold" href="/">
				Home
         </Link>
         
			<Link className=" text-white/90 hover:text-white font-semibold" href="/feedback">
				Feedback
         </Link>
      
		</nav>
	);
};

export default NavBar;
