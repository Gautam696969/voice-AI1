import React, { useEffect, useState } from "react";
import "./Navbar.css";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const sections = [

        { id: "features", label: "Features" },
        { id: "usecases", label: "Use Cases" },
        { id: "security", label: "Security" },
        { id: "performance", label: "Performance" },
        { id: "mobile", label: "Mobile" },
    ];

    const scrollToSection = ( id ) => {
        const el = document.getElementById( id );
        if ( el ) el.scrollIntoView( { behavior: "smooth", block: "start" } );
    };


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY>450);
      
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log("scrolled",scrolled)

    return (
        
             <nav className={`navbar ${scrolled ? "no" : "yes"}`}>
            <div className="logo">🎙️ VoiceAI</div>
            <ul className="nav-links">
                {sections.map( ( s ) => (
                    <li key={s.id} onClick={() => scrollToSection( s.id )}>
                        {s.label}
                    </li>
                ) )}
            </ul>
        </nav>
    );
};

export default Navbar;
