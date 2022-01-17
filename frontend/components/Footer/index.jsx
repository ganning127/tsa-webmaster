export const Footer = () => {
    return (
        <footer className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div>
                    <img src="/logo.png" alt="RoboReach Logo" className="max-h-56 hidden md:block" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-dark-blue font-bold text-xl">Navigate</h3>
                    <ul className="list-reset">
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">Home
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">About
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">Sign Up
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">Sponsor
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-dark-blue font-bold text-xl">Resources</h3>
                    <ul className="list-reset">
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">Application
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">Login
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">Create an Account
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="/" className="text-dark-blue hover:text-dark-blue-light">Share
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-dark-blue font-bold text-xl">Newsletter</h3>
                    <p className="text-dark-blue my-2">Subscribe to our newsletter to receive updates on new features, releases, and product news.</p>
                    <form className="flex">
                        <div className="mx-auto md:ml-0 flex">
                            <input type="email" className=" rounded-l-md border-l-2 border-t-2 border-b-2 p-2 inline " placeholder="Email Address" />
                            <button className="bg-light-blue text-white hover:bg-dark-blue inline duration-300 px-2 py-1 rounded-r-md font-bold" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr className="my-8" />
            <p className="text-gray-600 text-center">&copy; {new Date().getFullYear()} RoboReach. All rights reserved.</p>
        </footer>
    )
}