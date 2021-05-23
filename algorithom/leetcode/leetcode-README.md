# Unit testing
## install jest
`npm install jest -g`
## create jest.config.js under the root folder of project
`module.exports = { verbose: true };`
## Add export in original js file
`module.exports = findMedianSortedArrays;`
## create spec.js
`func = require('./your_original_file')`;
`describe and it`
## click for the break point
## select vscode-jest-test in the debug dropdown
## click debug button inside of spec.js file
It should stop at your breakpoint inside of VScode
_disableOptimisticBPs=true in vscode-jest-tests config.
##manually run
bash-3.2$  env CI=vscode-jest-tests /usr/local/bin/node --inspect-brk=25891 node_modules/jest/bin/jest.js --runInBand 4.median-of-two-sorted-arrays.spec.js --testNamePattern findMedianSortedArrays 


node --inspect /usr/local/bin/jest --runInBand 4.median-of-two-sorted-arrays.spec.js 

## test single file
`jest test 2.add-two-numbers.spec.js`

## debug
The debug config already setu pinside of ./vscode/launch.json
Setup break point in an js file (source code or spec.js file)
Click the debug button on left nav, and select vscode-jest-tests
Then run it, cursor should stop at the break point for testing.

## leetcode cli commands
[https://github.com/skygragon/leetcode-cli](https://github.com/skygragon/leetcode-cli)
###
Read help first                         $ leetcode help
Login with your leetcode account        $ leetcode user -l
Browse all questions                    $ leetcode list
Choose one question                     $ leetcode show 1 -g -l cpp
Coding it!
Run test(s) and pray...                 $ leetcode test ./two-sum.cpp -t '[3,2,4]\n7'
Submit final solution!                  $ leetcode submit ./two-sum.cpp
