import {
  useScroll,
  useMotionValue,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";
import { useLerpHex } from "./useLerpHex";
import { useLerp } from "./useLerp";

export const useGradientBackground = (sections: any[], snapContainer: any) => {
  const { scrollY } = useScroll({ container: snapContainer });
  const colorA = useMotionValue(sections[0].colors.a);
  const colorB = useMotionValue(sections[0].colors.b);
  const aStop = useMotionValue(sections[0].colors.aStop);
  const bStop = useMotionValue(sections[0].colors.bStop);
  const deg = useMotionValue(sections[0].colors.deg);
  let prev = scrollY.get();

  const bgColor = useMotionTemplate`linear-gradient(${deg}deg, ${colorA} ${aStop}%, ${colorB} ${bStop}%)`;

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const height = (snapContainer?.current as unknown as HTMLDivElement)
      .offsetHeight;
    const direction = prev < latest ? 1 : -1;
    const prevPage = Math.max(
      0,
      Math.min(
        sections.length - 1,
        direction === 1 ? Math.floor(prev / height) : Math.ceil(prev / height)
      )
    );
    const i =
      direction === 1
        ? (prev % height) / height
        : (height - (prev % height)) / height;
    const nextPage = Math.max(
      0,
      Math.min(
        sections.length - 1,
        direction === 1 ? Math.ceil(prev / height) : Math.floor(prev / height)
      )
    );

    colorA.set(
      useLerpHex(sections[prevPage].colors.a, sections[nextPage].colors.a, i)
    );
    colorB.set(
      useLerpHex(sections[prevPage].colors.b, sections[nextPage].colors.b, i)
    );

    aStop.set(
      useLerp(
        sections[prevPage].colors.aStop,
        sections[nextPage].colors.aStop,
        i
      )
    );
    bStop.set(
      useLerp(
        sections[prevPage].colors.bStop,
        sections[nextPage].colors.bStop,
        i
      )
    );

    deg.set(
      useLerp(sections[prevPage].colors.deg, sections[nextPage].colors.deg, i)
    );

    prev = latest;
  });

  return bgColor;
};
