import { SmallHeading } from "./Text/SmallHeading"
import { MedSep } from "./Separators/MedSep"
import { SmallerSep } from "./Separators/SmallerSep"
export const Application = () => {
    const TwoCol = ({ children }) => (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {children}
        </div>
    )
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 p-2 shadow-lg">
                <div className="m-auto">
                    <img src="/app.png" alt="robot" className="max-h-64" />
                </div>
                <div className="m-auto">
                    <h1 className="text-3xl lg:text-5xl font-bold text-dark-green">Application Process</h1>
                    <ul className="list-decimal text-xl text-dark">
                        <li className="my-2 ">Fill out the the basic information section</li>
                        <li className="mb-2">Write your essays!</li>
                        <li className="mb-2">Get a teacher recommendation</li>
                        <li className="mb-2">Submit!</li>
                    </ul>

                </div>
            </div>

            <form>
                <MedSep />

                <SmallHeading desc="We'll never share your peresonal info with anyone.">Basic Information</SmallHeading>
                <div className="shadow-lg p-4 rounded-md">
                    <TwoCol>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                First Name
                            </label>
                            <input type="firstname" id="firstname" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. John" required />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                Last Name
                            </label>
                            <input type="lastname" id="lastname" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. Doe" required />
                        </div>
                    </TwoCol>
                    <SmallerSep />
                    <TwoCol>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                Age
                            </label>
                            <input type="number" id="age" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 12" required />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                Grade
                            </label>
                            <input type="number" id="grade" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 11" required />
                        </div>
                    </TwoCol>
                    <SmallerSep />

                    <TwoCol>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                Email
                            </label>
                            <input type="text" id="email" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 12" required />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                Phone
                            </label>
                            <input type="tel" id="Phone" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="(123) 456-789" required />
                        </div>
                    </TwoCol>
                </div>

                <MedSep />

                <SmallHeading desc="We'll never share your peresonal info with anyone.">Academic Information</SmallHeading>
                <div className="shadow-lg p-4 rounded-md">
                    <TwoCol>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                School Name
                            </label>
                            <input type="text" id="school" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. West Cary Middle" rows={20} required />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                GPA (Unweighted, out of 4)
                            </label>
                            <input type="number" id="gpa" max={4} min={0} className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 12" required />
                        </div>
                    </TwoCol>
                    <SmallerSep />

                    <div className="mb-8">
                        <label className="block text-gray-500 text-md mb-2 ">
                            List all STEM classes you've taken so far
                        </label>
                        <textarea type="text" id="classes" rows="5" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 11" required />
                    </div>
                    <SmallerSep />

                    <TwoCol>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                Transcript (optional)
                            </label>
                            <input type="text" id="transcript" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. https://docs.google.com" required />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-md mb-2 ">
                                Resume (optional)
                            </label>
                            <input type="url" id="resume" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. https://docs.google.com" required />
                        </div>
                    </TwoCol>
                </div>


                <MedSep />

                <SmallHeading desc="We are not looking for grammar, only content.">Essays</SmallHeading>
                <div className="shadow-lg p-4 rounded-md">


                    <div className="">
                        <label className="block text-gray-500 text-md mb-2 ">
                            Why do you want to join RoboReach's program? (300 words max)
                        </label>
                        <textarea type="text" id="why" rows="10" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 11" required />
                    </div>

                    <SmallerSep />

                    <div className="">
                        <label className="block text-gray-500 text-md mb-2 ">
                            Describe your interests in STEM (300 words max)
                        </label>
                        <textarea type="text" id="interests" rows="10" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 11" required />
                    </div>

                    <SmallerSep />

                    <div className="">
                        <label className="block text-gray-500 text-md mb-2 ">
                            Describe how you respond to failure (300 words max)
                        </label>
                        <textarea type="text" id="respond" rows="10" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="e.g. 11" required />
                    </div>

                </div>

                <MedSep />

                <SmallHeading desc="We'll never share your peresonal info with anyone.">Teacher Recommendations</SmallHeading>
                <div className="shadow-lg p-4 rounded-md">
                    <p className="text-center text-dark text-lg">Please have your teacher email one (1) recommendation letter on your behalf to <a href="mailto:roboreach@roboreach.org" className="text-light-blue">roboreach@roboreach.org</a> </p>
                </div>


                <MedSep />

                <SmallHeading desc="Let us know anything you want here!">Additional Information</SmallHeading>
                <div className="shadow-lg p-4 rounded-md">
                    <label className="block text-gray-500 text-md mb-2 ">
                        A chance to talk about anything that you haven't already!
                    </label>
                    <textarea type="text" id="extra" rows="10" className="form-input px-4 py-3 rounded-md w-full border-2 border-light-blue" placeholder="Anything..." required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <button className="mt-4  rounded-md px-8 py-2 text-dark-green font-bold hover:text-darker-green duration-300">Save</button>

                    <button className="mt-4  rounded-md px-8 py-2 bg-dark-green text-white font-bold hover:bg-darker-green duration-300">Submit</button>
                </div>

            </form>
        </>
    )
}