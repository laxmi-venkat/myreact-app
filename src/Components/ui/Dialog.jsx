import React, { useState, createContext, useContext } from "react";

const DialogContext = createContext();

export function Dialog({ open, onOpenChange, children }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild = false, children, ...props }) {
  const { onOpenChange } = useContext(DialogContext);
  const Comp = asChild ? "span" : "button";
  return (
    <Comp {...props} onClick={() => onOpenChange?.(true)}>
      {children}
    </Comp>
  );
}

export function DialogContent({ children, className = "" }) {
  const { open, onOpenChange } = useContext(DialogContext);
  
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => onOpenChange?.(false)}
      />
      <div className={`relative z-50 bg-white rounded-lg p-6 shadow-lg w-full max-w-lg ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function DialogDescription({ children }) {
  return <p className="text-sm text-gray-600">{children}</p>;
}
