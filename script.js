let DragAllow = false;
let themeColor = "#dbbfce";
//默认值
const originSize = {
  baseLeft: 800,
  baseTop: 100,
  baseHeight: 565,
  baseWidth: 350,
  vibrant1Left: 1300,
  vibrant1Top: 100,
  vibrant1Height: 170,
  vibrant1Width: 350,
  vibrant2Left: 1300,
  vibrant2Top: 300,
  vibrant2Height: 114,
  vibrant2Width: 350,
  baseHugeSize: 40,
  baseSmallSize: 25,
};
//每个层级对应的数值
const fontSizeMap = {
  baseHeight: 53,
  baseWidth: 34,
  vibrant1Height: 16,
  vibrant1Width: 34,
  vibrant2Height: 110.8,
  vibrant2Width: 34,
  hugeFont: 4,
  smallFont: 1,
};
//对象构造函数（构造器）
function create(hira, kata, roman) {
  this.block = document.createElement("div");
  this.block.setAttribute("class", "divBlock");
  this.hira = document.createElement("div");
  this.hira.innerText = hira;
  this.hira.setAttribute("class", "hiraBlock");
  this.kata = document.createElement("div");
  this.kata.innerText = kata;
  this.kata.setAttribute("class", "smallBlock");
  this.roman = document.createElement("div");
  this.roman.innerText = roman;
  this.roman.setAttribute("class", "smallBlock");
  this.kataBlock = document.createElement("div");
  this.kataBlock.setAttribute("class", "touchBox");
  this.romanBlock = document.createElement("div");
  this.romanBlock.setAttribute("class", "touchBox");
  this.block.appendChild(this.hira);
  this.block.appendChild(this.kata);
  this.block.appendChild(this.roman);
  this.block.appendChild(this.kataBlock);
  this.block.appendChild(this.romanBlock);
}
let baseVessel = document.getElementsByClassName("vessel")[0];
let vibrant1Vessel = document.getElementsByClassName("vessel")[1];
let vibrant2Vessel = document.getElementsByClassName("vessel")[2];
let base = document.getElementById("base");
let vibrant1 = document.getElementById("vibrant1");
let vibrant2 = document.getElementById("vibrant2");
//创建对象数组
let blockArray = new Array(75);
if (data) {
  data.base.map((item) => create.call(item,item.hira, item.kata, item.roman));
  data.vibrant1.map((item) => create.call(item,item.hira, item.kata, item.roman));
  data.vibrant2.map((item) => create.call(item,item.hira, item.kata, item.roman));
}
console.log('data=',data);
//实例化
blockArray[0] = new create("あ", "ア", "a");
blockArray[1] = new create("い", "イ", "i");
blockArray[2] = new create("う", "ウ", "u");
blockArray[3] = new create("え", "エ", "e");
blockArray[4] = new create("お", "オ", "o");
blockArray[5] = new create("か", "カ", "ka");
blockArray[6] = new create("き", "キ", "ki");
blockArray[7] = new create("く", "ク", "ku");
blockArray[8] = new create("け", "ケ", "ke");
blockArray[9] = new create("こ", "コ", "ko");
blockArray[10] = new create("さ", "サ", "sa");
blockArray[11] = new create("し", "シ", "shi");
blockArray[12] = new create("す", "ス", "su");
blockArray[13] = new create("せ", "セ", "se");
blockArray[14] = new create("そ", "ソ", "so");
blockArray[15] = new create("た", "タ", "ta");
blockArray[16] = new create("ち", "チ", "chi");
blockArray[17] = new create("つ", "ツ", "tsu");
blockArray[18] = new create("て", "テ", "te");
blockArray[19] = new create("と", "ト", "to");
blockArray[20] = new create("な", "ナ", "na");
blockArray[21] = new create("に", "二", "ni");
blockArray[22] = new create("ぬ", "ヌ", "nu");
blockArray[23] = new create("ね", "ネ", "ne");
blockArray[24] = new create("の", "ノ", "no");
blockArray[25] = new create("は", "ハ", "ha");
blockArray[26] = new create("ひ", "ヒ", "hi");
blockArray[27] = new create("ふ", "フ", "hu");
blockArray[28] = new create("へ", "ヘ", "he");
blockArray[29] = new create("ほ", "ホ", "ho");
blockArray[30] = new create("ま", "マ", "ma");
blockArray[31] = new create("み", "ミ", "mi");
blockArray[32] = new create("む", "ム", "mu");
blockArray[33] = new create("め", "メ", "me");
blockArray[34] = new create("も", "モ", "mo");
blockArray[35] = new create("や", "ヤ", "ya");
blockArray[36] = new create("い", "イ", "i");
blockArray[37] = new create("ゆ", "ユ", "yu");
blockArray[38] = new create("え", "エ", "e");
blockArray[39] = new create("よ", "ヨ", "yo");
blockArray[40] = new create("ら", "ラ", "ra");
blockArray[41] = new create("り", "リ", "ri");
blockArray[42] = new create("る", "ル", "ru");
blockArray[43] = new create("れ", "レ", "re");
blockArray[44] = new create("ろ", "ロ", "ro");
blockArray[45] = new create("わ", "ワ", "wa");
blockArray[46] = new create("い", "イ", "i");
blockArray[47] = new create("う", "ウ", "u");
blockArray[48] = new create("え", "エ", "e");
blockArray[49] = new create("を", "ヲ", "wo");
//浊音部
blockArray[50] = new create("が", "ガ", "ga");
blockArray[51] = new create("ぎ", "ギ", "gi");
blockArray[52] = new create("ぐ", "グ", "gu");
blockArray[53] = new create("げ", "ゲ", "ge");
blockArray[54] = new create("ご", "ゴ", "go");
blockArray[55] = new create("ざ", "ザ", "za");
blockArray[56] = new create("じ", "ジ", "ji");
blockArray[57] = new create("ず", "ズ", "zu");
blockArray[58] = new create("ぜ", "ゼ", "ze");
blockArray[59] = new create("ぞ", "ゾ", "zo");
blockArray[60] = new create("だ", "ダ", "da");
blockArray[61] = new create("ぢ", "ヂ", "ji");
blockArray[62] = new create("づ", "ヅ", "zu");
blockArray[63] = new create("で", "デ", "de");
blockArray[64] = new create("ど", "ド", "do");
blockArray[65] = new create("ば", "バ", "ba");
blockArray[66] = new create("び", "ビ", "bi");
blockArray[67] = new create("ぶ", "ブ", "bu");
blockArray[68] = new create("べ", "べ", "be");
blockArray[69] = new create("ぼ", "ボ", "bo");
blockArray[70] = new create("ぱ", "パ", "pa");
blockArray[71] = new create("ぴ", "ピ", "pi");
blockArray[72] = new create("ぷ", "プ", "pu");
blockArray[73] = new create("ぺ", "ぺ", "pe");
blockArray[74] = new create("ぽ", "ポ", "po");
let offsetX = 20;
let offsetY = 10;
let number = "";
//若有，读取位置存储数据
// console.log('readData = ', `${localStorage.getItem('baseX')?localStorage.getItem('baseX'):0}px,${localStorage.getItem('baseY')?localStorage.getItem('baseY'):0}px`);
// base.style.setProperty('translate',`${localStorage.getItem('baseX')?localStorage.getItem('baseX'):0}px ${localStorage.getItem('baseY')?localStorage.getItem('baseY'):0}px`);
// vibrant1.style.setProperty('translate',`${localStorage.getItem('vibrant1X')?localStorage.getItem('vibrant1X'):0}px ${localStorage.getItem('vibrant1Y')?localStorage.getItem('vibrant1Y'):0}px`);
// vibrant2.style.setProperty('translate',`${localStorage.getItem('vibrant2X')?localStorage.getItem('vibrant2X'):0}px ${localStorage.getItem('vibrant2Y')?localStorage.getItem('vibrant2Y'):0}px`);
base.style.setProperty(
  "left",
  `${
    localStorage.getItem("baseLeft")
      ? localStorage.getItem("baseLeft")
      : originSize.baseLeft
  }px`
);
base.style.setProperty(
  "top",
  `${
    localStorage.getItem("baseTop")
      ? localStorage.getItem("baseTop")
      : originSize.baseTop
  }px`
);
vibrant1.style.setProperty(
  "left",
  `${
    localStorage.getItem("vibrant1Left")
      ? localStorage.getItem("vibrant1Left")
      : originSize.vibrant1Left
  }px`
);
vibrant1.style.setProperty(
  "top",
  `${
    localStorage.getItem("vibrant1Top")
      ? localStorage.getItem("vibrant1Top")
      : originSize.vibrant1Top
  }px`
);
vibrant2.style.setProperty(
  "left",
  `${
    localStorage.getItem("vibrant2Left")
      ? localStorage.getItem("vibrant2Left")
      : originSize.vibrant2Left
  }px`
);
vibrant2.style.setProperty(
  "top",
  `${
    localStorage.getItem("vibrant2Top")
      ? localStorage.getItem("vibrant2Top")
      : originSize.vibrant2Top
  }px`
);

