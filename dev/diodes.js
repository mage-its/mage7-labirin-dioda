const diodesDir = [
//  [0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18
// 19 20 21 22 23 24 25]
// 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, R, 0, R, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, U, 0, D, 0, D, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 2
    [0, 0, 0, 0, 0, 0, 0, 0, L, 0, R, 0, R, 0, R, 0, R, 0, R, 0, 0, 0, 0, 0, 0, 0],
// 3
    [0, 0, 0, 0, 0, 0, 0, U, 0, D, 0, D, 0, D, 0, D, 0, D, 0, D, 0, 0, 0, 0, 0, 0],
// 4
    [0, 0, 0, 0, R, 0, R, 0, R, 0, R, 0, R, 0, R, 0, R, 0, L, 0, R, 0, 0, 0, 0, 0],
// 5
    [0, 0, 0, 0, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, D, 0, D, 0, D, 0, 0, 0, 0],
// 6
    [0, 0, 0, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0, R, 0, R, 0, L, 0, L, 0, 0, 0],
// 7
    [0, 0, 0, D, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, D, 0, D, 0, D, 0, 0],
// 8
    [0, 0, 0, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0, 0, 0],
// 9
    [0, 0, 0, D, 0, D, 0, D, 0, D, 0, D, 0, D, 0, D, 0, U, 0, D, 0, D, 0, D, 0, 0],
// 10
    [0, 0, L, 0, L, 0, R, 0, R, 0, R, 0, R, 0, L, 0, R, 0, R, 0, L, 0, L, 0, R, 0],
// 11
    [0, D, 0, U, 0, D, 0, U, 0, D, 0, D, 0, D, 0, U, 0, D, 0, D, 0, D, 0, D, 0, D],
// 12
    [0, 0, L, 0, R, 0, R, 0, R, 0, L, 0, L, 0, R, 0, R, 0, L, 0, L, 0, L, 0, L, 0],
// 13
    [0, D, 0, D, 0, D, 0, U, 0, U, 0, U, 0, D, 0, D, 0, U, 0, D, 0, D, 0, D, 0, D],
// 14
    [0, 0, R, 0, L, 0, R, 0, L, 0, R, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0, L, 0],
// 15
    [0, 0, 0, D, 0, D, 0, U, 0, U, 0, U, 0, U, 0, U, 0, U, 0, D, 0, U, 0, D, 0, 0],
// 16
    [0, 0, 0, 0, L, 0, R, 0, R, 0, L, 0, L, 0, R, 0, L, 0, L, 0, L, 0, L, 0, 0, 0],
// 17
    [0, 0, 0, D, 0, D, 0, D, 0, U, 0, U, 0, U, 0, D, 0, U, 0, U, 0, D, 0, D, 0, 0],
// 18
    [0, 0, 0, 0, R, 0, L, 0, R, 0, R, 0, R, 0, L, 0, L, 0, R, 0, R, 0, L, 0, 0, 0],
// 19
    [0, 0, 0, 0, 0, D, 0, D, 0, D, 0, D, 0, U, 0, U, 0, U, 0, D, 0, D, 0, 0, 0, 0],
// 20
    [0, 0, 0, 0, 0, 0, R, 0, R, 0, L, 0, R, 0, R, 0, R, 0, R, 0, R, 0, R, 0, 0, 0],
// 21
    [0, 0, 0, 0, 0, 0, 0, U, 0, D, 0, D, 0, D, 0, D, 0, D, 0, U, 0, 0, 0, 0, 0, 0],
// 22
    [0, 0, 0, 0, 0, 0, 0, 0, L, 0, R, 0, R, 0, R, 0, R, 0, R, 0, 0, 0, 0, 0, 0, 0],
// 23
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, D, 0, D, 0, D, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 24
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, R, 0, R, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]