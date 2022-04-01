export const formatNumberToPrice = (price) => {
    const aux = Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
    return aux;
  };