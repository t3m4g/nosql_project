import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout