import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-around items-center gap-10 mt-40">
      <div className="flex flex-col justify-center items-start gap-10 w-[60%]">
        <div className="flex justify-center items-center gap-1">
          <img src="/images/Subtract.png" alt="" />
          <p>"İnnovasiya və Texnologiyanın Kəsişdiyi Nöqtə!"</p>
        </div>
        <div className="text-5xl">
          <p>
            <span className="text-[#CAFF34]">
              {" "}
              <strong>Imperia Tech</strong>
            </span>{" "}
            Rəqəmsal <br />
            Gələcəyinizi Qururuq
          </p>
        </div>
        <div>
          <p>
            İmperia Tech olaraq, hər müştərinin unikal ehtiyaclarını nəzərə
            alaraq peşəkar veb həllər yaradırıq. Biznesinizi onlayn platformada
            gücləndirmək, brendinizi tanıtmaq və müştərilərinizə daha yaxşı
            xidmət göstərmək üçün innovativ və fərdiləşdirilmiş texnologiyalar
            təklif edirik. Bizimlə gələcəyə addım atın!
          </p>
        </div>
        <div>
          <button className="relative overflow-hidden bg-[#CAFF34] py-3 px-5 rounded-3xl text-black cursor-pointer font-bold transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-lime-400 hover:to-green-500 hover:shadow-[0_0_20px_#a3e635] hover:scale-105 active:scale-95 group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-lime-300 opacity-50 transition-all duration-300 ease-out group-hover:translate-x-full"></span>
            <span className="relative z-10">Open Account</span>
          </button>
        </div>
      </div>
      <div className="w-[40%]">
        <img src="/images/Logo.jpg" alt="Logo" className="w-full" />
      </div>
    </div>
  );
}
