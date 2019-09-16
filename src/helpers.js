import { general, tech, jobs } from "./data";

export const formatText = (val, data, lang) => {
  const from = data || general
  if ( !from[lang][val] ) {
    return ""
  }
  return (
      from[lang][val].split("\n\n").map((paragraph , index) =>
          <p key={val + index}>
            {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
          </p>
      )
  )
}