import React from "react";

export const Button = React.forwardRef(({ className = "", variant = "default", asChild = false, ...props }, ref) => {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  const classes = `${base} ${variants[variant] || variants.default} ${className}`;

  const Comp = asChild ? "span" : "button";
  return <Comp ref={ref} className={classes} {...props} />;
});

export default Button;
