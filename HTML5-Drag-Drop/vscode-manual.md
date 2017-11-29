# VS Code Manual



## command-line

https://code.visualstudio.com/docs/editor/command-line



```sh

# Sometimes you will want to open or create a file.
# If the specified file does not exist, VS Code will create them for you:

$ code index.html style.css readme.md

```


## Node.js

https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
https://code.visualstudio.com/docs/nodejs/nodejs-debugging
https://code.visualstudio.com/tutorials/nodejs-deployment/getting-started

https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
https://code.visualstudio.com/docs/nodejs/angular-tutorial

https://code.visualstudio.com/docs/nodejs/debugging-recipes
https://code.visualstudio.com/docs/nodejs/extensions


# tips-and-tricks

https://code.visualstudio.com/docs/getstarted/tips-and-tricks#vscode

https://code.visualstudio.com/docs/editor/codebasics

https://code.visualstudio.com/docs/getstarted/userinterface


## CLI

```sh

# open code with current directory
code .

# open the current directory in the most recently used code window
code -r .

# create a new window
code -n

# change the language
code --locale=es

# open diff editor
code --diff <file1> <file2>

# open file at specific line and column <file:line[:character]>
code --goto package.json:10:5

# see help options
code --help

# disable all extensions
code --disable-extensions .

```


## Terminal

> Mastering VS Code's Terminal


http://www.growingwiththeweb.com/2017/03/mastering-vscodes-terminal.html

https://code.visualstudio.com/docs/editor/integrated-terminal


## Zen Mode

Keyboard Shortcut: Ctrl+K Z

1. Ctrl+K
2. Z


## Side by side editing


Keyboard Shortcut: Ctrl+\



## Switch between editors


Keyboard Shortcut: Ctrl+1, Ctrl+2, Ctrl+3


## Editing Hacks

Ctrl+K Ctrl+M

@recommended:keymaps


## Multi cursor selection

Keyboard Shortcut: Ctrl+Alt+Up / Ctrl+Alt+Down

https://code.visualstudio.com/docs/getstarted/settings
https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier


??? subl ??? Alt + F3

## Join line

Keyboard Shortcut: unassigned

1. Keyboard Shortcuts (Ctrl+K Ctrl+S)
2. bind editor.action.joinLines

## Copy line up / down

Keyboard Shortcut: Shift+Alt+Up / Shift+Alt+Down

## Shrink / expand selection

Keyboard Shortcut: Shift+Alt+Left / Shift+Alt+Right

## Go to Symbol in File

Keyboard Shortcut: Ctrl+Shift+O

You can group the symbols by kind by adding a colon, @:.


## Go to Symbol in Workspace

Keyboard Shortcut: Ctrl+T


## Navigate to a specific line

Keyboard Shortcut: Ctrl+G


## Move line up and down
Keyboard Shortcut: Alt+Up or Alt+Down

## Trim trailing whitespace
Keyboard Shortcut: Ctrl+K Ctrl+X


## Code formatting#
Currently selected source code: Ctrl+K Ctrl+F

Whole document format: Shift+Alt+F

## Code folding
Keyboard Shortcut: Ctrl+Shift+[ and Ctrl+Shift+]


## Select current line
Keyboard Shortcut: Ctrl+I


## Navigate to beginning and end of file
Keyboard Shortcut: Ctrl+Home and Ctrl+End



## Open Markdown Preview

In a Markdown file, use

Keyboard Shortcut: Ctrl+Shift+V


## Side by Side Markdown Edit and Preview

In a Markdown file, use

Keyboard Shortcut: Ctrl+K V === Ctrl+\ Ctrl+Shift+V

Special bonus: The preview will now sync.


## IntelliSense

Ctrl+Space to trigger the Suggestions widget.

## Peek

Select a symbol then type Ctrl+Shift+F12.
Alternatively, you can use the context menu.


## Go to Definition

Select a symbol then type F12.
Alternatively, you can use the context menu or Ctrl+click (Cmd+click on macOS).


## Find All References

Select a symbol then type Shift+F12. Alternatively, you can use the context menu.


## Rename Symbol

Select a symbol then type F2. Alternatively, you can use the context menu.



## VS Code ESLint extension

> .eslintrc.json

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

https://eslint.org/docs/user-guide/configuring


```json

{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "classes": true,
            "defaultParams": true
        }
    },
    "rules": {
        "no-const-assign": 1,
        "no-extra-semi": 0,
        "semi": 0,
        "no-fallthrough": 0,
        "no-empty": 0,
        "no-mixed-spaces-and-tabs": 0,
        "no-redeclare": 0,
        "no-this-before-super": 1,
        "no-undef": 1,
        "no-unreachable": 1,
        "no-use-before-define": 0,
        "constructor-super": 1,
        "curly": 0,
        "eqeqeq": 0,
        "func-names": 0,
        "valid-typeof": 1
    }
}

```


## Emmet syntax

https://code.visualstudio.com/docs/editor/emmet



## Snippets

Create custom snippets

https://code.visualstudio.com/docs/editor/userdefinedsnippets

File > Preferences > User Snippets, select the language, and create a snippet.


```js

"create component": {
    "prefix": "component",
    "body": [
        "class $1 extends React.Component {",
        "",
        "\trender() {",
        "\t\treturn ($2);",
        "\t}",
        "",
        "}"
    ]
},

```

## Git integration

Keyboard Shortcut: Ctrl+Shift+G

Setup VS Code as default merge tool

```sh

$ git config --global merge.tool code

```

## Debugging

> launch.json


https://code.visualstudio.com/docs/editor/debugging


## Task Runner

Auto detect tasks

> task.json

```json

{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "type": "npm",
            "script": "install",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}


```

## Insiders builds


https://code.visualstudio.com/insiders/

https://code.visualstudio.com/docs/?dv=win&build=insiders

https://go.microsoft.com/fwlink/?Linkid=852155

https://go.microsoft.com/fwlink/?LinkId=808081



https://stackoverflow.com/questions/tagged/visual-studio-code


https://twitter.com/code
https://github.com/Microsoft/vscode/issues
https://www.youtube.com/channel/UCs5Y5_7XK8HLDX0SLNwkd3w


👋Want to submit an issue to Microsoft/vscode?


https://github.com/Microsoft/vscode/blob/master/CONTRIBUTING.md
https://github.com/Microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22
https://github.com/Microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22

