//若有，读取缩放数据
base.style.setProperty(
  "height",
  `${
    localStorage.getItem("baseHeight")
      ? localStorage.getItem("baseHeight")
      : originSize.baseHeight
  }px`
);
base.style.setProperty(
  "width",
  `${
    localStorage.getItem("baseWidth")
      ? localStorage.getItem("baseWidth")
      : originSize.baseWidth
  }px`
);
vibrant1.style.setProperty(
  "height",
  `${
    localStorage.getItem("vibrant1Height")
      ? localStorage.getItem("vibrant1Height")
      : originSize.vibrant1Height
  }px`
);
vibrant1.style.setProperty(
  "width",
  `${
    localStorage.getItem("vibrant1Width")
      ? localStorage.getItem("vibrant1Width")
      : originSize.vibrant1Width
  }px`
);
vibrant2.style.setProperty(
  "height",
  `${
    localStorage.getItem("vibrant2Height")
      ? localStorage.getItem("vibrant2Height")
      : originSize.vibrant2Height
  }px`
);
vibrant2.style.setProperty(
  "width",
  `${
    localStorage.getItem("vibrant2Width")
      ? localStorage.getItem("vibrant2Width")
      : originSize.vibrant2Width
  }px`
);

//提供函数引用，使其他函数能够相互调用内部函数修改状态
let baseDeActive, vibrant1DeActive, vibrant2DeActive;

