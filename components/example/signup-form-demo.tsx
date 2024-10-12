"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Track loading state
  const [errors, setErrors] = useState<string[]>([]); // Track validation errors

  // Simple form validation
  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.firstname.trim()) {
      newErrors.push("First name is required.");
    }
    if (!formData.lastname.trim()) {
      newErrors.push("Last name is required.");
    }
    if (!formData.email.trim()) {
      newErrors.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push("Please enter a valid email address.");
    }
    if (!formData.phone.trim()) {
      newErrors.push("Phone number is required.");
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.push("Please enter a valid phone number.");
    }

    setErrors(newErrors);
    return newErrors.length === 0; // Returns true if there are no errors
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading when the form is submitted

    if (!validateForm()) {
      setLoading(false);
      return; // Stop if form is invalid
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        }); // Reset form fields after successful submission
        setErrors([]); // Clear any previous errors
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    } finally {
      setLoading(false); // Stop loading after form submission
    }
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center ">
      <div className="max-w-md rounded w-full p-8 shadow-input bg-black">
        <h2 className="font-bold text-xl text-white text-center">
          Contact Quixstudio
        </h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300 text-center">
          So we can create something amazing together :)
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-white">
                First name
              </Label>
              <Input
                id="firstname"
                placeholder="Darth"
                type="text"
                className="bg-neutral-800 text-white placeholder-neutral-500"
                value={formData.firstname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-white">
                Last name
              </Label>
              <Input
                id="lastname"
                placeholder="Vader"
                type="text"
                className="bg-neutral-800 text-white placeholder-neutral-500"
                value={formData.lastname}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="contact@quixstudio.com"
              type="email"
              className="bg-neutral-800 text-white placeholder-neutral-500"
              value={formData.email}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone" className="text-white">
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="+96612345678"
              type="tel"
              className="bg-neutral-800 text-white placeholder-neutral-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <textarea
              id="message"
              placeholder="Enter your message..."
              className="bg-neutral-800 text-white placeholder-neutral-500 p-2 rounded-md h-24"
              value={formData.message}
              onChange={handleChange}
            />
          </LabelInputContainer>

          {/* Display validation errors */}
          {errors.length > 0 && (
            <div className="text-red-500 mb-4">
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block w-full text-white rounded-md h-10 font-medium shadow-none"
            type="submit"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <span className="loader mr-2"></span> Submitting...
              </span>
            ) : (
              "Submit"
            )}
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#EB5E28] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
