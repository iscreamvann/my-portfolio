import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, replacementText, typingSpeed = 100, backspaceSpeed = 50 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isReplacing, setIsReplacing] = useState(false);

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else if (currentText === text && !isReplacing) {
        setIsReplacing(true);
        setTimeout(() => {
          setCurrentIndex(text.length - 1);
          setIsTyping(false);
        }, typingSpeed);
      }
    } else if (isReplacing) {
      if (currentIndex >= 0) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText.slice(0, -1));
          setCurrentIndex(prevIndex => prevIndex - 1);
        }, backspaceSpeed);

        return () => clearTimeout(timeout);
      } else {
        setCurrentText(text + replacementText);
        setCurrentIndex(0);
        setIsReplacing(false);
        setIsTyping(true);
      }
    }
  }, [currentIndex, isTyping, isReplacing, text, replacementText, typingSpeed, backspaceSpeed, currentText]);

  return <span>{currentText}</span>;
};

export default Typewriter;
