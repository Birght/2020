<template>
  <div>
    <h2>Vue与React区别</h2>
    <div class="doc_block">
      React和vue有许多相似之处，它们都有
      <ul>
        <li>
          <details>
            <summary>使用Virtual Dom</summary>
            虚拟DOM，代表了DOM的虚拟对象树。例如：它不是创建ul元素的实际DIV元素，而是创建包含了某个后缀名的.div的对象，它可以飞创迅速
            的操作这些对象，而无需去真正的控制DOM或DOM
            API，然后，当它呈现组件时，它使用虚拟DOM找到需要实现的真实DOM，然后进行匹配。
            你可以将虚拟DOM视为一个蓝图，它包含构造DOM所需要的所有细节，但是由于它不需要进入DOM的所有重量级部件，因此可以轻易操作它
          </details>
        </li>
        <li>提供了响应式(Reactive)和组件化的(Compasable)的视图组件</li>
        <li>
          将注意力集中保持在核心库，而将其他功能如路由和全局状态交给相关的库
        </li>
      </ul>
      <p>
        由于有着众多的相似处，我们会用更多的时间在这一块进行比较。这里我们不只保证技术内容的准确性，
        同时也兼顾了平衡的考量。我们需要承认 React 比 Vue
        更好的地方，比如更丰富的生态系统。
      </p>
    </div>

    <h2>运行时性能</h2>
    <div class="doc_block">
      优化

      <p>
        在 React
        应用中，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树。
        如要避免不必要的子组件的重渲染，你需要在所有可能的地方使用
        PureComponent，或是手动实现 shouldComponentUpdate
        方法。同时你可能会需要使用不可变的数据结构来使得你的组件更容易被优化。
        然而，使用 PureComponent 和 shouldComponentUpdate
        时，需要保证该组件的整个子树的渲染输出都是由该组件的 props
        所决定的。如果不符合这个情况，那么此类优化就会导致难以察觉的渲染结果不一致。这使得
        React 中的组件优化伴随着相当的心智负担。 在 Vue
        应用中，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。你可以理解为每一个组件都已经自动获得了
        shouldComponentUpdate，并且没有上述的子树问题限制。 Vue
        的这个特点使得开发者不再需要考虑此类优化，从而能够更好地专注于应用本身。
      </p>
    </div>

    <h2>HTML & CSS</h2>
    <div class="doc_block">
      <p>
        在 React 中，一切都是 JavaScript。不仅仅是 HTML 可以用 JSX
        来表达，现在的潮流也越来越多地将 CSS 也纳入到 JavaScript
        中来处理。这类方案有其优点，但也存在一些不是每个开发者都能接受的取舍。
        Vue 的整体思想是拥抱经典的 Web
        技术，并在其上进行扩展。我们下面会详细分析一下。 JSX vs Templates 在
        React 中，所有的组件的渲染功能都依靠 JSX。JSX 是使用 XML 语法编写
        JavaScript 的一种语法糖。 使用 JSX 的渲染函数有下面这些优势：
        你可以使用完整的编程语言 JavaScript
        功能来构建你的视图页面。比如你可以使用临时变量、JS
        自带的流程控制、以及直接引用当前 JS 作用域中的值等等。 开发工具对 JSX
        的支持相比于现有可用的其他 Vue 模板还是比较先进的
        (比如，linting、类型检查、编辑器的自动完成)。 事实上 Vue
        也提供了渲染函数，甚至支持
        JSX。然而，我们默认推荐的还是模板。任何合乎规范的 HTML 都是合法的 Vue
        模板，这也带来了一些特有的优势： 对于很多习惯了 HTML
        的开发者来说，模板比起 JSX
        读写起来更自然。这里当然有主观偏好的成分，但如果这种区别会导致开发效率的提升，那么它就有客观的价值存在。
        基于 HTML 的模板使得将已有的应用逐步迁移到 Vue 更为容易。
        这也使得设计师和新人开发者更容易理解和参与到项目中。
        你甚至可以使用其他模板预处理器，比如 Pug 来书写 Vue 的模板。
        有些开发者认为模板意味着需要学习额外的 DSL (Domain-Specific Language
        领域特定语言) 才能进行开发——我们认为这种区别是比较肤浅的。首先，JSX
        并不是没有学习成本的——它是基于 JS 之上的一套额外语法。同时，正如同熟悉
        JS 的人学习 JSX 会很容易一样，熟悉 HTML 的人学习 Vue
        的模板语法也是很容易的。最后，DSL
        的存在使得我们可以让开发者用更少的代码做更多的事，比如 v-on
        的各种修饰符，在 JSX 中实现对应的功能会需要多得多的代码。
        更抽象一点来看，我们可以把组件区分为两类：一类是偏视图表现的
        (presentational)，一类则是偏逻辑的
        (logical)。我们推荐在前者中使用模板，在后者中使用 JSX
        或渲染函数。这两类组件的比例会根据应用类型的不同有所变化，但整体来说我们发现表现类的组件远远多于逻辑类组件。
      </p>
    </div>
    <h2>疑惑</h2>
    <el-collapse>
      <el-collapse-item title="前后端分离问题" name="1">
        <div>
          1、该网站前端变化远比后端变化频繁 <br />
          2、该网站尚处于原始开发模式，数据逻辑与表现逻辑混杂不清<br />
          3、该网站前端团队和后端团队分属两个领导班子，技能点差异很大<br />
          4、该网站前端效果绚丽/跨设备兼容要求高<br /><br />
          这些建议是很有意义的分工
          前端只需要关注页面的样式与动态数据的解析&渲染，而后端专注于具体业务逻辑。
        </div>
      </el-collapse-item>
      <el-collapse-item title="打包工具" name="2">
        <div>gulp打包，jq+boostrap+gulp</div>
        <p>
          通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs
          模块、AMD 模块、ES6 模块、CSS、图片等。
          它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。
          还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。它定位是模块打包器，而
          Gulp/Grunt 属于构建工具 立即调用函数表达式(IIFE)
        </p>
      </el-collapse-item>
      <el-collapse-item title="跨域" name="3">
        <div>
          现象一: No 'Access-Control-Allow-Origin' header is present on the
          requested resource,并且The response had HTTP status code 404
        </div>
        解决方案: 后端允许options请求。
        <br />
        <p>
          现象二：No 'Access-Control-Allow-Origin' header is present on the requested resource, 并且The response had HTTP status code 405
          后端关闭对应的安全配置。
        </p>
        <br>
        现象三: No 'Access-Control-Allow-Origin' header is present on the requested resource,并且status 200
        <p>
        解决方案: 后端增加对应的头部支持。
        </p>
        <br>
        现象四: heade contains multiple values '*,*'
        解决方案（一一对应）: 建议删除代码中手动添加的*，只用项目配置中的即可；
      </el-collapse-item>
      <el-collapse-item title="src---herf" name="4">
        <div>
          它们之间的主要区别可以用这样一句话来概括：src用于替代这个元素，而href用于建立这个标签与外部资源之间的关系。
        </div>
      </el-collapse-item>
      <el-collapse-item title="页面请求数据放在哪个生命周期里" name="5">
        <div>
          单纯请求数据，created,需要页面元素加载完成，就mounted
          对于作为子组件被调用的组件里，异步请求应当在mounted里调用，因为这个时候子组件可能需要涉及到对dom的操作；
          对于页面级组件，当我们需要使用ssr（服务端渲染）的时候，只有created是可用的，所以这个时候请求数据只能用它；
          对于页面级组件， 当我们做异步操作时，涉及到要访问dom的操作，我们仍旧只能使用mounted;
          对于一般情况，created和mounted都是可以的；
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<style lang="scss" scoped>
.doc_block {
  padding: 20px;
  width: 60%;
  word-wrap: break-word;
  word-break: break-all;
  background: #d9e2ea;
}
</style>
