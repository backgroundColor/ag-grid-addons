React Component Boilerplate
===========================
#1.组件
###ControllBtn，DateFormat， PageNumChange， SearchFilter， TagCellRender， TipTemplate， TopPageChange, CopyOrClick, TableResize, EditCell, StopEdit（待续...）
### EditCell， StopEdit
使用方法



    一般配合ControllBtn使用
	eg:在ControllBtn参数data
	const data = [
          {innerHTML: '修改', href: 'javascript:;', onclick: (function (params) {
            const currentVal = EditCell(params, 'projName')
            console.log(currentVal)
          }).bind(this)},
          {innerHTML: '取消', href: 'javascript:;', onclick: function (params) {
            StopEdit(params, 'projName', 'test')
          }}
		  EditCell 第二个参数代表要修改的列的field值，点击修改按钮则修改了按钮所在行的projName列对应的cell，且EditCell返回当前修改的cell的内容
		  StopEdit 停止修改，第二个参数和EditCell的第二个参赛意义一样，第三个参数可传可不传，如传，表示停止编辑后，当前的cell显示的内容
###ControllBtn:
 使用方法：


     import { ControllBtn } from 'ag-grid-addons'
    在columnDefs中cellRender： function (params) {
      return ControllBtn(params, data)
    }
    eg: data = [
      {innerHTML: 'test1', href: 'javascript:;', onclick: function () { console.log(1111) }},
      {innerHTML: 'test2', href: 'javascript:;', onclick: function () { console.log(222) }}
    ]
    btn的载体为a标签，所以其中定义的属性为a标签的属性
###DateFormat:
  使用方法：
   ```javascript
  import { DateFormat } from 'ag-grid-addons'
     在columnDefs中cellRender： DateFormat（待优化）
     依赖moment.js
```
###PageNumChange:
   使用方法：


    import { PageNumChange } from 'ag-grid-addons'
          此为改变ag-grid表格的显示条数的组件
          eg: <PageNumChange pagesize={[10, 20, 50]} onChange={this.onChange} />

          pagesize为一个数组，数组的第一元素为默认选择
          onChange回调，获取的为当前选择的value
###SearchFilter:
  使用方法：


    import { SearchFilter } from 'ag-grid-addons'
         在columnDefs中filter： SearchFilter

         为k2自定义的搜索组件，目前不支持后台过滤（后期添加）
###TagCellRender:
 使用方法：


    import { TagCellRender } from 'ag-grid-addons'
        在columnDefs中cellRender： function (params) {
          return TagCellRender(params, callback)
        }
        eg: callback = (value) => {
          console.log(value)
        }
        注意： 须在表格中展示的数据，即params.value为数组，
        可将其元素展示为标签，并支持Ctrl + click选中，并返回一个选中标签的内容的
        数组，支持翻页后返回仍被选中的状态。
###TipTemplate:
  使用方法：


     import { TipTemplate } from 'ag-grid-addons'
         在columnDefs中cellRender： function (params) {
           return TipTemplate(params, callback)
         }
         eg: callback = (params) => {
           let tips = {}
           if ((params.rowIndex % 2) === 0) {
             tips.type = 'success'
           } else if ((params.rowIndex % 3) === 0){
             tips.type = 'warning'
           } else if ((params.rowIndex % 5) === 0){
             tips.type = 'error'
           } else {
             tips.type = 'fail'
           }
           tips.message = params.value
           tips.value = params.value
           return tips
         }
         注意：设置提示信息和提示类型 必须return一个数据， 数据格式{type:'success|fail|error|waring|info', message: 'sss', value: 'test'}
###CopyOrClick:
 使用方法：


    import { CopyOrClick } from 'ag-grid-addons'
        在所用组件中的constructor () {
          super()
          this.CopyOrClick = CopyOrClick.bind(this)
        }
        eg: onGridReady (params) {
          this.api = params.api
          this.columnApi = params.columnApi
          this.CopyOrClick(this.rowClick)
        }
        作用：用于ag-grid行单击发生跳转所用，单击跳转，滑动复制表格内容时不执行click

###TableResize:
使用方法：


     import { TableResize } from 'ag-grid-addons'
       在所用组件中的constructor () {
         super()
         this.TableResize = TableResize.bind(this)
       }
       eg: onGridReady (params) {
         this.api = params.api
         this.columnApi = params.columnApi
         this.TableResize()
       }
       作用：用于ag-grid在改变浏览器大小时自适应，前提条件是ag-grid的gridOption设置enableColResize=true,且columnDefs中的不是所有列都包含suppressSizeToFit：true，
       如果需要在ag-grid加载时就进行自适应，请在gridOption中设置
       onModelUpdated: () => {
         if (this.api) {
           this.api.sizeColumnsToFit()
         }
       }
###(未完，待续....)
[![Build Status](https://travis-ci.org/olegakbarov/react-component-boilerplate.svg?branch=master)](https://travis-ci.org/olegakbarov/react-component-boilerplate)
[![Dependency Status](https://img.shields.io/david/olegakbarov/react-component-boilerplate.svg)](https://david-dm.org/olegakbarov/react-component-boilerplate)
[![devDependency Status](https://img.shields.io/david/dev/strongloop/express.svg?maxAge=2592000)](https://david-dm.org/olegakbarov/react-component-boilerplate?dev=true)

Minimal [React](https://facebook.github.io/react/) component boilerplate with [Babel 6](http://babeljs.io/), [Webpack](https://webpack.github.io/), hot module replacement via [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform), [Flow](http://flowtype.org/), tests with [Tape](https://github.com/substack/tape) and `eslint`-friendly.

Inspired by Dan Abramov's [library boilerplate](https://github.com/gaearon/library-boilerplate)

### How-to

`$ npm install`

`$ npm run dev`

navigate to `localhost:8080`

### Considerations

You might want to tune `.babelrc` and `webpack.config` based on your needs.


### Why's

- Why not to use npm scripts over webpack CLI to run a dev server? — [that's why](https://github.com/webpack/webpack-dev-server/issues/106)

- Why so fancy import works `import Component from Component`? — checkout the aliases in webpack config.

### Anything?

Feedback appreciated!