//添加事件函数
function setFunc() {
  let baseDB = document.getElementById("baseDB");
  let vibrant1DB = document.getElementById("vibrant1DB");
  let vibrant2DB = document.getElementById("vibrant2DB");
  let reSetDB = document.getElementById("reSetDB");
  let changeDB = document.getElementById("changeDB");
  //接收内部函数引用
  baseDeActive = addDrag(baseDB);
  vibrant1DeActive = addDrag(vibrant1DB);
  vibrant2DeActive = addDrag(vibrant2DB);
  addLongPress(reSetDB);
  // addLongPress_changeBackgroound(changeDB)
  // addHiddenSwitch(baseDB)
  // addHiddenSwitch(vibrant1DB)
  // addHiddenSwitch(vibrant2DB)
}
//加入Dom中，添加逻辑关系和事件监听
function setBase() {
    data.base.map(item=>{
        //添加至div中
        baseVessel.appendChild(item.block);
        //绑定响应事件
        item.kataBlock.addEventListener("mouseover", function () {
          this.parentNode.children[1].style.transform =
            "translateX(var(--base-huge-font-size))";
          this.parentNode.children[1].style.opacity = 1;
        });
        item.kataBlock.addEventListener("mouseout", function () {
          this.parentNode.children[1].style.transform = "";
          this.parentNode.children[1].style.opacity = 0;
        });
        item.romanBlock.addEventListener("mouseover", function () {
          this.parentNode.children[2].style.transform =
            "translateX(var(--base-huge-font-size))";
          this.parentNode.children[2].style.opacity = 1;
        });
        item.romanBlock.addEventListener("mouseout", function () {
          this.parentNode.children[2].style.transform = "";
          this.parentNode.children[2].style.opacity = 0;
        });
    })
//   for (let i = 0; i < 50; i++) {
//     //添加至div中
//     baseVessel.appendChild(blockArray[i].block);
//     //绑定响应事件
//     blockArray[i].kataBlock.addEventListener("mouseover", function () {
//       this.parentNode.children[1].style.transform =
//         "translateX(var(--base-huge-font-size))";
//       this.parentNode.children[1].style.opacity = 1;
//     });
//     blockArray[i].kataBlock.addEventListener("mouseout", function () {
//       this.parentNode.children[1].style.transform = "";
//       this.parentNode.children[1].style.opacity = 0;
//     });
//     blockArray[i].romanBlock.addEventListener("mouseover", function () {
//       this.parentNode.children[2].style.transform =
//         "translateX(var(--base-huge-font-size))";
//       this.parentNode.children[2].style.opacity = 1;
//     });
//     blockArray[i].romanBlock.addEventListener("mouseout", function () {
//       this.parentNode.children[2].style.transform = "";
//       this.parentNode.children[2].style.opacity = 0;
//     });
//   }
}
function setVibrant1() {
  for (let i = 50; i < 65; i++) {
    //添加至div中
    vibrant1Vessel.appendChild(blockArray[i].block);

    //绑定响应事件
    blockArray[i].kataBlock.addEventListener("mouseover", function () {
      this.parentNode.children[1].style.transform =
        "translateX(var(--vibrant1-huge-font-size))";
      this.parentNode.children[1].style.opacity = 1;
    });
    blockArray[i].kataBlock.addEventListener("mouseout", function () {
      this.parentNode.children[1].style.transform = "";
      this.parentNode.children[1].style.opacity = 0;
    });
    blockArray[i].romanBlock.addEventListener("mouseover", function () {
      this.parentNode.children[2].style.transform =
        "translateX(var(--vibrant1-huge-font-size))";
      this.parentNode.children[2].style.opacity = 1;
    });
    blockArray[i].romanBlock.addEventListener("mouseout", function () {
      this.parentNode.children[2].style.transform = "";
      this.parentNode.children[2].style.opacity = 0;
    });
  }
}
function setVibrant2() {
  for (let i = 65; i < 75; i++) {
    //添加至div中
    vibrant2Vessel.appendChild(blockArray[i].block);

    //绑定响应事件
    blockArray[i].kataBlock.addEventListener("mouseover", function () {
      this.parentNode.children[1].style.transform =
        "translateX(var(--vibrant2-huge-font-size))";
      this.parentNode.children[1].style.opacity = 1;
    });
    blockArray[i].kataBlock.addEventListener("mouseout", function () {
      this.parentNode.children[1].style.transform = "";
      this.parentNode.children[1].style.opacity = 0;
    });
    blockArray[i].romanBlock.addEventListener("mouseover", function () {
      this.parentNode.children[2].style.transform =
        "translateX(var(--vibrant2-huge-font-size))";
      this.parentNode.children[2].style.opacity = 1;
    });
    blockArray[i].romanBlock.addEventListener("mouseout", function () {
      this.parentNode.children[2].style.transform = "";
      this.parentNode.children[2].style.opacity = 0;
    });
  }
}
//设置位置
function setLocationBase() {
  offsetX = 20;
  offsetY = 10;
  for (let i = 0; i < 50; i++) {
    //设置位置
    // blockArray[i].block.style.visibility="visible"
    // blockArray[i].block.style.opacity=1
    // blockArray[i].block.style.top=((parseInt(i/5)*offsetY)).toString()+"%";
    // blockArray[i].block.style.left=(((i%5)*offsetX)).toString()+"%";
    // //
    // blockArray[i].hira.style.top="0%";
    // blockArray[i].hira.style.left="0%";
    // blockArray[i].kata.style.top="0%";
    // blockArray[i].kata.style.left="0%";
    // blockArray[i].roman.style.top="50%";
    // blockArray[i].roman.style.left="0%";
    blockArray[i].kataBlock.style.top = "0%";
    blockArray[i].kataBlock.style.left = "0%";
    blockArray[i].romanBlock.style.top = "0.5em";
    blockArray[i].romanBlock.style.left = "0%";
  }
}
function setLocationVibrant1() {
  offsetX = 20;
  offsetY = 33.3;
  for (let i = 50; i < 65; i++) {
    //设置位置
    // blockArray[i].block.style.visibility="visible"
    // blockArray[i].block.style.opacity=1
    // blockArray[i].block.style.top=((parseInt((i-50)/5)*offsetY)).toString()+"%";
    // blockArray[i].block.style.left=(((i%5)*offsetX)).toString()+"%";
    // //
    // blockArray[i].hira.style.top="0%";
    // blockArray[i].hira.style.left="0%";
    // blockArray[i].kata.style.top="0%";
    // blockArray[i].kata.style.left="0%";
    // blockArray[i].roman.style.top="0.5em";
    // blockArray[i].roman.style.left="0%";
    blockArray[i].kataBlock.style.top = "0%";
    blockArray[i].kataBlock.style.left = "0%";
    blockArray[i].romanBlock.style.top = "0.5em";
    blockArray[i].romanBlock.style.left = "0%";
  }
  offsetY = 10;
}
function setLocationVibrant2() {
  offsetX = 20;
  offsetY = 50;
  for (let i = 65; i < 75; i++) {
    //设置位置
    // blockArray[i].block.style.visibility="visible"
    // blockArray[i].block.style.opacity=1
    // blockArray[i].block.style.top=((parseInt((i-65)/5)*offsetY)).toString()+"%";
    // blockArray[i].block.style.left=(((i%5)*offsetX)).toString()+"%";
    // //
    // blockArray[i].hira.style.top="0%";
    // blockArray[i].hira.style.left="0%";
    // blockArray[i].kata.style.top="0%";
    // blockArray[i].kata.style.left="0%";
    // blockArray[i].roman.style.top="0.5em";
    // blockArray[i].roman.style.left="0%";
    blockArray[i].kataBlock.style.top = "0%";
    blockArray[i].kataBlock.style.left = "0%";
    blockArray[i].romanBlock.style.top = "0.5em";
    blockArray[i].romanBlock.style.left = "0%";
  }
}
//添加拖拽父级元素
function addDrag(obj) {
  let timeStart,
    timeEnd,
    time,
    actived = false;
  let baseX, baseY, oldHeight, oldWidth, baseTop, baseLeft;

  let keyName = obj.parentNode.id;
  let vessel = obj.nextElementSibling;
  let scaleBtn = vessel.nextElementSibling;
  let parent = obj.parentNode;
  let quitBtn = obj.previousElementSibling;
  let anim = quitBtn.previousElementSibling;
  obj.onmousedown = holdDown;

  function getTimeNow() {
    let now = new Date();
    return now.getTime();
  }
  //按下函数，
  function holdDown(event) {
    //添加释放监听器
    document.addEventListener("mouseup", holdUp);
    //若已在激活状态且为左键点击
    if (actived) {
      //添加监听器受理拖动
      baseX = event.pageX;
      baseY = event.pageY;
      document.addEventListener("mousemove", move);
    } else {
      //获取鼠标按下时的时间
      timeStart = getTimeNow();
      //setInterval会每100毫秒执行一次，也就是每100毫秒获取一次时间
      time = setInterval(function () {
        timeEnd = getTimeNow();
        //如果此时检测到的时间与第一次获取的时间差有1000毫秒
        if (timeEnd - timeStart > 1000) {
          //进入激活状态
          intoActive(obj);
          //便不再继续重复此函数 （clearInterval取消周期性执行）
          clearInterval(time);
          //拖动
          if (event.button == 0) {
            //添加监听器受理拖动
            baseX = event.pageX;
            baseY = event.pageY;
            document.addEventListener("mousemove", move);
          }
        }
      }, 100);
    }
  }
  //缩放开始
  function scaleBegin(event) {
    //保证拖动时没有延迟
    parent.style.transitionDuration = "0s";
    //初始化基准坐标
    baseX = event.pageX;
    baseY = event.pageY;
    //获取当前长宽
    oldWidth = parent.offsetWidth;
    oldHeight = parent.offsetHeight;
    //监听鼠标移动事件
    document.addEventListener("mousemove", scaleMove);
    //添加鼠标释放监听器
    document.addEventListener("mouseup", scaleEnd);
  }
  //缩放过程
  function scaleMove(event) {
    //获取移动距离
    let moveWidth = event.pageX - baseX;
    let moveHeight = event.pageY - baseY;
    //计算目标缩放数值
    let newWidth = oldWidth + moveWidth;
    let newHeight = oldHeight + moveHeight;
    // console.log('[move]newHeight =',newHeight);
    //更新父盒子大小
    parent.style.height = newHeight + "px";
    parent.style.width = newWidth + "px";
    //计算容器缩放比
    throttledFSS(keyName, newHeight, newWidth);
  }
  //缩放结束
  function scaleEnd(event) {
    //卸载鼠标移动事件
    document.removeEventListener("mousemove", scaleMove);
    document.removeEventListener("mouseup", scaleEnd);
    //持久化缩放数据
    localStorage.setItem(
      `${keyName}Height`,
      parent.style.height.slice(0, parent.style.height.length - 2)
    );
    localStorage.setItem(
      `${keyName}Width`,
      parent.style.width.slice(0, parent.style.width.length - 2)
    );
    //计算容器缩放比
    throttledFSS(keyName);
  }
  //拖动结束
  function holdUp(event) {
    //若有则清除计时器，
    clearInterval(time);
    //更新偏移值
    // if(event.srcElement.className=='DragBlock'||event.srcElement.parentNode.className=='DragBlock'){
    // transX = event.pageX - baseX + transX;
    // transY = event.pageY - baseY + transY;
    baseLeft = event.pageX - baseX + baseLeft;
    baseTop = event.pageY - baseY + baseTop;
    // }
    //移除监听器
    // console.log('已移除监听器',transX,transY,'event=',event);
    // log('transX='+transX)
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", holdUp);
  }
  //拖动过程
  function move(event) {
    //保证拖动时没有延迟
    parent.style.transitionDuration = "0s";
    let rawStr = `${event.pageY - baseY + baseTop}px`;
    // parent.style.setProperty('translate',rawStr);
    parent.style.setProperty("top", `${event.pageY - baseY + baseTop}px`);
    parent.style.setProperty("left", `${event.pageX - baseX + baseLeft}px`);
    // console.log(rawStr);
    // log(rawStr)
    return false; //阻止默认事件或冒泡
  }
  //元素进入激活状态
  function intoActive(obj) {
    // console.log('进入激活态！');
    // log('进入激活态！')
    actived = true;
    //挂载退出按钮的监听事件
    quitBtn.onclick = outActive;
    //挂载缩放按钮的监听事件
    scaleBtn.onmousedown = scaleBegin;
    scaleBtn.onmouseup = scaleEnd;
    //进入激活状态动画
    obj.style.transform = "rotate(45deg)";
    anim.style.transition = "1s";
    anim.style.opacity = "1";
    anim.style.transform = "scale(3) rotate(135deg)";
    quitBtn.style.opacity = "1";
    quitBtn.style.transform = "translate(40px,-40px) rotate(360deg)";
    //激活后状态
    obj.style.opacity = "1";
    scaleBtn.style.display = "block";
    // parent.style.setProperty('outline-width','4px');
    parent.style.setProperty("background-color", themeColor);
    parent.style.setProperty(
      "box-shadow",
      "0 2px 10px 2px rgb(54 58 80 / 32%)"
    );
    //获取transform的偏离值:Number
    // transX = localStorage[keyName+'X']?Number(localStorage[keyName+'X']):0;
    // transY = localStorage[keyName+'Y']?Number(localStorage[keyName+'Y']):0;
    //获取当前top、left
    baseTop = window.getComputedStyle(parent).top;
    baseTop = Number(baseTop.slice(0, baseTop.length - 2));
    baseLeft = window.getComputedStyle(parent).left;
    baseLeft = Number(baseLeft.slice(0, baseLeft.length - 2));
    // console.log(baseTop);
    // log(baseTop+','+baseLeft)
  }
  //元素退出激活状态
  function outActive() {
    actived = false;
    //退出激活状态动画
    obj.style.transform = "rotate(0deg)";
    anim.style.transform = "scale(0) rotate(45deg)";
    anim.style.opacity = "0";
    quitBtn.style.opacity = "0";
    quitBtn.style.transform = "translateX(0px) rotate(0deg)";
    //退出激活后状态
    obj.style.opacity = "0";
    scaleBtn.style.display = "none";
    parent.style.transitionDuration = "1s";
    // parent.style.setProperty('outline-width','0');
    parent.style.setProperty("background-color", "transparent");
    parent.style.setProperty("box-shadow", "none");
    //存储偏离值
    localStorage[keyName + "Left"] = baseLeft;
    localStorage[keyName + "Top"] = baseTop;
  }

  //返回内部函数供外部调用
  return outActive;
}

