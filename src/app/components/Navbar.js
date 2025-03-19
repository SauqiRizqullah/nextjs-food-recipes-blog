"use client"
import Link from "next/link";
import { useEffect } from "react";



export default function Navbar(){

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');

            const pages = document.querySelectorAll('#page');
            if(window.scrollY > 2) {
                navbar.classList.add('bg-slate-50', 'text-recipe-bold');
                navbar.classList.remove('bg-recipe-bold', 'text-slate-50');

                for (let page of pages) {
                    page.classList.add('hover:text-recipe-light')
                    page.classList.remove('hover:text-slate-400')
                }

            } else if (window.scrollY <= 2){
                navbar.classList.add('bg-recipe-bold', 'text-slate-50');
                navbar.classList.remove('bg-slate-50', 'text-recipe-bold');

                for (let page of pages) {
                    page.classList.remove('hover:text-recipe-light')
                    page.classList.add('hover:text-slate-400')
                }
            }
        };

        
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
           
        }
    }, [])
    return (
        <div>
            {/* Navbar baru  */}
        <nav id="navbar" className="bg-recipe-bold md:flex md:justify-center md:items-center text-slate-50 gap-6 pt-2 pb-2 text-sm fixed w-full transition-all duration-300">
            <div className="vampiro flex items-center justify-between text-lg mx-6 drama italic font-semibold"> 
                <a id="page"  href="/" className="hover:text-slate-400 transition duration-300 ease-out">QI~FOOD</a>
            </div>
            
            <ul id="sub-pages" className="flex flex-row gap-6 consul">
                <li className="flex items-center md:my-0 my-1 md:mx-0 mx-4">
                    <Link id="page"  href="/about" className="hover:text-slate-400 transition duration-300 ease-out">ABOUT</Link>
                </li>
                <li className="flex items-center md:my-0 my-1 md:mx-0 mx-4">
                    <Link id="page"  href="/about" className="hover:text-slate-400 transition duration-300 ease-out">RECIPES</Link>
                </li>     
            </ul>
        </nav>
        <div className="bg-blue-950 h-11 w-full">

        </div>
        </div>
    )
}