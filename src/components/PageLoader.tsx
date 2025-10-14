import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoaderContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'var(--mui-palette-background-default)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
});

const LogoWrapper = styled(Box)({
  position: 'relative',
  width: '200px',
  height: '200px',
});

const Circle = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  border: '3px solid var(--mui-palette-primary-main)',
});

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete,
        });
      },
    });

    tl.fromTo(
      [circle1Ref.current, circle2Ref.current, circle3Ref.current],
      {
        width: 0,
        height: 0,
        opacity: 0,
      },
      {
        width: (i: number) => 60 + i * 40,
        height: (i: number) => 60 + i * 40,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      }
    )
    .to(
      [circle1Ref.current, circle2Ref.current, circle3Ref.current],
      {
        rotation: 360,
        duration: 1.5,
        ease: 'power1.inOut',
      },
      '-=0.5'
    )
    .to(
      [circle1Ref.current, circle2Ref.current, circle3Ref.current],
      {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.in',
      }
    );
  }, [onComplete]);

  return (
    <LoaderContainer ref={loaderRef}>
      <LogoWrapper>
        <Circle ref={circle1Ref} />
        <Circle ref={circle2Ref} />
        <Circle ref={circle3Ref} />
      </LogoWrapper>
    </LoaderContainer>
  );
}