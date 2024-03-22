import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from '../../public/logo.jpg';

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <nav className="bg-pink-300 py-4">
            <div className="flex mr-20 ml-10">
                <img src={logo} alt="" className="w-[50px] h-[50px]" />
            </div>

            <div className="container mx-auto flex justify-between items-center">
                <div className="mr-20">
                    <img src="" alt=""/>
                </div>
                <div className="flex items-center justify-center flex-grow">
                    <img src="" alt=""/>
                    <form action="bg-white p-2 h-[5%] w-full rounded-lg">
                        <input type="text"/>
                    </form> 
                </div>
                <div></div>
                <div className="ml-20 flex items-center justify-end">
                    <ul className="flex space-x-4 justify-end">
                        <li>
                            <button className="text-white text-xl" onClick={() => setShowCategories(!showCategories)}>Menú</button>
                            {showCategories && (
                                <ul className="absolute bg-white text-xl w-[20%]">
                                    <li>
                                        <button className="hover:underline">Categoría 1</button>
                                    </li>
                                    <li>
                                        <button className="hover:underline">Categoría 2</button>
                                    </li>
                                    <li>
                                        <button className="hover:underline">Categoría 3</button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-white text-xl">Productos</button>
                        </li>
                        <li>
                            <button className="text-white text-xl">Contacto</button>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;