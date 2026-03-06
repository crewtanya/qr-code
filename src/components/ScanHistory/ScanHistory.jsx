import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./ScanHistory.module.css";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  console.log(data);
  return (
    <div>
      {data.map((text) => (
        <p key={text} className={s.container}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
};
