import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({
  //   weight: "400",
  subsets: ["latin"],
});

interface TitleProps {
  children: string | string[];
  color: "black" | "white";
}

export default function Title(props: TitleProps) {
  return (
    <div className={font.className}>
      <h1 className={`text-${props.color}`}>
        {Array.isArray(props.children)
          ? props.children.join(" ")
          : props.children}
      </h1>
    </div>
  );
}
