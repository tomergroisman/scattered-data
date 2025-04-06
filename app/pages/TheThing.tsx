import React, { useEffect, useState } from "react";

import dnjisaclka from "./dksflamkdlpasd.dklsal34444.json";

const DFGKDSFP = 400;
const EOWREWPL = 1000;

export function MeaninglessComponentName() {
  const [gkmldac, setGkmldac] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setGkmldac((iojroe) => iojroe + 1);
    }, 1);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: DFGKDSFP,
        width: EOWREWPL,
      }}
    >
      {dnjisaclka.map((njdkascue, i) => {
        let [oiwejfi, mmcklsa] = [
          dnjisaclka[i].d57jndwf8sk,
          dnjisaclka[i].kmace748ks,
        ].map(
          (jkcnjaskd, lsdmklcs) =>
            jkcnjaskd + njdkascue.nvjdkahvu928d[lsdmklcs] * Number(gkmldac > 0),
        );
        oiwejfi = oiwejfi < 0 ? EOWREWPL + oiwejfi : oiwejfi % EOWREWPL;
        mmcklsa = mmcklsa < 0 ? DFGKDSFP + mmcklsa : mmcklsa % DFGKDSFP;
        dnjisaclka[i].d57jndwf8sk = oiwejfi;
        dnjisaclka[i].kmace748ks = mmcklsa;
        return <Ugly key={i} {...dnjisaclka[i]} />;
      })}
    </div>
  );
}

interface DotProps {
  d57jndwf8sk: number;
  kmace748ks: number;
}

export function Ugly({ d57jndwf8sk, kmace748ks }: DotProps) {
  return (
    <div
      className="dot"
      style={{
        width: 10,
        height: 10,
        position: "absolute",
        background: "blue",
        top: kmace748ks,
        left: d57jndwf8sk,
      }}
    />
  );
}
