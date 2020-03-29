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