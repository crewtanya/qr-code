import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./QrCodeScanner.module.css";

import { SCAN_DATA } from "../../constants";

export const QrCodeScanner = () => {
  const [scanned, setScenned] = useState(null);

  const scanHandler = (result) => {
    setScenned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue]),
    );
  };

  return (
    <div className={s.container}>
      <Scanner
        onScan={scanHandler}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: { width: 200 },
        }}
        onError={(error) => console.log(error?.message)}
      />
      <p className={s.result}>{scanned}</p>
    </div>
  );
};
