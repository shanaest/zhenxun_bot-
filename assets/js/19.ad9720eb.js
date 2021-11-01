(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{555:function(t,e,_){"use strict";_.r(e);var n=_(8),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"好友群聊请求处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#好友群聊请求处理"}},[t._v("#")]),t._v(" 好友群聊请求处理")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("模块")]),t._v(": "),_("code",[t._v("auto_invite")])]),t._v(" "),_("li",[_("strong",[t._v("说明")]),t._v("："),_("br"),t._v("\n好友请求，入群请求提醒，5分钟内不会提醒重复的请求（大概")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("响应器")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("on_request")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("好友请求处理和收集")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("on_request")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("群聊请求处理，超级用户邀请会自动添加群认证")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("时间")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("interval")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("minutes=5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("清空临时id数据")])])])]),t._v(" "),_("h2",{attrs:{id:"群事件处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#群事件处理"}},[t._v("#")]),t._v(" 群事件处理")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("模块")]),t._v(": "),_("code",[t._v("group_handle")])]),t._v(" "),_("li",[_("strong",[t._v("说明")]),t._v("："),_("br"),t._v("\n主要为新成员与退出成员数据的增删（真寻Bot被踢出时提醒），以及退群提醒和进群欢迎"),_("br"),t._v("\n进群欢迎提供 cd  限制，默认"),_("code",[t._v("5")]),t._v("秒"),_("br"),t._v("\n被强制拉群时会通过群认证退出该群")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("响应器")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("on_notice")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("群成员新增处理，欢迎消息，新增数据，群认证检测")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("on_notice")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("群成员减少，退群提醒以及删除数据")])])])]),t._v(" "),_("h2",{attrs:{id:"定时任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[t._v("#")]),t._v(" 定时任务")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("模块")]),t._v(": "),_("code",[t._v("apscheduler")])]),t._v(" "),_("li",[_("strong",[t._v("说明")]),t._v("："),_("br"),t._v("\n群内主要的定时任务，包括早晚安，自动更新群信息，好友信息等")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("时间")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("cron")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("hour=6 minute=1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("每日早上06:01发送早安")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("cron")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("hour=23 minute=59")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("每日晚上23:59发送晚安")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("cron")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("hour=3 minute=1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("每日03:01更新所有群聊信息")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("cron")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("hour=3 minute=1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("每日03:01更新所有好友信息")])])])]),t._v(" "),_("h2",{attrs:{id:"权限检测"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权限检测"}},[t._v("#")]),t._v(" 权限检测")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("模块")]),t._v(": "),_("code",[t._v("hooks")])]),t._v(" "),_("li",[_("strong",[t._v("说明")]),t._v("："),_("br"),t._v("\n权限核心插件，所有权限检测必须的插件，非常重要")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("模块")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("auth_hook")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件权限检测")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("检测包括禁用，群权限，功能开关等权限检测")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("ban_hook")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("黑名单检测")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("黑名单权限检测")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("chkdsk_hook")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("恶意命令触发检测")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("检测是否连续重复快速调用同一种命令")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("limit_hook")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件限制检测")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("检测插件的"),_("strong",[t._v("cd")]),t._v("，"),_("strong",[t._v("block")]),t._v("，"),_("strong",[t._v("count")]),t._v("限制")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("withdraw_message_hook")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("消息撤回机制")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("自动消息撤回机制")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("other_hook")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("普通检测")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("相对不太重要的检测，缺失可能导致一些小问题")])])])]),t._v(" "),_("h2",{attrs:{id:"初始化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("模块")]),t._v(": "),_("code",[t._v("hooks")])]),t._v(" "),_("li",[_("strong",[t._v("说明")]),t._v("："),_("br"),t._v("\n各种数据等初始化")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("模块")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("check_plugin_status")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件状态检测")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("检测插件是否正确加载")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("init_group_manager")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("初始化群数据")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("目前仅仅包含旧数据 -> 新数据 转换")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("init_none_plugin_count_manager")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件加载检测")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("容忍机制，当插件事件响应器连续5次加载失败，会以插件"),_("strong",[t._v("已删除")]),t._v("处理")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("init_plugins_config")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("初始化插件配置项")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("config.yaml")]),t._v("和"),_("code",[t._v("plugins2config.yaml")]),t._v("文件的生成")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("init_plugins_data")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件功能管理")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件总开关，插件状态等")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("init_plugins_limit")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件限制管理")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件限制管理器生成与存储")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("init_plugins_resources")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件资源管理")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件资源文件的移动与删除")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("init_plugins_settings")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("插件基础设置")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("非限制插件最基本的5项设置")])])])]),t._v(" "),_("h2",{attrs:{id:"执行脚本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本"}},[t._v("#")]),t._v(" 执行脚本")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("模块")]),t._v(": "),_("code",[t._v("scripts")])]),t._v(" "),_("li",[_("strong",[t._v("说明")]),t._v(":"),_("br"),t._v("\n执行一些必要的脚本，一般是各种修改后对新旧格式数据的转换等")])])])}),[],!1,null,null,null);e.default=v.exports}}]);