//长按重置
function addLongPress(obj) {
  let timeStart, timeEnd, time;
  let parent = obj.parentNode;
  parent.onmousedown = holdDown;
  parent.onmouseup = holdUp;
  parent.onmouseout = function () {
    clearInterval(time);
  };
  function getTimeNow() {
    let now = new Date();
    return now.getTime();
  }
  function holdDown(event) {
    //获取鼠标按下时的时间
    timeStart = getTimeNow();
    //setInterval会每100毫秒执行一次，也就是每100毫秒获取一次时间
    time = setInterval(function () {
      timeEnd = getTimeNow();
      //如果此时检测到的时间与第一次获取的时间差有1000毫秒
      if (timeEnd - timeStart > 1000) {
        //便不再继续重复此函数 （clearInterval取消周期性执行）
        clearInterval(time);
        //动画
        obj.style.transition = "0.1s";
        obj.style.transform = "rotate(45deg)";
        obj.previousSibling.previousSibling.style.transition = "1s";
        obj.previousSibling.previousSibling.style.transform =
          "scale(100) rotate(45deg)";
        obj.previousSibling.previousSibling.style.opacity = "0";
        //重置
        //关闭激活状态
        baseDeActive();
        vibrant1DeActive();
        vibrant2DeActive();
        document.getElementById("base").style.transitionDuration = "1s";
        document.getElementById("vibrant1").style.transitionDuration = "1s";
        document.getElementById("vibrant2").style.transitionDuration = "1s";
        localStorage.setItem("baseX", 0);
        localStorage.setItem("baseY", 0);
        localStorage.setItem("vibrant1X", 0);
        localStorage.setItem("vibrant1Y", 0);
        localStorage.setItem("vibrant2X", 0);
        localStorage.setItem("vibrant2Y", 0);
        //重置位置
        document.getElementById("base").style.left =
          originSize["baseLeft"] + "px";
        document.getElementById("base").style.top =
          originSize["baseTop"] + "px";
        document.getElementById("vibrant1").style.left =
          originSize["vibrant1Left"] + "px";
        document.getElementById("vibrant1").style.top =
          originSize["vibrant1Top"] + "px";
        document.getElementById("vibrant2").style.left =
          originSize["vibrant2Left"] + "px";
        document.getElementById("vibrant2").style.top =
          originSize["vibrant2Top"] + "px";
        //重置大小
        for (let prop in originSize) {
          localStorage.setItem(`${prop}`, originSize[prop]);
        }
        document.getElementById("base").style.height =
          originSize["baseHeight"] + "px";
        document.getElementById("base").style.width =
          originSize["baseWidth"] + "px";
        document.getElementById("vibrant1").style.height =
          originSize["vibrant1Height"] + "px";
        document.getElementById("vibrant1").style.width =
          originSize["vibrant1Width"] + "px";
        document.getElementById("vibrant2").style.height =
          originSize["vibrant2Height"] + "px";
        document.getElementById("vibrant2").style.width =
          originSize["vibrant2Width"] + "px";
        fontSizeSuit("base");
        fontSizeSuit("vibrant1");
        fontSizeSuit("vibrant2");
      }
    }, 100);
  }
  function holdUp(event) {
    //如果按下时间不到1000毫秒便弹起，
    clearInterval(time);
    obj.style.transition = "1s";
    obj.style.transform = "rotate(0deg)";
    obj.previousSibling.previousSibling.style.transition = "0s";
    obj.previousSibling.previousSibling.style.transform =
      "scale(0) rotate(45deg)";
    obj.previousSibling.previousSibling.style.opacity = "1";
  }
}
// //长按更换背景
// function addLongPress_changeBackgroound(obj)
// {
//     let timeStart, timeEnd, time;
//     function getTimeNow() {
//         let now = new Date();
//         return now.getTime();
//     }
//     function holdDown(event) {
//         //获取鼠标按下时的时间
//         timeStart = getTimeNow();
//         //setInterval会每100毫秒执行一次，也就是每100毫秒获取一次时间
//         time = setInterval(function () {
//             timeEnd = getTimeNow();
//             //如果此时检测到的时间与第一次获取的时间差有1000毫秒
//             if (timeEnd - timeStart > 1000) {
//                 //便不再继续重复此函数 （clearInterval取消周期性执行）
//                 clearInterval(time);
//                 //动画
//                 obj.style.transition="0.1s"
//                 obj.style.transform="rotate(45deg)"
//                 obj.previousSibling.previousSibling.style.transition="1s"
//                 obj.previousSibling.previousSibling.style.transform="scale(100) rotate(45deg)"
//                 obj.previousSibling.previousSibling.style.opacity="0"
//                 //TODO事件
//                 if(document.body.style.backgroundImage=="url(\"img/background.png\")"){
//                     document.body.style.backgroundImage="url(\"img/photo.png\")";
//                 }else{
//                 document.body.style.backgroundImage="url(\"img/background.png\")";
//                 }
//             }
//         }, 100);
//     }
//     function holdUp(event) {
//         //如果按下时间不到1000毫秒便弹起，
//         clearInterval(time);
//         obj.style.transition="1s"
//         obj.style.transform="rotate(0deg)"
//         obj.previousSibling.previousSibling.style.transition="0s"
//         obj.previousSibling.previousSibling.style.transform="scale(0) rotate(45deg)"
//         obj.previousSibling.previousSibling.style.opacity="1"
//     }
//     let parent=obj.parentNode
//     parent.onmousedown=holdDown
//     parent.onmouseup=holdUp
//     parent.onmouseout=function(){
//         clearInterval(time)
//     }
// }
//双击隐藏
// function addHiddenSwitch(obj){
//     obj.setAttribute("switch","0")
//     let times=obj.parentNode.childNodes.length-5
//     function dblclickDO(event){
//         //若尚未隐藏
//         if(obj.getAttribute("switch")=="0")
//         {
//             obj.style.transform="rotate(45deg)"
//             obj.style.opacity=1
//             obj.setAttribute("switch","1")
//             let index=obj.nextSibling.nextSibling
//             for(let i=0;i<times;i++){
//                 index.style.transition="0.3s"
//                 index.style.top="-15px"
//                 index.style.left="-15px"
//                 index.style.opacity=0
//                 index.firstChild.style.fontSize="1px"
//                 index.style.visibility="hidden"
//                 index=index.nextSibling
//             }
//             obj.parentNode.style.width="0"
//             obj.parentNode.style.height="0"
//         }
//         //若隐藏则还原
//         else{
//             obj.style.cssText="transition:1s"
//             obj.className="DragBlock"
//             obj.setAttribute("switch","0")
//             if(obj.id=="baseDB")
//             {
//                 setLocationBase()
//                 obj.parentNode.style.width="25%"
//                 obj.parentNode.style.height="75%"
//             }
//             else if(obj.id=="vibrant1DB"){
//                 setLocationVibrant1()
//                 obj.parentNode.style.width="25%"
//                 obj.parentNode.style.height="22.5%"
//             }
//             else if(obj.id=="vibrant2DB"){
//                 setLocationVibrant2()
//                 obj.parentNode.style.width="25%"
//                 obj.parentNode.style.height="15%"
//             }
//         }
//     }
//     obj.ondblclick=dblclickDO

