# 反馈

我们欢迎（并鼓励）您的反馈！在创建新的反馈之前，请先搜索现有的票据或帖子。以下是
提供反馈的不同方式：

=== "错误"

    如果您发现了一个错误，请通过在Discord上发布到[v3 Alpha 反馈](https://discord.gg/3mgVyGua)频道来告知我们。
    
    - 帖子应清楚地说明是什么错误，并提供一个简单的可复现示例。如果文档对于*应该*发生什么不清楚，请在帖子中包括这一点。
      - 帖子应该被标记为`Bug`标签。
      - 请在您的帖子中包括`wails doctor`的输出结果。
      - 如果错误是与当前文档不一致的行为，例如窗口无法正确调整大小，请执行以下操作：
        - 在`v3/example`目录中更新一个现有示例或在`v3/examples`文件夹中创建一个清楚显示问题的新示例。
        - 使用标题为“[v3 alpha test] <错误描述>”的[PR](https://github.com/wailsapp/wails/pulls)打开一个请求。
        - 请在您的帖子中包括指向PR的链接。

!!! warning
    *记住*，异常行为不一定是错误 - 它可能只是不按照您预期的方式工作。请使用[建议](#suggestions)来反馈这类情况。


=== "修复"

    如果您有一个错误的修复或文档的更新，请执行以下操作：

    - 在[Wails存储库](https://github.com/wailsapp/wails)上创建一个拉取请求。PR的标题应以`[v3 alpha]`开头。
    - 在[v3 Alpha Feedback](https://discord.gg/3mgVyGua)频道中发布帖子。
    - 帖子应标记为`PR`。
    - 请在帖子中包含PR的链接。

=== "建议"

    如果您有建议，请在Discord的[v3 Alpha Feedback](https://discord.gg/3mgVyGua)频道中发布信息：

    - 帖子应标记为`Suggestion`。

    如果您有任何问题，请随时在[Discord](https://discord.gg/3mgVyGua)上联系我们。

=== "投票"

    - 可以使用:thumbsup:表情符号给帖子投票。请对您认为优先级较高的帖子进行投票。
    - 请*不要*只添加"+1"或"me too"等评论。
    - 如果帖子还有更多内容可补充，请随时发表评论，例如"此错误也影响ARM构建"或"另一种选项是......"

已知问题和正在进行的工作列表可以
在[此处](https://github.com/orgs/wailsapp/projects/6)找到。

## 我们寻求反馈的内容

- API
  - 使用起来方便吗？
  - 它是否按照您的期望工作？
  - 有什么遗漏的功能吗？
  - 应该删除什么？
  - Go和JS之间是否一致？
- 构建系统
  - 使用起来方便吗？
  - 我们能改进吗？
- 示例
  - 是否清晰？
  - 是否涵盖了基础知识？
- 功能
  - 哪些功能缺失？
  - 哪些功能是不需要的？
- 文档
  - 有什么可以更清晰的地方？