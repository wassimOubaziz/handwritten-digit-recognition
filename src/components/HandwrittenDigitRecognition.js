// components/HandwrittenDigitRecognition.js
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css"; // Assuming you have the styles in the same directory
import { useEffect } from "react";
const HandwrittenDigitRecognition = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      await Promise.all([
        loadScript("/mnist-model-parameters/weights/weightsLayer1.js"),
        loadScript("/mnist-model-parameters/weights/weightsLayer2.js"),
        loadScript("/mnist-model-parameters/weights/weightsLayer3.js"),
        loadScript("/mnist-model-parameters/biases/biasesLayer1.js"),
        loadScript("/mnist-model-parameters/biases/biasesLayer2.js"),
        loadScript("/mnist-model-parameters/biases/biasesLayer3.js"),
        loadScript("/script/index.js"),
      ]);
    };

    loadScripts();
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-footer-common">
          <div className="brand-logo center">Simple Digit Recognizer</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down mt-2">
            <li>
              <Link
                href="https://github.com/wassimOubaziz/handwritten-digit-recognition"
                target="_blank"
                className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
              >
                Source Code
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="card-panel hoverable">
            <blockquote>
              <p style={{ fontSize: "larger" }}>
                <strong className="text-gray-700">
                  Recognize digits quickly with our neural network built in
                  JavaScript. Demo by Wassim Oubaziz using a PyTorch-trained
                  model.
                </strong>
              </p>
            </blockquote>
          </div>
          <div className="col s3 offset-s4">
            <div className="card-panel no-pad hoverable">
              <canvas
                className="canvas elevation w-full min-w-[280px]"
                id="canvas"
                height="280"
              />
            </div>
          </div>
          <div className="card-panel hoverable col s2">
            <div id="pred" className="predictions">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className={`prediction-col`}
                  id={`prediction-${i}`}
                >
                  <div className="prediction-bar-container">
                    <div className="prediction-bar"></div>
                  </div>
                  <div className="rotated text-gray-700">{i}</div>
                </div>
              ))}
            </div>
            <div className="button-pad center">
              <a id="clear-button" className="waves-effect waves-light btn">
                CLEAR
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <h5 className="text-lg mb-2">
            <Link
              href="https://www.linkedin.com/in/wassim-oubaziz/"
              target="_blank"
              className="hover:underline"
            >
              Wassim Oubaziz - LinkedIn
            </Link>
          </h5>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HandwrittenDigitRecognition;
