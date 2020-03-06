
      /*
      本地 json 文件渲染分页
        1. 先请求回来数据
          => 渲染分页器
          => 请求回来的数组.length 知道了多少条数据
          => 自己定好一页显示多少条数据
          => 计算多少页一共 -> Math.ceil(length / 一页多少条)
        2. 直接进行分页器的渲染
          => 因为我一共就请求回来一次数据
          => 不需要重复请求, 我是每次使用分页器切换的时候
          => 是从数组里面拿到不同的数据
        3. 渲染页面
          => 每次切换分页器的时候都从数组中获取不同的数据
          => 请求回来渲染第一页
          => 每次分页器切换的时候, 切换到第几页换到第几页数据

    */
  //  let flag = true
   // 准备一个变量接收数组
   let list = []
    // 1. 请求数据
    getList()
    function getList() {
      $.ajax({
        url: '../json/data.json',
        dataType: 'json',
        success: function (res) {
          console.log(res)
          // 一共 102 条数据, 数组.length
          // 一页显示多少条(假定一页显示 12 条), 一共 9 页
          list = res
          // console.log(list)
          // 2. 渲染分页器
          $('.pagi').pagination({
            pageCount: Math.ceil(res.length / 28), // 总页数
            current: 1, // 当前页
            jump: true,
            coping: true,
            homePage: '首页', // 首页按钮的文本
            endPage: '末页', // 末页按钮的文本
            prevContent: '上页',
            nextContent: '下页',
            callback: function (api) { // 当你切换页面的时候会触发
              // api.getCurrent() 获取当前是第几页
              // console.log(api.getCurrent())
              let curr = api.getCurrent()

              // console.log(curr)
              // 根据是第几页, 从我的总数组里面筛选出一部分数据
              //   slice 方法包前不包后
              var list = res.slice((curr - 1) * 28, curr * 28)
              // console.log(list)
              // slice 不改变原始数组, 只是从数组里面拿到一些内容
              // splice 方法才是改变原始数组, 从原始数组里面删除

              // 3-2. 每次使用分页器切换的时候渲染一次
              bindHtml(list)
            }
          })

          // 3. 先把第一页的数据渲染一次
          bindHtml(res.slice(0, 28))

        }
      })
    }

    function bindHtml(list) {
      console.log(list)
      // 根据 list 数组渲染页面就可以了

      let str = ''
      list.forEach(item => {
        str += `
        <li data-id="${item.id}">
            <div class="pic">
              <a href="javascript:void(0)">
                <img src="${item.img}" alt="">
              </a>
            </div>
            <div class="ctx-box">
              <div class="row row-1 clearfix">
                <div class="price">
                  <span>￥</span>
                  <strong>${item.price}</strong>
                  <span class="deal-cnt">16人付款</span>
                </div>
              </div>
              <div class="row row-2 title">
                <a href="javascript:void(0)">
                  <span class="H">乐视</span>
                  ${item.name}
                </a>
              </div>
              <div class="row row-3 g-clearfix">
                <div class="shop">${item.shop}</div>
                <div class="location">${item.location}</div>
              </div>
            </div>
          </li>
        `
      })

      $('.grid-wrap>ul').html(str)
    }


    $('.grid-wrap>ul').on('click','li',function(){
      console.log(this)
      const id = $(this).data('id')
      console.log(id)
      let data=null
      for(let i = 0;i<list.length;i++){
          if(list[i].id==id){
            data=list[i]
            break
          }
      }
      localStorage.setItem('goodsInfo',JSON.stringify(data))

      window.location.href='./detail.html'
    })