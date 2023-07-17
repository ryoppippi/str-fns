type Reverse<T extends string> = T extends `${infer R}${infer F}` ? `${Reverse<F>}${R}` : T;
type Head<T extends string> = T extends `${infer R}${infer _}` ? R : T;
type Tail<T extends string> = Head<Reverse<T>>;

type Slice<T extends string, U extends number, R extends string = ''> = {
	finish: Reverse<R>;
	skip: Slice<Tail<T>, Dec<S>, E>;
	insert: Slice<Tail<T>, S, Dec<E>, Unshift<R, Head<T>>>;
};

type Slice1 = Slice<'12345', 2>; // expected to be '345'
type Head1 = Head<'12345'>; // expected to be '1'
type Tail1 = Tail<'12345'>; // expected to be '2345'
type Reverse1 = Reverse<'12345'>; // expected to be '54321'
