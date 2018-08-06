$(function(){
  //    初始化
  $('#showLayerImg').hide();
})

var layer = layui.layer;

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

// 产品中心点页面击不同类目展示不同类商品
$('.kind-list li').on('click', function() {
    const str = $(this).attr('class');
    $('#'+str).removeClass('hide-kind-list')
              .siblings()
              .addClass('hide-kind-list');

    $(this).addClass('visite-kind-list')
           .siblings()
           .removeClass('visite-kind-list');
    console.log($(this), '888888')
})

