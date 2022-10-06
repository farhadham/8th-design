import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";

import Spline from "@splinetool/react-spline";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const cube1 = useRef();
  const cube2 = useRef();
  const group = useRef();

  function onLoad(spline) {
    const obj1 = spline.findObjectByName("Cube");
    const obj2 = spline.findObjectByName("Cube 2");
    const objGroup = spline.findObjectByName("Group");

    cube1.current = obj1;
    cube2.current = obj2;
    group.current = objGroup;

    function animate() {
      cube1.current.rotation.y += 0.002;
      cube1.current.rotation.x += 0.001;
      cube2.current.rotation.y += -0.002;
      cube2.current.rotation.x += 0.003;
      group.current.rotation.z += 0.001;
      requestAnimationFrame(animate);
    }

    setTimeout(() => {
      animate();
      scrollYProgress.onChange((latest) => {
        group.current.rotation.y = latest;
      });
    }, 10);
  }

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Spline
          scene="https://prod.spline.design/MawWx08O4rbcBn7y/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      <h1>Hello</h1>

      <Spline scene="https://prod.spline.design/VUdNthwszupVlMzQ/scene.splinecode" />
    </>
  );
}
