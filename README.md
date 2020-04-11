# ScrollJS
by [Sam Sirianni](https://www.samsirianni.com)

ScrollJS is a library written in Javascript.
With ScrollJS you can animate elements on scroll events.
Visit the [ScrollJS website](https://samsirianni.com/scrolljs).

## Installation

### NPM and React

If you want to use ScrollJS with React, open the terminal and type:

```bash
npm i @samsiri/scrolljs --save
```

#### Usage

```javascript
import React, { Component } from 'react';
import scrolljs from '@samsiri/scrolljs';

export default class Index extends Component {
    componentDidMount() {
        scrolljs();  // initialize ScrollJS
    }

    render() {
        return (
            <div>
                <h1 scrolljs="fade-up">Hello World!</h1>
            </div>
        )
    }
}
```

### HTML

If you want to use ScrollJS directly in a HTML page, download the file **index.js** from
[my GitHub repository](https://github.com/samsiriannidev/scrolljs).

#### Usage

```html
<!DOCTYPE html>
<html>
    <body>
        <h1 scrolljs="flip-left">Hello World!</h1>
        <script src="index.js"></script>
    </body>
</html>
```

### ScrollJS attributes
```html
<div scrolljs="type[|duration(ms)|timing-function]"></div>

<!-- Examples -->
<div scrolljs="flip-left|800|ease"></div>
<div scrolljs="fade-up|350"></div>
<div scrolljs="flip-left|750|linear"></div>
```

#### type
- **fade**
- **fade-up**
- **fade-down**
- **fade-left**
- **fade-right**
- **fade-up-left**
- **fade-down-left**
- **fade-down-right**
- **fade-up-right**
- **flip-left**
- **flip-up**
- **flip-right**
- **flip-up-right**
- **flip-down-right**
- **flip-up-left**
- **flip-down-left**
- **flip-down**
- **scale-up**
- **scale-down**

#### duration
Duration represents the transition duration in milliseconds.

#### timing-function
Timing function represents the timing function (Ex. *ease-in*).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)