import { useEffect, useState } from "react";
import { ProviderCard } from "./ProvaiderCard";

export function ProvaiderList({ children }: { children: { name: string; url: string; id: number; alert: boolean }[] }) {
  const [focus, setFocus] = useState(0);

  // const handleChangeFocus = (n: -1 | 1) => {
  //   const maxLength = children.length;

  //   if (maxLength === 0) {
  //     return;
  //   }

  //   const provisional = focus + n;

  //   if (provisional >= maxLength) {
  //     setFocus(0);
  //   } else if (provisional <= -1) {
  //     setFocus(maxLength - 1);
  //   } else {
  //     setFocus(provisional);
  //   }
  // };

  // const handleOnKeyDown = (e)=>{
  //   if
  // }

  useEffect(() => {
    // validacion de provaiders cargados
    console.log();
    // referencia.focus()
    return () => {
      //
    };
  }, [focus]);

  return (
    <ul id="providerList" role="listbox" aria-required onKeyDown={handleOnKeyDown}>
      {/* 1. (fetch === cargado)? muestra : 'cargando...' */}
      {children.map(({ name, alert, url, id }, index) => {
        return (
          alert || (
            <ProviderCard url={url} key={id} index={index}>
              {name}
            </ProviderCard>
          )
        );
      })}
    </ul>
  );
}
