"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

const inputClasses =
  "w-full rounded border border-line bg-section px-4 py-3 text-sm text-navy placeholder:text-muted outline-none transition-colors duration-200 focus:border-primary focus:bg-white";

function Field({ label, error, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error.message}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload.error || "Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded border border-line bg-section p-8 md:p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded bg-primary text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-bold text-navy">
          Message received, thank you!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Our team will get back to you within one working day. For urgent matters, email{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-secondary hover:underline">
            {SITE.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded border border-line bg-white px-6 py-2.5 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:bg-section cursor-pointer"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className={inputClasses}
            {...register("name", { required: "Please tell us your name" })}
          />
        </Field>
        <Field label="Company / Organization" htmlFor="company" error={errors.company}>
          <input
            id="company"
            type="text"
            placeholder="Company name"
            className={inputClasses}
            {...register("company")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email Address" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className={inputClasses}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" },
            })}
          />
        </Field>
        <Field label="Phone Number (optional)" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            placeholder="Optional contact number"
            className={inputClasses}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field label="I'm Interested In" htmlFor="interest" error={errors.interest}>
        <select
          id="interest"
          className={cn(inputClasses, "cursor-pointer")}
          defaultValue=""
          {...register("interest", { required: "Please choose a topic" })}
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="equipment-certification">Equipment Certification</option>
          <option value="laboratory-accreditation">Laboratory Accreditation</option>
          <option value="standards">Machinery Standards</option>
          <option value="training">Testing & Training</option>
          <option value="partnership">Technical Partnership</option>
          <option value="other">Something Else</option>
        </select>
      </Field>

      <Field label="Your Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your equipment, certification needs, or laboratory accreditation inquiry…"
          className={cn(inputClasses, "resize-none")}
          {...register("message", {
            required: "Please describe your inquiry",
            minLength: { value: 20, message: "A little more detail helps us respond better (min 20 characters)" },
          })}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded border border-primary bg-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-secondary disabled:opacity-70 cursor-pointer sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-600">
          Couldn’t send your message. Please try again or email{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold underline">
            {SITE.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
