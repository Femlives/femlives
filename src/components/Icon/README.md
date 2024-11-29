# How do add a new icon

- Convert the svg code to JSX. There are tools like [SVG to JSX](https://svgtojsx.com/) that can help with this.
- Duplicate an existing icon, e. g. `Email.tsx`, in the `./icons/` folder and replace the svg code with the new one
- Take a look at the existing icon to see how to structure the new icon e. g.
  - adjust the props of the `svg` tag accordingly
  - remove `stroke`, `fill`, or other attributes with color values from all other elements
- export the new icon via `./icons/index.ts`
