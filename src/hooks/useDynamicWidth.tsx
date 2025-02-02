import { useState, useEffect, useRef } from "react";

// Custom Hook to calculate dynamic width (70% of target element's width)
function useDynamicWidth() {
  const [width, setWidth] = useState(0);
  const customRef = useRef<HTMLHeadingElement | null>(null); // Generic HTMLElement ref

  useEffect(() => {
    const updateWidth = () => {
      if (customRef.current) {
        const targetWidth = customRef.current.offsetWidth;
        setWidth(targetWidth * 0.7); // Set width as 70% of target element's width
      }
    };

    // Call function on component mount
    updateWidth();

    // Add resize event listener to update width on window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return { width, customRef }; // Return width and ref to be used in other components
}

export default useDynamicWidth;
