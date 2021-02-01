<template>
  <div>
    <h2>架构理解</h2>
    <b> 谈谈你对闭包的理解 </b>
    <el-divider></el-divider>
    <div>
      在js引擎里，每一个函数都有一个隐藏的属性[[scope]],这个属性保存这函数的作用区域链，它本质上是一个集合，
      <br />
      它的每个值引用一个数据的集合，函数中的变量名解析，实质上就是在[[scope]]引用的每一个数据的集合里查找同名的键
      <br />
      如果找到了，就读取这个键对应的值，如果没有，就触发异常
      <br />
      当一个函数被创建的时候，如果这个函数形式上没有父函数，
      则[[Scope]]属性的第一个值会引用当前的全局上下文，
      所有全局变量及其存储的数据都在这个集合里。 此时[[Scope]]属性如下：
      <br />
      [ (Global Context) ]
      <br />
      当一个函数被调用的时候，会创建一个Execute context，即运行时上下文，
      它存储调用该函数的对象，函数的参数数组，函数的局部变量（值还未定义），
      该集合会被压入[[Scope]]属性，此时[[Scope]]属性如下：<br />
      [ <br />
      (Execute context), <br />
      (Global Context) <br />
      ]
      <br />
      当一个函数返回的时候，引擎只是去除[[Scope]]属性中对运行时上下文的引用，
      并没有立即销毁它。 此时运行时上下文没有任何引用了，符合了被销毁的条件，
      在将来的某个时刻会被垃圾收集器销毁。此时[[Scope]]属性如下：<br />
      [ <br />
      (Global Context) <br />
      ]
      <br />
      如果一个函数创建的时候存在父函数会是什么情形：当一个子函数被创建时，
      显然，这个创建是父函数的执行导致的，所以当子函数创建时，
      父函数已经处于执行阶段，所以父函数的执行上下文已经创建了。
      同时，因为子函数也在父函数的局部变量作用域内，所以，
      子函数在创建的时候，除了要引用全局上下文，也需要引用父函数的执行上下文，
      否则子函数就无法访问父函数的局部变量，违背了设计的要求。此时两个函数的[[Scope]]属性如下：<br />
      父函数：<br />
      [ <br />
      (Execute context), <br />
      (Global Context) ] <br>
      子函数：<br />
      [ <br />
      (Execute
      context),//这里引用的是父函数的执行上下文，自身的执行上下文此时还未创建。<br />
      (Global Context)<br />
      ]<br />

      <p>
        当一个子函数执行时，<br />
        因为它同样是函数，所以它同样需要创建自己的执行上下文，<br />
        当它返回的时候，同样也只解除[[Scope]]属性中对自身执行上下文的引用，<br />
        对父函数的执行上下文的引用并没有解除，<br />
        这意味着，父函数的执行上下文与子函数本身共存亡了。<br />
        所以，为什么父函数的局部变量没有被销毁？因为它们所在的执行上下文还被子函数的[[Scope]]属性引用着，<br />
        只要子函数还存在引用，垃圾收集器就不会销毁它们所在的执行上下文。<br />
        注意，因为父函数已经执行完毕了，所以父函数的执行上下文中的局部变量如果有赋值，<br />
        那此时这些变量也已经有了相应的值。另外，因为父函数的局部变量并不在全局上下文中，<br />
        所以它只能在子函数的变量解析中被访问，自然而然就相当于它们是子函数私有的了。<br />
      </p>
    </div>
    <br />
    <br />
    <b>
      如果让你来制作一个访问量很高的大型网站，你会如何来管理所有css、js文件、图片？
    </b>
    <el-divider></el-divider>
    <div>
      （1）遵循自定的一套CSS，JS和图片文件和文件夹命名规范 <br />
      （2）依托采用的前端工程化工具，依照工具脚手架规范 (gulp, webpack,
      grunt,yeoman)<br />
      （3）依据采用的框架规范（Vue, React, jQuery）
    </div>
    <br />
    <br />
    <b> 在选择框架的时候要从哪方面入手 </b>
    <el-divider></el-divider>
    <div>
      影响团队技术选型有很多因素，如技术组成， 新技术，新框架，语言及发布等。
      为了更好的考量不同的因素， 需要列出重要的象限，如开发效率
      团队喜好，依次来决定哪个框架更适合当前的团队和项目。
      上线时间影响框架选择，不要盲目替换现有框架。 jq+boostrap,easyUI+jq
      Angular,ionic React,Vue
    </div>
    <br />
    <br />
    <b> 对Node的优点和缺点提出了自己的看法？ </b>
    <el-divider></el-divider>
    <div>
      *（优点）因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，
      因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
      此外，与Node代理服务器交互的客户端代码是由javascript语言编写的，
      因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。
    </div>

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

    <h2>疑惑</h2>
    <el-collapse>
      <el-collapse-item title="webpack" name="101">
        <div>
          require everything, bundle everything，要什么绑什么。
          从而处理文件的模块依赖与内容转化，为项目预编译模块化提供工具支持。
          功能集成度高 功能完善，持续更新吸收别的项目的优点
          社区活跃，生态链强，便于学习和团队项目中使用
          代码转换，typeScript转换，scss,less，stylus编译css
          文件优化，js,css，html压缩，图片,svg压缩
          代码分割，提取多个页面的公共模块，提取首屏不需要加载的异步加载
          1.plugin
          而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
          2.使用webpack构建本地服务器 webpack 只能理解 JavaScript 和 JSON 文件。
          loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效
          模块，以供应用程序使用，以及被添加到依赖图中 4.babel es7
        </div>
      </el-collapse-item>
      <el-collapse-item title="首屏优化" name="102">
        <div>
          通过打包分析查看，查看打包后的资源 图片压缩， svg压缩
          代码分割SplitChunks 路由懒加载 预加载 gzip传输
        </div>
      </el-collapse-item>
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
      <el-collapse-item title="hash 和 histroy" name="51">
        <div>
          hash 路由：监听 url 中 hash
          的变化，然后渲染不同的内容，这种路由不向服务器发送请求，不需要服务端的支持；
          当页面中的 hash
          发生变化时，会触发hashchange事件，因此我们可以监听这个事件，来判断路由是否发生了变化。
          history 路由：监听 url 中的路径变化，需要客户端和服务端共同的支持； 在
          history 路由中，我们一定会使用window.history中的方法，常见的操作有：
          在 history
          路由中，我们一定会使用window.history中的方法，常见的操作有：
          back()：后退到上一个路由； forward()：前进到下一个路由，如果有的话；
          go(number)：进入到任意一个路由，正数为前进，负数为后退；
          pushState(obj, title, url)：前进到指定的 URL，不刷新页面；
          replaceState(obj, title, url)：用 url 替换当前的路由，不刷新页面；
        </div>
      </el-collapse-item>
      <el-collapse-item title="es6常用语法" name="52">
        var set1 = Array.from(new Set([1,1,2,2,33,'33',44,'44'])) var tt =
        [...new Set([5,5,6,6,8,])] // 5，6，8
        <div>
          拓展运算符 const,let，数组操作，foreach,find,findIndex
          <br />
          <br />
          改变原数组的 -7 shift,unshift,pop,push,reverse,sort,splice
          <br />
          <br />
          不改变原数组的 -9
          concat,slice,join,map,filter,forEach,some,every,reduce
        </div>
      </el-collapse-item>
      <el-collapse-item title="socket长连接和ajax有啥区别" name="53">
        <div>
          Web Socket 连接不是基于 HTTP 传输的，它是一种 HTML 5 为 Web
          定制的全双工通讯协议，没有“请求 -
          响应”的概念，浏览器与服务器完全平等，连接一旦建立就一直开放，双方可随时向对方发送任意数据，没有推拉之分。
        </div>
      </el-collapse-item>
      <el-collapse-item title="Promise回调" name="54">
        <div>then(),catch(),finally()</div>
      </el-collapse-item>
      <el-collapse-item title="数据类型判断" name="55">
        <div>
          typeof可以测试出number、string、boolean、Symbol、undefined及function，
          而对于null及数组、对象，typeof均检测出为object，不能进一步判断它们的类型。
        </div>
        instanceof 其实适合用于判断自定义的类实例对象,
        而不是用来判断原生的数据类型
      </el-collapse-item>
      <el-collapse-item title="instinceof和typeof区别" name="56">
        <div>
          typeof是一个一元运算符，放在一个运算数之前，运算数可以使任意类型。
          它返回值是一个字符串，说明运算数的类型。
          typeof返回果:number，string，undefined，object，boolean，function，symbol（ES6新增）
        </div>
        instanceof instanceof 三、使用 Object.prototype.toString.call()判断
        function _typeof(obj){ var s = Object.prototype.toString.call(obj);
        return s.match(/\[object (.*?)\]/)[1].toLowerCase(); };
        运算符用来测试一个对象在其原型链中是否存在一个构造函数的prototype属性。用于判断一个变量是否某个对象的实例。
      </el-collapse-item>
      <el-collapse-item title="跨域" name="3">
        <div>
          现象一: No 'Access-Control-Allow-Origin' header is present on the
          requested resource,并且The response had HTTP status code 404
        </div>
        解决方案: 后端允许options请求。
        <br />
        <p>
          现象二：No 'Access-Control-Allow-Origin' header is present on the
          requested resource, 并且The response had HTTP status code 405
          后端关闭对应的安全配置。
        </p>
        <br />
        现象三: No 'Access-Control-Allow-Origin' header is present on the
        requested resource,并且status 200
        <p>解决方案: 后端增加对应的头部支持。</p>
        <br />
        现象四: heade contains multiple values '*,*' 解决方案（一一对应）:
        建议删除代码中手动添加的*，只用项目配置中的即可；
      </el-collapse-item>
      <el-collapse-item title="作用域插槽" name="25452">
        有的时候你希望提供的组件带有一个可从子组件获取数据的可复用的插槽。
        作用域插槽适合的场景是至少包含三级以上的组件层级，是一种优秀的组件化方案
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
          对于页面级组件，
          当我们做异步操作时，涉及到要访问dom的操作，我们仍旧只能使用mounted;
          对于一般情况，created和mounted都是可以的；
        </div>
      </el-collapse-item>
      <el-collapse-item title="7种数据类型" name="7">
        <div>
          undefined,null,布尔值Boolean,字符串String,数值Number，对象Object,Symbol
        </div>
      </el-collapse-item>
      <el-collapse-item title="首页白屏问题" name="8">
        <div>
          优化 webpack 减少模块打包体积，code-split 按需加载
          服务端渲染，在服务端事先拼装好首页所需的 html 首页加 loading 或 骨架屏
          （仅仅是优化体验） 服务端开启gzip压缩 打包文件分包，提取公共文件包
        </div>
      </el-collapse-item>
      <el-collapse-item title="节流防抖" name="8">
        <div>
          节流： 鼠标不断点击触发，mousedown(单位时间内只触发一次)
          监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断 防抖：
          校验唯一名称，input过程、change事件持续触发，指定时间内没有动作，那么我去请求。
          window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<style lang="scss">
.doc_block {
  padding: 20px;
  width: 60%;
  word-wrap: break-word;
  word-break: break-all;
  background: #eaf5ff;
}
.el-collapse-item,
.el-collapse-item__header {
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
</style>
