import k1 from './static/kyiv-1.jpg';
import k2 from './static/kyiv-2.jpg';
import gg1 from './static/gg-1.jpg';
import gg2 from './static/gg-2.jpg';
import gg3 from './static/gg-3.jpg';
import kpl1 from './static/kpl-1.jpg';
import p1 from './static/p-1.jpg';
import p2 from './static/p-2.jpg';

const imageSRCs = [
  k1,
  kpl1,
  gg1,
  gg2,
  gg3,
  p1,
  p2,
  k2,
];

const container = document.createElement('div');
container.id = 'container';
container.className = 'container';

const slideWrapper = document.createElement('div');
slideWrapper.id = 'slide-wrapper';
slideWrapper.className = 'slide-wrapper';

const navButtonWrapper = document.createElement('div');
navButtonWrapper.id = 'navbutton-wrapper';
navButtonWrapper.className = 'navbutton-wrapper';

const prevButton = document.createElement('div');
prevButton.id = 'button-prev';
prevButton.className = 'navbutton navbutton-prev';

const nextButton = document.createElement('div');
nextButton.id = 'button-next';
nextButton.className = 'navbutton navbutton-next';

navButtonWrapper.appendChild(prevButton);
navButtonWrapper.appendChild(nextButton);

const slides = imageSRCs.map((src, i) => {
  const slide = document.createElement('span');
  slide.id = `slide-${i}`;
  slide.className = `slide slide-${i}`;
  slide.style = `background-image: url(${src})`;

  return slide;
});

slides.forEach(slide => slideWrapper.appendChild(slide));
container.appendChild(slideWrapper);
container.appendChild(navButtonWrapper);

document.body.appendChild(container);

let activeSlideIndex = 0;
const updateSlideWrapperStyles = () => {
  const width = `width: ${slides.length * 100}vw;`;
  const left = `left: -${activeSlideIndex * 100}vw;`;
  const style = `${width} ${left}`;
  slideWrapper.style = style;
}

nextButton.addEventListener('click', () => {
  if (activeSlideIndex < slides.length - 1) {
    activeSlideIndex += 1;
    updateSlideWrapperStyles();
  }
});

prevButton.addEventListener('click', () => {
  if (activeSlideIndex > 0) {
    activeSlideIndex -= 1;
    updateSlideWrapperStyles();
  }
});

updateSlideWrapperStyles();
