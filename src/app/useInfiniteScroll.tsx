import { useAnimate, useMotionValue } from "motion/react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export default function useInfiniteScroll(
  elAmount: number,
  durMul: number = 4,
  reverse: boolean = false
) {
  const [ref, bound] = useMeasure();
  const [animateScope, animate] = useAnimate();

  const x = useMotionValue(0);
  useEffect(() => {
    const el = elAmount;
    const target = bound.width;

    animate(x, reverse ? [-target, 0] : [0, -target], {
      duration: el * durMul,
      repeat: Infinity,
      ease: "linear",
    });
  }, [animate, bound, elAmount]);

  return {
    pageRef: ref,
    animateScope,
    x,
  };
}
