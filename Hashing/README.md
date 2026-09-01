# Hashing

## Problems

- [x] Contains Duplicate
- [x] Valid Anagram
- [x] Two Sum
- [ ] Group Anagrams
- [x] Top K Frequent Elements
- [ ] Longest Consecutive Sequence

## Patterns Learned

- HashMap
- HashSet
- Frequency Counter
- Lookup Table
- Bucket Sort

## Common Time Complexities

- Lookup → O(1) average
- Insert → O(1) average
- Delete → O(1) average

## Mistakes

- Initially mixed Object syntax with Map syntax.
- Learned the difference between Map and Set.
- Initially confused `Map.get()` with checking whether a key exists; learned to use `Map.has()` for key existence.
- Learned that `0`, `""`, `null`, `undefined`, and `false` are falsy values in JavaScript.
- Initially thought nested loops automatically mean O(n²).
- Learned that nested loops can still be O(n) when the inner work is collectively limited to O(n), as in Bucket Sort.

## Key Learning

### Bucket Sort – Top K Frequent Elements

Nested loops do not automatically mean O(n²).

For the bucket approach:

- Outer bucket traversal → O(n)
- Inner bucket traversal collectively → O(n)
- Total → O(n)

Each unique element is processed at most once across all buckets.