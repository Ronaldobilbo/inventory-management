import {useState} from 'react';
import {Eye, EyeOff, Info} from 'lucide-react';
import api from '../services/api';

function Register () {
    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [registerError, setRegisterError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const passwordRequirements = [
        {
            label: 'At least 8 characters long',
            valid: formData.password.length >= 8
        },
        {
            label: 'At least one uppercase letter',
            valid: /[A-Z]/.test(formData.password)
        },
        {
            label: 'At least one lowercase letter',
            valid: /[a-z]/.test(formData.password)
        },
        {
            label: 'At least one number',
            valid: /\d/.test(formData.password)
        },
        {
            label: 'One special character (!@#$%)',
            valid: /[^A-Za-z0-9\s]/.test(formData.password)
        }
    ]

    async function handleSubmit(e) {
        e.preventDefault();

        setPasswordError('');
        setRegisterError('');

        const allValid = passwordRequirements.every(requirement => requirement.valid);

        if(!allValid) {
            setPasswordError('Password does not meet the requirements!');
            return;
        }

        if(formData.password !== formData.password_confirmation) {
            setPasswordError('Passwords do not match!');
            return;
        }

        try {
            setIsLoading(true);

            await api.get('/sanctum/csrf-cookie');

            await api.post('/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation
            });

            // Redirect to login page after successful registration
            window.location.href = '/login';

        } catch (error) {

            if (error.response?.data?.errors) {
                const errors = error.response.data.errors;

                setRegisterError(
                    errors.email?.[0] ||
                    errors.name?.[0] ||
                    errors.password?.[0] ||
                    'An error occurred while registering. Please try again.'
                );
            } else {
                setRegisterError(
                    'Unable to register. Please try again.'
                );
            }
           
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/login.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 w-full max-w-md p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">   
                <h2 className="text-xl text-center font-bold text-white mb-4">Register</h2>
                <h4 className="text-center text-[16px] text-white/70 mb-6">Create a new account</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='relative'>
                        <label htmlFor="username" 
                            className="text-white">Name</label>
                        <input 
                            type="text" id="username"
                            value={formData.name}
                            onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
                            placeholder="Enter your Name"
                            autoComplete="off"
                            required
                            className="block px-3 py-2 mt-2 w-full text-white outline-none placeholder:text-white/70 border border-gray-300 
                            focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-md rounded-md" />
                    </div>
                    <div className='relative'>
                        <label htmlFor="email" className="text-white">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={formData.email}
                            onChange={(e) => {
                                setFormData((prevData) => ({ 
                                    ...prevData,
                                    email: e.target.value
                                }));
                                setRegisterError('');
                            }}
                            placeholder="Enter your email" 
                            autoComplete="off"
                            required
                            className="block px-3 py-2 mt-2 w-full text-white outline-none placeholder:text-white/70 border border-gray-300 focus:ring-1
                             focus:ring-blue-500 focus:border-blue-500 shadow-md rounded-md" 
                        />
                    </div>
                    <div className='relative'>
                        <div className="flex items-center gap-2">
                            <label htmlFor="password" className="text-white">
                                Password
                            </label>
                            <Info
                                size={15}
                                className="text-white/60 cursor-help"
                                title="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                            />
                        </div>
                        <div className="relative my-2">
                            <input
                                type={seePassword ? "text" : "password"}
                                id="password"
                                value={formData.password}
                                onChange={(e) => setFormData((prevData) => ({ ...prevData, password: e.target.value}))}
                                placeholder="Enter your password"
                                autoComplete="off"
                                required
                                className="block px-3 py-2 pr-12 w-full text-white outline-none placeholder:text-white/70 border border-gray-300 focus:ring-1
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
                    <div className="relative">
                        <label htmlFor="confirm-password" className="block text-white">Confirm Password</label>
                        <div className="relative my-2">
                            <input 
                                type={seeConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                value={formData.password_confirmation}
                                onChange={(e) => {
                                    setFormData((prevData) => ({ ...prevData, password_confirmation: e.target.value
                                    }));
                                    setPasswordError('')
                                }}
                                placeholder="Confirm your password"
                                autoComplete="off"
                                required
                                className="block px-3 py-2 pr-12 w-full text-white outline-none
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
                    <div className="min-h-5 mt-1">
                        <p className="text-xs text-red-500">
                            {passwordError || '\u00A0'}
                        </p>
                    </div>
                    {/* <div className="min-h-5 mt-1">
                        <p className="text-xs text-red-500">
                            {registerError || '\u00A0'}
                        </p>
                    </div> */}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-3 rounded transition duration-500 ease-in-out cursor-pointer">
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                    <p className="text-white text-sm mt-2 text-center">
                        Have an account? {''} <a href="/login" className="text-blue-500 hover:underline">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register;