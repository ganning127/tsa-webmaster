import { FaSpinner } from "react-icons/fa";

export const LoginTwoCol = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('spinner').classList.add('inline');
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        console.log(password);

        setTimeout(() => {
            let valid = Math.random() > 0.5 ? true : false;
            if (valid) {
                window.location.href = '/';
                document.getElementById('spinner').classList.add('hidden');
                document.getElementById('spinner').classList.remove('inline');
            } else {
                document.getElementById('wrong-msg').style.display = 'block';
                document.getElementById('spinner').classList.add('hidden');
                document.getElementById('spinner').classList.remove('inline');
            }
        }, 2000);


    }
    return (
        <div className="bg-[url('/login.png')] bg-cover bg-center bg-no-repeat w-100 h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                <div className="h-100 m-auto hidden lg:block">
                    <img src="/logo.png" alt="" className="max-h-96" />
                </div>
                <div className="h-100 m-auto w-96">
                    {/* login form */}
                    <div className="mb-4">
                        <p className="text-lg text-gray-500">Welcome back</p>
                        <p className="font-bold text-3xl">Student Login</p>
                    </div>

                    <div id='wrong-msg' className="bg-red-100 rounded-md px-4 py-2 my-2 text-gray-500 hidden">
                        Wrong username or password
                    </div>

                    <form className="" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-500 text-md mb-2 ">
                                Email
                            </label>
                            <input type="email" id="email" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-500 text-md mb-2 ">
                                Password
                            </label>
                            <input type="password" id="password" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" required />
                        </div>

                        <button type="submit" value="Submit" className="form-input bg-dark-green text-white px-4 py-2 hover:scale-105 duration-300 rounded-md hover:cursor-pointer w-full">
                            <FaSpinner id='spinner' className="animate-spin hidden mr-2 " />
                            Submit
                        </button>
                    </form>

                    <p className="text-center text-gray-500 text-md mt-12">Don't have an account? <a href="/signup" className="text-dark-blue bg-blue-100 p-1 rounded-md">Join free today!</a></p>
                </div>
            </div>
        </div >
    )
}