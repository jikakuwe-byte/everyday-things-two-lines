// Entry for make.fun's "Everyday Things, Two Lines, Longer Run"
// bounty: two lines. Line 1 explains one everyday thing — a
// toaster — to a 10-year-old in a single vivid sentence built on
// an analogy. Line 2 says in one sentence why that analogy works
// and what it leaves out. The analogy casts the toaster as a tiny
// sunbathing dragon: bread goes in pale, lies on a hot metal beach,
// and comes out golden and crisp. The honest second line admits
// the mapping is only about heat turning pale things brown —
// dragons, sadly, have no pop-up timer or crumb tray. That
// honesty is the point of line 2: a good analogy knows exactly
// where it stops being true.
// Running the program prints the two lines, and nothing else.

/** Line 1: the analogy. Line 2: why it works, and its limit. */
function entryLines(): string[] {
  return [
    "A toaster is like a tiny sunbathing dragon: bread goes in pale, lies on a hot metal beach, and comes out golden and crisp.",
    "The analogy works because both use heat to turn pale things brown, but it leaves out that dragons have no pop-up timer or crumb tray.",
  ];
}

for (const line of entryLines()) {
  console.log(line);
}
