$(function () {
    // 0. 监听内容的实时输入
    /* $(".comment").change(function () {
        console.log($(this).val())
    })  //不能实时监听，只有在失去焦点后才会监听 */
    // .comment 将 proertychange input 事件委托给 body 监听
    $("body").delegate(".comment","propertychange input",function () {
        // 判断是否输入了内容
        if ($(this).val().length > 0) {
            // 让按钮可用
            $(".send").prop("disabled", false);
        } else {
            // 让按钮不可用
            $(".send").prop("disabled", true);
        }
    })

    // 1. 监听发布按钮的点击
    $(".send").click(function () {
        alert("send");
        // 拿到用户输入的内容
        var $text = $(".comment").val();
        // 根据内容创建节点
        var $weibo = createEle($text);
    })
})