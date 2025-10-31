import { useFloating } from "@floating-ui/react-dom";

// This should log the function to the console and trigger imports from react.
// By manually adding console.log statements to the various versions of react that are hoisted, you can figure out which one actually got resolved.
console.log(useFloating);
