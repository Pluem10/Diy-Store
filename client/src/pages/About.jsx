import React from "react";

const AboutUS = () => {
  return (
    <div className="font-sans" style={{ backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <section
        className="text-center py-16"
        style={{
          background: "linear-gradient(to right, #778899, #a9b0b8)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          เกี่ยวกับเรา
        </h1>
        <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
          ร้านของเรารวมความอร่อยของชานมคุณภาพและขนมหวานโฮมเมด
          ทุกคำและทุกแก้วทำด้วยความรักและใส่ใจ
        </p>
      </section>

      {/* ชานม Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5KTQv3HyxsNPPUOaqq5bZyeMAJQPoCzNLn0HebDzUeAPBgUYUlc.jpg"
            alt="Bubble Tea"
            className="rounded-2xl shadow-lg max-w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold" style={{ color: "#778899" }}>
            ชานมของเรา
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            เราเลือกใช้ใบชาคุณภาพสูงจากแหล่งปลูกชาที่ดีที่สุด
            ผสมกับสูตรชงเฉพาะของร้าน ทำให้ได้รสชาติที่หอม ละมุน
            และเข้มข้นในทุกแก้ว
          </p>
          <p className="text-gray-700 leading-relaxed">
            ไม่ว่าคุณจะชอบชานมไข่มุก ชาผลไม้ หรือสูตรพิเศษประจำฤดูกาล
            เรามีให้คุณเลือกมากมาย
          </p>
        </div>
      </section>

      {/* ขนมหวาน Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold" style={{ color: "#778899" }}>
            ขนมหวานโฮมเมด
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ทุกชิ้นทำด้วยวัตถุดิบสดใหม่ คัดคุณภาพอย่างพิถีพิถัน
            เพื่อให้รสชาติและความหวานกำลังพอดี
          </p>
          <p className="text-gray-700 leading-relaxed">
            ไม่ว่าจะเป็นเค้ก พุดดิ้ง หรือบิงซู เราใส่ใจในทุกขั้นตอน
            เพื่อให้คุณได้รสชาติที่ดีที่สุด
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://www.ktc.co.th/pub/media/Article/08/ktcLittle_sheep_kidscafe.webp"
            alt="Desserts"
            className="rounded-2xl shadow-lg max-w-full"
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-6 text-white text-sm"
        style={{ backgroundColor: "#778899" }}
      >
        © 2025 ร้านชานมและขนมหวานของเรา. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUS;
