module.exports = {
  title: 'docs', // 设置网站标题
  description: '技术博客文档',
  base: '/', // 设置站点根路径
  head: [],
  plugins: [],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Go', link: '/go/conv' },
      { text: 'Python', link: '/python/list' },
      { text: 'Three.js', link: '/threejs/start' },
      // {
      //   text: 'java相关',
      //   items: [
      //     { text: 'java日志', link: '/java-about/java-log/01log' },
      //     { text: 'java杂七杂八', link: '/java-about/04java-about/01jwt' },
      //     { text: 'java', link: '/java-about/03java/01synchronized' },
      //     { text: 'shiro', link: '/java-about/06app/01shiro/01' },
      //     { text: 'security', link: '/java-about/06app/02security/01' },
      //     { text: 'javaee', link: '/java-about/06app/03javaee/01' },
      //     { text: 'springboot', link: '/java-about/06app/04springboot/01' },
      //   ],
      // },
      // {
      //   text: 'springCloud相关',
      //   items: [
      //     {
      //       text: 'springCloud相关',
      //       link: '/java-about/05spring-cloud/01gateway',
      //     },
      //   ],
      // },
      {
        text: 'web',
        items: [
          { text: 'web基础', link: '/web/01web/01web01' },
          { text: 'js基础', link: '/web/02js/01js' },
          { text: 'vue基础', link: '/web/03vue/01vue' },
          { text: 'vlog', link: '/web/04vlog/01' },
        ],
      },
      {
        text: 'java',
        items: [
          { text: 'java 基础', link: '/java-about/07javabase/01flux/01flux' },
          { text: 'java 基础1', link: '/java-about/07javabase/02base/01' },
          { text: '03java 基础nio', link: '/java-about/07javabase/03nio/01' },
          { text: '04cloud', link: '/java-about/07javabase/04cloud2021/01' },
          {
            text: '05study2022',
            link: '/java-about/07javabase/05study2022/01单列模式',
          },
          { text: '06mysql', link: '/java-about/07javabase/06mysql/01mysql' },
          {
            text: '07mybatis',
            link: '/java-about/07javabase/07mybatis/01mybatis',
          },
          {
            text: '08spring',
            link: '/java-about/07javabase/08spring/01spring',
          },
          { text: 'java日志', link: '/java-about/java-log/01log' },
          { text: 'java杂七杂八', link: '/java-about/04java-about/01jwt' },
          { text: 'java', link: '/java-about/03java/01synchronized' },
          { text: 'shiro', link: '/java-about/06app/01shiro/01' },
          { text: 'security', link: '/java-about/06app/02security/01' },
          { text: 'javaee', link: '/java-about/06app/03javaee/01' },
          { text: 'springboot', link: '/java-about/06app/04springboot/01' },
          {
            text: 'springCloud相关',
            link: '/java-about/05spring-cloud/01gateway',
          },
        ],
      },
      { text: '个人主页', link: 'https://mophia.com' },
      { text: 'Github', link: 'https://github.com/mophia' },
    ],
    sidebar: {
      '/go/': [
        {
          title: 'Go',
          collapsable: true,
          sidebarDepth: 1,
          children: ['conv', 'time', 'struct', 'concurrency', 'math'],
        },
      ],
      '/python/': [
        {
          title: 'Python',
          collapsable: true,
          sidebarDepth: 1,
          children: ['list', 'tuple', 'dict', 'file_operation'],
        },
      ],
      '/threejs/': [
        {
          title: 'Three.js',
          collapsable: true,
          sidebarDepth: 1,
          children: ['start'],
        },
      ],
      '/java-about/java-log/': [
        {
          title: 'Java',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/java-log/01log',
            '/java-about/java-log/02log',
            '/java-about/02mp/01mp',
            '/java-about/02mp/02mp',
          ],
        },
      ],

      '/java-about/05spring-cloud/': [
        {
          title: 'springCloud',
          collapsable: false,
          sidebarDepth: 2,
          children: ['/java-about/05spring-cloud/01gateway'],
        },
      ],
      '/java-about/03java/': [
        {
          title: 'Java03',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/03java/01synchronized',
            '/java-about/03java/02IO',
            '/java-about/03java/03bio',
            '/java-about/03java/04nio',
            '/java-about/03java/05treeMap',
            '/java-about/03java/06thread',
            '/java-about/03java/07redis',
            '/java-about/03java/08redis',
          ],
        },
      ],
      // shiro
      '/java-about/06app/01shiro/': [
        {
          title: 'shiro',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/06app/01shiro/01',
            '/java-about/06app/01shiro/02',
            '/java-about/06app/01shiro/03',
            '/java-about/06app/01shiro/04',
            '/java-about/06app/01shiro/05',
            '/java-about/06app/01shiro/06',
            '/java-about/06app/01shiro/07',
          ],
        },
      ],

      // security
      '/java-about/06app/02security/': [
        {
          title: 'security',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/06app/02security/01',
            '/java-about/06app/02security/02',
            '/java-about/06app/02security/03',
            '/java-about/06app/02security/04',
            '/java-about/06app/02security/05',
            '/java-about/06app/02security/10security',
            '/java-about/06app/02security/11security',
            '/java-about/06app/02security/12security',
          ],
        },
      ],

      // 03 Java ee
      '/java-about/06app/03javaee/': [
        {
          title: 'security',
          collapsable: false,
          sidebarDepth: 2,
          children: ['/java-about/06app/03javaee/01'],
        },
      ],

      // 04 springboot
      '/java-about/06app/04springboot/': [
        {
          title: 'security',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/06app/04springboot/01',
            '/java-about/06app/04springboot/02rabbitmq',
            '/java-about/06app/04springboot/03rabbitmq',
            '/java-about/06app/04springboot/04rabbitmq',
          ],
        },
      ],

      '/java-about/04java-about/': [
        {
          title: 'java杂七杂八',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/04java-about/01jwt',
            '/java-about/04java-about/02about',
            '/java-about/04java-about/03nginx',
            '/java-about/04java-about/04images',
            '/java-about/04java-about/05webservice',
            '/java-about/04java-about/06',
            '/java-about/04java-about/07gradle',
            '/java-about/04java-about/08',
            '/java-about/04java-about/09设计原则',
          ],
        },
      ],
      '/web/02js/': [
        {
          title: 'js基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/web/02js/01js',
            '/web/02js/02js',
            '/web/02js/03js',
            '/web/02js/04js',
            '/web/02js/05js',
            '/web/02js/06js',
            '/web/02js/07js',
            '/web/02js/08webapi',
            '/web/02js/09webapi',
            '/web/02js/010webapi',
            '/web/02js/011webapi',
            '/web/02js/012webapi',
            '/web/02js/013jquery',
            '/web/02js/014jquery',
          ],
        },
      ],
      '/web/01web/': [
        {
          title: 'web基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/web/01web/01web01',
            '/web/01web/02web',
            '/web/01web/03webcss1',
            '/web/01web/03webemmet',
            '/web/01web/04webcss',
            '/web/01web/05webcss',
            '/web/01web/06webcss',
            '/web/01web/07webcss',
            '/web/01web/08webcss',
            '/web/01web/09webcss',
            '/web/01web/010webcss',
            '/web/01web/011webcss',
          ],
        },
      ],
      '/web/03vue/': [
        {
          title: 'vue基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/web/03vue/01vue',
            '/web/03vue/02vue',
            '/web/03vue/03vue',
            '/web/03vue/04vue',
            '/web/03vue/05vue',
            '/web/03vue/06vue',
            '/web/03vue/07vue',
            '/web/03vue/08vue',
            '/web/03vue/09vue',
            '/web/03vue/010vue',
            '/web/03vue/011day02',
            '/web/03vue/12day04',
            '/web/03vue/13day05vue',
            '/web/03vue/14vue',
            '/web/03vue/15ht',
            '/web/03vue/16dataV',
            '/web/03vue/16dataV',
            '/web/03vue/17dataVecharts',
          ],
        },
      ],
      // vlog
      '/web/04vlog/': [
        {
          title: 'vlog',
          collapsable: false,
          sidebarDepth: 2,
          children: ['/web/04vlog/01'],
        },
      ],

      '/java-about/07javabase/01flux/': [
        {
          title: 'java 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: ['/java-about/07javabase/01flux/01flux'],
        },
      ],

      '/java-about/07javabase/02base/': [
        {
          title: 'java 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/07javabase/02base/01',
            '/java-about/07javabase/02base/02thread',
            '/java-about/07javabase/02base/03thread',
            '/java-about/07javabase/02base/04mybatis',
            '/java-about/07javabase/02base/05mybatis',
            '/java-about/07javabase/02base/06spring',
            '/java-about/07javabase/02base/07spring',
            '/java-about/07javabase/02base/08springmvc',
            '/java-about/07javabase/02base/09springmvc',
            '/java-about/07javabase/02base/010单一职责.md',
            '/java-about/07javabase/02base/011开闭原则.md',
            '/java-about/07javabase/02base/012uml.md',
            '/java-about/07javabase/02base/013设计模式1',
            '/java-about/07javabase/02base/014工厂模式',
            '/java-about/07javabase/02base/015原型模式',
            '/java-about/07javabase/02base/016适配器模式',
            '/java-about/07javabase/02base/017桥接模式',
            '/java-about/07javabase/02base/018组合模式',
            '/java-about/07javabase/02base/019享元模式',
            '/java-about/07javabase/02base/020代理模式',
            '/java-about/07javabase/02base/021命令模式',
            '/java-about/07javabase/02base/022观察者模式',
            '/java-about/07javabase/02base/023备忘录模式',
          ],
        },
      ],
      // nio
      '/java-about/07javabase/03nio/': [
        {
          title: 'java 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/07javabase/03nio/01',
            '/java-about/07javabase/03nio/02',
            '/java-about/07javabase/03nio/03',
            '/java-about/07javabase/03nio/04',
          ],
        },
      ],
      // cloud
      '/java-about/07javabase/04cloud2021/': [
        {
          title: 'java 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/07javabase/04cloud2021/01',
            '/java-about/07javabase/04cloud2021/02',
          ],
        },
      ],
      // 05study2022
      '/java-about/07javabase/05study2022/': [
        {
          title: 'java 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: ['/java-about/07javabase/05study2022/01单列模式'],
        },
      ],
      // 06mysql
      '/java-about/07javabase/06mysql/': [
        {
          title: 'java 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/07javabase/06mysql/01mysql',
            '/java-about/07javabase/06mysql/02mysql',
            '/java-about/07javabase/06mysql/03多表查询',
            '/java-about/07javabase/06mysql/04函数',
            '/java-about/07javabase/06mysql/05函数2',
            '/java-about/07javabase/06mysql/06子查询',
            '/java-about/07javabase/06mysql/07创建和管理表',
            '/java-about/07javabase/06mysql/08增删改操作',
            '/java-about/07javabase/06mysql/09mysql数据类型',
            '/java-about/07javabase/06mysql/10约束',
            '/java-about/07javabase/06mysql/11视图',
            '/java-about/07javabase/06mysql/12存储过程与函数',
            '/java-about/07javabase/06mysql/13变量流程控制和游标',
            '/java-about/07javabase/06mysql/14触发器',
            '/java-about/07javabase/06mysql/15mysql8新特性',
            '/java-about/07javabase/06mysql/16linux下mysql',
            '/java-about/07javabase/06mysql/17mysql的数据目录',
            '/java-about/07javabase/06mysql/18mysq用户与权限',
            '/java-about/07javabase/06mysql/19mysql逻辑架构',
            '/java-about/07javabase/06mysql/20存储引擎',
            '/java-about/07javabase/06mysql/21索引的数据结构',
            '/java-about/07javabase/06mysql/22InnoDB数据存储结构',
            '/java-about/07javabase/06mysql/23索引的创建与设计原则',
            '/java-about/07javabase/06mysql/24性能分析工具的使用',
            '/java-about/07javabase/06mysql/25索引优化与查询优化',
            '/java-about/07javabase/06mysql/26数据库的设计规范',
            '/java-about/07javabase/06mysql/27数据库其它调优策略',
            '/java-about/07javabase/06mysql/28事务基础知识',
            '/java-about/07javabase/06mysql/29MySQL事务日志',
            '/java-about/07javabase/06mysql/30锁',
          ],
        },
      ],

      // 07mybatis
      '/java-about/07javabase/07mybatis/': [
        {
          title: 'mybatis 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/07javabase/07mybatis/01mybatis',
            '/java-about/07javabase/07mybatis/02mybatis全局文件加载',
            '/java-about/07javabase/07mybatis/03mapper映射文件',
            '/java-about/07javabase/07mybatis/04映射-mapper.xml的解析机制',
            '/java-about/07javabase/07mybatis/05基本注解的使用',
            '/java-about/07javabase/07mybatis/06Provider系列注解',
            '/java-about/07javabase/07mybatis/07注解Mapper接口的解析机制',
            '/java-about/07javabase/07mybatis/08一级缓存的设计与原理',
            '/java-about/07javabase/07mybatis/09二级缓存的设计与原理',
            '/java-about/07javabase/07mybatis/10MyBatis内部的事务控制',
            '/java-about/07javabase/07mybatis/11MyBatis的插件模块',
            '/java-about/07javabase/07mybatis/12MyBatis的日志模块设计',
            '/java-about/07javabase/07mybatis/13MyBatis中的一些API',
            '/java-about/07javabase/07mybatis/14整合Spring',
            '/java-about/07javabase/07mybatis/15生命周期-整体概述',
            '/java-about/07javabase/07mybatis/16生命周期-加载全局配置文件',
            '/java-about/07javabase/07mybatis/17生命周期-加载Mapperxml与注解Mapper定义',
            '/java-about/07javabase/07mybatis/18生命周期-SqlSession执行',
            '/java-about/07javabase/07mybatis/19生命周期-动态SQL的参数绑定与执行',
            '/java-about/07javabase/07mybatis/20生命周期-结果集的封装与映射',
            '/java-about/07javabase/07mybatis/21生命周期-Mapper动态代理类执行流程原理',
            '/java-about/07javabase/07mybatis/22生命周期-自定义插件的执行流程原理',
            '/java-about/07javabase/07mybatis/23MyBatis中的设计模式-工厂方法、建造器模式',
          ],
        },
      ],

      // 08spring
      '/java-about/07javabase/08spring/': [
        {
          title: 'spring 基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/java-about/07javabase/08spring/01spring',
            '/java-about/07javabase/08spring/02spring源码环境本地测试',
            '/java-about/07javabase/08spring/03spring配置文件的加载',
            '/java-about/07javabase/08spring/04spring概述',
            '/java-about/07javabase/08spring/05spring注解驱动',
            '/java-about/07javabase/08spring/06IOC基础-依赖注入',
            '/java-about/07javabase/08spring/07IOC进阶-依赖注入-回调注入和延迟注入',
            '/java-about/07javabase/08spring/08IOC基础-Bean常见的几种类型与Bean的作用域',
            '/java-about/07javabase/08spring/09IOC基础-Bean的实例化方式',
            '/java-about/07javabase/08spring/10IOC基础-Bean的生命周期-初始化与销毁',
            '/java-about/07javabase/08spring/11IOC进阶-IOC容器的详细对比-BeanFactory',
            '/java-about/07javabase/08spring/12IOC进阶-IOC容器的详细对比-ApplicationContext',
            '/java-about/07javabase/08spring/13IOC进阶-事件机制&监听器',
            '/java-about/07javabase/08spring/14IOC进阶-模块装配',
            '/java-about/07javabase/08spring/15IOC进阶-条件装配',
            '/java-about/07javabase/08spring/15IOC进阶-组件扫描高级',
            '/java-about/07javabase/08spring/16IOC进阶-资源管理',
            '/java-about/07javabase/08spring/17IOC进阶-PropertySource的使用',
            '/java-about/07javabase/08spring/18IOC高级-配置源&配置元信息',
            '/java-about/07javabase/08spring/19IOC高级-Environment抽象',
            '/java-about/07javabase/08spring/20IOC高级-Bean与BeanDefinition',
            '/java-about/07javabase/08spring/21IOC高级-BeanDefinition与BeanDefinitionRegistry',
            '/java-about/07javabase/08spring/22IOC高级-后置处理器入门与使用',
            '/java-about/07javabase/08spring/23IOC高级-BeanPostProcessor的扩展及作用时机',
            '/java-about/07javabase/08spring/24IOC高级-BeanFactoryPostProcessor的使用',
            '/java-about/07javabase/08spring/25IOC高级-Java编程式驱动IOC',
            '/java-about/07javabase/08spring/26IOC高级-模块装配&条件装配综合使用',
            '/java-about/07javabase/08spring/27IOC高级-事件&监听器高级',
            '/java-about/07javabase/08spring/28IOC原理-Bean完整的生命周期概述',
            '/java-about/07javabase/08spring/29IOC原理-Bean的生命周期-BeanDefinition阶段',
            '/java-about/07javabase/08spring/38IOC总结&面试题整理',
            '/java-about/07javabase/08spring/39入门-AOP是怎么来的',
            '/java-about/07javabase/08spring/40AOP基础-原生动态代理与Cglib动态代理回顾',
            '/java-about/07javabase/08spring/41.AOP基础-AOP概述与术语',
            '/java-about/07javabase/08spring/42.AOP基础-基于xml的aspect实现AOP',
            '/java-about/07javabase/08spring/43AOP基础-基于AspectJ实现AOP',
            '/java-about/07javabase/08spring/44.AOP进阶-AOP的延伸知识和进阶使用',
            '/java-about/07javabase/08spring/45.AOP进阶-实战:AOP实现事务控制',
            '/java-about/07javabase/08spring/46.AOP高级-AOP的其他扩展知识',
          ],
        },
      ],
    },
    sidebarDepth: 2, //左侧导航显示的层级
    lastUpdated: 'Last Updated',
    // sidebar: 'auto'
  },
};
