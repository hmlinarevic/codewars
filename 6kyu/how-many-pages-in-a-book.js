/*
  Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

  Task: Given the summary, find the number of pages n the book has.

  Example
  If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

  Be aware that you'll get enormous books having up to 100.000 pages.

  All inputs will be valid.
*/

const amountOfPages = (summary) => {};

amountOfPages(25); // --> 17
amountOfPages(5); // --> 5

/*

  1 2 3 4 5 6 7 8 9 --> 9
  10 11 12 13 14 15 16 17 18 19 --> 10
  20 21 22 23 24 25 26 27 28 29 --> 10

  1 - 9 -> (9 single)

  10 - 99 -> (89 double)

  100 - 999 -> (899 triple)

  1000 - 9999 -> (8999 quadrouple)


  25 - 9 = 16

  16 - 89 = 73

*/
