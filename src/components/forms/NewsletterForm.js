"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <p className="mt-5 flex items-center gap-2 rounded border border-white/20 bg-white/5 px-4 py-3 text-sm text-green-300">
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        You&apos;re subscribed. Welcome aboard!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5" noValidate>
      <div className="flex rounded border border-white/20 bg-white/5 p-1 focus-within:border-gov-gold transition-colors">
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          className="w-full bg-transparent px-4 text-sm text-white placeholder:text-slate-500 outline-none"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-gov-gold text-navy transition-colors hover:bg-white cursor-pointer"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>
      )}
    </form>
  );
}
