词法分析指的是js引擎在执行前的编译过程之一。
词法分析和分词其实都是对js代码分割的一个过程。
词法分析大概分为三步骤，分析参数，分析变量声明，分析函数声明。
首先如果存在函数，分析函数的参数分别是什么。
其次 分析每一个变量声明，如果是全局变量，进行变量提升。
再次 分析函数声明，再次进行变量提升