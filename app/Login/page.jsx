'use client'
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';

function Page() {
   const router = useRouter();
const [pwd,setpwd]=useState('');
const [email,setEmail]=useState("");
const [error,setError]=useState('');
const[loading,setLoading]=useState("")
const handlechange_email=(e)=>{


setEmail(e.target.value);
}
const handlechange_pwd=(e)=>{
e.preventDefault();
setpwd(e.target.value);
}

  const handleLogin = async (e) => {
   
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password:pwd });

    if (error) {
      setError(error.message);
      return;
    }

    router.push('/dashboard');
  };
  return ( <>
    <form onChange={handleLogin} method="post">
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40 lg:grid-cols-2">
        <section className="hidden  from-slate-900 via-slate-800 to-slate-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-slate-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Welcome back
            </div>

            <h1 className="max-w-sm text-4xl font-bold leading-tight">
              Sign in to continue your journey.
            </h1>
          </div>

          <div className="space-y-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="font-semibold text-white">Manage everything in one place</p>
              <p className="mt-1 text-slate-300">
                Track projects, messages, and tasks from a single dashboard.
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
                Login
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Welcome back</h2>
              <p className="mt-2 text-sm text-slate-500">
                Please enter your details to access your account.
              </p>
            </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handlechange_email}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <a href="#" className="text-sm font-medium text-sky-600 hover:text-sky-700">
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  onChange={handlechange_pwd}
                  value={pwd}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-slate-600">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-slate-300 transition hover:bg-slate-800"
              >
                Sign in
              </button>
            

            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <a href="#" className="font-semibold text-sky-600 hover:text-sky-700">
                Create account
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
    </form></>
  );
}

export default Page;