import RegisterForm from "@/components/RegistrationForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  return (
    <main className="min-h-[150vh] bg-slate-50 dark:bg-[#030712]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Some long content to scroll past */}
        <div className="space-y-12">
          <h1 className="text-6xl font-black dark:text-white uppercase tracking-tighter leading-none">
            Master the <br/> <span className="text-blue-600">Digital Craft.</span>
          </h1>
          <div className="h-[800px] border-l border-white/5 pl-8">
            <p className="text-gray-500 font-mono text-sm leading-relaxed">
               // Scroll down to see the form follow you.
               <br/><br/>
               Our curriculum is designed for engineers who want to go beyond 
               the basics. From Next.js architecture to Flutter performance 
               optimization.
            </p>
          </div>
        </div>

        {/* Right Side: The Sticky Form */}
        <div className="relative">
          <RegisterForm />
        </div>
      </div>

    
    </main>
  );
}