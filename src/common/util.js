export function loopTwoSeconds() {
  const expire = new Date();
  expire.setSeconds(expire.getSeconds() + 2);

  for (; new Date() < expire; ) {}
}
