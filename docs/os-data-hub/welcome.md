---
id: welcome
title: Welcome
slug: /
---


Welcome to the OS Data Hub documentation.

This demo site simply is meant to showcase what is possible using a static site generator. We used [Docusaurus](https://v2.docusaurus.io/) for this demo.

**Benefits:**
- Documentation is built directly from a [Github repository](https://github.com/johnx25bd/os-data-hub-documentation). Here, Github acts as a Content Management System. History is automatically captured. Anyone can edit or suggest changes. If configured properly, updates can be deployed instantly.  
- Documentation is written and stored in [Markdown](https://www.markdownguide.org/), readable by both humans and machines. 
- Sophisticated interactivity can easily be built into pages using React and [MDX](https://mdxjs.com/). 
- Site-wide styling and customization is easy using component-driven development.
- This demo was put together in about 5 hours - and the developer had never used Docusaurus. 
- Strong search functionality available via [Algolia DocSearch](https://docsearch.algolia.com/) once documentation is complete.
- Examples: [Redux](https://redux.js.org/introduction/getting-started), 

:::warning

This is purely a demo site - content is **not** accurate. Also, it won't work on Internet Explorer 11. You'll notice lots of design quirks because this has not be thoroughly designed - that comes next.

:::

If you'd like to clone this repo, run it on your local machine, and develop new features - you can! You'll need [NodeJS installed](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/).

In Terminal on Mac, or :

```bash
git clone git@github.com:johnx25bd/os-data-hub-documentation.git
cd os-data-hub-documentation
npm install
npm run start
```

And that's it! You should have the site running on `http://localhost:3000/`



## Markdown Syntax

You can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

To serve as an example page when styling markdown based Docusaurus sites.

## Headers

# H1 - Create the best documentation

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

---


## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---

## Lists

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

* Unordered list can use asterisks

- Or minuses

+ Or pluses

---

## Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

![img](../../static/img/logo.svg)

---

## Code

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::