type First<T extends unknown[]> = T extends [] ? never : T[0]
