import React from "react";
import './navbar.css'
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/liftingDice">Lifting Dice</Link>
                </li>
                <li>
                    <Link href="/macrosmanager">MacrosManager</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;