import Image from "next/image";

/**
 * LogoのImageを表示
 * @constructor
 */
export const ImageLogo = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <Image width={192} height={192} src={`${basePath}/icon-192x192.png`} alt="Logo" className="w-12 h-12"/>
}