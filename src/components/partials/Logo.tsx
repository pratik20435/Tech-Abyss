
interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
  dark?: boolean;
}

const Logo = ({
  className = "",
  dark = false,
  height = 20,
  width = 80,
}: LogoProps) => {
  return (
    <span className={`relative ${className}`}>
      <div>TECH ABYSS</div>
    </span>
  );
};

export default Logo;
