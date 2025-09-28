import React, { createContext, useContext, useState, cloneElement, useRef, useEffect } from "react";

const DropdownCtx = createContext({ open: false, setOpen: () => {} });

// Dropdown wrapper
export function DropdownMenu({ children, open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Use controlled state if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = controlledOpen !== undefined ? onOpenChange : setInternalOpen;

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open, setOpen]);

  return (
    <DropdownCtx.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownCtx.Provider>
  );
}

export function DropdownMenuTrigger({ asChild = false, children, ...props }) {
  const { open, setOpen } = useContext(DropdownCtx);
  
  if (asChild && React.isValidElement(children)) {
    return cloneElement(children, {
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        children.props?.onClick?.(e);
        setOpen(!open);
      },
      ...props,
    });
  }
  
  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open);
      }} 
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({ children }) {
  const { open } = useContext(DropdownCtx);
  if (!open) return null;
  
  return (
    <div className="absolute mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50">
      <div className="py-1">{children}</div>
    </div>
  );
}

export function DropdownMenuItem({ asChild = false, children, ...props }) {
  const { setOpen } = useContext(DropdownCtx);
  
  if (asChild && React.isValidElement(children)) {
    return cloneElement(children, {
      onClick: (e) => {
        children.props?.onClick?.(e);
        setOpen(false); // Close dropdown when item is clicked
      },
      ...props,
    });
  }
  
  const Comp = asChild ? "div" : "button";
  return (
    <Comp 
      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
      onClick={(e) => {
        props.onClick?.(e);
        setOpen(false); // Close dropdown when item is clicked
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}