export function ToRupiahStr(value: number) {
  return new Intl.NumberFormat("id-ID").format(value);
}

export function ToRupiah(value: number) {
  // return new Intl.NumberFormat("id-ID", {}).format(value);
}
