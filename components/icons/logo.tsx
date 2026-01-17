import React from 'react';

export default function Logo(props: React.ComponentProps<"svg">) {
  return (
   <svg 
      viewBox="0 0 250 120"
      width="250"
      height="120"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
    </svg>
  );
}