
export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" width="300" height="140" fill="none">
  <rect 
    x="50" 
    y="50" 
    width="500" 
    height="130" 
    rx="20" 
    ry="20" 
    stroke="#1A1A1A" 
    stroke-width="8"
  />
  
  <text 
    x="300" 
    y="145" 
    text-anchor="middle" 
    font-family="Arial Black, 'Helvetica Neue', sans-serif" 
    font-weight="900" 
    font-size="85" 
    letter-spacing="4" 
    fill="#1A1A1A"
  >
    BOKSMAT
  </text>
  
  <text 
    x="300" 
    y="235" 
    text-anchor="middle" 
    font-family="'Helvetica Neue', Arial, sans-serif" 
    font-weight="600" 
    font-size="28" 
    letter-spacing="3" 
    fill="#1A1A1A"
  >
    GOURMET PÅ BOKS
  </text>
</svg>
  );
}
