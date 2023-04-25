const flow = <A, B, C>(
  f: (a: A) => B,
  g: (b: B) => C
) =>
  (a: A): C =>
    g(f(a))
