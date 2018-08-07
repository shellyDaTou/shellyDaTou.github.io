$(function(){
  //    初始化
  $('#showLayerImg').hide();
 // 初始化显示所有的图片
 jointLiStr(productArr);
})
$('.showLayer').on('click',function() {
    var layerImg =  $('#showLayerImg');
    var src = $(this).find('img').attr('src');
    layerImg.find('img').attr('src', src);
    layer.open({
        type: 1,
        title: false,
        area: ['60%', '60%'],
        content: layerImg,
        cancel: function() {
            layerImg.hide();
        }
      });

    console.log(src, '00000');
})

let productArr = [{
    url: 'upload/1505356879.jpg',
    type: 'bed',
    name: '床1'
},
{
    url: 'upload/1505356890.jpg',
    type: 'desk',
    name: '桌1'
},
{
    url: 'upload/1505356924.jpg',
    type: 'chair',
    name: '椅1'
},
{
    url: 'upload/1505356986.jpg',
    type: 'cabinet',
    name: '柜1'
},
{
    url: 'upload/1505374754black.jpg',
    type: 'sofa',
    name: '沙发1'
},
{
    url: 'upload/1505379305.jpg',
    type: 'cabinet',
    name: '柜2'
},{
    url: 'upload/1505381827.jpg',
    type: 'bed',
    name: '床2'
}];

// 产品中心点页面击不同类目展示不同类商品
$('.kind-list li').on('click', function() {
    $('#showProductUl').empty();
    const str = $(this).attr('class');
    filterLiArr(str);
    // TODO 添加点击后的样式
    // $(this).addClass('visite-kind-list')
    //        .siblings()
    //        .removeClass('visite-kind-list');
})

// 展示图片
function filterLiArr(value= 'all') {
    let str = '';
    let newArr = [];
    if (value === all ) {
        // 直接拼接所以数组项
        jointLiStr(productArr);
        return;
    }

    productArr.filter((item) => {
        if (item.type === value) {
            newArr.push(item);
        }
        })
     jointLiStr(newArr);


}
function jointLiStr(arr) {
    let str = '';
     arr.forEach((item) => {
            str += `<li class="shown">
            <div class="widget widget-shadow">
                <figure class="widget-header cover showLayer">
                    <a title="${item['name']}"
                        target='_self'>
                        <div class="mask">
                        </div>
                        <img class="cover-image"
                            src="${item['url']}"
                            alt="${item['name']}"
                            style='height:200px;'>
                    </a>
                </figure>
                <h4 class="widget-title">
                    <a title="${item['name']}"
                        target='_self'>${item['name']}</a>
                    <p></p>
                </h4>
            </div>
            </li>`
    });

    $('#showProductUl').append(str);
    }



