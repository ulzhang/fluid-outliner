(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{605:function(e){e.exports={name:"@fluid-notion/fluid-outliner",version:"0.0.1",description:"Open source web based outliner",author:"Lorefnon <lorefnon@gmail.com>",license:"GPL-3.0",private:!1,publishConfig:{access:"public"},files:["dist-tsc","dist-webpack"],bin:{"fluid-outliner":"./dist-tsc/server/index.js"},scripts:{start:"./dist-tsc/server/index.js",test:"jest","copy-public":"mkdir -p dist-webpack && cp -r ./public/* dist-webpack","build-server":"tsc","build-client":"webpack --config webpack.config.ts",build:"yarn run build-server && yarn run build-client && yarn run copy-public","webpack-dev-server":"webpack-dev-server",prettier:"prettier --write ./**/*.{ts,tsx}",tslint:"tslint -p .",prepublish:"yarn run tslint && yarn run build",clean:"rimraf dist*",burmthemall:"yarn run clean && rimraf node_modules",deploy:"yarn run clean && yarn run build && node ./scripts/deploy"},devDependencies:{"@material-ui/core":"^1.2.1","@material-ui/icons":"^1.1.0","@types/debug":"^0.0.30","@types/expect-puppeteer":"^2.2.2","@types/express":"^4.16.0","@types/file-saver":"^1.3.0","@types/html-webpack-plugin":"^2.30.3","@types/jest":"^23.0.2","@types/lodash":"^4.14.109","@types/puppeteer":"^1.3.3","@types/ramda":"^0.25.33","@types/react":"^16.3.18","@types/react-custom-scrollbars":"^4.0.4","@types/react-dom":"^16.0.6","@types/react-motion":"^0.0.26","@types/react-truncate":"^2.3.2","@types/showdown":"^1.7.4","@types/simplemde":"^1.11.7","@types/striptags":"^3.1.1","@types/uuid":"^3.4.3","@types/webpack-bundle-analyzer":"^2.9.2","cross-env":"^5.2.0","css-loader":"^0.28.11","dnd-core":"^4.0.5","file-loader":"^1.1.11","file-saver":"^1.3.8","font-awesome":"^4.7.0",fuzzysearch:"^1.0.3","gh-pages":"^1.2.0","html-webpack-plugin":"^3.2.0",jest:"^23.1.0","jest-environment-node":"^22.0.0","jest-puppeteer":"^3.0.1",keycode:"^2.2.0",localforage:"^1.7.1",mobx:"^5.0.3","mobx-react":"^5.2.3","mobx-state-tree":"^2.2.0","offline-plugin":"^5.0.5","outdated-browser-rework":"^2.5.1",prettier:"^1.13.5","prop-types":"^15.0.0",puppeteer:"^1.5.0",ramda:"^0.25.0",react:"^16.4.0","react-async-component":"^2.0.0","react-big-calendar":"^0.19.1","react-custom-scrollbars":"^4.2.1","react-dom":"^16.4.0","react-fa":"^5.0.0","react-hammerjs":"^1.0.1","react-highlight-words":"^0.11.0","react-motion":"^0.5.2","react-octicon":"^3.0.1","react-overlays":"^0.8.3","react-quill":"^1.2.7","react-smooth-dnd":"^0.4.9","react-tiny-virtual-list":"^2.1.4","react-truncate":"^2.3.0",recompose:"^0.27.1",rimraf:"^2.6.2",showdown:"^1.8.6",simplemde:"^1.11.2",striptags:"^3.1.1","style-loader":"^0.21.0","ts-loader":"^4.4.1","ts-node":"^6.1.1",tslint:"^5.10.0","tslint-config-prettier":"^1.13.0",typescript:"^2.9.2",uuid:"^3.2.1",webpack:"^4.12.0","webpack-bundle-analyzer":"^2.13.1","webpack-cli":"^3.0.4","webpack-dashboard":"^2.0.0","webpack-dev-server":"^3.1.4"},dependencies:{"@types/react-overlays":"^0.8.4","@types/react-responsive":"^3.0.1","core-decorators":"^0.20.0",debug:"^3.1.0",express:"^4.16.3","http-server":"^0.11.1",lodash:"^4.17.10","react-responsive":"^4.1.0"}}}}]);