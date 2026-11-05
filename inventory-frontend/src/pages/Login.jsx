import {useState} from 'react';
import {Eye, EyeOff} from 'lucide-react';

function Login () {
    const [seePassword, setSeePassword] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/images/login.jpg')"}}>
            <div className="absolute inset-0 bg-black/30 opacity-50"></div>
            <div className="relative z-10 w-full max-w-md p-8 bg-white/10 backdrop-blur-lg border
                border-white/20 rounded-2xl shadow-2xl">
                <h2 className="text-3xl text-center text-white font-semibold mb-2">Nexora</h2>
                <h5 className="text-sm text-center text-slate-300 mb-6">Log in to your account</h5>
                <div className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            autoComplete='off'
                            className="mt-1 px-4 py-2 text-white block w-full border border-gray-300 outline-none rounded-md shadow-sm focus:outline-2 focus:outline-offset-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                type={seePassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                autoComplete='off'
                                className="mt-1 px-4 py-2 text-white pr-12 block w-full border border-gray-300 outline-none 
                                    rounded-md shadow-sm focus:outline-2 focus:outline-offset-2 focus:ring-blue-500 focus:border-blue-500"
                                required
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
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="" className="font-medium text-white hover:underline hover:text-blue-400 transition duration-300 ease-in-out">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-800 transition duration-500 ease-in-out"
                    >
                        Login
                    </button>
                    <p className="text-center text-sm text-white">
                        Don't have an account?{' '}
                        <a href="/register" className="font-medium text-white hover:underline hover:text-blue-400 transition duration-300 ease-in-out">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>

        </div>
    )

}

export default Login;