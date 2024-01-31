export default {
  download: '下载PDF文档',
  anchor: {
    a1: '教育经历',
    a2: '专业技能',
    a3: '工作经历',
    a4: '个人项目',
  },
  avatar: {
    p1: '热爱Coding，生命不息，折腾不止',
    p2: '羽毛球狂人，冲刺中羽五级 ...',
  },
  baseinfo: {
    title: '基本信息',
    r1: '姓名',
    r1v: '付寅生',
    r2: '学历 / 专业',
    r2v: '本科 / 通信工程',
    r3: '工作经验',
    r3v: '八年',
    r4: '所在地',
    r4v: '成都市 高新区',
    r5: '求职意向',
    r5v: '前端工程师 / 偏Vue',
  },
  contact: {
    title: '联系方式',
    r1: '手机',
    r2: '邮箱',
    r4: '技术博客',
  },
  hobbies: '兴趣爱好',
  education: {
    title: '教育经历',
    r1: '四川大学锦江学院 / 通信工程',
    r1v: '2012年9月——2016年6月',
  },
  skill: {
    title: '专业技能',
    fe: '前端',
    fe1: '1. 熟练掌握 HTML、CSS 编写符合 Web 标准的代码；',
    fe2: '2. 熟悉 JavaScript、TypeScript， 持续关注 ESNext 特性；',
    fe3: '3. 熟悉 Webpack、Vite 等打包工具及其构建流程；',
    fe4: '4. 熟悉 Vue 及相关技术栈的开发，了解 React 技术栈；',
    fe5: '5. 网络安全行业，熟悉 Web安全 知识。',
    other: '其他',
    o1: '1. 熟悉 Node.js 及常用模块；',
    o2: '2. 熟悉 Linux 常用命令，独立完成部署；',
    o3: '3. 遵循 Lint 编写符合团队规范的代码；',
    o4: '4. 熟悉版本管理工具 Git；',
    o5: '5. 善用科学搜索、插件，高效主义。',
  },
  work: '工作经历',
  responsibilities: '工作内容与职责：',
  wskp: {
    name: '网思科平科技有限公司',
    time: '2017年7月——2024年1月',
    d1: '1. 负责项目前端架构搭建，确定技术框架，明确团队开发规范；',
    d2: '2. 整理产品需求文档，编写开发文档；',
    d3: '3. 配合设计人员进行前端开发，完成产品与客户的需求与功能；',
    d4: '4. 与后端工程师共同协商约定数据接口，完成前后台数据交互；',
    d5: '5. 完成项目相关需求开发、自测和Code Review，及时反馈测试相关问题；',
    d6: '6. 作为团队Leader，参与团队建设与资源共享。',
  },
  stack: '技术栈',
  refactor: '重构后',
  contributions: '主要贡献：',
  hard: '主要难点：',
  proEdr: {
    name: 'EDR 终端侦测与响应平台',
    description:
      '一次完整的ToB前端项目开发经历。该项目主要阐述EDR概念本身，从各维度展示用户基础数据，通过筛选与分析，归纳总结出威胁链供安全人员参考。该项目成功展示了EDR概念，而且通过实时监控用户终端的进程和文件，实现了恶意代码预警和预测，极大地提高了客户的安全级别。',
    c1: '- 负责该项目前端架构，包括完善了基础模块、utils，编写了详细的文档和示例代码，引导团队遵循最佳实践和开发流程',
    c2: '- 实现首页安全概览及可配置化展示，提高了用户体验和客户满意度',
    c3: '- 完成资产详情页面，通过Websocket获取并展示在线终端相关信息，提高了性能和实时性',
    c4: '- 封装了接口请求、高级搜索、过滤器、PowerShell等业务组件，提高开发效率',
    c5: '- 为告警，进程等页面请求大量数据时设计了前端过滤和预缓存方案，提升了页面加载速度和性能',
    c6: '- 负责了该ToB项目私有部署方案及相关性能优化',
    h1: '- 高级搜索，定制搜索，数据联动（筛选器）',
    h2: '- 通过 websocket 实时通信投递并展示终端数据（资产详情）',
    h3: '- 复杂表格定制与良好展示（告警数据）',
    h4: '- 单个接口大量数据的处理（全网列表）',
    h5: '- 自定义页面及html、pdf、excel导出功能（自定义报表）',
  },
  proAdmin: {
    name: 'Admin 综合管理系统',
    description:
      '作为公司的核心项目，综合管理后台旨在构建一个集中式的用户权限和子系统管理平台。通过该系统，管理员可以统一管理用户权限，为不同子项目定制功能模块展示，实现对多个子系统的综合管理，并集中进行权限相关的管理操作。此外，系统还支持免登录跳转至其他子系统，极大地提升了用户体验和管理效率。',
    c1: '- 主导并完成项目架构升级Vue3，包括相关配置及构建工作，提高开发效率',
    c2: '- 定义主题变量，为团队编写了标准的组件规范，提高团队代码的可读性和一致性',
    c3: '- 封装通用表单、上传文件和高级搜索等组件，提高了开发效率，并保持用户界面一致性',
    c4: '- 实现核心模块功能。系统权限设置及跳转至各子系统的逻辑，提高了系统的安全性和用户使用体验',
    h1: '列表复杂信息过滤、处理与展示',
    h2: '定制表单，校验，数据联动及展示',
    h3: '用户定制 smtp 服务相关设置与开启',
    h4: '列表、图表、模版及搜索项的搜索与展示联动',
  },
  proLarge: {
    name: 'LC 安全分析大屏',
    description:
      '一个综合性的安全可视化项目。通过结合EDR项目的数据，利用大数据分析和机器学习等技术对资产、告警和终端信息进行深度处理和分析，用户可以通过大屏快速了解安全态势，发现潜在威胁，并做出及时响应，从而提高企业的整体安全防护能力。',
    d1: '- 性能优化：为减少加载时间，减少图片使用，采用CSS绘制和SVG来呈现',
    d2: '- ATT&CK 热力图实现：同时考虑到小屏提供了simple模式展示',
    d3: '- 响应式设计改进：针对lg尺寸屏幕，对非核心展示元素进行缩略化处理，既保证页面的简洁性，又保留核心信息，得到客户好评',
    h1: '- 首屏加载，白屏优化，相关性能优化',
    h2: '- ECharts、d3 绘制各个子模块',
    h3: '- 数据响应式，各图表渲染实时更新',
    h4: '- 布局响应式，从平板、PC到大屏设备展示支持',
  },
  team: {
    name: '团队建设',
    wskpuiDesc:
      'wskp-ui 是一个使用VuePress搭建的综合性内网在线文档，它集成了UI规范、代码规范、demo展示以及其他各项团队约定。该项目是利用闲余时间自发发起的，主要目的是为产品和设计同事提供一个统一、便捷的参考平台，以便更好地进行沟通和及时反馈',
    main: '核心内容：',
    m1: '- 团队UI规范制定：明确了公共变量名、主题色值等关键要素',
    m2: '- 前端代码规范：团队建立统一代码规范，确定代码风格一致性',
    m3: '- 业务组件二次封装与示例：为产品和UI提供在线示例，便于快速理解',
    m4: '- 单元测试：以基础组件和utils为粒度，进行单元测试',
    m5: '- 配套文档编写：便于新人和同事快速理解项目结构和上手开发',
    grow: '成长与收获：',
    g1: '- 具有参与感，增强团队的凝聚力，成员获得成就感',
    g2: '- 每次提交即code review，互相交流学习',
    g3: '- 自身即是用户，更加注重反馈与用户体验',
    mockDesc:
      '一个基于easy-mock的内网部署方案，用于模拟后端API接口并返回预设的假数据。这一举措旨在解决开发过程中前后端进度不同步的问题，使得前端开发者可以在没有真实后端接口的情况下，依然能够进行高质量的开发工作。',
    deployDesc: `部署在内网的一个自动打包、快速部署解决方案，方便开发和测试人员。<br/>可选择切换项目选择对应分支，自动打包生成Dist，并部署到内网，测试不同版本的项目。`,
  },
  aili: {
    name: '四川爱礼科技有限公司',
    time: '2016年1月——2017年7月',
    r1: '- 参与公司主项目界面开发 和 爱礼官网页面开发',
    r2: '- 根据提供的设计图进行高精度还原，确保前端页面与设计图的一致性',
    r3: '- 将页面各子模块拆分为可复用的组件，提高开发效率和代码可维护性',
    r4: '- 针对主流移动端设备进行前端页面的响应式适配',
    r5: '- 与后台开发团队紧密协作，完成前端页面与后台接口的对接工作',
    pj: '环球礼仪知识平台',
    pjDesc: '传统内容型社区综合网站，类似简书、小红书。',
    para: '16年底为优化平台内容，进行架构升级。尤其是前端进行大重构',
    c1: '- 负责静态页面及相关样式的编码工作，确保页面在视觉效果和用户体验上均达到高标准',
    c2: '- 封装了一系列实用的工具模块，如滚动效果、全屏特效、工具栏、动画和过渡相关的mixin等',
    c3: '- 通过响应式设计和兼容性处理，实现不同设备和浏览器上的无缝切换和一致体验',
    h1: '- 由于底层框架的变更，面临了大量的代码改动、结构调整和技术适应',
    h2: '- 引入JSX和Redux带来了全新的开发模式和思维转变',
    h3: '- 早期React与jQuery的集成并不顺畅，需解决两者之间的冲突和兼容性问题',
    g1: '- 前端工程化开发模式的转变： 从传统静态页面开发模式过渡到前端工程化开发模式',
    g2: '- 深入学习BootStrap框架，掌握了其栅格系统、组件样式和响应式设计等核心特性',
    g3: '- 熟练掌握了响应式布局的原理和实现方式，为用户提供更好的视觉与交互体验',
    g4: '- 改变传统DOM操作的思维方式，理解状态改变视图的核心思想',
    g5: '- 改变了传统DOM操作的思维方式，开始理解并实践状态改变视图的核心思想',
  },
  personal: {
    title: '个人项目 & 参与开源',
    r1: '整理个人关于前端相关学习资源、教程、文章、书籍等，博客写作资料库',
    recommend: '推荐内容：',
    r1_t1: '安全-你真的了解EDR吗',
    r1_t2: '学习响应式设计',
    r2: '简历展示, Vite + Vue3 + TS + TailWindCSS，欢迎 Fork 使用',
    r3: '整理学习demo，主要展示一些较为简单的CSS、JS效果细节实现',
    r3_t1: 'CSS3 Transform 常见效果一览',
    r4: 'Vue3 + Vite + TS4 打造自己的组件库',
    r5: '前端面试宝典，搜集于社区，回馈于社区',
    b1: 'Vue Source',
    b3: 'ES规范',
    b5: '项目经验',
    b6: '性能优化',
  },
  thanks: {
    title: '致谢',
    p1: '感谢您花时间阅读我的简历，我是付寅生 ^_^ 一个喜欢羽毛球、动漫和音乐的前端工程师。',
    p2: '期待能有机会加入您的团队！再次感谢您的关注与信任！',
  },
}
