$(function(){
  //    初始化
  $('#showLayerImg').hide();
})
$('.showLayer').on('click',function() {
    var layerImg =  $('#showLayerImg');
    var src = $(this).find('img').attr('src');
    layerImg.find('img').attr('src', src);
    layer.open({
        type: 1,
        title: false,
        area: ['80%', '60%'],
        content: layerImg,
        cancel: function() {
            layerImg.hide();
        }
      });

})



