import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import team from "../assets/heroBanner.png"

const AboutUs = () => {
  return (
    <>
      <Navbar />



      <div className="py-10 md:py-20 bg-gradient-to-b from-white to-gray-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="order-2 md:order-1 flex-1">
              <div className="flex flex-col gap-4">
                <p className="text-center md:text-left text-lg font-semibold text-green-600">
                  Noman's chemistry সম্পর্কে
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left text-gray-900 leading-tight">
                  কুমিল্লা শহরের শিক্ষার্থীদের রসায়ন ভীতি দূরীকরণের ক্ষুদ্র প্রচেষ্টা।
                </h1>
              </div>
              <p className="mt-4 text-center md:text-left text-lg text-gray-700 leading-relaxed">
                কুমিল্লাতে রসায়ন শেখার জন্যে সর্বপ্রথম অনলাইনভিত্তিক ইন্টারেক্টিভ এডুকেশন প্ল্যাটফর্ম।
              </p>
              <div className="mt-6 flex justify-center md:justify-start"></div>
            </div>
            <div className="order-1 md:order-2 flex-1">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://cdn.ostad.app/public/upload/2024-09-01T12-16-44.254Z-Untitled design (1).png"
                alt="Ostad Banner"
              />
            </div>
          </div>
        </div>
      </div>





      <div className="flex flex-col mb-10 md:mb-28">


      {/* Second Section */}
      <div className="w-full px-4 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-5xl">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="py-8 md:py-10 flex flex-col md:flex-row gap-4 justify-between items-end">
          </div>

          {/* Story Section */}
          <div className="p-6 flex flex-col md:flex-row items-center gap-4 bg-orange-500 rounded-lg shadow-lg">
            <img
              className="w-full md:w-[432px] aspect-video object-cover rounded-lg"
              src="https://cdn.ostad.app/public/upload/2024-09-03T11-00-21.968Z-IMG_1842 (2).jpg"
              alt="Our Story"
            />
            <div className="flex flex-col gap-2 md:gap-4 items-start text-white">
              <p className="text-3xl md:text-5xl font-bold">আমাদের গল্প</p>
              <p className="text-sm md:text-base">
                [7:59 pm, 07/08/2025] Noman vai: কুমিল্লা শহরের শিক্ষার্থীদের রসায়ন ভীতি দূরীকরণের ক্ষুদ্র প্রচেষ্টা।
[8:00 pm, 07/08/2025] Noman vai: কুমিল্লাতে রসায়ন শেখার জন্যে সর্বপ্রথম অনলাইনভিত্তিক ইন্টারেক্টিভ এডুকেশন প্ল্যাটফর্ম।
[8:06 pm, 07/08/2025] Noman vai: ২০১৯ সালে মাত্র ৪-৫জন ছাত্র নিয়ে অফলাইনে যাত্রা শুরু করে NOMAN's Chemistry Clinic। সময়ের পরিক্রমায় গত ৭বছরের আমাদের সাবেক ও বর্তমান মিকে আমরা এখন ৪০০০+ স্টুডেন্ট এর পরিবার। ছাত্রছাত্রীদের মধ্যে জ্ঞান বিতরণের এই যাত্রা চালিয়ে যেতে চাই আমৃত্যু ইনশাআল্লাহ।
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="flex flex-col gap-2 md:gap-4 items-start w-full">
            <p className="text-3xl md:text-5xl font-bold text-gray-900 text-center w-full">
              আমাদের টিম
            </p>
            <img
              className="w-full  object-cover rounded-lg shadow-lg"
              src={team}
              alt="Our Team"
            />
          </div>

          {/* Values Section */}
          <div className="flex flex-col gap-4 items-start w-full">
            <p className="text-4xl md:text-5xl font-bold text-gray-900 text-center w-full">
              আমাদের মূল্যবোধ
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* Value 1 */}
              <div className="bg-orange-600 col-span-1 md:col-span-2 flex flex-row py-4 px-5 md:flex-col justify-center gap-4 rounded-lg border border-gray-300">
                <img
                  src="https://cdn.ostad.app/public/upload/2024-08-15T09-48-54.632Z-Fast download turbo.png"
                  alt="Integrity"
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl text-white font-bold">সততা</p>
                  <p className="text-sm md:text-base text-white">
                    প্রতিটি কাজে সততা বজায় রাখা।
                  </p>
                </div>
              </div>
              {/* Value 2 */}
              <div className="bg-orange-200 flex flex-row py-4 px-5 md:flex-col justify-center gap-4 rounded-lg border border-gray-300">
                <img
                  src="https://cdn.ostad.app/public/upload/2024-08-15T09-48-54.632Z-Fast download turbo.png"
                  alt="Creativity"
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl font-bold text-gray-900">
                    সৃজনশীলতা
                  </p>
                  <p className="text-sm md:text-base text-gray-900">
                    অগ্রগতির জন্য সাহসী উদ্ভাবন।
                  </p>
                </div>
              </div>
              {/* Value 3 */}
              <div className="bg-orange-500 flex flex-row py-4 px-5 md:flex-col justify-center gap-4 rounded-lg border border-gray-300">
                <img
                  src="https://cdn.ostad.app/public/upload/2024-08-15T09-48-54.632Z-Fast download turbo.png"
                  alt="Responsibility"
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl text-white font-bold">দ্বায়িত্ববোধ</p>
                  <p className="text-sm md:text-base text-white">
                    শিক্ষার্থীদের ভালো ফলাফলের দায়িত্ব নেওয়া।
                  </p>
                </div>
              </div>
              {/* Value 4 */}
              <div className="bg-orange-900 col-span-1 md:col-span-2 flex flex-row py-4 px-5 md:flex-col justify-center gap-4 rounded-lg border border-gray-300">
                <img
                  src="https://cdn.ostad.app/public/upload/2024-08-15T09-48-54.632Z-Fast download turbo.png"
                  alt="Performance"
                  className="w-10 h-10"
                />
                {/* <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl text-white font-bold">কর্মসম্পাদন</p>
                  <p className="text-sm md:text-base text-white">
                    নির্ভুলতা ও উদ্দেশ্য নিয়ে কাজ সম্পন্ন করা।
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




      <Footer />
    </>
  );
};

export default AboutUs;
