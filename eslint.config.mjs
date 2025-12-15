import js from "@eslint/js";
import next from "eslint-config-next";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  js.configs.recommended,
  ...next(),
  {
    plugins: { "jsx-a11y": jsxA11y },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      // Good practical add-ons:
      "jsx-a11y/anchor-is-valid": "off", // Next <Link> can trip this
    },
  },
];
