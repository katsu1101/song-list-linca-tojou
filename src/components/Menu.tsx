
import { X } from "lucide-react";
import React from "react"; // アイコンをインポート

type Props = {
  menuOpen: boolean
  onClick?: () => void; // ✅ クリック時にジャンルを渡せる
};

const Menu: React.FC<Props> = ({ menuOpen, onClick }) => {

  const menuItems = [
    { name: "YouTube（戸定梨香）", url: "https://youtube.com/@linca_tojou?si=tDAbk7IO_RccPD5m" },
    { name: "𝕏（戸定梨香）", url: "https://x.com/Tojou_Linca" },
    { name: "Fanitia（戸定梨香のとじょりんワールド）", url: "https://fantia.jp/fanclubs/70005" },
    { name: "ASE OFFICIAL STORE", url: "https://ase-store.com/?category_id=67888c9a6e449503ebae7c96" },
    { name: "SUZURI（とじょりんがいっぱい）", url: "https://suzuri.jp/lincatojou" },
    { name: "VASE 公式サイト", url: "https://www.vase.tokyo/" },

    { name: "LINEスタンプ", url: "https://store.line.me/stickershop/product/20411879/ja"},
    { name: "ローソンプリント", url: "https://lawson-print.com/products/categories/vase"},
    { name: "ファミマプリント", url: "https://famima-print.family.co.jp/vtuber/vase-59tnz" },

    { name: "きっくーのメモ帳（データ提供元）", url: "https://kicku-tw.blogspot.com/" },
    { name: "𝕏（かつき）", url: "https://x.com/katsu1101" },
    { name: "とじょりん聖地（茶月兄チャマ）", url: "https://maps.app.goo.gl/oLhPAWA7RqTj8eXK7" },
    { name: "ちばっことじょりん（茶月兄チャマ）", url: "https://maps.app.goo.gl/Ce7naG5KTSxGPcwv8" },
  ];

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="text-2xl p-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 rounded-full bg-white dark:bg-gray-800 shadow-md transition-colors"
        title="メニュー"
      >
        ☰
      </button>
      {menuOpen && (
        <div
          className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 p-4 transition-opacity duration-300 animate-fade-in">
          <div className="text-right mb-2">
            <button onClick={onClick} className="text-gray-500 hover:text-red-500">
              <X size={20}/>
            </button>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b pb-2 mb-2">関連リンク</h3>
          <ul className="space-y-2 text-sm">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
