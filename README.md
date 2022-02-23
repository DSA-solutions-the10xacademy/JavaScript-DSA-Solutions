1. [Title for a Pull Request](#title-for-a-pull-request)
2. [Naming of files and folders](#naming-of-files-and-folders)
3. [Coding conventions](#coding-conventions)

### Title for a Pull Request
- Convention
    - `<Topic name> - <Problem title>`
    - `<Topic name>` is the section name under which this problem will appear on 10x platform. You can get this from the engineering team.
- Examples
    - `Arithmetic - Simple interest`
    - `Control Flow - Predict the quadrant`

### Naming of files and folders
- Use only a hyphen as a delimiter
    - Incorrect - `binary_trees`
    - Correct - `binary-trees`
- Use only lower case letters
    - Incorrect - `Anti-Diagonals`
    - Correct - `anti-diagonals`
- Folder hierarchy
    - `solutions/<topic>/<problem-name>.js`
    - `<topic>` is the section name under which this problem will appear on 10x platform. You can get this from the engineering team.
    - e.g. `solutions/control-flow/predict-the-quadrant.js`

### Coding conventions
- Use meaningful and readable names
    - `numTests` instead of `t`
    - `index` instead of `i`
- Do NOT use single alphabet names
- Use `camelCase` for the names of variables and functions
- Use `PascalCase` for class names
- Use a space around binary operators like `=`, `-` etc
    - Incorrect - `a=b`, `x=y+2`, `return myList[index+1]`
    - Correct - `a = b`, `x = y + 2`, `return myList[index + 1]`
- Use a space after a comma `,`
    - Incorrect - `range(start,end)`
    - Correct - `range(start, end)`