// }
//字体大小自适应
//分为5个阶段 每个阶段对应下降5px/1px
//baseHeight [300,565] 53
//vibrant1Height [90,170] 16
//vibrant2Height [60,114] 10.8
//width [180,350] 34
//hugeFont [25px 50px]
//smallFont [20px 25px]
function fontSizeSuit(keyName, _height, _width) {
  // console.log('font-size suit')
  let height, width;
  if (!_height) {
    height = Number(
      localStorage[`${keyName}Height`]
        ? localStorage[`${keyName}Height`]
        : originSize[`${keyName}Height`]
    );
  } else {
    height = _height;
  }
  if (!_width) {
    width = Number(
      localStorage[`${keyName}Width`]
        ? localStorage[`${keyName}Width`]
        : originSize[`${keyName}Width`]
    );
  } else {
    width = _width;
  }
  levelX = Math.floor(
    (originSize[`${keyName}Width`] - width) / fontSizeMap[`${keyName}Width`]
  );
  levelY = Math.floor(
    (originSize[`${keyName}Height`] - height) / fontSizeMap[`${keyName}Height`]
  );
  level = Math.max(Math.min(Math.max(levelX, levelY), 5), -1);

  value = [
    originSize["baseHugeSize"] - level * fontSizeMap["hugeFont"],
    originSize["baseSmallSize"] - level * fontSizeMap["smallFont"],
  ];
  // console.log(value);
  document.documentElement.style.setProperty(
    `--${keyName}-huge-font-size`,
    `${value[0]}px`
  );
  document.documentElement.style.setProperty(
    `--${keyName}-small-font-size`,
    `${value[1]}px`
  );
}
let throttledFSS = throttle(fontSizeSuit, 314);
function log(str) {
  let el = document.getElementsByClassName("logWindow")[0];
  el.innerText = str;
}
//时间戳版本实现节流
function throttle(func, wait) {
  //定义初始时间
  var oldTime = new Date();

  return function () {
    var _this = this;
    var args = arguments;

    //当前时间戳
    var newTime = new Date();

    //判断用当前时间减去旧的时间，如果大于wait指定的时间就会触发
    if (newTime - oldTime > wait) {
      //执行触发的函数
      func.apply(_this, args);
      //将旧时间更新
      oldTime = newTime;
    } else {
      // console.log('节流');
    }
  };
}
setBase();
setVibrant1();
setVibrant2();
setLocationBase();
setLocationVibrant1();
setLocationVibrant2();
setFunc();
//初始化字体大小
setTimeout(() => {
  throttledFSS("base");
  throttledFSS("vibrant1");
  throttledFSS("vibrant2");
}, 314);
