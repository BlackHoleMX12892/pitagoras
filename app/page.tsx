import { Comic_Relief } from "next/font/google";
import Image from "next/image";
import InteractiveMenu from "./interactivemenu";

const comic_relief = Comic_Relief({
  weight: "700",
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="bg-[#F5F7FB] w-full h-screen flex flex-row p-4">
      <div className="bg-[#FFFFFF] flex flex-col w-[20%] h-full border border-[#E3E8F0] rounded-lg shadow-md">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bg-[#FFFFFF] flex flex-col w-[88%] ml-[2%] h-full border border-[#E3E8F0] rounded-lg shadow-md p-4">
        <div className="w-full h-[85%] flex flex-col px-4">
          <div className="flex flex-row w-full h-[15%]">
            <div className="flex flex-row w-[70%]">
              <Image src="/pitagoras.jpg" width={50} height={50} alt="pitagoras" />
              <div className="flex flex-col ml-5 w-[70%]">
                <h1 className={`text-4xl ${comic_relief.className}`}>Teorema de Pitágoras</h1>
                <p>En un triángulo rectángulo, el cuadrado de la <span className="text-[#8E6CF0] font-bold">hipotenusa</span> es igual a la suma de los cuadrados de los catetos.</p>
              </div>
            </div>
            <div className="bg-[#F3EEFF] border border-[#8E6CF0] w-[30%] h-full rounded-lg ml-auto flex flex-row p-2 items-center">
              <div><Image src="/bombilla.jpeg" width={50} height={50} alt="bombilla" className="rounded-[50%] border border-[#8E6CF0]" /></div>
              <div className="flex flex-col ml-4">
                <h1>Fórmula:</h1>
                <div>
                  <p className="text-3xl font-bold"><span className="text-[#8E6CF0]">c<sup>2</sup></span> = <span className="text-[#4F7DF3]">a<sup>2</sup></span> + <span className="text-[#34C759]">b<sup>2</sup></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full h-[85%] py-4">
            <div className="bg-[#FFFFFF] border border-[#E3E8F0] rounded-lg shadow-md w-[74%] h-full">
              <InteractiveMenu />
            </div>
            <div className="bg-[#F5F7FB] border border-[#E3E8F0] rounded-lg shadow-md ml-[1%] w-[25%] h-full p-2">
              <h1 className="text-xl font-bold">Significado:</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#EAF2FF] border border-[#C7D7FF] w-full h-[15%] rounded-lg ml-auto flex flex-row">
            <Image src="/bombilla.jpeg" width={50} height={50} alt="bombilla"></Image>
            <div></div>
        </div>
      </div>
    </div>
  );
}
