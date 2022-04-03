export const SlideDown = () =>
`
  animation-name: slide-down;
  animation-duration: 0.58s;
  animation-iteration-count: ease-in-out;
  
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }`
;

export const SlideUp = () =>
`
  animation-name: slide-up;
  animation-duration: 0.3s;
  animation-iteration-count: ease-out;
  
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }`
;

export const SlideLeft = () =>
`
  animation-name: slide-left;
  animation-duration: 0.3s;
  animation-iteration-count: ease-out;
  
  @keyframes slide-left {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }`
;
