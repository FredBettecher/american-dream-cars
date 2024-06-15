import {Lato, Racing_Sans_One} from "next/font/google"

const lato = Lato({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900']

});

const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  weight: ['400']
});

export { lato,  racingSansOne };
