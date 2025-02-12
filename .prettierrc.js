// @ts-check

/** @type {import("prettier").Config} */
export default {
    trailingComma: "none",
    printWidth: 160, // 自动换行的行长度
    useTabs: false, // 不使用tab，而使用空格
    tabWidth: 4, // 每个tab缩进级别的空格数
    semi: true, // 语句最后又分号
    singleQuote: false, // 使用单引号代替双引号
    jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
    bracketSpacing: true, // 括号与变量之间增加空格
    bracketSameLine: true, // 将多行HTML (HTML、JSX、Vue、Angular)元素的>放在最后一行的末尾，而不是单独放在下一行(不适用于自闭元素), 默认false
    jsxBracketSameLine: false, // 在jsx中bracketSameLine
    arrowParens: "always", // 箭头函数参数周围包含圆括号(只有一个参数也需要)
    vueIndentScriptAndStyle: true // 是否缩进Vue文件中<script>和<style>标签内的代码
};
