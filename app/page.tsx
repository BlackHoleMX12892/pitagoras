import { Comic_Relief } from "next/font/google";
import Image from "next/image";
import InteractiveMenu from "./interactivemenu";
import { Navigation, RotateCw, AlertTriangle } from "react-feather"

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
            <div className="flex flex-row w-[70%] h-full">
              <Image src="/pitagoras.jpg" width={50} height={50} alt="pitagoras" className="ml-3" />
              <div className="flex flex-col ml-7 w-[70%] h-full">
                <h1 className={`text-3xl ${comic_relief.className}`}>Teorema de Pitágoras</h1>
                <p className="text-[#6B7280] leading-5 mt-auto">En un triángulo rectángulo, el cuadrado de la <span className="text-[#8E6CF0] font-bold">hipotenusa</span> es igual a la suma de los cuadrados de los catetos.</p>
              </div>
            </div>
            <div className="bg-[#F3EEFF] border border-[#8E6CF0] w-[30%] h-full rounded-lg ml-auto flex flex-row p-2 items-center">
              <div><Image src="/bombilla.jpeg" width={50} height={50} alt="bombilla" className="rounded-[50%] border border-[#8E6CF0]" /></div>
              <div className="flex flex-col ml-4">
                <h3>Fórmula:</h3>
                <div>
                  <p className="text-3xl font-bold"><span className="text-[#8E6CF0]">c<sup>2</sup></span> = <span className="text-[#4F7DF3]">a<sup>2</sup></span> + <span className="text-[#34C759]">b<sup>2</sup></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full h-[85%] py-4">
            <div className="bg-[#FFFFFF] border border-[#E3E8F0] rounded-lg shadow-md w-[74%] h-full p-4">
              <div className="flex flex-row h-[15%] w-full">
                <Navigation className="text-[#4F7DF3] w-8 h-8 ml-2 mt-2" />
                <div className="flex flex-col ml-4">
                  <h2 className="text-xl font-bold text-[#1F2A44]">Demostración</h2>
                  <p className="text-[#6B7280]">Observa como al mover los vertices se cumple el teorema.</p>
                </div>
              </div>
              <InteractiveMenu />
              <div className="h-[25%] w-full pt-2 flex">
                <div className="w-full h-[calc(100%-20px)] mt-5 bg-[#F5F7FB] border border-[#E3E8F0] rounded-lg shadow-md flex flex-row">
                  <div className="w-[30%] h-[calc(100%+20px)] bg-[#FFF6DA] border border-[#FFD166] rounded-lg -translate-y-4.75 -translate-x-px p-2 flex flex-row items-center">
                    <AlertTriangle className="text-[#C9A227] w-20 h-20" />
                    <div className="flex flex-col ml-2">
                      <h3 className="font-bold text-[#C9A227]">Advertencia</h3>
                      <p className="leading-5 text-sm">El ángulo debe medir exactamente 90°</p>
                    </div>
                  </div>
                  <div className="w-[70%] h-full flex flex-row justify-center items-center space-x-[20%]">
                    <div className="flex flex-row space-x-2 text-[#4F7DF3] bg-[#FFFFFF] border border-[#E3E8F0] rounded-md p-2 cursor-pointer hover:border-[#3B6AE0] active:border-[#2F55C7]"><RotateCw /> <span>Reiniciar</span></div>
                    <div className="flex flex-row space-x-2 bg-[#FFFFFF] border border-[#E3E8F0] rounded-md p-2"><input type="checkbox" name="" id="" defaultChecked /><span>Mostrar cuadrados</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F7FB] border border-[#E3E8F0] rounded-lg shadow-md ml-[1%] w-[25%] h-full p-4">
              <h2 className="text-xl font-bold h-[5%]">Significado</h2>
              <div className="text-[#6B7280] w-full h-[25%] py-2">
                <p>En un triángulo rectángulo:</p>
                <div className="flex flex-row items-center">
                  <div className="bg-linear-90 from-[#4F7DF3] from-50% to-[#34C759] to-50% rounded-[50%] w-3 h-3"></div>
                  <p className="ml-2"><span className="text-[#4F7DF3] font-bold">a</span> y <span className="text-[#34C759] font-bold">b</span> son los catetos.</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="bg-[#8E6CF0] rounded-[50%] w-3 h-3"></div>
                  <p className="ml-2"><span className="text-[#8E6CF0] font-bold">c</span> es la hipotenusa.</p>
                </div>
              </div>
              <div className="w-full h-[70%] space-y-2">
                <div className="w-full h-[calc(60%-4px)] bg-[#E6F9ED] border border-[#34C759] rounded-md"></div>
                <div className="w-full h-[calc(40%-4px)] bg-[#F3EEFF] border border-[#8E6CF0] rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EAF2FF] border border-[#C7D7FF] w-full h-[15%] rounded-lg ml-auto flex flex-row">
            <div className="text-[#4F7DF3]"></div>
        </div>
      </div>
    </div>
  );
}
