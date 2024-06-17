import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      colors: {
        'backColor':'#18253c',
        'custom-color': '#2980b9',
        'lights-blue':'#1560bd',
        'dark-blue':'#012169',
      },
     },
   },
   plugins: [],
 });
 