import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
const Banner = () => {
  const TEXTS = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum incidunt quos?',
    '        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora perspiciatis a impedit quasi cum obcaecati dolorum sint voluptatibus voluptates aperiam.',
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
        direction="down"
        noOverflow={true}
      />
    </>
  );
};

export default Banner;
