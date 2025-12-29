import React, { useState } from "react";
import { FileText, ExternalLink, Award, X } from "lucide-react";
import assets from "../assets/assets";

export default function Achievements() {
  const [openImage, setOpenImage] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
              Trust & Recognition
            </p>
            <div className="w-12 h-0.5 bg-red-600 mx-auto"></div>
            <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
              Our Certificates
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Recognitions and official documents that demonstrate our legal
              compliance, credibility, and ethical operations.
            </p>
          </div>

          {/* ================= MAIN LAYOUT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ================= LEFT : VERTICAL CERTIFICATE ================= */}
            <div
              onClick={() => setOpenImage(true)}
              className="cursor-pointer group bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[520px] sm:h-[600px]">
                <img
                  src={assets.certificate}
                  alt="Certificate"
                  className="w-full h-full  group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-sm">
                    Click to View Full Certificate
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-600 p-2 rounded-md text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Industry Recognition
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our certifications stand as proof of trust, quality assurance,
                  and adherence to regulatory standards.
                </p>
              </div>
            </div>

            {/* ================= RIGHT : DOCUMENTS PANEL ================= */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-sm h-full flex flex-col justify-center">

              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Official Documents
              </h3>

              <div className="space-y-8">

                {/* Document Item */}
                <a
                  href="/pdf/pdf1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group"
                >
                  <div className="bg-red-600/10 text-red-600 p-4 rounded-xl">
                    <FileText className="w-7 h-7" />
                  </div>

                  <div className="flex-1 border-b border-gray-200 pb-6 group-hover:border-red-600 transition">
                    <h4 className="text-lg font-semibold text-gray-900">
                      JMS ARIES DLC
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 max-w-md">
                      Certification validating organizational operations and
                      regulatory compliance.
                    </p>

                    <span className="inline-flex items-center gap-2 mt-3 text-red-600 font-semibold text-sm">
                      Open Document
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </a>

                {/* Document Item */}
                <a
                  href="/pdf/pdf2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group"
                >
                  <div className="bg-red-600/10 text-red-600 p-4 rounded-xl">
                    <FileText className="w-7 h-7" />
                  </div>

                  <div className="flex-1 border-b border-gray-200 pb-6 group-hover:border-red-600 transition">
                    <h4 className="text-lg font-semibold text-gray-900">
                      GST Registration Certificate
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 max-w-md">
                      Government of India – Form GST REG-06 issued under Rule
                      10(1).
                    </p>

                    <span className="inline-flex items-center gap-2 mt-3 text-red-600 font-semibold text-sm">
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
{openImage && (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
    
    {/* Modal Wrapper */}
    <div className="relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-xl">
      
      {/* Close Button */}
      <button
        onClick={() => setOpenImage(false)}
        className="absolute top-4 right-4 z-10 bg-black/60 p-2 rounded-full text-white hover:text-red-500 transition"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image */}
      <img
        src={assets.certificate}
        alt="Full Certificate"
        className="w-full h-auto object-contain rounded-xl"
      />
    </div>
  </div>
)}

    </>
  );
}
