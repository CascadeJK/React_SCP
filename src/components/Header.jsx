function Header()
{
    return(
        <header>

            <div className="heading">
                <h1 >Scp Classified:</h1>
                <h2>Classified reports from the scp Foundation</h2>
            </div>
            
            <img src="../images/Hompage_img.png" className="Homepage" alt="Hompage_image"/>


            <div className="classified">
                <h2>THE FOLLOWING FILES HAVE BEEN CLASSIFIED</h2>
                <h1 >TOP SECRET</h1>
                <h2>BY ORDER OF THE ADMINISTRATOR</h2>
            </div>

            <div className="warning">
                <h1>WARNING:</h1>
                <p>ANY NON-AUTHORIZED PERSONNEL ACCESSING THIS FILE WILL BE IMMEDIATELY
                    TERMINATED THROUGH BERRYMAN-LANGFORD MEMETIC KILL AGENT. SCROLLING 
                    DOWN WITHOUT PROPER MEMETIC INOCULATION WILL RESULT IN IMMEDIATE CARDIAC ARREST FOLLOWED BY DEATH.</p>
                <h2>YOU HAVE BEEN WARNED.</h2>  
            </div> 
        </header>
    );
}

export default Header;