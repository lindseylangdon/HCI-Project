import React, { useState, useEffect } from "react";
import ASLLabel from "./ASLLabel";
import * as tf from "@tensorflow/tfjs";
import { drawWords } from "./utilities";

const labelMap = {
  1: { name: 'Hello', color: 'red' },
  2: { name: 'Thank You', color: 'yellow' },
  3: { name: 'I Love You', color: 'lime' },
  4: { name: 'Yes', color: 'blue' },
  5: { name: 'No', color: 'purple' },
};

function ASLBox({ videoRef }) {
  const [translationText, setTranslationText] = useState("Translation...");
  const [detectedWords, setDetectedWords] = useState([]);

  useEffect(() => {
    const runCoco = async () => {
      const net = await tf.loadGraphModel('https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json');

      const detectHands = async () => {
        if (videoRef.current && videoRef.current.readyState === 4) {
          const video = videoRef.current;
          const videoWidth = video.videoWidth;
          const videoHeight = video.videoHeight;

          const img = tf.browser.fromPixels(video);
          const resized = tf.image.resizeBilinear(img, [640, 480]);
          const casted = resized.cast('int32');
          const expanded = casted.expandDims(0);
          const obj = await net.executeAsync(expanded);

          const boxes = await obj[1].array();
          const classes = await obj[2].array();
          const scores = await obj[4].array();

          const words = drawWords(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight);

          tf.dispose(img);
          tf.dispose(resized);
          tf.dispose(casted);
          tf.dispose(expanded);
          tf.dispose(obj);

          if (boxes[0] && classes[0] && scores[0] > 0.8) {
            const text = classes[0];
            const newText = `${labelMap[text]['name']}`;
            setTranslationText(newText);
          } else {
            setTranslationText("Translation...");
          }

          setDetectedWords(words);
        }
      };

      const intervalId = setInterval(detectHands, 16.7);

      return () => {
        clearInterval(intervalId);
      };
    };

    runCoco();
  }, [videoRef]);

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="bg-white rounded-xl mb-2 sm:p-2 mb-3 md:p-3 mb-5 w-3/4 lg:p-4 mb-6">
        <div className="mb-4">
          <ASLLabel />
        </div>
        <p className="text-xl text-gray-700 mb-5 pl-3">
          {translationText} {detectedWords.map((word, index) => word.text).join(" ")}
        </p>
      </div>
    </div>
  );
}

export default ASLBox;