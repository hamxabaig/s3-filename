# s3-filename [![Build Status](https://travis-ci.com/hamxabaig/s3-filename.svg?branch=master)](https://travis-ci.com/hamxabaig/s3-filename)

> A helper to make your s3 filenames sane. :innocent: <br>
>  Convert this `some  漢字 ćööł %  #fíłéñàmé.jpg` into this `some-cool-filename.jpg`

## Use Case

Uploading files from client side is part of every software project. But the filenames can be very annoying sometimes which creates many issues especially if you're saving them. S3 bucket keys has some [policy](https://stackoverflow.com/a/30575074/4734107) about this which if not followed can make your file inaccessible because of invalid keys.


## Install

```
$ npm install s3-filename
```


## Usage

```js
const s3Filename = require('s3-filename');

s3Filename('some  漢字 ćööł %  #fíłéñàmé.jpg', {separator: '_'});
//=> 'some_cool_filename.jpg'
```


## API

### s3Filename(filename, [options])

#### filename

Type: `string`


#### options

Type: `Object`

##### separator

Type: `string`<br>
Default: `-`

A separator to use when whitespaces are found. The library will collapse all whitespaces to 1 whitespace per group of whitespaces.


## License

MIT © Made with :heart: & :coffee: by [Hamza Baig](http://hamxabaig.github.io)

