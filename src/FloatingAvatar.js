import React, { useState, useEffect } from 'react';

const FloatingAvatar = () => {
  const imageUrl = "https://jlpagel.github.io/SpeechBubblePhoto.png";
  
  const [isAnimating, setIsAnimating] = useState(false);
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState({ x: 92, y: 25 }); // Start on RIGHT side 
  const [showFireworks, setShowFireworks] = useState(false);

  const dialogue = [
    "Hi there! Welcome to MINDSHIFT!",
    "Let me show you our featured book - The Burnout Fix",
    "The other books? They're being tested vigorously by our team before release!",
    "Ready to transform your life? Check it out below! 💜"
  ];

  const animationSteps = [
    { x: 92, y: 25, duration: 3000 }, // Start right
    { x: 50, y: 45, duration: 4000 }, // Move to center (near featured book)
    { x: 50, y: 55, duration: 4000 }, // Stay near products
    { x: 10, y: 45, duration: 3500 } // Exit left with fireworks
  ];

  useEffect(() => {
    if (!isAnimating) return;

    if (step < animationSteps.length) {
      const currentStep = animationSteps[step];
      setPosition({ x: currentStep.x, y: currentStep.y });

      const timer = setTimeout(() => {
        setStep(step + 1);
      }, currentStep.duration);

      return () => clearTimeout(timer);
    } else {
      setShowFireworks(true);
      setTimeout(() => {
        setShowFireworks(false);
        setIsAnimating(false);
        setStep(0);
        setPosition({ x: 92, y: 25 });
      }, 2000);
    }
  }, [isAnimating, step]);

  const startAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setStep(0);
    }
  };

  const Firework = ({ delay, x, y }) => {
    const colors = ['#667eea', '#764ba2', '#ff0080', '#00ff80'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return (
      <div
        className="firework-container"
        style={{
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
          width: '4px',
          height: '4px'
        }}
      >
        {[...Array(20)].map((_, i) => {
          const angle = (i * 360) / 20;
          const distance = 80 + Math.random() * 40;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: color,
                boxShadow: `0 0 10px ${color}`,
                left: '50%',
                top: '50%',
                animation: `explode 1.2s ease-out ${delay}s forwards`,
                '--angle': `${angle}deg`,
                '--distance': `${distance}px`
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    >
      <style>
        {`
          @keyframes explode {
            0% {
              transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance));
              opacity: 0;
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
      
      {/* Avatar */}
      <div
        style={{
          position: 'absolute',
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 2s ease-in-out',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 10000
        }}
        onClick={startAnimation}
      >
        <div
          style={{
            position: 'relative',
            animation: isAnimating ? 'none' : 'float 3s ease-in-out infinite'
          }}
        >
          {/* Speech Bubble */}
          {isAnimating && step < dialogue.length && (
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '20px',
                width: '400px',
                zIndex: 10001
              }}
            >
              <div
                style={{
                  background: 'white',
                  borderRadius: '30px',
                  padding: '20px 24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  border: '4px solid black',
                  position: 'relative'
                }}
              >
                <p
                  style={{
                    margin: 0,
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#333',
                    lineHeight: '1.4'
                  }}
                >
                  {dialogue[step]}
                </p>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translate(-50%, 50%) rotate(45deg)',
                    width: '24px',
                    height: '24px',
                    background: 'white',
                    borderRight: '4px solid black',
                    borderBottom: '4px solid black'
                  }}
                />
              </div>
            </div>
          )}
          
          {/* Image */}
          <img
            src={imageUrl}
            alt="Your Guide"
            style={{
              width: '500px',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </div>
      
      {/* Fireworks */}
      {showFireworks && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10000 }}>
          <Firework delay={0} x={30} y={30} />
          <Firework delay={0.15} x={70} y={25} />
          <Firework delay={0.3} x={50} y={40} />
          <Firework delay={0.45} x={20} y={50} />
          <Firework delay={0.6} x={80} y={45} />
        </div>
      )}
    </div>
  );
};

export default FloatingAvatar;