import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

function TestQR() {
  const qrDivRef = useRef(null);
  const qrInstanceRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    if (!qrDivRef.current) return;

    const qr = new Html5Qrcode(qrDivRef.current.id);
    qrInstanceRef.current = qr;

    Html5Qrcode.getCameras().then(devices => {
      if (devices && devices.length && isMounted) {
        qr.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 250 },
          text => alert("Scanned: " + text)
        ).then(() => {
          startedRef.current = true;
        }).catch((err) => {
          console.error("QR start error:", err);
        });
      }
    });

    return () => {
      isMounted = false;
      if (qrInstanceRef.current && startedRef.current) {
        qrInstanceRef.current.stop()
          .catch(() => {})
          .then(() => qrInstanceRef.current.clear());
      } else if (qrInstanceRef.current) {
        qrInstanceRef.current.clear();
      }
    };
  }, []);

  return <div id="qr-test" ref={qrDivRef} style={{ width: 350 }} />;
}

export default TestQR;
// This component initializes the QR code scanner using Html5Qrcode.
// It starts scanning when the component mounts and cleans up when it unmounts.