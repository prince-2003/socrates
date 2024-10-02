"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { gsap } from "gsap";
import Form from "@/components/ui/form";
import Header from "@/components/header";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get("view");
    setIsLogin(view !== "signup");
  }, []);

  const handleSubmit = async (email: string, password: string) => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  useEffect(() => {
    if (formRef.current) {
      gsap.to(formRef.current, { opacity: 1, y: 20, duration: 1 });
    }
  }, []);

  return (
    <>
      <Header disableLinks={true} />
      <section className="w-[96vw]  m-2 rounded-xl  p-10 md:p-20 bg-gray-100">
        <div className="grid grid-cols-12 gap-6 lg:gap-16 h-full">
          <div className="col-span-12 lg:col-span-5">
            <div
              className="bg-center bg-no-repeat bg-cover w-full min-h-[150px] rounded-[25px] grayscale-[.9] hover:grayscale-0 hidden lg:block h-full"
              style={{
                backgroundImage: "url(/assets/login.png)",
              }}
            ></div>
          </div>
          <div className="col-span-12 lg:col-span-5 py-12 lg:ml-20">
            <div className="flex items-center justify-center max-w-lg h-full">
              <div className="w-full mx-auto">
                <h2 className="text-black text-2xl font-bold mb-3">
                  Welcome to Socrates
                </h2>
                <div className="flex items-center gap-2 mb-6 md:mb-12 text-sm">
                  <p className=" opacity-50">
                    {isLogin ? "Don't have an account?" : "Already registered?"}
                  </p>
                  <a
                    href={isLogin ? "?view=signup" : "?view=login"}
                    className="text-gray-600 hover:underline"
                  >
                    {isLogin ? "Create Account" : "Sign In"}
                  </a>
                </div>
                <Form
                  handleSubmit={handleSubmit}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
