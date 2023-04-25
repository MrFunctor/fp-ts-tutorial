const pipe = <A, B, C>(
  a: A,
  f: (a: A) => B,
  g: (b: B) => C
): C =>
  g(f(a))
