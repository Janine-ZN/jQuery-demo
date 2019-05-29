$(function () {
    // 0. 监听内容的实时输入
    /* $(".comment").change(function () {
        console.log($(this).val())
    })  //不能实时监听，只有在失去焦点后才会监听 */
    // .comment 将 proertychange input 事件委托给 body 监听
    $("body").delegate(".comment", "propertychange input", function () {
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
        // 拿到用户输入的内容
        var $text = $(".comment").val();
        // 根据内容创建节点
        var $weibo = createEle($text);
        $(".massageList").prepend($weibo);
    })

    // 2. 监听顶点击
    $("body").delegate(".infoTop", "click", function () {
        $(this).text(parseInt($(this).text()) + 1);
    })
    // 3. 监听踩点击
    $("body").delegate(".infoDown", "click", function () {
        $(this).text(parseInt($(this).text()) + 1);
    })
    // 4. 监听删除点击
    $("body").delegate(".infoDel", "click", function () {
        $(this).parents(".info").remove();
    })

    // 创建节点方法
    function createEle(text) {
        var $weibo = $('<div class="info"><p class = "infoText" >' + text +
            '</p><p class = "infoOperation"><span class = "infoTime">' + formartDate() + '</span>' +
            '<span class = "infoHandle"><a href = "javascript:;" class="infoTop"> 0 </a>' +
            '<a href = "javascript:;" class="infoDown"> 0 </a>' +
            '<a href = "javascript:;" class="infoDel"> 删除 </a></span></p></div>');
        return $weibo;
    }

    // 生成时间的方法
    function formartDate() {
        var date = new Date();
        var arr = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-", date.getDate() + " ",
            date.getHours() + ":", date.getMinutes() + ":", date.getSeconds()
        ];
        return arr.join("");
    }
})