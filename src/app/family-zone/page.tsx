"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FamilyZonePage() {
  const router = useRouter();
  const [userType, setUserType] = useState<"parent" | "child" | null>(null);
  const [childAge, setChildAge] = useState<string>("");
  const [childGender, setChildGender] = useState<"boy" | "girl" | null>(null);
  const [step, setStep] = useState<"select" | "age" | "gender">("select");

  const handleUserTypeSelect = (type: "parent" | "child") => {
    setUserType(type);
    setStep("age");
  };

  const handleAgeSubmit = () => {
    if (childAge.trim()) {
      setStep("gender");
    }
  };

  const getAgeGroupRoute = (age: string, gender: "boy" | "girl"): string => {
    // Parse age - handle both numeric and range inputs
    const ageNum = parseInt(age);
    
    // Check if it's a range like "2-4"
    if (age.includes("-")) {
      const [min, max] = age.split("-").map(n => parseInt(n.trim()));
      if (min < 2) return `/family-zone/under-2/${gender}`;
      if (min >= 2 && max <= 5) return `/family-zone/ages-2-5/${gender}`;
      if (min >= 6 && max <= 9) return `/family-zone/ages-6-9/${gender}`;
      if (min >= 10 && max <= 13) return `/family-zone/ages-10-13/${gender}`;
      if (min >= 13) return `/family-zone/ages-13-plus/${gender}`;
    }
    
    // Check if it's "17+" or similar
    if (age.includes("+")) {
      return `/family-zone/ages-13-plus/${gender}`;
    }
    
    // Handle numeric age
    if (!isNaN(ageNum)) {
      if (ageNum < 2) return `/family-zone/under-2/${gender}`;
      if (ageNum >= 2 && ageNum <= 5) return `/family-zone/ages-2-5/${gender}`;
      if (ageNum >= 6 && ageNum <= 9) return `/family-zone/ages-6-9/${gender}`;
      if (ageNum >= 10 && ageNum <= 13) return `/family-zone/ages-10-13/${gender}`;
      if (ageNum >= 13) return `/family-zone/ages-13-plus/${gender}`;
    }
    
    // Default fallback
    return `/family-zone/ages-2-5/${gender}`;
  };

  const handleGenderSelect = (gender: "boy" | "girl") => {
    setChildGender(gender);
    // Route to appropriate age group page with gender
    const route = getAgeGroupRoute(childAge, gender);
    router.push(route);
  };

  const handleReset = () => {
    setUserType(null);
    setChildAge("");
    setChildGender(null);
    setStep("select");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-purple-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">👨‍👩‍👧‍👦 Family Zone</h1>
          <p className="text-xl text-white/80">Welcome to the Family Zone!</p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-4 mb-12">
          <Link
            href="/home"
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Main Content */}
        <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
          {/* Step 1: Select Parent or Child */}
          {step === "select" && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold mb-6">Who are you?</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => handleUserTypeSelect("parent")}
                  className="w-full sm:w-64 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center justify-center gap-3"
                >
                  <span className="text-5xl">👨‍👩‍👧</span>
                  <span className="text-2xl font-bold">Parent</span>
                </button>
                <button
                  onClick={() => handleUserTypeSelect("child")}
                  className="w-full sm:w-64 h-32 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center justify-center gap-3"
                >
                  <span className="text-5xl">👶</span>
                  <span className="text-2xl font-bold">Child</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Age Question */}
          {step === "age" && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold mb-6">
                {userType === "parent" 
                  ? "How old is your child?" 
                  : "How old are you?"}
              </h2>
              <div className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder="Enter age (e.g., 1, 3, 7, 12)"
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white text-xl text-center placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleAgeSubmit();
                    }
                  }}
                  autoFocus
                />
                <div className="grid grid-cols-3 gap-3">
                  {["0-1", "2-4", "5-7", "8-10", "11-13", "14+"].map((ageRange) => (
                    <button
                      key={ageRange}
                      onClick={() => {
                        setChildAge(ageRange);
                        setTimeout(() => handleAgeSubmit(), 300);
                      }}
                      className="px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all font-semibold hover:scale-105"
                    >
                      {ageRange}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleAgeSubmit}
                  disabled={!childAge.trim()}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  Continue →
                </button>
                <button
                  onClick={handleReset}
                  className="text-white/70 hover:text-white text-sm underline"
                >
                  ← Go Back
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Gender Question */}
          {step === "gender" && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold mb-6">
                {userType === "parent" 
                  ? "Is your child a boy or girl?" 
                  : "Are you a boy or girl?"}
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => handleGenderSelect("boy")}
                  className="w-full sm:w-64 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center justify-center gap-3"
                >
                  <span className="text-5xl">👦</span>
                  <span className="text-2xl font-bold">Boy</span>
                </button>
                <button
                  onClick={() => handleGenderSelect("girl")}
                  className="w-full sm:w-64 h-32 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center justify-center gap-3"
                >
                  <span className="text-5xl">👧</span>
                  <span className="text-2xl font-bold">Girl</span>
                </button>
              </div>
              <button
                onClick={() => setStep("age")}
                className="text-white/70 hover:text-white text-sm underline"
              >
                ← Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
