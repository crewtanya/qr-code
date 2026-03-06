import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./GenerateHistory.module.css";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

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
