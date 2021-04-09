import React from "react";

const menuItems = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "About",
		link: "#about",
	},
	{
		label: "Projects",
		link: "#projects",
	},
	{
		label: "Contact",
		link: "#contact",
	},
];

const NavItems = () =>
	menuItems.map(({ label, link }) => {
		return (
			<div>
				<a
					className="font-semibold text-xl uppercase text-gray-800 hover:text-gray-500 p-4"
					href={link}
					key={label}
				>
					{label}
				</a>
			</div>
		);
	});

const Navbar = () => {
	return (
		<div className="fixed top-0 w-full shadow-md bg-white z-10">
			<nav className="flex flex-row justify-between items-center h-20">
				<div className="flex justify-start">
					<a
						className="font-bold text-2xl text-black hover:text-gray-500 mx-12"
						href="/"
					>{`<GlaizaCano/>`}</a>
				</div>
				<div className="xs:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex justify-center items-center mx-12">
					<NavItems />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
