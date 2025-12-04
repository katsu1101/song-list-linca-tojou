import Image from "next/image";

/**
 * X(旧Twitter)のiconImageを表示
 * @constructor
 */
export const ImageX = () => {
  return <Image
    src="https://static.addtoany.com/buttons/x.svg" width={32} height={32}
    alt="X"
    style={{backgroundColor: "royalblue"}}/>
}