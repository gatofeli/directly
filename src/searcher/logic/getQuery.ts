/* ---------------- To Do ------------------------
 TODO: solucionar este tipado y ver posible error de no encontrar query
*/

/**
 * Obtiene y valida la query del usuario
 *
 * @returns La query del usuario ya procesada, en caso de que sea mayor a 500 caracteres se recorta.
 */
export function getQuery() {
  const userInput = document.querySelector("#query");

  if (userInput instanceof HTMLInputElement === false || typeof userInput.value !== "string") {
    return ""; //!------------------------------------------------------------------------------------- throw
  }

  let query = userInput.value.trim();
  if (query.length > 500) {
    query = query.slice(0, 500);
  }

  return query;
}
