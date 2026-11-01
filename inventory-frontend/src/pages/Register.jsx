import {useState} from 'react';
import {Eye, EyeOff} from 'lucide-react';

function Register () {
    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        console.log('Form submitted:', formData);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/login.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 w-full max-w-md p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">   
                <h2 className="text-2xl text-center font-bold text-white mb-4">Register</h2>
                <h4 className="text-center text-white/70 mb-6">Create a new account</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='relative mb-4'>
                        <label htmlFor="username" 
                            className="text-white">Name</label>
                        <input 
                            type="text" id="username"
                            value={formData.name}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
                            placeholder="Enter your Name"
                            autoComplete="off"
                            className="block px-4 py-2 w-full text-white outline-none placeholder:text-white/70 border border-gray-300 
                            focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-md rounded-md" />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="email" className="text-white">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={formData.email}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value}))}
                            placeholder="Enter your email" 
                            autoComplete="off"
                            className="block px-4 py-2 w-full text-white outline-none placeholder:text-white/70 border border-gray-300 focus:ring-1
                             focus:ring-blue-500 focus:border-blue-500 shadow-md rounded-md" 
                        />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="password" className="block text-white">Password</label>
                        <div className="relative mt-1">
                            <input
                                type={seePassword ? "text" : "password"}
                                id="password"
                                value={formData.password}
                                onChange={(e) => setFormData((prevData) => ({ ...prevData, password: e.target.value}))}
                                placeholder="Enter your password"
                                autoComplete="off"
                                className="block px-4 py-2 pr-12 w-full text-white outline-none placeholder:text-white/70 border border-gray-300 focus:ring-1
                                 focus:ring-blue-500 focus:border-blue-500 shadow-md rounded-md"
                            />
                            <button
                                type="button"
                                onClick={() => setSeePassword(!seePassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-400"
                                aria-label={seePassword ? "Hide password" : "Show password"}
                                title={seePassword ? "Hide password" : "Show password"}
                            >
                                {seePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <div className="relative mb-8">
                        <label htmlFor="confirm-password" className="block text-white">Confirm Password</label>
                        <div className="relative mt-1">
                            <input 
                                type={seeConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                value={formData.password_confirmation}
                                onChange={(e) => setFormData((prevData) => ({ ...prevData, password_confirmation: e.target.value }))}
                                placeholder="Confirm your password"
                                autoComplete="off"
                                className="block px-4 py-2 pr-12 w-full text-white outline-none
                                 placeholder:text-white/70 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-md rounded-md"
                            />
                            <button 
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-400"
                                type="button"
                                onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
                                aria-label={seeConfirmPassword ? "Hide password" : "Show password"}
                                title={seeConfirmPassword ? "Hide password" : "Show password"}
                            >
                                {seeConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;