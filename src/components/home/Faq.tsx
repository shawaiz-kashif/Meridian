"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          FAQ
        </p>
        <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
          Have Some Questions?
        </h2>

        <div className="mt-8 divide-y divide-gray-200 border border-gray-200">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = index === openIndex;

            return (
              <div key={question} className={isOpen ? "bg-gray-section" : "bg-white"}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-extrabold uppercase tracking-wide text-navy-dark">
                    {question}
                  </span>
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-gray-500">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-gray-600">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
