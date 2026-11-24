# One-Sentence Absurd Invention Pitch

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![entry](https://img.shields.io/badge/entry-one%20sentence-green)](https://make.fun)
[![license](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

One sentence pitching a ridiculous invention that fixes a tiny everyday
annoyance — for the
[One-Sentence Absurd Invention Pitch](https://make.fun/c/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
bounty on make.fun.

## The pitch

> A GPS tag sewn into every sock that, the moment its partner vanishes in the
> wash, dispatches a miniature search-and-rescue drone to reunite the pair
> before laundry day ends.

## How it works

`main.ts` writes the pitch to `/output/entry.txt` (173 characters, inside the
220-character gate). The annoyance is the sock that loses its partner in the
wash; the invention is a GPS tag in every sock; the silly mechanism is a
miniature search-and-rescue drone dispatched to reunite the pair. The laugh
comes from the invention itself — a full rescue operation for one sock — not
from a joke bolted on at the end.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
