'use client';
const BulletPoints = ({ 
  feature, 
  position = 'start',  // Default to 'start' if not provided
  textSize = '5xl',    // Default text size
  textColor = 'slate-800', // Default text color
  underlineWidth = '80px', // Default underline width
  underlineColor = '[var(--primary)]', // Default underline color
  underlineClass = '', // Additional underline classes
  className = '',      // Additional container classes
  ...props             // Capture any other props
}) => {
  // Validate position to prevent invalid Tailwind classes
  const validPositions = ['start', 'center', 'end'];
  const alignPosition = validPositions.includes(position) ? position : 'start';
  
  return (
    <div className={`w-auto ${className}`} {...props}>
      <div className={`text-${textSize} text-${textColor} flex justify-${alignPosition} pb-5`}>
        {feature}
      </div>
      <div className={`w-full flex justify-${alignPosition}`}>
        <div 
          className={`h-2 w-[${underlineWidth}] bg-${underlineColor} ${underlineClass}`}
          style={{ '--tw-bg-opacity': underlineColor.startsWith('#') ? 1 : undefined }}
        ></div>
      </div>
    </div>
  );
};

export default BulletPoints;

// const BulletPoints= ({feature, position,...props})=>{
//   return(
//     <div className='w-auto'>
//       <div className={`text-5xl text-slate-800 flex justify-${position}`} style={{ paddingBottom: '20px' }}>{feature}</div>
//       <div className={`w-full flex justify-${position}`}>
//         <div className={`h-2  w-[80px] bg-[var(--primary)] ${props}`}></div>
//       </div>
//     </div>
    
//   )
// }

// export default BulletPoints