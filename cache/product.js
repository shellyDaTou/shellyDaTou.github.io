$(function(){
    //    初始化
    $('#showLayerImg').hide();
   // 初始化显示所有的图片
   jointLiStr(productArr);
  })

//   给动态添加的li绑定点击事件
  $('#showProductUl').on('click','li',function() {
    //   弹框
      var layerImg =  $('#showLayerImg');
    //   li内的img的src
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

  })

//   产品路径、类型、名称
  let productArr = [{
      url: 'upload/bed601.jpg',
      type: 'bed',
      name: '床601'
  },
  {
    url: 'upload/bed602.jpg',
    type: 'bed',
    name: '床602'
},
{
    url: 'upload/bed603.jpg',
    type: 'bed',
    name: '床603'
},{
    url: 'upload/bed605green.jpg',
    type: 'bed',
    name: '床605 草绿色'
},{
    url: 'upload/bed605white.jpg',
    type: 'bed',
    name: '床601 白色'
},{
    url: 'upload/bed606.jpg',
    type: 'bed',
    name: '床606'
},
{
    url: 'upload/bed607.jpg',
    type: 'bed',
    name: '床607'
},{
    url: 'upload/bed608.jpg',
    type: 'bed',
    name: '床608'
},{
    url: 'upload/bed609.jpg',
    type: 'bed',
    name: '床609'
},{
    url: 'upload/bedup601.jpg',
    type: 'bed',
    name: '子母床601'
},{
    url: 'upload/bed602.jpg',
    type: 'bed',
    name: '子母床602'
},
  {
      url: 'upload/desk601.jpg',
      type: 'desk',
      name: '桌601'
  },
  {
    url: 'upload/desk602.jpg',
    type: 'desk',
    name: '桌602'
},
{
    url: 'upload/desk603.jpg',
    type: 'desk',
    name: '桌603'
},
{
    url: 'upload/desk604.jpg',
    type: 'desk',
    name: '桌604'
},
  {
      url: 'upload/cabinet601.jpg',
      type: 'cabinet',
      name: '柜601'
  },
  {
    url: 'upload/cabinet602.jpg',
    type: 'cabinet',
    name: '柜602'
},{
    url: 'upload/cabinet605.jpg',
    type: 'cabinet',
    name: '柜605'
},{
    url: 'upload/cabinetbook601.jpg',
    type: 'cabinet',
    name: '书柜601'
},{
    url: 'upload/cabinetclose601.jpg',
    type: 'cabinet',
    name: '衣柜601'
},
{
    url: 'upload/cabinetDou601.jpg',
    type: 'cabinet',
    name: '四斗五斗柜601'
},{
    url: 'upload/cabinetshoe601.jpg',
    type: 'cabinet',
    name: '鞋柜601'
},{
    url: 'upload/cabinetTV601.jpg',
    type: 'cabinet',
    name: '电视柜601'
},{
    url: 'upload/cabinetTV602.jpg',
    type: 'cabinet',
    name: '电视柜602'
},{
    url: 'upload/cabinetTV603.jpg',
    type: 'cabinet',
    name: '电视柜603'
},{
      url: 'upload/sofa601.jpg',
      type: 'sofa',
      name: '沙发601'
  },
  {
    url: 'upload/sofa602.jpg',
    type: 'sofa',
    name: '沙发602'
},
{
    url: 'upload/sofa603.jpg',
    type: 'sofa',
    name: '沙发603'
},
{
    url: 'upload/sofa605.jpg',
    type: 'sofa',
    name: '沙发605'
},
];

  // 产品中心点页面击不同类目展示不同类商品
  $('.kind-list li').on('click', function() {
      $('#showProductUl').empty();
      const str = $(this).attr('class');
      filterLiArr(str);
  })

  // 展示图片
  function filterLiArr(value= 'all') {
      let str = '';
      let newArr = [];
      if (value === 'all' ) {
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

//   拼接不同类型的产品li
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
                              alt="${item['name']}">
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



