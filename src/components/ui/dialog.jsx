import React, { useState, createContext, useContext, useEffect } from "react";

// Dialog Context
const DialogContext = createContext({
  open: false,
  setOpen: () => {},
});

// Dialog Component
export function Dialog({ children, onOpenChange, ...props }) {
  const [open, setOpen] = useState(false);

  // Añade un useEffect para manejar el onOpenChange
  useEffect(() => {
    if (open && onOpenChange) {
      onOpenChange(true);
    }
  }, [open, onOpenChange]);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <div {...props}>{children}</div>
    </DialogContext.Provider>
  );
}

// DialogTrigger Component
export function DialogTrigger({ children, asChild, ...props }) {
  const { setOpen } = useContext(DialogContext);

  const handleClick = () => {
    setOpen(true);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      ...props,
    });
  }

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  );
}

// DialogContent Component
export function DialogContent({ children, className = "", ...props }) {
  const { open, setOpen } = useContext(DialogContext);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setOpen(false)}
    >
      <div
        className={`bg-white rounded-lg p-6 w-80 max-w-sm mx-auto relative ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close dialog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

// DialogHeader Component
export function DialogHeader({ children, className = "", ...props }) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

// DialogTitle Component
export function DialogTitle({ children, className = "", ...props }) {
  return (
    <h2
      className={`text-2xl font-bold text-rose-600 mb-4 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export default {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
};
