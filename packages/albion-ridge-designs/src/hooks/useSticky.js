import { useEffect, useState, useRef, useContext } from "react";
import { stickyContext } from "../components/index";

function useSticky() {
  const { isSticky, setSticky } = useContext(stickyContext);
  const element = useRef(null)

  // const handleScroll = () => {

  //   window.scrollY > element.current.getBoundingClientRect().bottom
  //     ? setSticky(true)
  //     : setSticky(false)
  // }

  const handleScroll = () => {
    if(!element.current) return
    if (window.scrollY > element.current.getBoundingClientRect().bottom || null) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // This function handles the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { element }
}

export default useSticky;
