import { FaSpinner } from "react-icons/fa";
import { countryList } from '../../data/countries'
export const SignupTwoCol = () => {
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
                        <p className="text-lg text-gray-500">Welcome!</p>
                        <p className="font-bold text-3xl">Sign Up</p>
                    </div>

                    <div id='wrong-msg' className="bg-red-100 rounded-md px-4 py-2 my-2 text-gray-500 hidden">
                        Wrong username or password
                    </div>

                    <form className="" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-500 text-md mb-2 ">
                                        First Name
                                    </label>
                                    <input type="firstname" id="firstname" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="First Name" required />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-md mb-2 ">
                                        Last Name
                                    </label>
                                    <input type="lastname" id="lastname" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="Last Name" required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-500 text-md mb-2 ">
                                        Gender
                                    </label>
                                    <select type="gender" id="gender" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" required>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="nonbinary">Non Binary</option>
                                        <option value="na">Prefer not to say</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-md mb-2 ">
                                        Email
                                    </label>
                                    <input type="email" id="email" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="Email" required />
                                </div>

                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500 text-md mb-2 ">
                                Country
                            </label>
                            {

                            }
                            <select id="country" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" required>
                                {countryList.map((country, index) => {
                                    return (
                                        <option key={index} value={country}>{country}</option>
                                    )
                                })}
                            </select>
                        </div>


                        <div className="mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-500 text-md mb-2 ">
                                        Password
                                    </label>
                                    <input type="password" id="password" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="Password" required />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-md mb-2 ">
                                        Confirm Password
                                    </label>
                                    <input type="password" id="cpassword" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="Confirm Password" required />
                                </div>
                            </div>
                        </div>

                        <button type="submit" value="Submit" className="form-input bg-dark-green text-white px-4 py-2 hover:scale-105 duration-300 rounded-md hover:cursor-pointer w-full">
                            <FaSpinner id='spinner' className="animate-spin hidden mr-2 " />
                            Submit
                        </button>
                    </form>

                    <p className="text-center text-gray-500 text-md mt-12">Already have an account? <a href="/login" className="text-dark-blue bg-blue-100 p-1 rounded-md">Login here!</a></p>
                </div>
            </div>
        </div >
    )
}