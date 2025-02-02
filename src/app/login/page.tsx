"use client";
import React, { FC, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import HomeLayout from "@/components/Layouts/HomeLayout";
import facebookSvg from "@/images/Facebook.svg";
import GithubSvg from "@/images/Github.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export interface PageLoginProps {}

const loginSocials = [
  {
    name: "Continue with Facebook",
    provider: "facebook",
    icon: facebookSvg,
  },
  {
    name: "Continue with Github",
    provider: "github",
    icon: GithubSvg,
  },
  {
    name: "Continue with Google",
    provider: "google",
    icon: googleSvg,
  },
];

const PageLogin: FC<PageLoginProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/cheatsheet/add");
    }
  }, [session, router]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "email or password are Incorrect!",
        });
      } else {
        localStorage.setItem("token", data.token);
        Swal.fire({
          icon: "success",
          title: "Successfully Logged In",
          text: `Welcome, User!`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to login",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeLayout>
      <div className={`nc-PageLogin`}>
        <div className="container mb-24 lg:mb-32">
          <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            Login
          </h2>
          <div className="max-w-md mx-auto space-y-6">
            <div className="grid gap-3">
              {loginSocials.map((item, index) => (
                <a
                  key={index}
                  onClick={() => signIn(item.provider)}
                  className="flex w-full rounded-lg bg-ten dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px] cursor-pointer"
                >
                  <Image
                    className="flex-shrink-0"
                    src={item.icon}
                    alt={item.name}
                  />
                  <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                    {item.name}
                  </h3>
                </a>
              ))}
            </div>
            {/* OR */}
            <div className="relative text-center">
              <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
                OR
              </span>
              <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
            </div>
            {/* FORM */}
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Email address
                </span>
                <Input
                  type="email"
                  placeholder="example@example.com"
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Password
                  <Link
                    href={{
                      pathname: "/forgot-password",
                    }}
                    className="text-sm underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </span>
                <Input
                  type="password"
                  className="mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <ButtonPrimary type="submit" disabled={loading}>
                {loading ? "Processing..." : "Continue"}
              </ButtonPrimary>
            </form>
            {errorMessage && (
              <div className="text-red-500 text-center mt-4">
                {errorMessage}
              </div>
            )}
            {/* ==== */}
            <span className="block text-center text-neutral-700 dark:text-neutral-300">
              New user? {` `}
              <Link
                href={{
                  pathname: "/signup",
                }}
                className="font-semibold underline"
              >
                Create an account
              </Link>
            </span>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default PageLogin;
