import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";


export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
      <Navbar />
      <section className="pt-32 pb-20 px-6 flex items-center justify-center">
        <LoginForm />
      </section>
    
    </main>
  );
}