import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollElementToView(scrollToId: string) {
  const element = document.querySelector(`#${scrollToId}`) as HTMLElement;
  const elRect = element.getBoundingClientRect();
  const scrollDistance = elRect.top + window.scrollY;
  const offset =
    Number(element.getAttribute("data-scroll-to-view-offset")) || 0;
  window.scrollTo({
    top: scrollDistance + offset,
    behavior: "smooth",
  });
}
