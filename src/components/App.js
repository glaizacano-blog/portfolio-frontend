import React from 'react';
import '../styles/app.css';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import About from './About';
import Projects from './Projects';

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<main className="py-20 z-0">
				<section className="px-14 xs:h-1/2-screen sm:h-2/3-screen md:h-3/4-screen lg:h-screen xl:h-screen 2xl:h-screen">
					<div className="flex flex-col justify-center items-start h-full bg-white">
						<h1 className="font-semibold text-8xl">Glaiza Cano</h1>
						<p className="font-semibold text-6xl">The Developer</p>
					</div>
				</section>
				<About />
				<Projects />
			</main>
			<Footer />
		</div>
	);
};

export default App;
