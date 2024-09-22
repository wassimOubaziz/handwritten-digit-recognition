// pages/index.js

import Head from "next/head";
import HandwrittenDigitRecognition from "../components/HandwrittenDigitRecognition";

const Home = () => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Handwritten Digit Recognition - A simple tool for recognizing handwritten digits."
        />
        <meta
          name="keywords"
          content="digit recognizer, handwritten digits, machine learning, neural network, JavaScript, PyTorch"
        />
        <meta name="author" content="Hovhannes Hovhannisyan" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Handwritten Digit Recognition" />
        <meta
          property="og:description"
          content="A simple tool for recognizing handwritten digits."
        />
        <meta
          property="og:url"
          content="https://github.com/vontanne/handwritten-digit-recognition"
        />
        <title>Handwritten Digit Recognition</title>
        <link
          rel="icon"
          href="/icons/dall-e-generated.png"
          type="image/png"
          alt="App Icon"
        />
      </Head>
      <HandwrittenDigitRecognition />
    </div>
  );
};

export default Home;
