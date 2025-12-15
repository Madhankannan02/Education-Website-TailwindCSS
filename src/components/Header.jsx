import { RiCloseLine } from '@remixicon/react';

export function Header(){
    return(
        <>
            <div className="container">
                <a href="#">
                    <img src="assets/images/logo.png" alt="Logo" width={170} height={50}
                    />
                </a>

                {/* Mobile Menu*/}
                <nav>
                    {/* Close Menu */}
                    <button>
                        <RiCloseLine size={30} />
                    </button>

                    <ul>
                        li
                    </ul>
                </nav>
            </div>
        </>
    );
}