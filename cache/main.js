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

