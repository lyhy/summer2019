# Udemy class
https://paloaltonetworks.udemy.com/course/webpack-from-beginner-to-advanced/learn/lecture/10916988#overview

# npm init
```shell
npm init -y  //to create package.json
npm install webpack webpack-cli --save-dev //install webpack core and command script
npx webpack //remove multiple js, add export, import, to let webpack hadle all
npx webpack --stats detailed
//create webpack.config.js with entry, output using path for relative path
//"build": "webpack" in package.json
//in webpack.config.js, module.rules array to have differnt rule
//asset/resource rule to load static resource as external file
{type: 'asset/resourcetype: 'asset/resource'' //external
{type: 'asset/inline: 'asset/resource'' //inline
{type: 'asset/inline: 'asset'' //inline for size < 8kb, external for size > 8kb, 8kb is also customizable
{
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            }

	image file will be bundled into a new file, and src will add full path to it (same as publicPath: 'auto') the default setting
	publicPath: './dist', the relative path is more convenient

//loader



//eslint
npm install eslint --save-dev

mode: 'none', 'development', 'production'
development has better debug
npm run dev   //dev script without css min, and js min to speed up

writeToDisk: true// default is to write file in memory, dist folder is empty
```