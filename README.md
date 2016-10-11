# Subaru

![Subaru][ref-gif-1]

Subaru is a simple app to make full-width strings from normal text.

It aims to be the easiest and fastest ａｅｓｔｈｅｔｉｃｉｚｅｒ available.

## Features

### Small size

> Internet cepat buat apa? -- [*Tifatul Sembiring*][internet-cepat]

Clocked in at just 55 KB, Subaru loads fast under the awfully slow Indonesian internet connections. We just want to ａｅｓｔｈｅｔｉｃｉｚｅ texts, so it has to load quickly.

Of course, it could be smaller, but we want to keep it ａｅｓｔｈｅｔｉｃ.

### Type straight from address bar

Don't waste time to type the string; insert it right from the address bar.

Try it: https://subaru.tkesgar.com/memes

### Clipboard support

If you copied the string, you don't even have to type the string.

1. Open https://subaru.tkesgar.com
2. `Ctrl-V`
3. `Ctrl-C`
4. Magic.

Note that this requires compatible browsers; unless you are still using Internet Explorer, you should be fine.

## Running locally

You need `node` and `npm` installed on your computer.

1. Clone the Github repository at `https://github.com/tkesgar/subaru`.
2. Navigate to the repository folder.
3. Run `npm install --production` to install required dependencies.
4. Run `npm start` to start the server. By default, it runs on port 8080; change it by declaring `PORT` environment variable.

## Subaru who?

From [Mayo Chiki!][ref-wiki]. Simply the cutest reverse trap ever.

![Smile I want to protect][ref-gif-2]

## Contributing

Feel free to submit issues, bugs, and pull requests at [GitHub][repo].

## License

Licensed under [MIT License](LICENSE).

[repo]: https://github.com/tkesgar/subaru
[ref-wiki]: https://en.wikipedia.org/wiki/Mayo_Chiki!
[ref-gif-1]: https://s-media-cache-ak0.pinimg.com/originals/b2/ed/b2/b2edb29a1c78a6323054209de3d54263.gif
[ref-gif-2]: https://66.media.tumblr.com/tumblr_lrz3appfYo1qgems8o1_500.gif
[internet-cepat]: http://tekno.kompas.com/read/2014/01/30/1512510/Menkominfo.Kalau.Internetnya.Cepat.Mau.Dipakai.buat.Apa.
[clipboard]: https://github.com/zenorocha/clipboard.js
